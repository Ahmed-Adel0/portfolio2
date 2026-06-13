# Tasks: Portfolio Redesign (Arabic Sales Page)

**Input**: Design documents from `/specs/002-redesign-portfolio/`

**Prerequisites**: [plan.md](file:///d:/projects/my%20portfolio/specs/002-redesign-portfolio/plan.md) (required), [spec.md](file:///d:/projects/my%20portfolio/specs/002-redesign-portfolio/spec.md) (required), [research.md](file:///d:/projects/my%20portfolio/specs/002-redesign-portfolio/research.md), [data-model.md](file:///d:/projects/my%20portfolio/specs/002-redesign-portfolio/data-model.md), [contracts/README.md](file:///d:/projects/my%20portfolio/specs/002-redesign-portfolio/contracts/README.md)

**Tests**: Tests are OPTIONAL and focused on manual visual verification, mobile simulation, and performance audit (Lighthouse), as no unit testing framework is configured.

**Organization**: Tasks are grouped by user story phases to enable independent implementation, testing, and delivery of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Exact file paths are provided in descriptions.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Tailwind light-theme configuration and global layout setup

- [x] T001 Configure light theme colors (`bg`, `text`, `muted`, `border`) in [tailwind.config.ts](file:///d:/projects/my%20portfolio/tailwind.config.ts)
- [x] T002 Update global styles (`color-scheme: light`, body background, selection, and glassmorphism helpers) in [src/app/globals.css](file:///d:/projects/my%20portfolio/src/app/globals.css)
- [x] T003 [P] Create static data files placeholders for new sections in [src/data/comparison.ts](file:///d:/projects/my%20portfolio/src/data/comparison.ts), [src/data/faq.ts](file:///d:/projects/my%20portfolio/src/data/faq.ts), [src/data/how-it-works.ts](file:///d:/projects/my%20portfolio/src/data/how-it-works.ts), and [src/data/testimonials.ts](file:///d:/projects/my%20portfolio/src/data/testimonials.ts)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core application file cleanup and common header/footer updates

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Remove deprecated sections (`learning`, `now`, and standalone `methodology`) and update imports in the home page file [src/app/page.tsx](file:///d:/projects/my%20portfolio/src/app/page.tsx)
- [x] T005 Refactor header layout to be sticky and link the CTA button to WhatsApp in [src/shared/components/navigation/navigation.tsx](file:///d:/projects/my%20portfolio/src/shared/components/navigation/navigation.tsx)
- [x] T006 Update footer social links and WhatsApp integration in [src/shared/components/footer/footer.tsx](file:///d:/projects/my%20portfolio/src/shared/components/footer/footer.tsx)

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Hero, Why Me & Services (Priority: P1) 🎯 MVP

**Goal**: Deliver the core business sales message above-the-fold and introduce service offerings with a direct WhatsApp CTA.

**Independent Test**: Verify Hero stats, credential badges, 6 services cards, and confirm that clicking CTA buttons launches WhatsApp Web or app with the correct Egyptian phone number and url-encoded Arabic greeting.

- [x] T007 Define Hero, Why Me, and Services data configurations in [src/data/personal.ts](file:///d:/projects/my%20portfolio/src/data/personal.ts) and [src/data/services.ts](file:///d:/projects/my%20portfolio/src/data/services.ts)
- [x] T008 [P] [US1] Build HeroSection component with 3 stats in [src/features/hero/components/HeroSection.tsx](file:///d:/projects/my%20portfolio/src/features/hero/components/HeroSection.tsx)
- [x] T009 [P] [US1] Build WhyMeSection component with personal image and 4 credentials badges in [src/features/why-me/components/WhyMeSection.tsx](file:///d:/projects/my%20portfolio/src/features/why-me/components/WhyMeSection.tsx)
- [x] T010 [P] [US1] Refactor ServicesSection to render 6 cards with outcome-focused copy in [src/features/services/components/services-section.tsx](file:///d:/projects/my%20portfolio/src/features/services/components/services-section.tsx)
- [x] T011 [US1] Import and integrate Hero, Why Me, and Services sections in the main home page [src/app/page.tsx](file:///d:/projects/my%20portfolio/src/app/page.tsx)

**Checkpoint**: Hero, Why Me, Services, Header, and Footer are fully functional and ready to demo.

---

## Phase 4: User Story 2 - Objections, Comparison & FAQs (Priority: P1)

**Goal**: Convert hesitant visitors by addressing common freelancer objections using a comparison table and FAQ.

**Independent Test**: Click FAQ accordion rows to confirm smooth open/close. Shrink viewport width to < 768px and confirm comparison rows stack vertically.

- [x] T012 Define Comparison, How It Works, and FAQ data objects in [src/data/comparison.ts](file:///d:/projects/my%20portfolio/src/data/comparison.ts), [src/data/how-it-works.ts](file:///d:/projects/my%20portfolio/src/data/how-it-works.ts), and [src/data/faq.ts](file:///d:/projects/my%20portfolio/src/data/faq.ts)
- [x] T013 [P] [US2] Build ComparisonSection table component (supporting mobile stacked layout) in [src/features/comparison/components/ComparisonSection.tsx](file:///d:/projects/my%20portfolio/src/features/comparison/components/ComparisonSection.tsx)
- [x] T014 [P] [US2] Build HowItWorksSection component (4 steps process layout) in [src/features/how-it-works/components/HowItWorksSection.tsx](file:///d:/projects/my%20portfolio/src/features/how-it-works/components/HowItWorksSection.tsx)
- [x] T015 [P] [US2] Refactor FaqSection accordion component in [src/features/faq/components/FaqSection.tsx](file:///d:/projects/my%20portfolio/src/features/faq/components/FaqSection.tsx)
- [x] T016 [US2] Import and integrate Comparison, How It Works, and FAQ sections in the home page [src/app/page.tsx](file:///d:/projects/my%20portfolio/src/app/page.tsx)

**Checkpoint**: Objection-handling features are integrated alongside core landing page flow.

---

## Phase 5: User Story 3 - Social Proof & Projects Showcase (Priority: P2)

**Goal**: Display past projects with clear business-centric results and Live/Development badges.

**Independent Test**: Confirm only 4 projects render initially. Click "Show All" button and confirm additional projects reveal smoothly. Check that projects without a link omit the "View" button.

- [x] T017 Update projects schema and add Arabic business descriptions in [src/data/projects.ts](file:///d:/projects/my%20portfolio/src/data/projects.ts)
- [x] T018 [P] [US3] Refactor ProjectsSection with a 4-card default grid, toggle button, and conditional project links in [src/features/projects/components/projects-section.tsx](file:///d:/projects/my%20portfolio/src/features/projects/components/projects-section.tsx)
- [x] T019 [US3] Integrate updated ProjectsSection into the main home page [src/app/page.tsx](file:///d:/projects/my%20portfolio/src/app/page.tsx)

**Checkpoint**: Projects showcase is fully updated and integrated.

---

## Phase 6: User Story 4 - Testimonials Section & Responsive Check (Priority: P2)

**Goal**: Integrate the optional Testimonials block with dynamic toggling and ensure mobile responsive layouts.

**Independent Test**: Set the testimonials data array to empty and verify the Testimonials section vanishes from the DOM without layout distortion. Test site responsiveness on simulated viewports down to 390px.

- [x] T020 Define Testimonials schema and export an empty array in [src/data/testimonials.ts](file:///d:/projects/my%20portfolio/src/data/testimonials.ts)
- [x] T021 [P] [US4] Build TestimonialsSection quote card component in [src/features/testimonials/components/TestimonialsSection.tsx](file:///d:/projects/my%20portfolio/src/features/testimonials/components/TestimonialsSection.tsx)
- [x] T022 [US4] Integrate TestimonialsSection into the home page [src/app/page.tsx](file:///d:/projects/my%20portfolio/src/app/page.tsx) wrapping it in a data check condition
- [x] T023 [US4] Conduct a visual responsive review across all active sections at 390px viewport width, making minor layout modifications as needed

**Checkpoint**: Page layout verified on mobile screens, and optional testimonials support configured.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Cleanup, performance validations, and deploy checks

- [x] T024 Remove deprecated feature directories (`learning/`, `now/`, and old `about/` features) under `src/features/`
- [x] T025 Run production build and lint commands (`npm run build` and `npm run lint`) to check for errors
- [x] T026 Audit page load speed using Lighthouse to verify performance score >= 90
- [x] T027 Run grep command to ensure no dark selectors (e.g., `bg-[#080809]`) remain in component source files
- [x] T028 Run final validation scenarios outlined in [quickstart.md](file:///d:/projects/my%20portfolio/specs/002-redesign-portfolio/quickstart.md)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Can start immediately.
- **Foundational (Phase 2)**: Depends on Setup (Phase 1) - blocks all user stories.
- **User Stories (Phases 3 to 6)**: Depend on Foundational (Phase 2).
  - User Story 1 (P1) is the MVP and should be completed first.
  - User Stories 2, 3, and 4 can be implemented in parallel or sequentially.
- **Polish (Phase 7)**: Depends on all user stories completion.

### Parallel Opportunities

- Setup tasks (T001, T003) can run in parallel.
- User Story 1 components (T008, T009, T010) can be built in parallel once data configurations (T007) are defined.
- User Story 2 components (T013, T014, T015) can be built in parallel.
- Testimonials component (T021) and ProjectsSection refactoring (T018) can be done in parallel.

---

## Parallel Example: User Story 1

```powershell
# Launch development server:
npm run dev

# Build UI components for User Story 1 in parallel once data schema is ready:
# [T008] Build HeroSection.tsx
# [T009] Build WhyMeSection.tsx
# [T010] Refactor services-section.tsx
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (Theme variables)
2. Complete Phase 2: Foundational (Cleanup & Navigation WhatsApp update)
3. Complete Phase 3: User Story 1 (Hero, Why me, Services)
4. **STOP and VALIDATE**: Confirm WhatsApp click actions and desktop/mobile layout are correct.

### Incremental Delivery

1. Setup + Foundation -> Theme and sticky nav complete
2. Add User Story 1 -> MVP Sales Page complete (Demo & deploy!)
3. Add User Story 2 -> Objection FAQs and comparisons complete
4. Add User Story 3 -> Projects showcase complete
5. Add User Story 4 -> Testimonials integration and mobile styling audits complete
6. Polish -> Clean up code and test performance
