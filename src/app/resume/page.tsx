import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { TimelineItem } from '@/components/TimelineItem'
import { Tags } from '@/components/Tags'
import { profile } from '@/data/profile'

export const metadata: Metadata = {
  title: 'Resume',
  description: `Professional resume for ${profile.basics.name}, ${profile.basics.label}`,
  alternates: {
    canonical: '/resume',
  },
}

function ResumeJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Resume',
    description: `Professional resume for ${profile.basics.name}`,
    url: 'https://www.jordanmbluhm.com/resume',
    about: {
      '@type': 'Person',
      name: profile.basics.name,
      jobTitle: profile.basics.label,
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

export default function ResumePage() {
  return (
    <>
      <ResumeJsonLd />
      <Container>
      <header className="mb-12">
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100 mb-1">
          {profile.basics.name}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-6">
          {profile.basics.label}
        </p>
        <div className="no-print space-y-2">
          <div>
            <a
              href="/resume.md"
              className="flex items-center gap-2 text-sm font-medium hover:text-zinc-600 dark:hover:text-zinc-400"
              style={{ color: '#D97757' }}
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ color: '#D97757' }}
              >
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
              </svg>
              Download resume.md
            </a>
          </div>
          <div>
            <a
              href="/resume.json"
              className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400"
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
              </svg>
              Resume.json
            </a>
          </div>
        </div>
      </header>

      <section className="mb-12">
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          {profile.basics.summary}
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-6">
          Experience
        </h2>
        {profile.resume.experience.map((exp, index) => (
          <TimelineItem
            key={index}
            company={exp.company}
            title={exp.title}
            startDate={exp.startDate}
            endDate={exp.endDate}
            bullets={exp.bullets}
            expandedBullets={exp.expandedBullets}
          />
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-6">
          Skills
        </h2>
        <div className="space-y-4">
          {profile.resume.skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                {skillGroup.category}
              </h3>
              <Tags items={skillGroup.items} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-6">
          Side Projects
        </h2>
        <div className="space-y-4">
          {profile.resume.sideProjects.map((project) => (
            <div key={project.name}>
              <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-600 dark:hover:text-zinc-400"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {project.description}
                {project.stack && ` · ${project.stack.join(', ')}`}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Container>
    </>
  )
}
