# Tasks: Data-Driven Content Layer

**Feature**: `001-data-driven-content`
**Plan**: [plan.md](./plan.md) | **Spec**: [spec.md](./spec.md) | **Data Model**: [data-model.md](./data-model.md)

---

## Context for the implementing agent (Codex)

This task list migrates all named inline data arrays and objects out of React component files into a new `src/data/` directory. The project is a **Next.js 14 App Router** portfolio written in **TypeScript 5**. All path aliases (`@/`) are configured in `tsconfig.json` and resolve to `./src/`.

**Rules to follow strictly:**
- NEVER change any JSX structure, className, or styling — only data references change.
- NEVER add new npm packages.
- NEVER create a barrel `index.ts` in `src/data/`.
- ALL imports in components must use the `@/data/` alias (e.g. `import { projects } from "@/data/projects"`).
- Data files must be pure `.ts` — no JSX, no React imports.
- After each task, the project must still compile (`npm run build` must pass).

---

## Format: `[ID] [P?] [Story?] Description`

- `[P]` — task can run in parallel with other `[P]` tasks in the same phase
- `[US1]` / `[US2]` / `[US3]` — which user story this task serves
- Sequential tasks within a phase MUST be done in order

---

## Phase 1 — Setup: Create `src/data/` directory and tsconfig alias

**Goal**: Ensure the `src/data/` path exists and is covered by the existing `@/` alias in `tsconfig.json`.

- [X] T001 Verify that `tsconfig.json` at the project root has `"paths": { "@/*": ["./src/*"] }`. If it already does (it does — confirmed in codebase), no change is needed. Create the empty directory `src/data/` to establish the folder. Do NOT create any files yet.

  **How to verify**: Run `ls src/data/` — the directory must exist. Run `npx tsc --noEmit` — must pass (no new errors introduced).

---

## Phase 2 — Foundational: Create all 9 data files

All 9 tasks in this phase are `[P]` — they touch different files with no dependencies on each other. Write each file exactly as specified. Do not abbreviate or summarise the data content.

- [X] T002 [P] Create `src/data/personal.ts` with the following exact content:

  ```ts
  export type Stat = {
    value: string;
    label: string;
  };

  export type PersonalData = {
    nameAr: string;
    nameEn: string;
    titleEn: string;
    bio: string;
    email: string;
    phone: string;
    linkedin: string;
    location: string;
    availableGlobally: boolean;
    stats: Stat[];
  };

  export const personal: PersonalData = {
    nameAr: "أحمد النحاس",
    nameEn: "Ahmed El-Nahhas",
    titleEn: "Software Engineer & System Analyst",
    bio: "أحوّل متطلبات الأعمال إلى أنظمة ومنتجات رقمية قابلة للتوسع. أبني حلولاً تقنية تساعد المؤسسات على العمل بكفاءة واتخاذ قرارات ذكية ومدروسة.",
    email: "ahmed.ibn.adell@gmail.com",
    phone: "01554463626",
    linkedin: "https://linkedin.com/in/ahmedibnadel",
    location: "المنصورة، مصر",
    availableGlobally: true,
    stats: [
      { value: "1K+", label: "مستخدم للمنصات" },
      { value: "4+",  label: "مشاريع تقنية" },
      { value: "3",   label: "مشاريع ريادية" },
    ],
  };
  ```

  **Verify**: `npx tsc --noEmit` passes.

- [X] T003 [P] Create `src/data/nav.ts` with the following exact content:

  ```ts
  export type NavLink = {
    label: string;
    href: string;
  };

  export const navLinks: NavLink[] = [
    { label: "من أنا",       href: "#about"    },
    { label: "ماذا أفعل",   href: "#what"     },
    { label: "المشاريع",    href: "#projects"  },
    { label: "رحلة التعلم", href: "#learning"  },
    { label: "تواصل",       href: "#contact"   },
  ];
  ```

  **Verify**: `npx tsc --noEmit` passes.

- [X] T004 [P] Create `src/data/projects.ts` with the following exact content:

  ```ts
  export type Project = {
    id: number;
    code: string;
    role: string;
    name: string;
    description: string;
    results: string[];
    techs: string[];
  };

  export type VentureResult = {
    title: string;
    desc: string;
  };

  export type Venture = {
    code: string;
    role: string;
    name: string;
    description: string;
    results: VentureResult[];
    techs: string[];
  };

  export const projects: Project[] = [
    {
      id: 1,
      code: "MED+",
      role: "Team Lead · Frontend Engineer",
      name: "المنصة الطبية",
      description: "المشكلة: إدارة الحجوزات والعيادات يدوياً — فوضى وأخطاء وضياع وقت وجهد.",
      results: [
        "تقليل الأعمال اليدوية بشكل ملحوظ",
        "تسهيل إدارة المواعيد والحجوزات",
        "تحسين تجربة الحجز للمرضى",
      ],
      techs: ["Next.js", "Supabase", "TypeScript"],
    },
    {
      id: 2,
      code: "JATORY",
      role: "CTO & Co-Founder",
      name: "Jatory",
      description: "منصة تربط طلاب الكليات العلمية بالمسارات المهنية المناسبة وسوق العمل الحقيقي.",
      results: [
        "تحديد المسار المهني بدقة لكل طالب",
        "ربط المواهب بفرص العمل الفعلية",
      ],
      techs: ["Validation Stage", "Ed-Tech"],
    },
    {
      id: 3,
      code: "OUTWIN",
      role: "Tech Lead",
      name: "Outwin — وكالة رقمية",
      description: "قيادة الفريق التقني في وكالة رقمية متخصصة — من تحليل متطلبات العميل إلى تسليم الحل المتكامل.",
      results: [
        "تحليل المتطلبات والتواصل مع العملاء",
        "اتخاذ القرارات التقنية وإدارة التنفيذ",
      ],
      techs: ["Project Leadership", "Client Management"],
    },
    {
      id: 4,
      code: "EDS",
      role: "Member & Developer",
      name: "Egypt Data Scholars",
      description: "مساهم أساسي في منصة وطنية لتطوير مهارات الطلاب في علوم البيانات والذكاء الاصطناعي.",
      results: ["+1000 طالب مسجّل على المنصة", "200+ طالب منتفع مباشرةً"],
      techs: ["Ed-Tech", "Data Science", "National Initiative"],
    },
  ];

  export const venture: Venture = {
    code: "B•STANCE",
    role: "Founder & Visionary",
    name: "B•Stance — منظومة الأداء الرياضي",
    description: "رؤية طويلة المدى لبناء منظومة متكاملة تحوّل الأكاديميات الرياضية رقمياً وتحسّن أداءها التشغيلي.",
    results: [
      { title: "Recovery",   desc: "خدمات الاستشفاء الرياضي المتخصصة" },
      { title: "Consulting", desc: "رفع كفاءة الأكاديميات (تشغيل، إدارة، أداء، تحول رقمي)" },
      { title: "SaaS",       desc: "منصة إدارة الأكاديميات (حضور، اشتراكات، لاعبون، أولياء أمور)" },
    ],
    techs: ["Sports Tech", "SaaS", "Consulting", "Healthcare"],
  };
  ```

  **Verify**: `npx tsc --noEmit` passes.

- [X] T005 [P] Create `src/data/services.ts` with the following exact content:

  ```ts
  export type Service = {
    num: string;
    title: string;
    description: string;
    tags: string[];
  };

  export const services: Service[] = [
    {
      num: "01",
      title: "هندسة البرمجيات",
      description: "بناء الأنظمة والتطبيقات الرقمية من الصفر بجودة عالية وقابلية للتوسع. من الـ Frontend إلى الـ Backend وقواعد البيانات.",
      tags: ["Next.js", "PHP / Laravel", "Supabase", "MySQL"],
    },
    {
      num: "02",
      title: "تحليل الأنظمة",
      description: "تحليل المتطلبات وتصميم الحلول. تحويل احتياجات العمل إلى هياكل ونماذج رقمية واضحة وقابلة للتنفيذ.",
      tags: ["Requirements Analysis", "SDLC", "Process Modeling"],
    },
    {
      num: "03",
      title: "قيادة المشاريع التقنية",
      description: "إدارة التنفيذ والتنسيق بين العميل والفريق التقني. اتخاذ القرارات الصحيحة وضمان التسليم في الوقت والجودة المطلوبَين.",
      tags: ["Tech Leadership", "Stakeholder Mgmt", "Team Coordination"],
    },
  ];
  ```

  **Verify**: `npx tsc --noEmit` passes.

- [X] T006 [P] Create `src/data/methodology.ts` with the following exact content:

  ```ts
  export type MethodologyStep = {
    num: string;
    title: string;
    description: string;
  };

  export const methodologySteps: MethodologyStep[] = [
    { num: "01", title: "فهم المشكلة",        description: "ما المشكلة الحقيقية؟ ليس الطلب، بل ما وراءه." },
    { num: "02", title: "فهم أهداف العمل",    description: "ما الذي يريد العميل أو المؤسسة تحقيقه فعلاً؟" },
    { num: "03", title: "تحليل المتطلبات",    description: "توثيق وتحليل المتطلبات الوظيفية وغير الوظيفية بدقة." },
    { num: "04", title: "تصميم الحل",         description: "اختيار التقنيات المناسبة وتصميم البنية الصحيحة." },
    { num: "05", title: "إدارة التنفيذ",      description: "التنسيق بين الفريق والعميل وضمان الجودة في كل مرحلة." },
    { num: "06", title: "القياس والتحسين",    description: "قياس الأثر الحقيقي والتحسين المستمر بناءً على البيانات." },
  ];
  ```

  **Verify**: `npx tsc --noEmit` passes.

- [X] T007 [P] Create `src/data/skills.ts` with the following exact content:

  ```ts
  export type Skill = {
    name: string;
    core?: boolean;
  };

  export type SkillGroup = {
    label: string;
    skills: Skill[];
  };

  export const skillGroups: SkillGroup[] = [
    {
      label: "Software Engineering",
      skills: [
        { name: "Next.js",       core: true },
        { name: "PHP / Laravel", core: true },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "Supabase" },
        { name: "MySQL" },
        { name: "REST APIs" },
        { name: "Git / GitHub" },
      ],
    },
    {
      label: "System Analysis",
      skills: [
        { name: "Requirements Analysis", core: true },
        { name: "Process Modeling",      core: true },
        { name: "SDLC" },
        { name: "Technical Documentation" },
        { name: "System Design" },
        { name: "Solution Architecture" },
      ],
    },
    {
      label: "Project Delivery",
      skills: [
        { name: "Tech Leadership", core: true },
        { name: "Task Management" },
        { name: "Stakeholder Comms" },
        { name: "Project Coordination" },
        { name: "Agile / Scrum" },
      ],
    },
    {
      label: "Data Science Journey",
      skills: [
        { name: "Python" },
        { name: "Statistics" },
        { name: "Data Analysis" },
        { name: "Mathematics" },
        { name: "CS Fundamentals" },
      ],
    },
  ];
  ```

  **Verify**: `npx tsc --noEmit` passes.

- [X] T008 [P] Create `src/data/learning.ts` with the following exact content:

  ```ts
  export type StudyItem = {
    name: string;
    sub: string;
  };

  export type TagItem = {
    name: string;
    tag: true;
  };

  export type LearningItem = StudyItem | TagItem;

  export type LearningColumn =
    | { label: string; type: "text"; items: StudyItem[] }
    | { label: string; type: "tags"; items: TagItem[] };

  export const learningColumns: LearningColumn[] = [
    {
      label: "أدرس الآن",
      type: "text",
      items: [
        { name: "علوم الحاسب",          sub: "الأساسيات العميقة — خوارزميات، هياكل بيانات، نظرية الحوسبة" },
        { name: "تحليل وتصميم الأنظمة", sub: "System Analysis & Design — SDLC، نمذجة الأنظمة" },
        { name: "الرياضيات",            sub: "الجبر وحساب المثلثات والتفكير الرياضي التحليلي" },
        { name: "علوم البيانات",        sub: "Data Science — Python، إحصاء، تحليل البيانات" },
      ],
    },
    {
      label: "أقرأ حالياً",
      type: "text",
      items: [
        { name: "Computer Science Illuminated",          sub: "رحلة شاملة في أساسيات علوم الحاسب — من الدوائر للخوارزميات" },
        { name: "Introduction to Mathematical Thinking", sub: "كيف يفكر عقل الرياضياتي؟ منهجية التفكير المنطقي" },
        { name: "Algebra and Trigonometry 2e",           sub: "بناء قاعدة رياضية متينة لعلوم البيانات والخوارزميات" },
      ],
    },
    {
      label: "مجالات الاهتمام",
      type: "tags",
      items: [
        { name: "الرياضيات",        tag: true },
        { name: "الأدب",            tag: true },
        { name: "التاريخ",          tag: true },
        { name: "الفلسفة",          tag: true },
        { name: "علوم الشريعة",     tag: true },
        { name: "علوم الحاسب",     tag: true },
        { name: "ريادة الأعمال",   tag: true },
        { name: "الأنظمة المعقدة",  tag: true },
      ],
    },
  ];
  ```

  **Verify**: `npx tsc --noEmit` passes.

- [X] T009 [P] Create `src/data/now.ts` with the following exact content:

  ```ts
  export type NowItem = {
    name: string;
    sub: string;
  };

  export type NowColumn = {
    label: string;
    icon: string;
    items: NowItem[];
  };

  export const nowColumns: NowColumn[] = [
    {
      label: "أعمل على",
      icon: "⚡",
      items: [
        { name: "Outwin",   sub: "قيادة الفريق التقني — مشاريع عملاء" },
        { name: "Jatory",   sub: "مرحلة التحقق من الفكرة (Validation)" },
        { name: "B•Stance", sub: "بناء المنظومة الرياضية المتكاملة" },
      ],
    },
    {
      label: "أتعلم",
      icon: "📚",
      items: [
        { name: "Data Science",             sub: "Python والإحصاء وتحليل البيانات" },
        { name: "System Analysis & Design", sub: "التعمق في تحليل وتصميم الأنظمة" },
        { name: "Computer Science",         sub: "الأساسيات والرياضيات والخوارزميات" },
      ],
    },
    {
      label: "أقرأ",
      icon: "📖",
      items: [
        { name: "Computer Science Illuminated",   sub: "في التقدم" },
        { name: "Intro to Mathematical Thinking", sub: "في التقدم" },
        { name: "Algebra and Trigonometry 2e",    sub: "في التقدم" },
      ],
    },
  ];
  ```

  **Verify**: `npx tsc --noEmit` passes.

- [X] T010 [P] Create `src/data/site.ts` with the following exact content:

  ```ts
  export type SiteConfig = {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    robots: string;
    lang: string;
    dir: "rtl" | "ltr";
  };

  export const site: SiteConfig = {
    title:       "أحمد النحاس — مهندس برمجيات ومحلل أنظمة",
    description: "أحول متطلبات الأعمال إلى أنظمة ومنتجات رقمية قابلة للنمو",
    keywords:    ["مهندس برمجيات", "محلل أنظمة", "Next.js", "البرمجة", "تطوير الويب"],
    author:      "أحمد النحاس",
    robots:      "index, follow",
    lang:        "ar",
    dir:         "rtl",
  };
  ```

  **Verify**: `npx tsc --noEmit` passes.

**Phase 2 checkpoint**: All 9 files in `src/data/` exist. `npx tsc --noEmit` passes with zero errors. No component file has been modified yet.

---

## Phase 3 — US1: Migrate projects data and update `projects-section.tsx`

**User Story 1**: Content editor updates a project entry from `src/data/projects.ts` without touching any component.

- [X] T011 [US1] Update `src/features/projects/components/projects-section.tsx`.

  **Step-by-step instructions:**

  1. At the top of the file, **remove** the two existing inline definitions:
     - The entire `const PROJECTS = [...]` array (all 4 project objects).
     - The entire `const VENTURE = {...}` object.

  2. **Remove** the existing import from `nav.constant.ts` if it exists in this file (it may not — check first).

  3. **Add** this import at the top of the file (after any existing React/Next.js imports):
     ```ts
     import { projects, venture } from "@/data/projects";
     import type { Project, Venture, VentureResult } from "@/data/projects";
     ```

  4. **Find and replace** every reference to the old names:
     - `PROJECTS` → `projects`
     - `VENTURE` → `venture`

  5. The existing TypeScript type annotations in the component (if any used `typeof PROJECTS[0]` or similar) must be updated to use the imported `Project` and `Venture` types instead. Locate any type annotations in the file and replace inline type definitions with the imported ones.

  6. Do NOT change any JSX, className, Tailwind class, or component structure. Only data references change.

  **Verify**:
  - `npx tsc --noEmit` passes.
  - Run `npm run dev` and open the Projects section — all 4 project cards and the B•STANCE venture card must render identically to before.

---

## Phase 4 — US1 (continued): Migrate remaining section data files

All tasks in this phase are `[P]` — they each touch a different component file.

- [X] T012 [P] [US1] Update `src/features/services/components/services-section.tsx`.

  **Instructions:**
  1. Remove the entire `const SERVICES = [...]` array from the top of the file.
  2. Add this import:
     ```ts
     import { services } from "@/data/services";
     import type { Service } from "@/data/services";
     ```
  3. Replace all references to `SERVICES` with `services`.
  4. If the file had a local `type` or `interface` for service items, remove it — use the imported `Service` type instead.
  5. Do NOT change any JSX or className.

  **Verify**: `npx tsc --noEmit` passes. Services section renders identically.

- [X] T013 [P] [US1] Update `src/features/methodology/components/methodology-section.tsx`.

  **Instructions:**
  1. Remove the entire `const METHODOLOGY_STEPS = [...]` array.
  2. Add this import:
     ```ts
     import { methodologySteps } from "@/data/methodology";
     import type { MethodologyStep } from "@/data/methodology";
     ```
  3. Replace all references to `METHODOLOGY_STEPS` with `methodologySteps`.
  4. Remove any local type definitions for step items that are now covered by `MethodologyStep`.
  5. Note: the existing component uses a `delay` property on steps (e.g. `reveal-delay-1`). This property is NOT in the data model — it is computed in the JSX by index: `reveal-delay-${(index % 3) + 1}`. Update the component's `.map()` callback to derive the delay from the array index rather than from the data object. Concretely, replace `{step.delay}` with `` {`reveal-delay-${(index % 3) + 1}`} `` in the className string, and add `index` as the second argument to `.map()`.

  **Verify**: `npx tsc --noEmit` passes. Methodology section renders identically with correct delay classes.

- [X] T014 [P] [US1] Update `src/features/skills/components/skills-section.tsx`.

  **Instructions:**
  1. Remove the entire `const SKILL_GROUPS = [...]` array.
  2. Add this import:
     ```ts
     import { skillGroups } from "@/data/skills";
     import type { SkillGroup, Skill } from "@/data/skills";
     ```
  3. Replace all references to `SKILL_GROUPS` with `skillGroups`.
  4. Remove local type definitions for `SkillGroup` or `Skill` if present.
  5. Do NOT change any JSX or className.

  **Verify**: `npx tsc --noEmit` passes. Skills section renders identically.

- [X] T015 [P] [US1] Update `src/features/learning/components/learning-section.tsx`.

  **Instructions:**
  1. Remove the entire `const LEARNING_COLUMNS = [...]` array.
  2. Remove the local type definitions: `LearningItem`, `LearningColumn` (and their sub-types `StudyItem`, `TagItem`) — these are now imported from `@/data/learning`.
  3. Add this import:
     ```ts
     import { learningColumns } from "@/data/learning";
     import type { LearningColumn, StudyItem, TagItem } from "@/data/learning";
     ```
  4. Replace all references to `LEARNING_COLUMNS` with `learningColumns`.
  5. The discriminated union (`type: "text"` / `type: "tags"`) is preserved in the imported type — the JSX conditional rendering (`column.type === "tags"`) requires no changes.
  6. Do NOT change any JSX or className.

  **Verify**: `npx tsc --noEmit` passes. Learning section renders identically including the tags column.

- [X] T016 [P] [US1] Update `src/features/now/components/now-section.tsx`.

  **Instructions:**
  1. Remove the entire `const NOW_COLUMNS = [...]` array.
  2. Add this import:
     ```ts
     import { nowColumns } from "@/data/now";
     import type { NowColumn, NowItem } from "@/data/now";
     ```
  3. Replace all references to `NOW_COLUMNS` with `nowColumns`.
  4. Remove local type definitions for `NowColumn` or `NowItem` if present.
  5. Do NOT change any JSX or className.

  **Verify**: `npx tsc --noEmit` passes. Now section renders identically.

**Phase 4 checkpoint**: All section components (projects, services, methodology, skills, learning, now) now import from `src/data/`. Zero inline arrays remain in these files.

---

## Phase 5 — US2: Migrate personal data and update all consumers

**User Story 2**: A single edit to `src/data/personal.ts` updates email, phone, bio, and stats everywhere they appear.

These tasks are sequential because `nav.constant.ts` must exist until all consumers have been migrated off it.

- [X] T017 [US2] Update `src/shared/components/navigation/navigation.tsx`.

  **Instructions:**
  1. The file currently imports `{ NAV_LINKS, CONTACT_EMAIL }` from `@/shared/constants/nav.constant`.
  2. Remove that import line entirely.
  3. Add these two imports:
     ```ts
     import { navLinks } from "@/data/nav";
     import { personal } from "@/data/personal";
     ```
  4. Replace all references to `NAV_LINKS` with `navLinks`.
  5. Replace all references to `CONTACT_EMAIL` with `personal.email`.
  6. Do NOT change any JSX, className, or logic (active link detection, scroll handler, etc.).

  **Verify**: `npx tsc --noEmit` passes. Navigation renders identically. The `mailto:` CTA link uses `personal.email`.

- [X] T018 [US2] Update `src/features/contact/components/contact-section.tsx`.

  **Instructions:**
  1. The file currently imports `{ CONTACT_EMAIL, PHONE, LINKEDIN }` from `@/shared/constants/nav.constant`.
  2. Remove that import line entirely.
  3. Add this import:
     ```ts
     import { personal } from "@/data/personal";
     ```
  4. Replace:
     - `CONTACT_EMAIL` → `personal.email`
     - `PHONE` → `personal.phone`
     - `LINKEDIN` → `personal.linkedin`
  5. Do NOT change any JSX or className.

  **Verify**: `npx tsc --noEmit` passes. Contact section renders all three links correctly.

- [X] T019 [US2] Update `src/features/hero/components/hero-section.tsx`.

  **Instructions:**
  1. The file currently imports `{ CONTACT_EMAIL }` from `@/shared/constants/nav.constant`.
  2. Remove that import line.
  3. Add this import:
     ```ts
     import { personal } from "@/data/personal";
     ```
  4. Replace `CONTACT_EMAIL` with `personal.email` everywhere in the file.
  5. Replace the hardcoded Hero bio paragraph text with `{personal.bio}`.
  6. Replace the three hardcoded stat blocks with a `personal.stats.map(...)` loop that preserves the same wrapper markup, className values, and visual output.
  7. For stat values ending in `+`, render the numeric part and the blue `<em>+</em>` marker separately so the current styling remains unchanged.
  8. Do NOT change unrelated JSX, className, or layout structure.

  **Verify**: `npx tsc --noEmit` passes. Hero section renders identically. The email CTA, bio, and stats use `personal`.

- [X] T020 [US2] Update `src/shared/components/footer/footer.tsx`.

  **Instructions:**
  1. Add this import:
     ```ts
     import { personal } from "@/data/personal";
     ```
  2. Replace the hardcoded footer location text with `{personal.location}` while preserving the existing separator and availability wording.
  3. Do NOT change unrelated JSX, className, or layout structure.

  **Verify**: `npx tsc --noEmit` passes. Footer renders identically, and changing `personal.location` updates the footer.

---

## Phase 6 — US2 (continued): Update `layout.tsx` and delete the legacy constants file

- [X] T021 [US2] Update `src/app/layout.tsx` to import metadata from `src/data/site.ts`.

  **Instructions:**
  1. Open `src/app/layout.tsx`. The current file exports a `metadata` const as an inline object:
     ```ts
     export const metadata: Metadata = {
       title: "أحمد النحاس — مهندس برمجيات ومحلل أنظمة",
       description: "أحول متطلبات الأعمال إلى أنظمة ومنتجات رقمية قابلة للنمو",
       keywords: [...],
       authors: [{ name: "أحمد النحاس" }],
       robots: "index, follow",
     };
     ```
  2. Add this import after the existing `next` import:
     ```ts
     import { site } from "@/data/site";
     ```
  3. Replace the entire inline `metadata` object with:
     ```ts
     export const metadata: Metadata = {
       title:       site.title,
       description: site.description,
       keywords:    site.keywords,
       authors:     [{ name: site.author }],
       robots:      site.robots,
     };
     ```
  4. The `viewport` export, `RootLayout` function, `<html lang>`, `<html dir>` — do NOT change any of these.
  5. Do NOT change anything else in the file.

  **Verify**: `npx tsc --noEmit` passes. `npm run build` produces no errors and metadata values are correct.

- [X] T022 [US2] Delete `src/shared/constants/nav.constant.ts`.

  **Pre-condition**: Tasks T017, T018, T019 must be complete — all three consumers of this file must already be migrated. Confirm by running:
  ```bash
  grep -r "nav.constant" src/
  ```
  The output must be empty (zero matches). If any file still imports from `nav.constant`, stop and fix that file before deleting.

  **Instructions:**
  1. Once the grep returns empty, delete the file:
     ```bash
     rm src/shared/constants/nav.constant.ts
     ```
  2. Run `npx tsc --noEmit`. Must pass with zero errors.
  3. If the `src/shared/constants/` directory is now empty, delete it too:
     ```bash
     rmdir src/shared/constants/
     ```

  **Verify**: `npx tsc --noEmit` passes. `grep -r "nav.constant" src/` returns empty.

---

## Phase 7 — US3 & Polish: Final validation

- [X] T023 [US3] Verify US3 acceptance criteria — extensibility works.

  **Instructions (manual verification, no code changes):**
  1. Open `src/data/skills.ts` and temporarily add a 5th skill group:
     ```ts
     {
       label: "TEST GROUP",
       skills: [{ name: "Test Skill", core: true }],
     },
     ```
  2. Run `npm run dev` and open the Skills section. A 5th card must appear automatically.
  3. Remove the test entry and save. The Skills section returns to 4 cards.
  4. Repeat with `src/data/nav.ts` — add a temporary nav link and confirm it appears in the Navigation bar.
  5. Remove all test entries.

  **Verify**: Extensibility confirmed. No component files were touched during this test.

- [X] T024 Run the final SC-002 compliance check.

  **Instructions:**
  Run this command from the project root:
  ```bash
  grep -rn "^const [A-Z_]* = \[" src/features/ src/shared/
  ```
  Expected output: **empty** (zero matches). If any matches appear, that file still has an inline array that was missed — fix it before marking this task complete.

- [X] T025 Run final build validation.

  **Instructions:**
  ```bash
  npm run build
  ```
  Expected: Build completes successfully with zero TypeScript errors and zero Next.js build errors. If errors appear, fix them before marking complete.

- [X] T026 Confirm `src/shared/constants/nav.constant.ts` is deleted.

  **Instructions:**
  ```bash
  ls src/shared/constants/ 2>&1
  ```
  Expected output: `No such file or directory` or an empty listing. If the file still exists, it was not deleted in T022 — delete it now.

---

## Dependency & Execution Order

```
T001 (setup)
  └─► T002–T010 [P] (create all data files — parallel)
        └─► T011 (migrate projects-section — depends on T004)
        └─► T012–T016 [P] (migrate other sections — parallel, depend on T005–T009)
              └─► T017 (navigation — depends on T002, T003)
              └─► T018 (contact — depends on T002)
              └─► T019 (hero — depends on T002)
              └─► T020 (footer — depends on T002)
                    └─► T021 (layout — depends on T010)
                    └─► T022 (delete nav.constant — depends on T017, T018, T019)
                          └─► T023 (manual verification)
                          └─► T024 (grep check)
                          └─► T025 (npm run build)
                          └─► T026 (confirm deletion)
```

---

## Definition of Done

- [X] `src/data/` contains exactly 9 files: `personal.ts`, `nav.ts`, `projects.ts`, `services.ts`, `methodology.ts`, `skills.ts`, `learning.ts`, `now.ts`, `site.ts`.
- [X] `grep -rn "^const [A-Z_]* = \[" src/features/ src/shared/` returns zero matches.
- [X] `src/shared/constants/nav.constant.ts` does not exist.
- [X] `npm run build` passes with zero errors.
- [X] All sections of the portfolio render visually identically to before the migration.
- [X] All tasks marked `[X]` in this file.
