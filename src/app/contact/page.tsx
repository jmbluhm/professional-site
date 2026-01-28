import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { profile } from '@/data/profile'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Get in touch with ${profile.basics.name}`,
  alternates: {
    canonical: '/contact',
  },
}

function ContactJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact',
    description: `Get in touch with ${profile.basics.name}`,
    url: 'https://www.jordanmbluhm.com/contact',
    mainEntity: {
      '@type': 'Person',
      name: profile.basics.name,
      email: profile.basics.email,
      url: 'https://www.jordanmbluhm.com',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default function ContactPage() {
  return (
    <>
      <ContactJsonLd />
      <Container>
      <header className="mb-8">
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100 mb-2">
          {profile.contact.headline}
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {profile.contact.openTo}
        </p>
      </header>

      <section>
        <ul className="space-y-2 text-sm">
          {profile.basics.profiles.map((p) => (
            <li key={p.network}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {p.network}
              </a>
            </li>
          ))}
          {profile.basics.email && (
            <li>
              <a
                href={`mailto:${profile.basics.email}`}
                className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {profile.basics.email}
              </a>
            </li>
          )}
        </ul>
      </section>
    </Container>
    </>
  )
}
