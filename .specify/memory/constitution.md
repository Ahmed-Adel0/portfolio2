<!-- Sync Impact Report
Version change: 0.0.0 → 1.0.0 (initial ratification)
Added sections: Core Principles, Technical Rules, UX Rules, AI/Automation Rules, Governance
Modified principles: N/A (initial version)
Templates requiring updates: ✅ constitution.md written
Follow-up TODOs: None — all placeholders resolved
-->

# Ahmed El-Nahhas Portfolio Constitution

## Core Principles

### I. Purpose-Driven Simplicity
The portfolio exists to clearly showcase projects, skills, and experience to potential clients and collaborators. Every design and code decision must serve this goal. Features or UI elements that do not directly support that purpose MUST be removed or deferred.

### II. Minimal & Fast UI
The interface MUST remain clean, focused, and performant. Visual noise, excessive animations, and decorative elements that hurt readability or load time are prohibited. Page load time MUST target under 2 seconds on a standard connection.

### III. Mobile-First Design
All layouts and components MUST be designed for mobile viewports first, then progressively enhanced for tablet and desktop. No feature is considered complete until it is verified on small screens.

### IV. Modularity & Reusability
Code MUST be organized into self-contained, reusable components. Logic shared across features belongs in `/shared`. No feature should reach into another feature's internals. The folder structure in `ARCHITECTURE.md` is the canonical reference.

### V. No Unnecessary Complexity
YAGNI (You Aren't Gonna Need It) applies strictly. Third-party libraries, abstractions, and patterns MUST be justified by a concrete current need. Adding complexity for hypothetical future requirements is not permitted.

## Technical Rules

- Use modern JavaScript (ES6+) and TypeScript throughout.
- Prefer component-based architecture (Next.js App Router, React functional components).
- Maintain the feature-based folder structure defined in `ARCHITECTURE.md`.
- Path aliases (`@/`, `@/features/*`, `@/shared/*`) MUST be used — no relative `../../` imports.
- All components default to Server Components unless interactivity explicitly requires `"use client"`.

## UX Rules

- Navigation MUST be clear and accessible at all scroll positions.
- No interface clutter — each section serves one clear purpose.
- Animations MUST be subtle and purposeful; they MUST NOT block content rendering.
- Color, typography, and spacing MUST follow the design tokens in `tailwind.config.ts`.

## AI / Automation Rules

- AI-generated code suggestions MUST be reviewed by the developer before being applied to the codebase.
- AI MUST NOT override manual architectural decisions or undo intentional design choices.
- Generated code MUST conform to the principles above; non-conforming output MUST be revised or rejected.

## Governance

This constitution supersedes informal conventions and undocumented preferences. Any amendment requires:
1. A clear rationale documenting why the change is needed.
2. A version bump following semantic versioning (MAJOR for removals/redefinitions, MINOR for additions, PATCH for clarifications).
3. A review of affected templates and documentation files to keep them in sync.

All pull requests and code reviews MUST verify compliance with the principles above. Complexity introduced in violation of Principle V requires explicit written justification in the PR description.

## Rules (Constitution Additions)
 
The following rules extend the project constitution for the data layer:
 
1. **No inline data** — Arrays or objects representing content MUST NOT be defined inside component files.
2. **`src/data/` is the single source of truth** — All editable content lives here and nowhere else.
3. **Data files are pure TS** — No JSX, no imports from React or Next.js, no side effects.
4. **Types travel with data** — Each data file exports its own TypeScript types. Components consume those types; they do not redefine them.
5. **`src/shared/constants/` is deprecated** — All constants that are content (not utility values) MUST move to `src/data/`.
---

**Version**: 1.0.0 | **Ratified**: 2026-06-10 | **Last Amended**: 2026-06-10