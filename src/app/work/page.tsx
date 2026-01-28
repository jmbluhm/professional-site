import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { profile } from '@/data/profile'

export const metadata: Metadata = {
  title: 'Work',
  description: `Projects and writing by ${profile.basics.name}`,
}

const writingArticles = [
  {
    title: 'My low cost prototyping pipeline',
    url: '/flow',
  },
  {
    title: 'MCP is the User Guide your AI Product Needs',
    url: 'https://www.linkedin.com/pulse/mcp-user-guide-your-ai-product-needs-jordan-bluhm-hxxfc',
  },
  {
    title: 'When AI Overuse Quietly Burns Brand Trust',
    url: 'https://www.linkedin.com/pulse/when-ai-overuse-quietly-burns-brand-trust-jordan-bluhm-gaikc',
  },
  {
    title: 'Overcoming a Public Speaking Blunder: Lessons in Resilience',
    url: 'https://www.linkedin.com/pulse/overcoming-public-speaking-blunder-lessons-resilience-jordan-bluhm-i5rac',
  },
  {
    title: 'A Lesson in Listening: How User Research Reminded Me of the Power in Collaboration',
    url: 'https://www.linkedin.com/pulse/lesson-listening-how-user-research-reminded-me-power-jordan-bluhm-cofzc',
  },
]

export default function WorkPage() {
  return (
    <Container>
      <section className="mb-16">
        <h1 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-8">
          Projects
        </h1>
        <div className="space-y-12">
          {profile.resume.sideProjects.map((project) => (
            <div key={project.name} className="space-y-3">
              <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
                {project.name}
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>
              {project.url && (
                <div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400"
                  >
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                    </svg>
                    {project.name === 'Krengl' ? 'Try Now' : 'View on GitHub'}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h1 className="text-2xl font-medium text-zinc-900 dark:text-zinc-100 mb-8">
          Writing
        </h1>
        <div className="space-y-6">
          {writingArticles.map((article) => (
            <div key={article.url}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400"
                style={article.title === 'My low cost prototyping pipeline' ? { color: '#D97757' } : undefined}
              >
                <svg
                  className="w-4 h-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={article.title === 'My low cost prototyping pipeline' ? { color: '#D97757' } : undefined}
                >
                  <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                </svg>
                {article.title}
              </a>
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}
