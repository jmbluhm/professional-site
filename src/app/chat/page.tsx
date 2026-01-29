'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Container } from '@/components/Container'

// ============================================================================
// Types
// ============================================================================

interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

interface ChatResponse {
  answerMarkdown: string
  refused: boolean
  confidence: 'high' | 'medium' | 'low'
  cta: string
  sessionId: string
  messagesRemaining: number
}

// ============================================================================
// Starter Questions
// ============================================================================

const STARTER_QUESTIONS = [
  {
    label: 'Give me a 30-second overview',
    description: 'Quick summary of background and expertise',
  },
  {
    label: 'What roles is Jordan targeting?',
    description: 'Current job search focus and interests',
  },
  {
    label: 'What has Jordan shipped recently?',
    description: 'Recent accomplishments and projects',
  },
  {
    label: 'How does Jordan approach AI product leadership?',
    description: 'Philosophy and methodology',
  },
  {
    label: 'Tell me about the side projects',
    description: 'Krengl, Aisl, CmdrGPT and more',
  },
  {
    label: 'How should I contact Jordan?',
    description: 'Best ways to get in touch',
  },
]

// ============================================================================
// Simple Markdown Renderer (safe, no external deps)
// ============================================================================

function renderMarkdown(text: string): string {
  return text
    // Escape HTML first
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Links [text](url)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: #D97757" class="underline hover:opacity-80">$1</a>')
    // Line breaks
    .replace(/\n\n/g, '</p><p class="mt-3">')
    .replace(/\n/g, '<br />')
}

// ============================================================================
// Chat Page Component
// ============================================================================

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [messagesRemaining, setMessagesRemaining] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Check if chatbot is enabled
  const isEnabled = process.env.NEXT_PUBLIC_CHATBOT_ENABLED !== 'false'

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  // Auto-resize textarea
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto'
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 200)}px`
    }
  }, [inputValue])

  const sendMessage = useCallback(async (messageText: string) => {
    if (!messageText.trim() || isLoading) return

    const userMessage: ChatMessage = { role: 'user', content: messageText.trim() }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText.trim(),
          history: messages,
          sessionId,
        }),
      })

      const data: ChatResponse = await response.json()

      if (!response.ok && !data.answerMarkdown) {
        throw new Error(data.answerMarkdown || 'Failed to get response')
      }

      setSessionId(data.sessionId)
      setMessagesRemaining(data.messagesRemaining)

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: data.answerMarkdown,
      }
      setMessages(prev => [...prev, assistantMessage])

    } catch (err) {
      setError('Sorry, something went wrong. Please try again.')
      console.error('Chat error:', err)
    } finally {
      setIsLoading(false)
    }
  }, [isLoading, messages, sessionId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(inputValue)
  }

  const handleStarterClick = (question: string) => {
    sendMessage(question)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(inputValue)
    }
  }

  const isSessionExhausted = messagesRemaining !== null && messagesRemaining <= 0

  if (!isEnabled) {
    return (
      <Container>
        <div className="text-center py-16">
          <h1 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-2">
            Chat Unavailable
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mb-4">
            The chat feature is currently disabled.
          </p>
          <Link
            href="/"
            className="hover:underline"
            style={{ color: '#D97757' }}
          >
            Return to homepage
          </Link>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      {/* Messages remaining indicator */}
      {messagesRemaining !== null && !isSessionExhausted && (
        <div className="text-right mb-4">
          <span className="text-xs text-zinc-400 dark:text-zinc-500">
            {messagesRemaining} message{messagesRemaining !== 1 ? 's' : ''} remaining
          </span>
        </div>
      )}

      {/* Main Chat Area */}
      <div className="flex flex-col">
        {messages.length === 0 ? (
          /* Empty State - Centered Welcome */
          <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
            <h1 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-2 text-center">
              Ask about Jordan
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-center max-w-md mb-8">
              I can help answer questions about Jordan&apos;s professional background, skills, experience, and projects.
            </p>

            {/* Starter Questions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
              {STARTER_QUESTIONS.map((question) => (
                <button
                  key={question.label}
                  onClick={() => handleStarterClick(question.label)}
                  disabled={isLoading}
                  className="text-left p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm transition-all disabled:opacity-50 group"
                >
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-200">
                    {question.label}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1">
                    {question.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Messages List */
          <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] ${
                    msg.role === 'user'
                      ? 'text-white rounded-2xl rounded-br-md px-4 py-3'
                      : ''
                  }`}
                  style={msg.role === 'user' ? { backgroundColor: '#D97757' } : undefined}
                >
                  {msg.role === 'assistant' ? (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-zinc-900 dark:bg-zinc-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-white dark:text-zinc-900"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                          />
                        </svg>
                      </div>
                      <div
                        className="prose prose-sm dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 [&_p]:my-0"
                        dangerouslySetInnerHTML={{ __html: `<p>${renderMarkdown(msg.content)}</p>` }}
                      />
                    </div>
                  ) : (
                    <p className="text-sm">{msg.content}</p>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-zinc-900 dark:bg-zinc-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 text-white dark:text-zinc-900"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                      />
                    </svg>
                  </div>
                  <div className="flex space-x-1 items-center pt-2">
                    <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input Area */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 mt-6">
          {isSessionExhausted ? (
            <div className="text-center py-4">
              <p className="text-zinc-500 dark:text-zinc-400 mb-3">
                You&apos;ve reached the session limit.
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">
                Reach out directly at{' '}
                <a
                  href="mailto:jmbluhm@gmail.com"
                  className="hover:underline"
                  style={{ color: '#D97757' }}
                >
                  jmbluhm@gmail.com
                </a>
                {' '}or on{' '}
                <a
                  href="https://www.linkedin.com/in/jordanmbluhm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: '#D97757' }}
                >
                  LinkedIn
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
              <div className="relative flex items-end gap-2 bg-zinc-100 dark:bg-zinc-800 rounded-2xl px-4 py-3">
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Jordan's experience, skills, or projects..."
                  disabled={isLoading}
                  maxLength={600}
                  rows={1}
                  className="no-focus-ring flex-1 bg-transparent border-0 resize-none text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 text-sm min-h-[24px] max-h-[200px]"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputValue.trim()}
                  className={`p-2 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 ${
                    inputValue.trim()
                      ? 'text-white hover:opacity-80'
                      : 'bg-zinc-300 dark:bg-zinc-600 text-zinc-500 dark:text-zinc-400'
                  }`}
                  style={inputValue.trim() ? { backgroundColor: '#D97757' } : undefined}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-2 text-center">
                This assistant only answers questions about Jordan&apos;s professional background.
              </p>
            </form>
          )}
        </div>
      </div>
    </Container>
  )
}
