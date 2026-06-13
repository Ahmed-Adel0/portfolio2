# Feature Specification: Data-Driven Content Layer

**Feature Branch**: `001-data-driven-content`

**Created**: 2026-06-10

**Status**: Draft

**Input**: User description — All editable content and business data stored in external configuration files rather than hardcoded inside components. The application should behave like a local backend where content can be modified without changing application logic.

---

## Clarifications

### Session 2026-06-10

- Q: Should migration scope include inline JSX text strings and static prose copy, or only named inline data arrays/objects? → A: Option B — migrate named inline data arrays and objects only (e.g. `PROJECTS`, `SKILL_GROUPS`, `NOW_COLUMNS`). Static text strings inside JSX remain in components for now; prose/copy extraction is deferred to a separate follow-up feature.
- Q: Should `Venture` and `Project` share a type or remain separate? → A: Option A — keep as two fully separate exported types and constants. `Project.results` is `string[]`; `Venture.results` is `VentureResult[]` (`{ title, desc }`). No merging, no `isVenture` flag, no interface inheritance.
- Q: What does 'graceful empty state' mean when a data file is emptied? → A: Option A — section wrapper and heading remain visible; content area renders nothing (no cards, no list items). No special empty state UI, no hidden sections, no error messages.

---

## User Scenarios & Testing

### User Story 1 — Content Editor Updates a Project Entry (Priority: P1)

A developer or content owner opens `src/data/projects.ts`, edits a project name, description, or result bullet, saves the file, and sees the change reflected in the running application — without touching any component file.

**Why this priority**: This is the most frequent real-world operation. Projects get updated, reordered, or added regularly. This story proves the entire value of the architecture.

**Independent Test**: Edit any field in `src/data/projects.ts`. Run `npm run dev`. Confirm the updated value appears in the Projects section with no component changes.

**Acceptance Scenarios**:

1. **Given** a project entry in `src/data/projects.ts` with `name: "المنصة الطبية"`, **When** the name is changed to `"MED+ Platform"` and the dev server reloads, **Then** the Projects section displays `"MED+ Platform"` with no other changes required.
2. **Given** a `results` array with 3 items, **When** a 4th item is added to the array in `src/data/projects.ts`, **Then** 4 result bullets appear in the rendered card.
3. **Given** the `techs` array, **When** a new tech tag is appended, **Then** a new tag badge appears in the UI automatically.

---

### User Story 2 — Content Editor Updates Personal Info & Contact Details (Priority: P1)

A developer opens `src/data/personal.ts`, changes the email, phone, or bio text, and every place that data appears across the site (hero, contact section, navbar CTA, footer) updates simultaneously.

**Why this priority**: Contact details and bio are the most critical content for the portfolio's business purpose. Currently they are duplicated across multiple files.

**Independent Test**: Change `email` in `src/data/personal.ts`. Confirm the new value appears in the Navigation CTA `mailto:` link, the Contact section link, and the `.env.example` reference — from a single edit.

**Acceptance Scenarios**:

1. **Given** `email: "ahmed.ibn.adell@gmail.com"` in `personal.ts`, **When** it is changed to a new address, **Then** all `mailto:` links across all sections reflect the new address.
2. **Given** `stats` array in `personal.ts` with 3 items, **When** a stat is updated (e.g. `"4+"` → `"6+"`), **Then** the Hero section stat display updates.
3. **Given** `bio` field in `personal.ts`, **When** the text is edited, **Then** the Hero section bio paragraph reflects the new text.

---

### User Story 3 — Developer Adds a New Section's Data Without Editing Components (Priority: P2)

A developer adds a new skill group to `src/data/skills.ts` or a new learning item to `src/data/learning.ts`. The corresponding section renders the new item automatically because components iterate over the data array.

**Why this priority**: Extensibility. The architecture must support growth — new skills, new projects, new methodology steps — without requiring component edits.

**Independent Test**: Add a new object to the `skillGroups` array in `src/data/skills.ts`. Confirm a new skill group card appears in the Skills section with correct styling.

**Acceptance Scenarios**:

1. **Given** `skillGroups` with 4 entries, **When** a 5th group is added in `src/data/skills.ts`, **Then** a 5th card renders in the Skills section.
2. **Given** `navLinks` in `src/data/nav.ts`, **When** a new link object is appended, **Then** it appears in the Navigation bar.
3. **Given** `methodologySteps` in `src/data/methodology.ts`, **When** a step is removed from the array, **Then** it no longer appears in the rendered Methodology section.

---

### Edge Cases

- What happens when a required field (e.g. `name`, `id`) is missing from a data entry? TypeScript compilation should fail with a clear error before runtime.
- What if a data file is accidentally emptied? The corresponding section renders nothing in the content area — no cards, no list items — but the section wrapper and heading remain visible. No dedicated empty state UI is required. No crash, no blank page.
- What if two projects share the same `id`? The `key` prop in React will warn in dev mode; `id` values must be unique within each array.
- What happens when a data file contains a typo in a field name? TypeScript types on the exported array catch the mismatch at compile time.

---

## Requirements

### Functional Requirements

- **FR-001**: System MUST have a `src/data/` directory as the single source of truth for all editable content.
- **FR-002**: Each content domain MUST have its own dedicated file: `personal.ts`, `projects.ts`, `skills.ts`, `services.ts`, `methodology.ts`, `learning.ts`, `now.ts`, `nav.ts`, `site.ts`.
- **FR-003**: Components MUST import data from `src/data/` files and MUST NOT define named inline data arrays or named inline data objects (e.g. `const PROJECTS = [...]`, `const SKILL_GROUPS = [...]`). Static prose strings and inline JSX text are out of scope for this feature.
- **FR-004**: Each data file MUST export TypeScript types alongside its data constant so consuming components have type safety.
- **FR-005**: `src/shared/constants/nav.constant.ts` MUST be deleted after its content is migrated to `src/data/nav.ts` and `src/data/personal.ts`.
- **FR-006**: `src/app/layout.tsx` MUST derive its `metadata` export from `src/data/site.ts` rather than from inline object literals.
- **FR-007**: Data files MUST be pure TypeScript — no JSX, no React imports, no side effects, no API calls.
- **FR-008**: All named inline data arrays and objects currently defined inside component files MUST be migrated to `src/data/` with no data loss. Inline JSX text strings and static prose copy inside components are explicitly excluded from this feature's scope and deferred to a follow-up.

### Key Entities

- **PersonalData**: name, title, bio, contact details, stats — consumed by Hero, Contact, Navigation, Footer.
- **Project**: id, code, role, name, description, results (`string[]`), techs[] — exported as `projects: Project[]` from `src/data/projects.ts`.
- **Venture**: code, role, name, description, results (`VentureResult[]` where each is `{ title, desc }`), techs[] — exported as a single `venture: Venture` constant from `src/data/projects.ts`. Separate type from `Project`; no shared base type, no `isVenture` flag.
- **SkillGroup**: label, skills[] — where each Skill has `name` and optional `core` flag.
- **NavLink**: label, href — consumed by Navigation.
- **SiteConfig**: title, description, keywords[], author, robots, lang, dir — consumed by layout metadata.

---

## Success Criteria

### Measurable Outcomes

- **SC-001**: A content change in any `src/data/` file is visible in the browser within the normal Next.js HMR reload time (under 3 seconds) with zero component file edits.
- **SC-002**: Zero inline data arrays remain in any file under `src/features/` or `src/shared/` after migration — verifiable by searching for `const [A-Z_]+ = \[` patterns in those directories.
- **SC-003**: TypeScript compilation (`npm run build`) passes with no errors after full migration.
- **SC-004**: `src/shared/constants/nav.constant.ts` no longer exists in the repository.
- **SC-005**: Any developer unfamiliar with the codebase can locate and edit any piece of site content within 60 seconds by browsing `src/data/` alone.

---

## Assumptions

- The application runs Next.js with TypeScript — static typing is available and enforced.
- `as const` assertions will be used on data objects where appropriate to maximize type inference.
- No CMS, database, or external API is involved in this feature — data files are the backend substitute.
- Hot Module Replacement (HMR) in Next.js dev mode will propagate data file changes to the browser automatically.
- Components already use `map()` over arrays for rendering lists, making the migration additive (import swap) rather than structural.
- The `src/shared/constants/nav.constant.ts` file is the only existing constants file that holds content — no other files of this kind exist.