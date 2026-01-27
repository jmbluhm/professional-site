import { profile, Profile } from '@/data/profile'

export interface JSONResumeBasics {
  name: string
  label: string
  email?: string
  url?: string
  summary: string
  location?: {
    city?: string
    region?: string
  }
  profiles?: {
    network: string
    username: string
    url: string
  }[]
}

export interface JSONResumeWork {
  name: string
  position: string
  startDate: string
  endDate?: string
  summary?: string
  highlights?: string[]
}

export interface JSONResumeSkill {
  name: string
  keywords: string[]
}

export interface JSONResumeProject {
  name: string
  description: string
  keywords?: string[]
  url?: string
}

export interface JSONResume {
  $schema: string
  basics: JSONResumeBasics
  work: JSONResumeWork[]
  skills: JSONResumeSkill[]
  projects: JSONResumeProject[]
}

export function buildJSONResume(data: Profile): JSONResume {
  const locationParts = data.basics.location?.split(', ') || []

  return {
    $schema: 'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
    basics: {
      name: data.basics.name,
      label: data.basics.label,
      email: data.basics.email,
      url: data.basics.url,
      summary: data.basics.summary,
      location:
        locationParts.length > 0
          ? {
              city: locationParts[0],
              region: locationParts[1],
            }
          : undefined,
      profiles: data.basics.profiles.map((p) => ({
        network: p.network,
        username: p.username,
        url: p.url,
      })),
    },
    work: data.resume.experience.map((exp) => ({
      name: exp.company,
      position: exp.title,
      startDate: exp.startDate,
      endDate: exp.endDate === 'Present' ? undefined : exp.endDate,
      highlights: [
        ...exp.bullets,
        ...(exp.expandedBullets || []),
      ],
    })),
    skills: data.resume.skills.map((skill) => ({
      name: skill.category,
      keywords: skill.items,
    })),
    projects: data.resume.sideProjects.map((proj) => ({
      name: proj.name,
      description: proj.description,
      keywords: proj.stack,
      url: proj.url,
    })),
  }
}

export interface ValidationError {
  field: string
  message: string
}

export interface ValidationResult {
  valid: boolean
  errors: ValidationError[]
}

export function validateJSONResume(resume: JSONResume): ValidationResult {
  const errors: ValidationError[] = []

  // Required: basics.name
  if (!resume.basics?.name || resume.basics.name.trim() === '') {
    errors.push({
      field: 'basics.name',
      message: 'Name is required',
    })
  }

  // Required: basics.label
  if (!resume.basics?.label || resume.basics.label.trim() === '') {
    errors.push({
      field: 'basics.label',
      message: 'Label is required',
    })
  }

  // Required: work array exists
  if (!Array.isArray(resume.work)) {
    errors.push({
      field: 'work',
      message: 'Work array is required',
    })
  }

  // Required: skills array exists
  if (!Array.isArray(resume.skills)) {
    errors.push({
      field: 'skills',
      message: 'Skills array is required',
    })
  }

  // Required: projects array exists
  if (!Array.isArray(resume.projects)) {
    errors.push({
      field: 'projects',
      message: 'Projects array is required',
    })
  }

  // Validate work entries have required fields
  if (Array.isArray(resume.work)) {
    resume.work.forEach((job, index) => {
      if (!job.name || job.name.trim() === '') {
        errors.push({
          field: `work[${index}].name`,
          message: `Work entry ${index} is missing company name`,
        })
      }
      if (!job.position || job.position.trim() === '') {
        errors.push({
          field: `work[${index}].position`,
          message: `Work entry ${index} is missing position`,
        })
      }
    })
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

export function getJSONResume(): { resume: JSONResume; validation: ValidationResult } {
  const resume = buildJSONResume(profile)
  const validation = validateJSONResume(resume)
  return { resume, validation }
}
