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
  metadataBase: new URL('https://www.jordanmbluhm.com'),
  title: {
    default: `${profile.basics.name} — ${profile.basics.label}`,
    template: `%s — ${profile.basics.name}`,
  },
  description: profile.basics.summary,
  openGraph: {
    title: `${profile.basics.name} — ${profile.basics.label}`,
    description: profile.basics.summary,
    url: 'https://www.jordanmbluhm.com',
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
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="me" href="https://www.linkedin.com/in/jordanmbluhm/" />
        <link rel="me" href="https://github.com/jmbluhm" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.classList.toggle('dark', theme === 'dark');
              })();
            `,
          }}
        />
      </head>
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
