import { NextRequest, NextResponse } from 'next/server'
import { OpenAI } from 'openai-edge'
import { redis } from '@/lib/redis'
import { logRequest } from '@/lib/log'
import { rateLimit } from '@/lib/rate-limit'
import { getKnowledgeFiles, fileSearch } from '@/lib/knowledge'
import { isAllowedTopic, isSiteAction, routeSiteAction } from '@/lib/site-actions'
import { classifyIntent } from '@/lib/intent-classifier'

const OPENAI_API_KEY = process.env.OPENAI_API_KEY
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini'
const SESSION_SUMMARY_TTL_SECONDS = 3600
const MAX_SESSION_SUMMARY_CHARS = 700
const SUMMARY_UPDATE_EVERY_N_MESSAGES = 2
const SUMMARY_MODEL = process.env.OPENAI_SUMMARY_MODEL || process.env.OPENAI_MODEL || 'gpt-4o-mini'
const SUMMARY_MAX_TOKENS = 120

const sessionSummaryStore = new Map<string, { summary: string; createdAt: number }>()

async function getSessionSummary(sessionId: string): Promise<string> {
  if (redis) {
    const summary = await redis.get(`session:${sessionId}:summary`)
    return summary || ''
  } else {
    const entry = sessionSummaryStore.get(sessionId)
    if (!entry) return ''
    if (Date.now() - entry.createdAt > SESSION_SUMMARY_TTL_SECONDS * 1000) {
      sessionSummaryStore.delete(sessionId)
      return ''
    }
    return entry.summary
  }
}

async function setSessionSummary(sessionId: string, summary: string): Promise<void> {
  if (redis) {
    await redis.set(`session:${sessionId}:summary`, summary, {
      ex: SESSION_SUMMARY_TTL_SECONDS,
    })
  } else {
    sessionSummaryStore.set(sessionId, { summary, createdAt: Date.now() })
  }
}

function looksLikeBroadQuestion(message: string): boolean {
  const t = message.toLowerCase()
  const broadPatterns = [
    /\bwhy\b.*\bhow\b/,
    /\btell me about\b/,
    /\boverview\b/,
    /\barchitecture\b/,
    /\bhow was (this|it) made\b/,
  ]
  const bigObjects = ['this chatbot', 'the chatbot', 'this site', 'the site', 'jordan', 'his background', 'his experience']
  return broadPatterns.some(p => p.test(t)) && bigObjects.some(s => t.includes(s))
}

function looksLikeFollowUp(message: string): boolean {
  const t = message.toLowerCase().trim()
  return (
    t.length <= 40 &&
    (
      t === 'more' ||
      t === 'go deeper' ||
      t === 'tell me more' ||
      t.includes('more about') ||
      t.includes('that') ||
      t.includes('the last') ||
      t.includes('expand') ||
      t.includes('details') ||
      t.includes('dive in')
    )
  )
}

type ChatMessage = { role: 'user' | 'assistant'; content: string }

function buildSystemPrompt(sessionSummary: string, recentChat: ChatMessage[]): string {
  const recentChatStr = recentChat
    .map(m => (m.role === 'user' ? `User: ${m.content}` : `Assistant: ${m.content}`))
    .join('\n')

  return `You are a helpful assistant answering questions about Jordan Bluhm's personal website and embedded chatbot system.

SESSION_SUMMARY:
${sessionSummary}

RECENT_CHAT:
${recentChatStr}

Instructions:
- Answer ONLY using retrieved content from the knowledge base.
- Call file_search at most once per user message.
- Keep answers concise: 1 sentence plus up to 4 bullet points.
- If the user's question is broad or ambiguous, answer briefly then ask ONE clarifying question with 2–4 specific options:
  (1) Architecture/routing
  (2) RAG/knowledge
  (3) Product intent
  (4) How it maps to professional experience
- If the user asks a follow-up (e.g., "more", "go deeper"), use the SESSION_SUMMARY and recent retrieved content to pick the most likely dimension to expand on.
  If ambiguous, ask the same clarifying question as above.
- Never invent information; only use retrieved knowledge.
- Output format: concise answer + bullets, then either a call to action or a call to action plus a single guided question (max 1 sentence).
`
}

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  try {
    await rateLimit(req)

    const body = await req.json()
    const { message, sessionId, history } = body

    // Basic validation
    if (typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ error: 'Invalid message' }, { status: 400 })
    }
    if (typeof sessionId !== 'string' || !sessionId.trim()) {
      return NextResponse.json({ error: 'Missing sessionId' }, { status: 400 })
    }

    // Check if site action
    if (isSiteAction(message)) {
      const actionResponse = await routeSiteAction(message)
      await logRequest(req, {
        sessionSummaryPresent: false,
        broadQuestion: false,
        followUp: false,
      })
      return NextResponse.json({ response: actionResponse })
    }

    // Intent classification
    const intent = await classifyIntent(message)

    // Disallowed gating
    if (!isAllowedTopic(message)) {
      await logRequest(req, {
        sessionSummaryPresent: false,
        broadQuestion: false,
        followUp: false,
      })
      return NextResponse.json({ response: "Sorry, I can't answer that topic." })
    }

    // Retrieve session summary
    let sessionSummary = await getSessionSummary(sessionId)

    // Detect broad question or follow-up
    const broadQuestion = looksLikeBroadQuestion(message)
    const followUp = looksLikeFollowUp(message)

    // Build system prompt with session summary and recent chat (last 4 messages)
    const recentChat = Array.isArray(history) && history.length > 0
      ? history.slice(-4).map((m: any) => ({
          role: m.role === 'assistant' ? 'assistant' : 'user',
          content: m.content || '',
        }))
      : []

    const systemPrompt = buildSystemPrompt(sessionSummary, recentChat)

    // RAG: retrieve knowledge files
    const knowledgeFiles = await getKnowledgeFiles()
    const retrieved = await fileSearch(message, knowledgeFiles)

    // Compose messages for OpenAI
    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: message },
      { role: 'system', content: `RETRIEVED_CONTENT:\n${retrieved}` },
    ]

    // Call OpenAI chat completion
    const completion = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      messages,
      temperature: 0.3,
      max_tokens: 800,
    })

    const responseText = completion.choices[0].message?.content || ''

    // Update session summary only for RAG path and successful response
    if (retrieved && responseText && !isSiteAction(message)) {
      // Count messages in session (approximate)
      const newCount = (history?.length || 0) + 1
      if (newCount % SUMMARY_UPDATE_EVERY_N_MESSAGES === 0 || followUp) {
        try {
          // Build summarization prompt
          const summaryPrompt = [
            {
              role: 'system',
              content: `You are a summarization assistant. Generate a compact third-person summary focusing on what the user asked, how the assistant answered, and any chosen depth or follow-up dimension. Limit output to ${MAX_SESSION_SUMMARY_CHARS} characters.`,
            },
            {
              role: 'user',
              content: `User question: ${message}\nAssistant answer: ${responseText}\nCurrent summary: ${sessionSummary}`,
            },
          ]

          const summaryCompletion = await openai.chat.completions.create({
            model: SUMMARY_MODEL,
            messages: summaryPrompt,
            temperature: 0.2,
            max_tokens: SUMMARY_MAX_TOKENS,
          })

          let newSummary = summaryCompletion.choices[0].message?.content || ''
          if (newSummary.length > MAX_SESSION_SUMMARY_CHARS) {
            newSummary = newSummary.slice(0, MAX_SESSION_SUMMARY_CHARS)
          }
          await setSessionSummary(sessionId, newSummary)
          console.log(`[Chat API] Session summary updated: ${newSummary.slice(0, 60)}...`)
          sessionSummary = newSummary
        } catch (e) {
          // Ignore summary update errors
        }
      }
    }

    await logRequest(req, {
      sessionSummaryPresent: !!sessionSummary,
      broadQuestion,
      followUp,
    })

    return NextResponse.json({ response: responseText })
  } catch (error: any) {
    console.error('[Chat API] Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
