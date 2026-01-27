import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
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
          <div className="flex items-center gap-4">
            <Button href="/resume">View Resume</Button>
            <Button href="/resume.json" variant="secondary">
              JSON
            </Button>
          </div>
          <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-500">
            {profile.headlines.ctaHelper}
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

        <section>
          <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-4">
            Currently
          </h2>
          <ul className="space-y-2">
            {profile.proofBullets.map((bullet, index) => (
              <li
                key={index}
                className="text-sm text-zinc-700 dark:text-zinc-300"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  )
}
