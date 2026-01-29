# Knowledge Version 2 — Expanded Depth

> Purpose: Add depth, judgment, and architectural context to Jordan Bluhm’s
> professional experience. This document is additive to knowledge-1 and is
> intended for retrieval-augmented responses.

---

## [EXPANSION] Compass AI — Architecture, Governance, and Outcomes

### Context & Problem Framing

As Recurly’s product surface area expanded, multiple teams began exploring AI-powered features independently. While this unlocked early experimentation, it quickly introduced fragmentation, duplicated effort, and inconsistent safety and governance patterns. Enterprise customers also expected AI features to meet the same reliability, auditability, and permissioning standards as core billing workflows.

Compass AI was created to serve as a unified AI platform layer—enabling teams to build AI-powered capabilities while enforcing consistent architectural, security, and operational constraints.

---

### System Architecture (Conceptual)

Compass is designed as a platform layer that sits between application features and underlying AI capabilities.

Key architectural characteristics include:

- **Separation of concerns**: Product teams interact with Compass through well-defined interfaces rather than embedding AI logic directly in feature code.
- **Agent-oriented design**: AI capabilities are expressed as constrained agents with explicit scopes, tools, and permissions.
- **Hybrid execution model**: Deterministic logic and rules are used wherever possible, with LLMs applied selectively for reasoning, interpretation, or synthesis tasks.
- **Escalation paths**: Clear boundaries exist for when automated behavior hands off to human review or traditional workflows.

This approach enables reuse, reduces cognitive load for feature teams, and limits the blast radius of AI failures.

---

### Governance & Safety

Given Recurly’s role in subscription billing and payments, Compass was designed with governance as a first-class concern rather than an afterthought.

Key governance mechanisms include:

- **Explicit access control**: Agents operate only within narrowly defined permission sets tied to product and customer context.
- **Tooling constraints**: Agents can only invoke approved tools and APIs, preventing arbitrary or emergent behavior.
- **Auditability**: AI-driven actions are traceable, enabling post-hoc analysis and customer support escalation.
- **Failure containment**: Guardrails ensure that unexpected outputs degrade safely rather than propagating downstream.

These patterns allow AI features to meet enterprise expectations around reliability and compliance.

---

### Key Tradeoffs & Decisions

Several deliberate tradeoffs shaped Compass:

- **Platform over velocity**: Initial development prioritized a reusable foundation over shipping isolated AI features quickly.
- **Constraint over autonomy**: Agents were intentionally designed to be limited in scope rather than fully general.
- **Transparency over cleverness**: Predictable, inspectable behavior was favored over opaque optimization.

Equally important were decisions about what *not* to build, including avoiding prompt-only implementations, unrestricted agent autonomy, and tightly coupling AI logic to individual product features.

---

### Outcomes & Impact

Compass has enabled Recurly to ship multiple AI-powered capabilities more quickly and consistently than prior approaches.

Observed impacts include:

- Reduced duplication across teams building AI features
- Faster iteration due to shared infrastructure and patterns
- Improved confidence from enterprise customers around AI safety and control
- Clearer internal ownership and accountability for AI behavior

Beyond individual features, Compass established a common language for discussing AI across product, engineering, and leadership teams.

---

### Jordan’s Role

Jordan led the vision, architecture, and execution of Compass AI.

His responsibilities included:

- Defining the platform strategy and architectural principles
- Aligning cross-functional stakeholders on scope and tradeoffs
- Translating enterprise constraints into practical system design
- Guiding teams through ambiguity during early platform formation

Jordan operated with end-to-end ownership, balancing near-term delivery with long-term platform sustainability.

---

## [EXPANSION] AI Product Strategy & Agent Design Philosophy

### Core Beliefs

Jordan approaches AI product development with the view that AI capabilities should be treated as platform infrastructure rather than isolated features. In practice, this means prioritizing composability, governance, and long-term operability over short-term novelty.

Several core beliefs underpin this approach:

- AI systems should be **explicitly constrained**, not implicitly trusted.
- Most product value comes from **integration with existing workflows**, not standalone intelligence.
- AI is best used to **augment deterministic systems**, not replace them entirely.
- Clear boundaries and failure modes are more important than maximizing theoretical capability.

These beliefs shape how AI features are framed, built, and evaluated.

---

### Practical Design Principles

Jordan emphasizes a set of pragmatic design principles that guide day-to-day execution:

- **Retrieval before generation**: Systems should ground responses in known data and rules before invoking generative behavior.
- **Determinism where possible**: Business logic, validation, and state transitions should remain explicit and inspectable.
- **Constrained agents**: Agents operate within narrowly defined scopes, tools, and permissions rather than open-ended autonomy.
- **Clear escalation paths**: Automated behavior must degrade gracefully to human or traditional workflows when confidence drops.

This reduces risk while improving predictability and debuggability.

---

### Evaluation & Quality

Rather than evaluating AI features solely on output quality, Jordan focuses on system-level outcomes.

Common evaluation dimensions include:

- **Reliability**: How often does the system behave as expected under real-world conditions?
- **Explainability**: Can internal teams understand why an outcome occurred?
- **Failure detection**: How quickly can issues be identified and contained?
- **User trust**: Do customers feel confident relying on the system in high-stakes workflows?

Rollouts are intentionally incremental, allowing learning and refinement before expanding scope.

---

### Anti-Patterns Avoided

Jordan actively avoids several common AI product anti-patterns:

- Treating prompts as product features rather than implementation details
- Building agents with broad, ambiguous mandates
- Optimizing for demo performance at the expense of operational stability
- Hiding uncertainty instead of surfacing it explicitly

Avoiding these patterns reduces downstream support burden and organizational risk.

---

### Applied Examples

These principles have been applied across multiple AI initiatives, including the Compass AI platform and customer-facing automation features.

In each case, the focus has been on creating systems that teams can reason about, evolve safely, and operate at scale—rather than maximizing perceived intelligence in isolation.

---

## [EXPANSION] Leadership & Operating Model

### Ownership & Accountability

Jordan defines leadership primarily through ownership rather than authority. He operates with the assumption that unclear ownership is more damaging than imperfect decisions, especially in ambiguous or fast-moving environments.

In practice, this means:

- Taking responsibility for outcomes across the full lifecycle of an initiative
- Making decisions when ownership is unclear rather than waiting for alignment to emerge
- Being explicit about what he owns versus what he influences
- Treating ambiguity as a condition to manage, not a reason to stall

Accountability is framed around results and learning rather than process adherence.

---

### Decision-Making Under Ambiguity

Jordan is comfortable making decisions with incomplete information, particularly in early-stage or exploratory work. He distinguishes between reversible and irreversible decisions and adjusts decision rigor accordingly.

Key patterns include:

- Biasing toward action when decisions are reversible
- Investing more validation effort when decisions are difficult to unwind
- Using small, controlled experiments to reduce uncertainty
- Revisiting assumptions openly as new data emerges

This approach enables forward momentum without overcommitting prematurely.

---

### Collaboration Model

Jordan’s collaboration style emphasizes partnership over directive leadership. He works closely with engineering, design, data, and go-to-market teams, aiming to align on problem framing before converging on solutions.

Common collaboration practices include:

- Establishing shared definitions of success early
- Inviting technical and design input before solution lock-in
- Creating space for disagreement while maintaining decision clarity
- Translating between executive goals and execution-level constraints

This model helps teams move quickly without sacrificing alignment or trust.

---

### Execution Style

Jordan focuses on de-risking work early rather than optimizing for perfect plans. Execution is structured around learning loops rather than linear delivery.

Execution characteristics include:

- Breaking large initiatives into testable increments
- Validating assumptions as early as possible
- Tracking progress through outcomes rather than activity
- Adjusting scope and direction based on observed signals

This allows teams to maintain velocity even when the path forward is not fully known.

---

### Scaling Influence

As scope increases, Jordan prioritizes enabling other teams over centralizing execution. Rather than becoming a bottleneck, he focuses on creating systems, patterns, and clarity that allow others to move independently.

This includes:

- Codifying principles and frameworks for reuse
- Providing clear decision boundaries
- Coaching teams through complex tradeoffs
- Letting go of direct ownership as systems mature

The result is broader organizational impact without sacrificing quality or coherence.

---

## [EXPANSION] Decision Frameworks & Judgment

### Product Decision-Making

Jordan approaches product decisions by explicitly framing tradeoffs rather than seeking a single “correct” answer. Most meaningful product decisions involve competing priorities—speed versus certainty, flexibility versus simplicity, short-term wins versus long-term leverage.

In practice, this means:

- Identifying the primary constraint driving the decision (time, risk, customer impact, or organizational capacity)
- Making tradeoffs explicit rather than implicit
- Choosing the option that best aligns with the current phase of the product or organization
- Being willing to revisit decisions as conditions change

This approach avoids false precision while maintaining momentum.

---

### Speed vs. Precision

Jordan distinguishes between decisions that benefit from speed and those that demand rigor.

General heuristics include:

- **Bias toward speed** when decisions are reversible, low-risk, or primarily exploratory
- **Bias toward precision** when decisions are hard to unwind, customer-facing, or infrastructure-level
- Accepting imperfection early to accelerate learning
- Slowing down deliberately when downstream costs are high

Rather than applying a single decision style universally, Jordan adjusts decision depth to match impact.

---

### Technical vs. Product Boundaries

Jordan is deliberate about when to engage deeply in technical detail and when to operate at a higher level of abstraction.

Key considerations include:

- Diving into technical depth when architecture choices constrain future product flexibility
- Staying abstract when technical details do not materially affect user or business outcomes
- Trusting engineering expertise while maintaining product accountability for system behavior
- Using shared mental models rather than implementation-level control

This balance enables strong technical collaboration without undermining ownership or velocity.

---

### Risk Management

Jordan frames risk in terms of **reversibility and blast radius**, not just likelihood.

Common practices include:

- Identifying which decisions are difficult or impossible to undo
- Designing guardrails for high-impact changes
- Limiting exposure through phased rollouts and scoped experiments
- Preferring safe failure modes over silent or cascading failures

Risk is managed proactively through system design rather than reactively through process.

---

### Judgment Under Uncertainty

When data is incomplete or ambiguous, Jordan prioritizes clarity of reasoning over confidence of outcome.

This includes:

- Stating assumptions explicitly
- Separating known facts from hypotheses
- Acting on the best available signal rather than waiting for certainty
- Updating decisions as new information becomes available

The goal is not to eliminate uncertainty, but to make progress responsibly within it.

---

## [EXPANSION] Scaling Learnings — $10M → $100M+ ARR

### What Changed at Scale

As the organization scaled from roughly $10M to over $100M in ARR, the nature of product work changed materially. Early-stage assumptions around speed, alignment, and customer homogeneity no longer held.

Key changes included:

- **Product surface area expanded rapidly**, increasing dependency management and coordination costs
- **Customer expectations rose**, particularly around reliability, configurability, and enterprise-grade behavior
- **Organizational structure became more layered**, requiring clearer interfaces between teams and functions

Product decisions increasingly had downstream effects that were difficult to unwind.

---

### What Broke

Several approaches that worked well at smaller scale became liabilities as complexity increased.

Common breakdowns included:

- Informal decision-making failing to scale across teams
- Tacit knowledge becoming a bottleneck as headcount grew
- Feature-by-feature delivery creating fragmentation and inconsistency
- Over-reliance on heroics rather than systems

These failures were often subtle at first but compounded over time.

---

### Adaptations

Jordan adjusted product strategy and execution to account for these shifts.

Key adaptations included:

- **Moving from feature thinking to platform thinking** to reduce duplication and enforce consistency
- **Formalizing interfaces and ownership boundaries** between teams
- **Investing earlier in governance and guardrails**, particularly in high-risk domains like billing and AI
- **Prioritizing leverage over throughput**, focusing on work that enabled multiple teams rather than single features

The emphasis shifted from shipping more to enabling better.

---

### Lessons Learned

Several durable lessons emerged from operating at scale:

- Systems matter more than individual decisions
- Ambiguity must be actively managed, not tolerated indefinitely
- Scaling exposes weak assumptions faster than failure does
- Product leadership increasingly means designing conditions for others to succeed

These learnings continue to inform how Jordan approaches product strategy, architecture, and leadership in complex environments.

---

## [OPTIONAL] Systems Thinking Through Magic: The Gathering

### Why This Is Relevant

Magic: The Gathering (MTG) is a complex, rule-driven strategy game built around constrained systems, hidden information, and probabilistic outcomes. While recreational, it reinforces many of the same mental models required for effective product leadership in complex environments.

Jordan approaches MTG less as a competitive pursuit and more as an exercise in systems thinking—analyzing how rules, incentives, and constraints interact over time.

---

### Transferable Skills

Several core skills developed through MTG map directly to professional decision-making:

- **Probabilistic reasoning**: Making decisions with incomplete information while accounting for likelihood rather than certainty
- **Resource management**: Balancing limited resources across short-term needs and long-term positioning
- **Tradeoff optimization**: Choosing between competing strategies based on evolving game state rather than fixed plans
- **Second-order effects**: Anticipating how actions will alter future options, not just immediate outcomes

Success in MTG depends less on perfect execution and more on consistent judgment across many small decisions.

---

### Systems and Constraints

MTG is defined by explicit constraints: rules, turn structures, resource limits, and interaction boundaries. Jordan views these constraints not as limitations, but as design parameters that shape viable strategies.

This perspective translates into product work by:

- Treating constraints as inputs to design rather than blockers
- Designing systems that behave predictably under pressure
- Favoring architectures that remain stable as complexity increases
- Recognizing when flexibility adds value versus when it introduces fragility

Understanding how systems behave under constraint is central to building durable products.

---

### Professional Application

The systems-oriented mindset reinforced by MTG shows up in Jordan’s product work through:

- Preference for clear interfaces and boundaries
- Comfort reasoning about multi-agent interactions
- Emphasis on long-term system health over short-term optimization
- Awareness of how local decisions aggregate into global outcomes

While the domain differs, the underlying thinking patterns closely align with the challenges of building and scaling complex software systems.

---

## [EXPANSION] Maker Mindset & Rapid Prototyping

### Why This Matters

Jordan maintains a strong maker mindset alongside his product leadership work. He believes that building—even small, imperfect prototypes—creates sharper judgment than abstract discussion alone.

Rather than treating execution as something delegated entirely to others, Jordan uses hands-on building to:
- Reduce abstraction gaps
- Validate assumptions quickly
- Communicate ideas more precisely
- Build empathy for engineering and design constraints

This mindset informs how he approaches both product strategy and team collaboration.

---

### Prototyping as a Thinking Tool

Jordan uses prototyping primarily as a learning mechanism, not as an end product.

Common characteristics of his approach include:
- Speed over polish when testing ideas
- Concrete artifacts to clarify ambiguous discussions
- Early failure to surface hidden complexity
- Iteration in public with trusted collaborators

Prototypes are used to answer questions like:
- “Is this idea viable at all?”
- “Where does complexity actually live?”
- “What assumptions are we making without realizing it?”

This approach reduces downstream rework and misalignment.

---

### Breadth of Making

Jordan’s maker mindset spans both software and physical systems, reinforcing cross-domain intuition.

Examples include:
- Building lightweight internal tools and scripts to explore workflows
- Rapid UI prototypes to test information architecture and interaction patterns
- Hardware tinkering and fabrication projects that reinforce constraint-driven design
- Experimental AI systems to explore agent behavior, retrieval quality, and failure modes

The common thread is not the medium, but the habit of learning by building.

---

### Impact on Product Leadership

This hands-on orientation shapes Jordan’s leadership in several ways:
- Stronger intuition for technical tradeoffs
- More grounded architectural discussions
- Faster convergence during discovery
- Higher trust with engineering partners

Rather than replacing specialists, the maker mindset helps Jordan ask better questions and recognize real risks earlier.

## [EXPANSION] This Website & Chatbot as a Product Artifact

### Intentional Design

Jordan’s personal website and embedded chatbot are treated as a real product, not a static portfolio or marketing site.

The goal is not visual novelty, but:
- Clear signal of how Jordan thinks
- Accurate representation of professional scope
- Respect for user time and intent
- Thoughtful application of AI rather than novelty-driven usage

Every element exists to communicate something intentionally.

---

### What This Is (and Is Not)

This site is deliberately not built using one-click site builders or generic AI wrappers. It is designed and implemented with the same principles Jordan applies to production products:

- Explicit scope and constraints
- Clear ownership and boundaries
- Emphasis on reliability over cleverness
- Conscious tradeoffs between effort and value

At the same time, it avoids unnecessary complexity or over-engineering.

---

### The Chatbot as a System, Not a Gimmick

The embedded chatbot is designed as a constrained, retrieval-grounded system rather than an open-ended conversational agent.

Key characteristics include:
- Responses grounded in a curated knowledge base
- Clear boundaries around allowed topics
- Explicit handling of uncertainty and missing information
- Guardrails to prevent hallucination or inappropriate responses

This mirrors how Jordan approaches AI features in production environments: useful, bounded, and trustworthy.

---

### Why Expose This at All

Jordan intentionally exposes this system—at a high level—to demonstrate how he thinks about AI, products, and systems in practice.

The goal is not to showcase technical cleverness, but to signal:
- Respect for constraints and safety
- Preference for durable systems over demos
- Willingness to build real things, even when unnecessary
- Comfort operating across strategy, execution, and iteration

For recruiters and collaborators, the site itself is a living example of Jordan’s approach.

---

### What This Signals to Teams

Teams working with Jordan can expect:
- Thoughtful use of AI rather than indiscriminate application
- Clear articulation of system boundaries
- Willingness to prototype to resolve ambiguity
- Focus on building things that can actually be operated

The website and chatbot are not the point—they are evidence of how Jordan approaches problems.