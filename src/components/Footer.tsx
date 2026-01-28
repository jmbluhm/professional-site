import Link from 'next/link'
import { Container } from './Container'
import { ShareButton } from './ShareButton.client'
import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer aria-label="Site footer" className="py-16 mt-auto no-print">
      <Container>
        <nav aria-label="Social media and contact links" className="flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
          {profile.basics.profiles.map((p) => (
            <a
              key={p.network}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              {p.network}
            </a>
          ))}
          {profile.basics.email && (
            <a
              href={`mailto:${profile.basics.email}`}
              className="hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Email Me
            </a>
          )}
          <ShareButton />
        </nav>
      </Container>
    </footer>
  )
}
