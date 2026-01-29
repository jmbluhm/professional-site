# Compass AI — Architecture, Governance, and Outcomes

---
id: compass_ai_expanded
version: 2
type: project
audience: [recruiter, hiring_manager]
tags: [compass-ai, ai-platform, architecture, governance, enterprise-ai, agent-design, safety, recurly, platform-strategy, technical-leadership, cross-functional, system-design]
last_updated: 2026-01-29
source: knowledge-2.md
---

## Context and Problem Framing

As Recurly's product surface area expanded, multiple teams began exploring AI-powered features independently. While this unlocked early experimentation, it quickly introduced fragmentation, duplicated effort, and inconsistent safety and governance patterns. Enterprise customers also expected AI features to meet the same reliability, auditability, and permissioning standards as core billing workflows.

Compass AI was created to serve as a unified AI platform layer—enabling teams to build AI-powered capabilities while enforcing consistent architectural, security, and operational constraints.

## System Architecture

Compass is designed as a platform layer that sits between application features and underlying AI capabilities.

Key architectural characteristics include:

- **Separation of concerns**: Product teams interact with Compass through well-defined interfaces rather than embedding AI logic directly in feature code
- **Agent-oriented design**: AI capabilities are expressed as constrained agents with explicit scopes, tools, and permissions
- **Hybrid execution model**: Deterministic logic and rules are used wherever possible, with LLMs applied selectively for reasoning, interpretation, or synthesis tasks
- **Escalation paths**: Clear boundaries exist for when automated behavior hands off to human review or traditional workflows

This approach enables reuse, reduces cognitive load for feature teams, and limits the blast radius of AI failures.

## Governance and Safety

Given Recurly's role in subscription billing and payments, Compass was designed with governance as a first-class concern rather than an afterthought.

Key governance mechanisms include:

- **Explicit access control**: Agents operate only within narrowly defined permission sets tied to product and customer context
- **Tooling constraints**: Agents can only invoke approved tools and APIs, preventing arbitrary or emergent behavior
- **Auditability**: AI-driven actions are traceable, enabling post-hoc analysis and customer support escalation
- **Failure containment**: Guardrails ensure that unexpected outputs degrade safely rather than propagating downstream

These patterns allow AI features to meet enterprise expectations around reliability and compliance.

## Key Tradeoffs and Decisions

Several deliberate tradeoffs shaped Compass:

- **Platform over velocity**: Initial development prioritized a reusable foundation over shipping isolated AI features quickly
- **Constraint over autonomy**: Agents were intentionally designed to be limited in scope rather than fully general
- **Transparency over cleverness**: Predictable, inspectable behavior was favored over opaque optimization

Equally important were decisions about what not to build, including avoiding prompt-only implementations, unrestricted agent autonomy, and tightly coupling AI logic to individual product features.

## Outcomes and Impact

Compass has enabled Recurly to ship multiple AI-powered capabilities more quickly and consistently than prior approaches.

Observed impacts include:

- Reduced duplication across teams building AI features
- Faster iteration due to shared infrastructure and patterns
- Improved confidence from enterprise customers around AI safety and control
- Clearer internal ownership and accountability for AI behavior

Beyond individual features, Compass established a common language for discussing AI across product, engineering, and leadership teams.

## Jordan's Role

Jordan led the vision, architecture, and execution of Compass AI.

His responsibilities included:

- Defining the platform strategy and architectural principles
- Aligning cross-functional stakeholders on scope and tradeoffs
- Translating enterprise constraints into practical system design
- Guiding teams through ambiguity during early platform formation

Jordan operated with end-to-end ownership, balancing near-term delivery with long-term platform sustainability.
