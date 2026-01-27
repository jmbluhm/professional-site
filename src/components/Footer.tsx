import Link from 'next/link'
import { Container } from './Container'
import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer className="py-16 mt-auto no-print">
      <Container>
        <div className="flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
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
              Email
            </a>
          )}
          <Link
            href="/resume.json"
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            JSON
          </Link>
        </div>
      </Container>
    </footer>
  )
}
