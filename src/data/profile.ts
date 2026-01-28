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
    label: 'Principal Product Manager — AI',
    summary:
      'Principal-level Product Leader with 10+ years of experience building AI-native platforms, developer ecosystems, and enterprise SaaS products. Deeply technical, with a strong bias toward systems thinking, API design, and applied AI. Proven ability to translate emerging technologies (LLMs, agent frameworks, MCP, vector search) into scalable, revenue-generating products.',
    location: 'Broomfield, CO',
    email: 'jmbluhm@gmail.com',
    url: 'https://jordanmbluhm.com',
    profiles: [
      {
        network: 'LinkedIn',
        username: 'jordanmbluhm',
        url: 'https://www.linkedin.com/in/jordanmbluhm/',
      },
      {
        network: 'GitHub',
        username: 'jmbluhm',
        url: 'https://github.com/jmbluhm',
      },
    ],
  },
  headlines: {
    heroHeadline: 'Building AI-native platforms for subscription businesses',
    heroSubhead:
      'Principal Product Manager (AI) at Recurly. Leading Compass, delivering agentic systems, MCP tooling, and AI-powered subscription management.',
    ctaHelper: 'Same data. Different render.',
  },
  capabilities: [
    {
      title: 'AI Systems & Platform Architecture',
      description:
        'LLM-based product design, agent orchestration, tool calling, vector search, and governance frameworks. Shipped systems, not demos.',
    },
    {
      title: 'Subscription & Monetization',
      description:
        'Scaled Recharge from $10M to $100M+ ARR. Billing platforms, churn mechanics, pricing, lifecycle automation at enterprise scale.',
    },
    {
      title: 'Technical Product Leadership',
      description:
        'Enterprise SaaS platforms, REST/RPC APIs, JavaScript SDKs. Translating architectural constraints into product strategy.',
    },
  ],
  proofBullets: [
    'Leading Compass, Recurly\'s AI division — vision, architecture, and execution',
    'Scaled Recharge platform from $10M to $100M+ ARR',
    'Launched AI-powered subscription Concierge reducing churn and boosting AOV',
    'Shipped enterprise-grade APIs and SDKs accelerating deal closures',
  ],
  nowBullets: [
    'Shipping Recurly\'s merchant-facing AI assistant with Google Agent Developer Kit',
    'Designing MCP-based secure agent architecture for AI automation',
    'Building AI evaluation and governance pipelines for safe production rollout',
    'Tuning MTG Commander decks as a systems exercise',
  ],
  resume: {
    experience: [
      {
        company: 'Recurly',
        title: 'Principal Product Manager – AI',
        startDate: 'May 2025',
        endDate: 'Present',
        bullets: [
          'Lead Compass, Recurly\'s AI division, owning vision, architecture, and execution of AI-powered subscription management tools',
          'Launched merchant-facing AI assistant leveraging Google Agent Developer Kit for conversational access to documentation, API help, and account insights',
          'Designed and shipped Recurly Admin MCP: secure, authenticated layer enabling AI agents to safely call Recurly APIs',
          'Built and evangelized AI evaluation and governance pipeline for safe production rollout',
        ],
        expandedBullets: [
          'Defined short, mid, and long-term AI product roadmap including dynamic dunning recommendations and anomaly-based triggers',
          'Delivered executive presentations driving buy-in for AI investment aligned with regulatory and compliance constraints',
        ],
      },
      {
        company: 'Recharge Payments',
        title: 'Principal Product Manager',
        startDate: 'June 2022',
        endDate: 'May 2025',
        bullets: [
          'Launched agentic, AI-powered Subscription Concierge using LLMs for conversational subscription management (email, SMS, chat)',
          'Drove strategic vision and delivery of enterprise-grade APIs supporting $100M+ ARR and 500+ employees',
          'Conceived and launched configurable workflow-builder UI enabling CPG brands to automate complex subscription flows without code',
        ],
        expandedBullets: [
          'Increased average customer value by 66% while decreasing TCO',
          'Served 20-person product team as technical leader and platform SME',
        ],
      },
      {
        company: 'Recharge Payments',
        title: 'Senior Product Manager',
        startDate: 'July 2021',
        endDate: 'June 2022',
        bullets: [
          'Architected and delivered scalable REST/RPC APIs and JavaScript/React SDKs with configurable rate limits',
          'Redefined solution architecture to complete critical 6-month project in 2 days, accelerating enterprise deal closures',
          'Presented at annual merchant conferences, aligning product strategy with C-suite vision',
        ],
      },
      {
        company: 'Recharge Payments',
        title: 'Product Manager',
        startDate: 'December 2019',
        endDate: 'July 2021',
        bullets: [
          'Led cross-functional initiatives implementing robust API versioning for 20+ resources',
          'Extended platform reach through integrations with Shopify, Magento, BigCommerce, and custom commerce solutions',
        ],
      },
      {
        company: 'Sovos Compliance',
        title: 'Product Manager',
        startDate: 'November 2017',
        endDate: 'December 2019',
        bullets: [
          'Owned product roadmap for global tax compliance SaaS solutions serving enterprise clients',
          'Oversaw integration of tax determination and reporting APIs with leading ERP and eCommerce platforms',
          'Established executive-level value matrices scoring integration and market opportunities',
        ],
      },
      {
        company: 'Sovos Compliance',
        title: 'Product Associate',
        startDate: 'April 2017',
        endDate: 'November 2017',
        bullets: [
          'Developed requirements and user stories for tax compliance APIs in Python, PHP, and Java environments',
          'Optimized performance for integrations with Oracle EBS, SAP Cloud ERP, Netsuite, and Magento',
        ],
      },
      {
        company: 'Sovos Compliance',
        title: 'Program Coordinator',
        startDate: 'January 2016',
        endDate: 'April 2017',
        bullets: [
          'Managed development backlog for SCRUM team overseeing zero-to-one products in SMB tax compliance',
        ],
      },
      {
        company: 'Sidebench Studios',
        title: 'Business Analyst',
        startDate: 'August 2015',
        endDate: 'January 2016',
        bullets: [
          'Translated user and client feedback into actionable engineering specs for iOS apps in medical insurance, warehouse management, and new media',
        ],
      },
      {
        company: 'Apple Inc.',
        title: 'Technical Specialist',
        startDate: 'May 2014',
        endDate: 'April 2015',
        bullets: [
          'Provided technical training, support and repair service while maintaining personal NPS score of 90%+',
        ],
      },
    ],
    skills: [
      {
        category: 'AI & ML',
        items: [
          'LLM-powered chat systems',
          'Agentic architectures',
          'Model Context Protocol (MCP)',
          'Vector databases & embeddings',
          'Prompt design & evaluation',
        ],
      },
      {
        category: 'Product Strategy',
        items: [
          'Executive-level roadmapping',
          'Revenue growth ($10M → $100M+ ARR)',
          'KPI definition & experimentation',
          'Cross-functional leadership',
          'Technical storytelling',
        ],
      },
      {
        category: 'Engineering & Platforms',
        items: [
          'REST & RPC API design',
          'JavaScript/TypeScript SDKs',
          'SaaS platform architecture',
          'Payments & subscriptions',
          'Data modeling',
        ],
      },
      {
        category: 'Tools & Infrastructure',
        items: [
          'Cursor, Claude Code, OpenAI',
          'Google Agent Developer Kit',
          'SQL, BigQuery, BI tooling',
          'GitHub, Vercel, Supabase',
        ],
      },
    ],
    sideProjects: [
      {
        name: 'Krengl',
        description: 'Shared wish-list and gift coordination platform with complex domain logic around visibility, reservations, and real-time notifications.',
        stack: ['Next.js', 'TypeScript', 'Supabase', 'RLS'],
        url: 'https://krengl.com',
      },
      {
        name: 'Sales Agent Skill Library',
        description: 'Open-source library of 27 enterprise sales methodologies packaged as Agent Skills. Research-backed frameworks for AI agents covering discovery, qualification, objection handling, and closing.',
        stack: ['Agent Skills', 'MCP', 'Claude Code'],
        url: 'https://github.com/jmbluhm/b2b-sales-skills',
      },
      {
        name: 'CmdrGPT',
        description: 'AI-powered domain assistant for Magic: The Gathering rules and card intelligence. Built RAG system with continuous data ingestion, embedding pipelines, and vector search.',
        stack: ['RAG', 'Vector Search', 'Agent Orchestration', 'Tool Calling'],
      },
      {
        name: 'Aisl',
        description: 'AI-powered meal planning and grocery intelligence platform. Designing LLM-driven planning workflows, structured data extraction, and cost-aware AI pipelines.',
        stack: ['Next.js', 'Supabase', 'LLMs'],
      },
    ],
  },
  contact: {
    headline: 'Reach me',
    openTo:
      'Open to: AI/ML product leadership roles, advisory, and interesting platform problems. Remote-open.',
  },
}
