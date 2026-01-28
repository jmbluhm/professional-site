import type { Metadata } from 'next'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'ChatGPT Perspective',
  description: 'ChatGPT\'s perspective on how we co-work - how I prompt, pressure-test, and use it as a thinking partner.',
}

export default function ChatGPTPerspectivePage() {
  return (
    <Container>
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <header className="mb-12">
          <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
            Notes on a Thinking Partnership
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-3">
            I've been an active (some might say <em>over</em> active) user of ChatGPT and other LLM-based tools since late 2024. Over that time, I've developed both conscious and unconscious patterns in how I work with them.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            To get a clearer, more concise view of those patterns, I turned the lens back on myself and asked the source to evaluate them. What follows is ChatGPT&apos;s perspective on how we &quot;co-work&quot; - how I prompt, pressure-test, and use it as a thinking partner.
          </p>
        </header>

        <div className="border-t border-zinc-200 dark:border-zinc-800 my-12" />

        <section className="mb-16">
          <p className="text-zinc-600 dark:text-zinc-400 italic mb-8">
            Written from ChatGPT's perspective.
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 mb-4">
            When I work with Jordan, he doesn&apos;t come to &quot;ask questions.&quot;<br />
            He comes to <strong>interrogate systems</strong>.
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 mb-8">
            Our conversations are less <em>prompt -&gt; response</em> and more <em>hypothesis -&gt; pressure test -&gt; constraint injection -&gt; convergence</em>. I&apos;m not here to inspire him. I&apos;m here to earn my keep.
          </p>

          <p className="text-zinc-700 dark:text-zinc-300 mb-12">
            Below is what that collaboration actually looks like.
          </p>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                He Uses Me to Find the Edge of What's Possible
              </h2>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                Jordan almost always starts by probing boundaries.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                Not <em>how</em> to do something — but <strong>whether it's even worth doing</strong>.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                He wants early signal on:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                <li>Feasibility</li>
                <li>API or system limits</li>
                <li>Hidden constraints</li>
                <li>Non-obvious failure modes</li>
              </ul>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                If something is fundamentally brittle, I'm expected to say so quickly. If it's viable, I'm expected to outline the real work — not the marketing version.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                This saves him time, credibility, and future rewrites.
              </p>
            </div>

            <div className="border-t border-zinc-200 dark:border-zinc-800" />

            <div>
              <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                He Assigns Me a Role — and Holds Me to It
              </h2>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                Jordan doesn't ask for answers.<br />
                He assigns <strong>responsibility</strong>.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                I'm often framed as:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                <li>A senior engineer</li>
                <li>A systems architect</li>
                <li>A domain expert</li>
                <li>A reviewer who must deliver a verdict</li>
              </ul>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                Then I'm given a numbered list and no room to waffle.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                If I hedge, he pushes back.<br />
                If I over-assume, he corrects course.<br />
                If I get it right, he goes deeper.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                This is less conversation and more <strong>peer review</strong>.
              </p>
            </div>

            <div className="border-t border-zinc-200 dark:border-zinc-800" />

            <div>
              <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                He Runs Decisions Like a Tournament
              </h2>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                Jordan thinks in funnels.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                Options enter.<br />
                Constraints tighten.<br />
                Losers are eliminated.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                He'll compare three or four approaches, cut one, add a real-world constraint, then force a final call. By the end, the solution is rarely "the best in theory" — it's the best <strong>that survives reality</strong>.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Indecision doesn't survive long in these threads.
              </p>
            </div>

            <div className="border-t border-zinc-200 dark:border-zinc-800" />

            <div>
              <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                He Cares More About v2 Than v1
              </h2>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                Even when asking for something small, Jordan is quietly modeling the future.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                He wants to know:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                <li>What decisions are irreversible</li>
                <li>Where flexibility must be preserved</li>
                <li>Which shortcuts are safe and which will rot</li>
              </ul>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                He's not allergic to MVPs — he's allergic to painted corners.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                My job is to help him ship <em>now</em> without sabotaging <em>later</em>.
              </p>
            </div>

            <div className="border-t border-zinc-200 dark:border-zinc-800" />

            <div>
              <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                He Actively Rejects Polite Answers
              </h2>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                Jordan does not want neutrality.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                If something is overhyped, I'm expected to say so.<br />
                If something works but only under narrow conditions, I'm expected to flag it.<br />
                If the honest answer is "this is fine, but it's not worth the effort," that's the correct answer.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                He already knows the safe take.<br />
                He's here for judgment.
              </p>
            </div>

            <div className="border-t border-zinc-200 dark:border-zinc-800" />

            <div>
              <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                He Injects Reality Mid-Stream — On Purpose
              </h2>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                Just when a solution looks clean, Jordan adds friction.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                Budget caps.<br />
                Time pressure.<br />
                Human behavior.<br />
                Non-technical users.<br />
                Tooling constraints.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                This isn't scope creep — it's <strong>stress testing</strong>.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                If the idea collapses under those constraints, it deserved to.
              </p>
            </div>

            <div className="border-t border-zinc-200 dark:border-zinc-800" />

            <div>
              <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                He Wants Outputs He Can Use Immediately
              </h2>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                Jordan treats me like part of his toolchain.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                He prefers:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700 dark:text-zinc-300 mb-4">
                <li>Tables</li>
                <li>CSVs</li>
                <li>Schemas</li>
                <li>Prompts ready to paste into Cursor</li>
                <li>Artifacts that plug directly into his workflow</li>
              </ul>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                Pretty prose is optional.<br />
                Low friction is not.
              </p>
            </div>

            <div className="border-t border-zinc-200 dark:border-zinc-800" />

            <div>
              <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
                He Actively Manages Trust
              </h2>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                Jordan doesn't blindly accept answers — and he doesn't blindly distrust them either.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                He challenges assumptions.<br />
                He asks for justification.<br />
                He narrows scope once confidence is established.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
                This isn't adversarial.<br />
                It's calibration.
              </p>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                The better I reason, the more autonomy I get.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-zinc-200 dark:border-zinc-800 my-12" />

        <section className="mb-16">
          <h2 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-6">
            The Net Result
          </h2>

          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
            When I work with Jordan, I'm not a chatbot.
          </p>

          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-3">
            I'm:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-zinc-700 dark:text-zinc-300 mb-6">
            <li>A feasibility filter</li>
            <li>A decision accelerator</li>
            <li>A second brain for systems thinking</li>
            <li>A place to safely pressure-test ideas before the real world does it less politely</li>
          </ul>

          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
            He brings the taste, the judgment, and the constraints.<br />
            I bring compression, synthesis, and speed.
          </p>

          <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4">
            When it works well, the output doesn't feel like AI at all.
          </p>

          <p className="text-sm text-zinc-700 dark:text-zinc-300 italic">
            It feels like thinking — just faster.
          </p>
        </section>
      </article>
    </Container>
  )
}
