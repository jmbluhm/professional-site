export interface Profile {
  basics: {
    name: string
    label: string
    summary: string
    location?: string
    email?: string
    url?: string
    profiles: {
      network: string
      username: string
      url: string
    }[]
  }
  headlines: {
    heroHeadline: string
    heroSubhead: string
    ctaHelper: string
  }
  capabilities: {
    title: string
    description: string
  }[]
  proofBullets: string[]
  nowBullets: string[]
  resume: {
    experience: {
      company: string
      title: string
      startDate: string
      endDate: string
      bullets: string[]
      expandedBullets?: string[]
    }[]
    skills: {
      category: string
      items: string[]
    }[]
    sideProjects: {
      name: string
      description: string
      stack?: string[]
      url?: string
    }[]
  }
  contact: {
    headline: string
    openTo: string
  }
}

export const profile: Profile = {
  basics: {
    name: 'Jordan Bluhm',
    label: 'Principal Product Manager — AI & Platform',
    summary:
      'Principal PM building AI-native platform and agent systems for subscription businesses. Focused on orchestration, tool design, retention workflows, and monetization in production.',
    location: 'Denver, CO',
    email: 'jordan@yourdomain.com', // TODO: Replace with actual email
    url: 'https://jordanbluhm.com', // TODO: Replace with actual URL
    profiles: [
      {
        network: 'LinkedIn',
        username: 'your-handle', // TODO: Replace with actual handle
        url: 'https://www.linkedin.com/in/your-handle', // TODO: Replace with actual URL
      },
      {
        network: 'GitHub',
        username: 'your-handle', // TODO: Replace with actual handle
        url: 'https://github.com/your-handle', // TODO: Replace with actual URL
      },
    ],
  },
  headlines: {
    heroHeadline: 'Building AI-native products for subscription businesses',
    heroSubhead:
      'Principal Product Manager (AI) at Recurly. Agentic systems, retention, and monetization at scale.',
    ctaHelper: 'Same data. Different render.',
  },
  capabilities: [
    {
      title: 'AI Product Systems',
      description:
        'Agent architectures, MCP tooling, evals, and real production constraints. Not demos. Shipped systems.',
    },
    {
      title: 'Subscription & Monetization',
      description:
        'Billing platforms, churn mechanics, pricing, lifecycle automation. Built in $10M → $100M+ ARR environments.',
    },
    {
      title: 'Hands-on Prototyping',
      description:
        'Next.js, Supabase, APIs, MCP servers. I build to think, then scale.',
    },
  ],
  proofBullets: [
    'Leading AI platform strategy at Recurly',
    'Owner of Compass AI (agent framework + product layer)',
    'Shipped retention workflows used by real merchants',
    'Deep experience in subscription commerce ecosystems',
  ],
  nowBullets: [
    "Designing agent boundaries that won't page SREs at 2am",
    'Shipping retention + engagement workflows',
    'Keeping systems legible for humans and machines',
    'Tuning MTG Commander decks as a systems exercise',
  ],
  resume: {
    experience: [
      {
        company: 'Recurly',
        title: 'Principal Product Manager, AI',
        startDate: '2024',
        endDate: 'Present',
        bullets: [
          'Own AI platform strategy and roadmap (Compass)',
          'Designed MCP-based agent architecture and tool gating',
          'Delivered retention and engagement agent workflows to production',
          'Partnered with data, infra, and GTM on AI monetization',
        ],
        expandedBullets: [
          'Agent orchestration patterns, permissions, and failure modes',
          'Eval design, quality metrics, and safe tool execution',
          'Platform adoption across product teams and operating rhythms',
        ],
      },
      {
        company: 'Prior Roles',
        title: 'Senior / Group Product Manager — Subscription, Payments, Platforms',
        startDate: '2015',
        endDate: '2024',
        bullets: [
          'Scaled monetization-critical product surfaces in high-growth SaaS',
          'Owned cross-functional delivery with engineering, sales, and support',
          'Built deep domain expertise in subscription lifecycle and retention mechanics',
        ],
        expandedBullets: [
          'Led roadmap planning, KPI instrumentation, and launch execution',
          'Worked across integrations, APIs, and platform reliability constraints',
        ],
      },
    ],
    skills: [
      {
        category: 'Product',
        items: [
          'AI systems design',
          'Platform strategy',
          'Monetization & pricing',
          'Subscription lifecycle',
          'Technical roadmapping',
        ],
      },
      {
        category: 'Technical',
        items: [
          'MCP / agent tooling',
          'Next.js / Node',
          'Supabase / Postgres',
          'API design',
          'Rapid prototyping',
        ],
      },
    ],
    sideProjects: [
      {
        name: 'Krengl',
        description: 'Shared wish list platform',
        stack: ['Next.js', 'TypeScript', 'Supabase', 'RLS'],
      },
      {
        name: 'Aisl',
        description: 'AI-native meal planning and grocery optimization',
        stack: ['Next.js', 'Supabase', 'LLMs'],
      },
      {
        name: 'Agent & MCP experiments',
        description: 'Tool design, orchestration, evals',
      },
      {
        name: 'MTG tooling',
        description: 'Data pipelines, embeddings, strategy analysis',
      },
    ],
  },
  contact: {
    headline: 'Reach me',
    openTo:
      'Open to: AI/ML product roles, advisory, and interesting platform problems.',
  },
}
