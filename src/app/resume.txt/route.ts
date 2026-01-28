import { NextResponse } from 'next/server'
import { profile } from '@/data/profile'

export async function GET() {
  const lines: string[] = []

  // Header
  lines.push('=' .repeat(80))
  lines.push(profile.basics.name.toUpperCase())
  lines.push(profile.basics.label)
  lines.push('=' .repeat(80))
  lines.push('')

  // Contact
  lines.push('CONTACT')
  lines.push('-'.repeat(80))
  if (profile.basics.location) lines.push(`Location: ${profile.basics.location}`)
  if (profile.basics.email) lines.push(`Email: ${profile.basics.email}`)
  if (profile.basics.url) lines.push(`Website: ${profile.basics.url}`)
  profile.basics.profiles.forEach((p) => {
    lines.push(`${p.network}: ${p.url}`)
  })
  lines.push('')

  // Summary
  lines.push('SUMMARY')
  lines.push('-'.repeat(80))
  lines.push(profile.basics.summary)
  lines.push('')

  // Experience
  lines.push('PROFESSIONAL EXPERIENCE')
  lines.push('-'.repeat(80))
  profile.resume.experience.forEach((exp, index) => {
    if (index > 0) lines.push('')
    lines.push(`${exp.company} — ${exp.title}`)
    lines.push(`${exp.startDate} – ${exp.endDate}`)
    lines.push('')
    exp.bullets.forEach((bullet) => {
      lines.push(`  • ${bullet}`)
    })
    if (exp.expandedBullets) {
      exp.expandedBullets.forEach((bullet) => {
        lines.push(`  • ${bullet}`)
      })
    }
  })
  lines.push('')

  // Skills
  lines.push('SKILLS')
  lines.push('-'.repeat(80))
  profile.resume.skills.forEach((skillGroup) => {
    lines.push(`${skillGroup.category}:`)
    lines.push(`  ${skillGroup.items.join(', ')}`)
    lines.push('')
  })

  // Side Projects
  lines.push('SIDE PROJECTS')
  lines.push('-'.repeat(80))
  profile.resume.sideProjects.forEach((project) => {
    lines.push(`${project.name}`)
    if (project.url) lines.push(`  ${project.url}`)
    lines.push(`  ${project.description}`)
    if (project.stack) {
      lines.push(`  Stack: ${project.stack.join(', ')}`)
    }
    lines.push('')
  })

  // Footer
  lines.push('=' .repeat(80))
  lines.push(`Generated from: https://www.jordanmbluhm.com/resume`)
  lines.push(`Machine-readable formats: /resume.json (JSON Resume schema)`)
  lines.push('=' .repeat(80))

  const resumeTxt = lines.join('\n')

  return new NextResponse(resumeTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
