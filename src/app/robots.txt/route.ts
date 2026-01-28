import { NextResponse } from 'next/server'

export async function GET() {
  const robotsTxt = `# Robots.txt for jordanmbluhm.com

User-agent: *
Allow: /

# Sitemaps
Sitemap: https://www.jordanmbluhm.com/sitemap.xml

# LLM discovery
# See https://www.jordanmbluhm.com/llms.txt for machine-readable site info
`

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
