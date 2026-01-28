import { NextResponse } from 'next/server'
import { profile } from '@/data/profile'

export async function GET() {
  const lines: string[] = []

  // Header
  lines.push(`# ${profile.basics.name}`)
  lines.push('')
  lines.push(`**${profile.basics.label}**`)
  lines.push('')

  // Contact
  if (profile.basics.location) lines.push(`📍 ${profile.basics.location}`)
  if (profile.basics.email) lines.push(`✉️ [${profile.basics.email}](mailto:${profile.basics.email})`)
  if (profile.basics.url) lines.push(`🌐 [${profile.basics.url}](${profile.basics.url})`)
  profile.basics.profiles.forEach((p) => {
    lines.push(`🔗 [${p.network}](${p.url})`)
  })
  lines.push('')

  // Summary
  lines.push('## Summary')
  lines.push('')
  lines.push(profile.basics.summary)
  lines.push('')

  // Experience
  lines.push('## Professional Experience')
  lines.push('')
  profile.resume.experience.forEach((exp) => {
    lines.push(`### ${exp.company}`)
    lines.push('')
    lines.push(`**${exp.title}**`)
    lines.push(`*${exp.startDate} – ${exp.endDate}*`)
    lines.push('')
    exp.bullets.forEach((bullet) => {
      lines.push(`- ${bullet}`)
    })
    if (exp.expandedBullets) {
      exp.expandedBullets.forEach((bullet) => {
        lines.push(`- ${bullet}`)
      })
    }
    lines.push('')
  })

  // Skills
  lines.push('## Skills')
  lines.push('')
  profile.resume.skills.forEach((skillGroup) => {
    lines.push(`**${skillGroup.category}**`)
    lines.push('')
    skillGroup.items.forEach((item) => {
      lines.push(`- ${item}`)
    })
    lines.push('')
  })

  // Side Projects
  lines.push('## Side Projects')
  lines.push('')
  profile.resume.sideProjects.forEach((project) => {
    lines.push(`### ${project.name}`)
    if (project.url) {
      lines.push(`[${project.url}](${project.url})`)
    }
    lines.push('')
    lines.push(project.description)
    lines.push('')
    if (project.stack) {
      lines.push(`**Tech Stack:** ${project.stack.join(', ')}`)
      lines.push('')
    }
  })

  // Footer
  lines.push('---')
  lines.push('')
  lines.push(`*Generated from [jordanmbluhm.com/resume](https://www.jordanmbluhm.com/resume)*`)
  lines.push('')
  lines.push(`*Also available: [JSON](https://www.jordanmbluhm.com/resume.json) | [TXT](https://www.jordanmbluhm.com/resume.txt)*`)

  const resumeMd = lines.join('\n')

  return new NextResponse(resumeMd, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Content-Disposition': 'attachment; filename="Jordan-Bluhm-Resume.md"',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
