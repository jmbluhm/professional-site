import Link from 'next/link'
import { Container } from './Container'

const navItems = [
  { href: '/resume', label: 'Resume' },
  { href: '/now', label: 'Now' },
  { href: '/contact', label: 'Contact' },
]

export function HeaderNav() {
  return (
    <header className="py-8 no-print">
      <Container>
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400"
          >
            Jordan Bluhm
          </Link>
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
        </nav>
      </Container>
    </header>
  )
}
