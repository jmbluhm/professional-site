import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { profile } from '@/data/profile'

export const metadata: Metadata = {
  title: 'Now',
  description: `What ${profile.basics.name} is working on right now`,
}

export default function NowPage() {
  return (
    <Container>
      <header className="mb-8">
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100 mb-2">
          Now
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          What I'm focused on at the moment.
        </p>
      </header>

      <section className="mb-12">
        <ul className="space-y-2">
          {profile.nowBullets.map((bullet, index) => (
            <li
              key={index}
              className="text-sm text-zinc-700 dark:text-zinc-300"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </section>

      <footer className="text-sm text-zinc-500 dark:text-zinc-500">
        This is a{' '}
        <a
          href="https://nownownow.com/about"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-zinc-700 dark:hover:text-zinc-300"
        >
          now page
        </a>
        .
      </footer>
    </Container>
  )
}
