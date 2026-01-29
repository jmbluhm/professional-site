import Link from 'next/link'
import { Container } from './Container'
import { ThemeToggle } from './ThemeToggle'

const navItems = [
  { href: '/resume', label: 'Resume' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
  { href: '/chat', label: 'Ask' },
]

export function HeaderNav() {
  return (
    <header className="py-8 no-print">
      <Container>
        <nav aria-label="Primary navigation" className="flex items-center justify-between">
          <Link
            href="/"
            className="text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400"
          >
            Jordan Bluhm
          </Link>
          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  )
}
