import { Container } from '@/components/Container'
import { ConsoleEasterEgg } from '@/components/ConsoleEasterEgg.client'
import { profile } from '@/data/profile'

function PersonJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.basics.name,
    jobTitle: profile.basics.label,
    url: profile.basics.url,
    sameAs: profile.basics.profiles.map((p) => p.url),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <ConsoleEasterEgg />
      <Container>
        <section className="mb-16">
          <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
            {profile.headlines.heroHeadline}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">
            {profile.headlines.heroSubhead}
          </p>
        </section>

        <section className="mb-16 space-y-8">
          {profile.capabilities.map((cap) => (
            <div key={cap.title}>
              <h2 className="font-medium text-zinc-900 dark:text-zinc-100 mb-1">
                {cap.title}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {cap.description}
              </p>
            </div>
          ))}
        </section>

        <div className="mb-16">
          <a
            href="/content/chatgpt-perspective"
            className="flex items-center gap-2 font-medium hover:text-zinc-600 dark:hover:text-zinc-400"
            style={{ color: '#D97757' }}
          >
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              style={{ color: '#D97757' }}
            >
              <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
            </svg>
            I asked ChatGPT what it&apos;s like to work with me
          </a>
        </div>

        <section>
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
            Currently
          </h2>
          <ul className="space-y-2">
            <li className="text-sm text-zinc-700 dark:text-zinc-300">
              Leading{' '}
              <a
                href="https://recurly.com/product/recurly-compass/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-zinc-600 dark:hover:text-zinc-400"
                style={{ color: '#D97757' }}
              >
                Compass
              </a>
              , Recurly&apos;s AI platform — vision, architecture, and launches
            </li>
            <li className="text-sm text-zinc-700 dark:text-zinc-300">
              Studying and shaping protocols for AI-to-system connectivity (
              <a
                href="https://www.linkedin.com/pulse/mcp-user-guide-your-ai-product-needs-jordan-bluhm-hxxfc"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-zinc-600 dark:hover:text-zinc-400"
                style={{ color: '#D97757' }}
              >
                MCP
              </a>
              , agents,{' '}
              <a
                href="https://agentskills.io/home"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-zinc-600 dark:hover:text-zinc-400"
                style={{ color: '#D97757' }}
              >
                skills
              </a>
              , tooling)
            </li>
            <li className="text-sm text-zinc-700 dark:text-zinc-300">
              Rapid prototyping wherever it&apos;s useful:{' '}
              <a
                href="/content/flow"
                className="font-medium hover:text-zinc-600 dark:hover:text-zinc-400"
                style={{ color: '#D97757' }}
              >
                code
              </a>
              , laser cutting, 3D printing
            </li>
            <li className="text-sm text-zinc-700 dark:text-zinc-300">
              Tuning and playtesting Magic: The Gathering decks with{' '}
              <em>The Fancy Cardboard Club</em>
            </li>
            <li className="text-sm text-zinc-700 dark:text-zinc-300">
              Getting outside with my wife and dogs
            </li>
          </ul>
        </section>
      </Container>
    </>
  )
}
