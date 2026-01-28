import type { Metadata } from 'next'
import { Container } from '@/components/Container'
import { TimelineItem } from '@/components/TimelineItem'
import { Tags } from '@/components/Tags'
import { DownloadResumeButton } from '@/components/DownloadResumeButton.client'
import { profile } from '@/data/profile'

export const metadata: Metadata = {
  title: 'Resume',
  description: `Professional resume for ${profile.basics.name}, ${profile.basics.label}`,
}

export default function ResumePage() {
  return (
    <Container>
      <header className="mb-12">
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100 mb-1">
          {profile.basics.name}
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400 mb-6">
          {profile.basics.label}
        </p>
        <div className="no-print">
          <DownloadResumeButton />
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
  )
}
