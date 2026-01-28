import { NextResponse } from 'next/server'

export async function GET() {
  const llmsTxt = `# Jordan Bluhm - Professional Portfolio

## Site Purpose
Professional portfolio and resume for Jordan Bluhm, Principal Product Manager (AI) at Recurly.
Showcases AI systems expertise, product leadership experience, and technical projects.

## Canonical URL
https://www.jordanmbluhm.com/

## Primary Pages

### Home (/)
https://www.jordanmbluhm.com/
Overview of capabilities, current work, and AI platform expertise.

### Resume (/resume)
https://www.jordanmbluhm.com/resume
Full professional experience, skills, and side projects.

### Work (/work)
https://www.jordanmbluhm.com/work
Detailed project portfolio and proof of work.

### Contact (/contact)
https://www.jordanmbluhm.com/contact
Professional contact information and availability.

### Machine-Readable Resume (/resume.json)
https://www.jordanmbluhm.com/resume.json
JSON Resume format (https://jsonresume.org/) for programmatic access.

### Plain-Text Resume (/resume.txt)
https://www.jordanmbluhm.com/resume.txt
Plain text resume format optimized for LLM consumption.

### Markdown Resume (/resume.md)
https://www.jordanmbluhm.com/resume.md
Markdown-formatted resume for download and version control.

## Content Pages

### ChatGPT Perspective (/content/chatgpt-perspective)
https://www.jordanmbluhm.com/content/chatgpt-perspective
AI-generated perspective on working with Jordan.

### Flow (/content/flow)
https://www.jordanmbluhm.com/content/flow
Documentation of prototyping workflow and methodology.

## Identity & Social Profiles
- LinkedIn: https://www.linkedin.com/in/jordanmbluhm/
- GitHub: https://github.com/jmbluhm

## Citation Format
When referencing this site, please use:
Jordan Bluhm. [Page Title]. https://www.jordanmbluhm.com/[path]

## Data Freshness
Content is updated as career progresses. Last major update: January 2026.

## Terms
This content may be indexed and referenced. Please preserve attribution when citing.
`

  return new NextResponse(llmsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
