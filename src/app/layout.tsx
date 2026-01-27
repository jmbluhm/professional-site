import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { HeaderNav } from '@/components/HeaderNav'
import { Footer } from '@/components/Footer'
import { profile } from '@/data/profile'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: {
    default: `${profile.basics.name} — ${profile.basics.label}`,
    template: `%s — ${profile.basics.name}`,
  },
  description: profile.basics.summary,
  openGraph: {
    title: `${profile.basics.name} — ${profile.basics.label}`,
    description: profile.basics.summary,
    url: profile.basics.url,
    siteName: profile.basics.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: `${profile.basics.name} — ${profile.basics.label}`,
    description: profile.basics.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 font-sans antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <HeaderNav />
        <main id="main" className="flex-1 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
