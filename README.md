# Jordan Bluhm — Portfolio & Resume

Professional portfolio site for Jordan Bluhm, Principal Product Manager (AI) at Recurly. Built with Next.js 14, TypeScript, and Tailwind CSS.

**Live Site**: [https://www.jordanmbluhm.com](https://www.jordanmbluhm.com)

## Features

- Server-side rendered pages with optimal performance
- Responsive design with dark mode support
- Accessible navigation with ARIA labels and skip links
- Multiple resume export formats (HTML, JSON, TXT, MD)
- Comprehensive SEO and LLM-friendly discoverability
- Structured data (JSON-LD) for enhanced search presence

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Fonts**: Inter (via next/font)

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── page.tsx             # Home page
│   ├── resume/              # Resume page
│   ├── work/                # Projects & writing
│   ├── contact/             # Contact information
│   ├── content/             # Content pages
│   ├── resume.json/         # JSON Resume API endpoint
│   ├── resume.txt/          # Plain text resume export
│   ├── llms.txt/            # LLM-friendly site index
│   ├── robots.txt/          # Search crawler configuration
│   ├── sitemap.xml/         # XML sitemap
│   ├── layout.tsx           # Root layout with metadata
│   └── globals.css          # Global styles
├── components/              # Reusable React components
├── data/                    # Data layer (profile, resume)
└── lib/                     # Utility functions
```

## Discovery & LLM Indexing

This site implements comprehensive discoverability optimizations for both traditional search engines and AI systems:

### llms.txt

**Location**: `/llms.txt` ([Route file](src/app/llms.txt/route.ts))

A machine-readable index designed for Large Language Model (LLM) discovery and indexing. This file provides:
- Site purpose and overview
- Canonical URL structure
- Page descriptions and URLs
- Available data formats (JSON, TXT, HTML)
- Citation format recommendations

**Updating**: Edit [src/app/llms.txt/route.ts](src/app/llms.txt/route.ts) to modify content. Changes are automatically deployed.

### robots.txt

**Location**: `/robots.txt` ([Route file](src/app/robots.txt/route.ts))

Standard robots.txt configuration allowing all crawlers and referencing the sitemap. Also includes a comment pointing to `llms.txt` for AI discovery.

**Updating**: Edit [src/app/robots.txt/route.ts](src/app/robots.txt/route.ts).

### sitemap.xml

**Location**: `/sitemap.xml` ([Route file](src/app/sitemap.xml/route.ts))

Dynamically generated XML sitemap listing all canonical, indexable URLs with:
- Last modification dates
- Change frequency hints
- Priority rankings

**Updating**: Edit the `urls` array in [src/app/sitemap.xml/route.ts](src/app/sitemap.xml/route.ts) when adding new pages.

### Canonical URLs

Each page sets a canonical URL via Next.js metadata API to prevent duplicate content issues. The canonical host is `www.jordanmbluhm.com`.

**Implementation**: See `alternates.canonical` in page metadata (e.g., [src/app/page.tsx](src/app/page.tsx), [src/app/resume/page.tsx](src/app/resume/page.tsx)).

### Structured Data (JSON-LD)

Every page includes JSON-LD structured data for enhanced search engine understanding:

- **Home** (`/`): Person + WebSite schemas
- **Resume** (`/resume`): WebPage + Person schemas
- **Work** (`/work`): WebPage schema
- **Contact** (`/contact`): ContactPage + Person schemas

**Implementation**: Each page has a dedicated `*JsonLd` component rendering the structured data.

### Identity Verification (rel=me)

The site includes `rel="me"` links in the `<head>` for identity verification:
- LinkedIn: https://www.linkedin.com/in/jordanmbluhm/
- GitHub: https://github.com/jmbluhm

**Location**: [src/app/layout.tsx](src/app/layout.tsx)

### Domain Redirects

**Configuration**: [vercel.json](vercel.json)

Apex domain (`jordanmbluhm.com`) permanently redirects (301) to canonical `www.jordanmbluhm.com`. This is handled at the edge via Vercel configuration.

### Resume Export Formats

Multiple machine-readable formats for resume data:

1. **JSON Resume** (`/resume.json`): Standard [JSON Resume schema](https://jsonresume.org/)
2. **Plain Text** (`/resume.txt`): Plain text format optimized for LLM consumption
3. **Markdown** (`/resume.md`): Downloadable markdown version
4. **HTML** (`/resume`): Interactive web version

All formats derive from a single source of truth in [src/data/profile.ts](src/data/profile.ts), preventing data drift.

## Data Management

All content is centralized in [src/data/profile.ts](src/data/profile.ts):

```typescript
export const profile: Profile = {
  basics: { ... },           // Name, title, contact info
  headlines: { ... },        // Homepage headlines
  capabilities: [ ... ],     // Key capabilities
  resume: {
    experience: [ ... ],     // Work history
    skills: [ ... ],         // Skill categories
    sideProjects: [ ... ]    // Side projects
  },
  contact: { ... }           // Contact preferences
}
```

**To update content**: Edit `profile.ts` and all pages/exports update automatically.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## Deployment

Site is automatically deployed to Vercel on push to `main` branch:
- **Production**: https://www.jordanmbluhm.com
- **Canonical**: www subdomain (apex redirects)
- **SSL**: Automatic via Vercel
- **Headers**: Security headers configured in [vercel.json](vercel.json)

## Accessibility

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<footer>`)
- ARIA labels on navigation landmarks
- Skip-to-main-content link for keyboard navigation
- Properly nested heading hierarchy
- Sufficient color contrast in both light and dark modes
- No JavaScript required for core content

## SEO Checklist

- [x] Canonical URLs on all pages
- [x] Descriptive title and meta description
- [x] OpenGraph and Twitter Card metadata
- [x] JSON-LD structured data
- [x] XML sitemap
- [x] robots.txt allowing crawling
- [x] llms.txt for AI discovery
- [x] rel="me" identity links
- [x] Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection)
- [x] Proper 301 redirects (apex to www)
- [x] Mobile-friendly viewport
- [x] Semantic HTML
- [x] Fast page loads (static generation)

## License

© 2026 Jordan Bluhm. All rights reserved.
