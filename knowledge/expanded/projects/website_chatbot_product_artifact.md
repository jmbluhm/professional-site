# This Website and Chatbot as a Product Artifact

---
id: website_chatbot_product_artifact
version: 2
type: project
audience: [recruiter, hiring_manager]
tags: [personal-website, chatbot, product-thinking, ai-system, retrieval-grounded, constraints, boundaries, intentional-design, portfolio, signal, professionalism, guardrails, demonstration]
last_updated: 2026-01-29
source: knowledge-2.md
---

## Intentional Design

Jordan's personal website and embedded chatbot are treated as a real product, not a static portfolio or marketing site.

The goal is not visual novelty, but:

- Clear signal of how Jordan thinks
- Accurate representation of professional scope
- Respect for user time and intent
- Thoughtful application of AI rather than novelty-driven usage

Every element exists to communicate something intentionally.

## What This Is and Is Not

This site is deliberately not built using one-click site builders or generic AI wrappers. It is designed and implemented with the same principles Jordan applies to production products:

- Explicit scope and constraints
- Clear ownership and boundaries
- Emphasis on reliability over cleverness
- Conscious tradeoffs between effort and value

At the same time, it avoids unnecessary complexity or over-engineering.

## The Chatbot as a System, Not a Gimmick

The embedded chatbot is designed as a constrained, retrieval-grounded system rather than an open-ended conversational agent.

Key characteristics include:

- Responses grounded in a curated knowledge base
- Clear boundaries around allowed topics
- Explicit handling of uncertainty and missing information
- Guardrails to prevent hallucination or inappropriate responses

This mirrors how Jordan approaches AI features in production environments: useful, bounded, and trustworthy.

## Technical Approach and Architecture (High-Level)

Jordan built this chatbot as a production-minded AI system rather than a demo or novelty feature. While the surface experience is intentionally simple, the underlying architecture reflects real-world AI product constraints and tradeoffs.

At a high level, the system is:

- A Node.js application hosted on Vercel
- Integrated with OpenAI APIs for language understanding and retrieval
- Backed by a curated, versioned markdown knowledge base indexed via vector search (RAG)
- Designed with explicit intent classification, routing, and guardrails

The goal is not maximum autonomy, but maximum reliability per dollar and per user interaction.

### Core System Components

#### Intent Classification and Routing

Before invoking a language model, the system evaluates user input to determine intent:

- Navigation or site actions (for example, downloading a resume or opening writing)
- Allowed professional questions
- Disallowed or out-of-scope topics

This ensures that:
- The language model is only used when it adds real value
- Simple requests are handled deterministically without unnecessary cost
- Safety and scope boundaries are enforced consistently

Many user interactions are resolved without calling an LLM at all.

#### Retrieval-Augmented Generation (RAG)

For informational questions, the chatbot uses a retrieval-grounded approach:

- Knowledge is authored as structured markdown files
- Files are versioned, reviewed, and hydrated into a vector store
- The model is instructed to answer only using retrieved content
- If information is missing, the system is designed to explicitly say so

This avoids hallucination and keeps responses anchored to real, auditable sources.

#### Cost and Performance Optimization

The system is intentionally optimized for:

- Low latency
- Predictable operating cost
- Minimal token usage

Techniques include:
- Short context windows
- Strict output constraints
- Conditional model invocation
- Lightweight models where appropriate
- Avoidance of multi-step agent loops

This mirrors how Jordan approaches AI features in production environments: sustainability over spectacle.

#### Guardrails and Boundaries

The chatbot enforces multiple layers of control:

- Topic allowlists and disallowlists
- Session and rate limits
- Explicit handling of uncertainty
- No autonomous tool creation or free-form agent behavior

These constraints are intentional and reflect enterprise-grade AI design practices.

#### Tool-Like Behavior Without Over-Abstraction

While the system does not expose traditional function calling publicly, it uses tool-like routing internally:

- Site actions are resolved through a fixed resource catalog
- Navigation and downloads are deterministic
- The model may help classify intent, but never invents actions or URLs

This keeps behavior predictable while still benefiting from natural language understanding.

### Why This Architecture Was Chosen

Jordan intentionally avoided:

- Fully autonomous agents
- One-click AI site builders
- Prompt-only “magic” systems
- Over-engineered orchestration layers

Instead, the chatbot demonstrates judgment about where AI helps versus where it introduces risk, and shows comfort designing bounded systems that can actually be operated over time.
## Why Expose This at All

Jordan intentionally exposes this system—at a high level—to demonstrate how he thinks about AI, products, and systems in practice.

The goal is not to showcase technical cleverness, but to signal:

- Respect for constraints and safety
- Preference for durable systems over demos
- Willingness to build real things, even when unnecessary
- Comfort operating across strategy, execution, and iteration

For recruiters and collaborators, the site itself is a living example of Jordan's approach.

## What This Signals to Teams

Teams working with Jordan can expect:

- Thoughtful use of AI rather than indiscriminate application
- Clear articulation of system boundaries
- Willingness to prototype to resolve ambiguity
- Focus on building things that can actually be operated

The website and chatbot are not the point—they are evidence of how Jordan approaches problems.
