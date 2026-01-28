'use client'

import { profile } from '@/data/profile'

export function DownloadResumeButton() {
  const generateMarkdown = () => {
    let markdown = `# ${profile.basics.name}\n\n`
    markdown += `${profile.basics.label}\n\n`
    markdown += `${profile.basics.summary}\n\n`

    if (profile.basics.location) {
      markdown += `**Location:** ${profile.basics.location}\n\n`
    }
    if (profile.basics.email) {
      markdown += `**Email:** ${profile.basics.email}\n\n`
    }
    if (profile.basics.url) {
      markdown += `**Website:** ${profile.basics.url}\n\n`
    }

    if (profile.basics.profiles.length > 0) {
      markdown += `**Profiles:**\n\n`
      profile.basics.profiles.forEach((p) => {
        markdown += `- [${p.network}](${p.url})\n`
      })
      markdown += '\n'
    }

    markdown += `## Experience\n\n`
    profile.resume.experience.forEach((exp) => {
      markdown += `### ${exp.company}\n\n`
      markdown += `**${exp.title}** • ${exp.startDate} - ${exp.endDate}\n\n`
      exp.bullets.forEach((bullet) => {
        markdown += `- ${bullet}\n`
      })
      if (exp.expandedBullets) {
        exp.expandedBullets.forEach((bullet) => {
          markdown += `- ${bullet}\n`
        })
      }
      markdown += '\n'
    })

    markdown += `## Skills\n\n`
    profile.resume.skills.forEach((skillGroup) => {
      markdown += `### ${skillGroup.category}\n\n`
      markdown += skillGroup.items.join(' • ')
      markdown += '\n\n'
    })

    markdown += `## Side Projects\n\n`
    profile.resume.sideProjects.forEach((project) => {
      markdown += `### ${project.name}\n\n`
      markdown += `${project.description}\n\n`
      if (project.stack) {
        markdown += `**Stack:** ${project.stack.join(', ')}\n\n`
      }
      if (project.url) {
        markdown += `**Link:** ${project.url}\n\n`
      }
    })

    return markdown
  }

  const handleDownload = () => {
    const markdown = generateMarkdown()
    const blob = new Blob([markdown], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'jordan-bluhm-resume.md'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <button
      onClick={handleDownload}
      className="text-sm hover:text-zinc-600 dark:hover:text-zinc-400"
      style={{ color: '#D97757' }}
    >
      Download resume.md
    </button>
  )
}
