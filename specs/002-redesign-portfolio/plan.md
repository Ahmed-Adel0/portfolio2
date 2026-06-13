# Implementation Plan: Portfolio Redesign (Arabic Sales Page)

**Branch**: `002-portfolio-redesign` | **Date**: 2026-06-12 | **Spec**: [spec.md](file:///d:/projects/my%20portfolio/specs/002-redesign-portfolio/spec.md)

**Input**: Feature specification from `/specs/002-redesign-portfolio/spec.md`

## Summary

Redesign the personal portfolio website into a high-converting, business-oriented landing page (Arabic Sales Page) tailored for founders and business owners. The site will transition from a technical portfolio to a service-oriented landing page using a premium light theme layout (`#FFFFFF` content cards on `#F9F9F7` background), modern typography (Cairo font), and direct communication paths (WhatsApp-first call-to-actions). All content will be managed dynamically within the `src/data/` directory to adhere to the project's data separation principles.

## Technical Context

**Language/Version**: TypeScript (v5) / Node.js (Next.js v14)

**Primary Dependencies**: React v18, Tailwind CSS v3

**Storage**: Static content files in `src/data/*.ts` (No database required)

**Testing**: Manual responsive layout checks, WhatsApp integration links, and PageSpeed/Lighthouse performance testing.

**Target Platform**: Vercel / Web browsers (Chrome, Safari, Firefox, Edge)

**Project Type**: Next.js Web Application (App Router)

**Performance Goals**: Page load time under 2 seconds on 3G/4G, Lighthouse Performance Score >= 90.

**Constraints**: Light theme only, no dark theme selectors. Mobile-first design, fluid responsive transitions.

**Scale/Scope**: Single-page application comprising 9 core sections: Navigation, Hero, Why Me, Testimonials (conditional), Comparison, Services, Projects, How It Works, FAQ, and Footer.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Rule / Principle | Status | Implementation Details |
| :--- | :--- | :--- |
| **I. Purpose-Driven Simplicity** | ✅ Passed | Irrelevant technical details and sections (`learning`, `now`, `methodology` standalone) removed. Focus placed entirely on business value. |
| **II. Minimal & Fast UI** | ✅ Passed | Light theme with clean contrast. No heavy libraries or complex scroll hijacking; standard Tailwind transitions only. |
| **III. Mobile-First Design** | ✅ Passed | The layout is designed to scale gracefully, with specific mobile adaptations (e.g., stacked layout for comparison table on screen < 768px). |
| **IV. Modularity & Reusability** | ✅ Passed | Code structured into modular feature components under `/src/features/`. Common layout components located in `/src/shared/`. |
| **V. No Unnecessary Complexity** | ✅ Passed | Direct WhatsApp CTA implemented instead of a custom contact form, avoiding backend email server integration or API endpoints. |
| **No inline data in components** | ✅ Passed | Content variables, features lists, FAQ questions, services, and projects reside entirely in `src/data/`. |
| **`src/data/` as source of truth** | ✅ Passed | All copy, links, status types, and structural arrays are imported from `src/data/`. |
| **Data files are pure TS** | ✅ Passed | TS data files contain only plain objects, arrays, and types (no React/Next imports). |

## Project Structure

### Documentation (this feature)

```text
specs/002-redesign-portfolio/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── checklists/
    └── requirements.md  # Spec checklist
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── data/
│   ├── comparison.ts
│   ├── faq.ts
│   ├── how-it-works.ts
│   ├── nav.ts
│   ├── personal.ts
│   ├── projects.ts
│   ├── services.ts
│   └── testimonials.ts
├── features/
│   ├── comparison/
│   │   └── components/
│   │       └── ComparisonSection.tsx
│   ├── faq/
│   │   └── components/
│   │       └── FaqSection.tsx
│   ├── hero/
│   │   └── components/
│   │       └── HeroSection.tsx
│   ├── how-it-works/
│   │   └── components/
│   │       └── HowItWorksSection.tsx
│   ├── projects/
│   │   └── components/
│   │       └── ProjectsSection.tsx
│   ├── services/
│   │   └── components/
│   │       └── ServicesSection.tsx
│   └── why-me/
│       └── components/
│           └── WhyMeSection.tsx
└── shared/
    └── components/
        ├── footer/
        │   └── footer.tsx
        └── navigation/
            └── navigation.tsx
```

**Structure Decision**: Option 1 (Single Project) with Next.js feature folder structure. We keep existing feature components but fully refactor their structures, designs, and content dependencies.

## Complexity Tracking

*No constitution violations detected or complexity justifications required.*
