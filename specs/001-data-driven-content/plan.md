# Implementation Plan: Data-Driven Content Layer

**Branch**: `001-data-driven-content` | **Date**: 2026-06-10 | **Spec**: [spec.md](./spec.md)

---

## Summary

Extract all named inline data arrays and objects from component files into a dedicated `src/data/` directory. Each data file exports typed constants. Components swap their inline definitions for imports. The result: content changes require editing only `src/data/` files — no component changes needed.

No new dependencies. No new abstractions beyond TypeScript types. Pure file reorganisation with import swaps.

---

## Technical Context

**Language/Version**: TypeScript 5 + Next.js 14 (App Router)

**Primary Dependencies**: None new — existing React 18, TypeScript, Next.js only

**Storage**: N/A — static `.ts` files, no database

**Testing**: Manual HMR verification + `npm run build` TypeScript check

**Target Platform**: Next.js App Router, deployed to any static/Node host

**Project Type**: Content migration / architectural refactor

**Performance Goals**: No regression — data files are statically imported, zero runtime overhead

**Constraints**: Zero new npm packages. No changes to component JSX structure or styling. No changes to any `"use client"` / Server Component boundaries.

**Scale/Scope**: 8 component files + 1 constants file + 1 layout file → 9 new data files

---

## Constitution Check

| Principle | Status | Notes |
|---|---|---|
| I. Purpose-Driven Simplicity | ✅ Pass | Migration serves content maintainability — directly supports the portfolio's purpose |
| II. Minimal & Fast UI | ✅ Pass | Static imports, no runtime overhead, no UI changes |
| III. Mobile-First Design | ✅ Pass | No layout or styling changes |
| IV. Modularity & Reusability | ✅ Pass | This feature directly implements Principle IV — data separated from presentation |
| V. No Unnecessary Complexity | ✅ Pass | No new libraries, no abstraction layers, no patterns beyond typed exports |
| Technical Rules — path aliases | ✅ Pass | All imports will use `@/data/` alias |
| Technical Rules — Server Components | ✅ Pass | Data files are plain TS; no `"use client"` impact |

**Gate result: PASS — no violations. Proceed.**

---

## Project Structure

### Documentation (this feature)

```
specs/001-data-driven-content/
├── spec.md
├── plan.md               ← this file
├── data-model.md
├── quickstart.md
└── checklists/
    └── requirements.md
```

### Source changes

```
src/
├── data/                              ← NEW directory (9 files)
│   ├── personal.ts                    ← NEW
│   ├── nav.ts                         ← NEW
│   ├── projects.ts                    ← NEW
│   ├── services.ts                    ← NEW
│   ├── methodology.ts                 ← NEW
│   ├── skills.ts                      ← NEW
│   ├── learning.ts                    ← NEW
│   ├── now.ts                         ← NEW
│   └── site.ts                        ← NEW
│
├── features/
│   ├── projects/components/projects-section.tsx     ← EDIT (import swap)
│   ├── services/components/services-section.tsx     ← EDIT (import swap)
│   ├── methodology/components/methodology-section.tsx ← EDIT (import swap)
│   ├── skills/components/skills-section.tsx         ← EDIT (import swap)
│   ├── learning/components/learning-section.tsx     ← EDIT (import swap)
│   ├── now/components/now-section.tsx               ← EDIT (import swap)
│   ├── hero/components/hero-section.tsx             ← EDIT (import personal)
│   └── contact/components/contact-section.tsx       ← EDIT (import personal)
│
├── shared/
│   ├── components/navigation/navigation.tsx         ← EDIT (import nav + personal)
│   └── constants/
│       └── nav.constant.ts                          ← DELETE after migration
│
└── app/
    └── layout.tsx                                   ← EDIT (import site)
```

---

## Phase 0: Research

All decisions are resolved — no unknowns. Stack is known, migration is mechanical.

**Decisions recorded:**

| Decision | Rationale | Alternatives Rejected |
|---|---|---|
| `src/data/` as the directory name | Matches the "local backend" mental model; clear and conventional | `src/config/` — implies static settings, not content; `src/content/` — accurate but less conventional in TS projects |
| One file per content domain | Clear ownership, easy to locate, matches FR-002 | One monolithic `data.ts` — would become hard to navigate; violates Principle IV |
| `as const` on all exported objects | Maximises type inference, prevents accidental mutation | Interfaces only — looser, allows fields to be reassigned at runtime |
| `Project` and `Venture` as separate types | Their `results` shape differs — a union type adds complexity for no gain | Shared base type — violates Principle V (no unnecessary complexity) |
| No barrel `index.ts` in `src/data/` | Keeps imports explicit and traceable; avoids re-export indirection | Barrel export — hides where data lives, makes tree-shaking harder |

---

## Phase 1: Design & Contracts

### Data Model → `data-model.md`

See [data-model.md](./data-model.md) for full TypeScript type definitions.

**Entity summary:**

| File | Exported types | Exported constants |
|---|---|---|
| `personal.ts` | `PersonalData`, `Stat` | `personal` |
| `nav.ts` | `NavLink` | `navLinks` |
| `projects.ts` | `Project`, `Venture`, `VentureResult` | `projects`, `venture` |
| `services.ts` | `Service` | `services` |
| `methodology.ts` | `MethodologyStep` | `methodologySteps` |
| `skills.ts` | `SkillGroup`, `Skill` | `skillGroups` |
| `learning.ts` | `LearningColumn`, `LearningItem`, `StudyItem`, `TagItem` | `learningColumns` |
| `now.ts` | `NowColumn`, `NowItem` | `nowColumns` |
| `site.ts` | `SiteConfig` | `site` |

### Interface Contracts

This feature has no external API surface. The contract is the TypeScript type system — each data file's exported types are the interface that consuming components program against.

**Contract rule:** If a component compiles without error, the data contract is satisfied.

### Quickstart Validation → `quickstart.md`

See [quickstart.md](./quickstart.md).

---

## Migration Map (component → data file)

Precise mapping of every inline array/object being extracted:

| Source (inline in component) | Extracted to | Exported as |
|---|---|---|
| `PROJECTS` in `projects-section.tsx` | `src/data/projects.ts` | `projects: Project[]` |
| `VENTURE` in `projects-section.tsx` | `src/data/projects.ts` | `venture: Venture` |
| `SKILL_GROUPS` in `skills-section.tsx` | `src/data/skills.ts` | `skillGroups: SkillGroup[]` |
| `SERVICES` in `services-section.tsx` | `src/data/services.ts` | `services: Service[]` |
| `METHODOLOGY_STEPS` in `methodology-section.tsx` | `src/data/methodology.ts` | `methodologySteps: MethodologyStep[]` |
| `LEARNING_COLUMNS` in `learning-section.tsx` | `src/data/learning.ts` | `learningColumns: LearningColumn[]` |
| `NOW_COLUMNS` in `now-section.tsx` | `src/data/now.ts` | `nowColumns: NowColumn[]` |
| `NAV_LINKS` in `nav.constant.ts` | `src/data/nav.ts` | `navLinks: NavLink[]` |
| `CONTACT_EMAIL`, `PHONE`, `LINKEDIN` in `nav.constant.ts` | `src/data/personal.ts` | `personal.email`, `personal.phone`, `personal.linkedin` |
| Footer location text in `footer.tsx` | `src/data/personal.ts` | `personal.location` |
| `metadata` object in `layout.tsx` | `src/data/site.ts` | `site: SiteConfig` |

**Out of scope (explicitly deferred):**
- Arabic prose text strings in components, except fields explicitly modeled in `src/data/personal.ts` or another `src/data/` file
- One-off decorative labels and section headings that are not represented as named inline arrays/objects

**Important exception:** Hero `bio` and `stats` are in scope because they are modeled in `PersonalData` and required by US2. The Hero section must render those values from `personal.bio` and `personal.stats`.

---

## Complexity Tracking

No constitution violations. No complexity justification needed.
