# Data Model: Data-Driven Content Layer

**Feature**: `001-data-driven-content`
**Source**: Extracted from existing component inline arrays — no new data invented.

---

## `src/data/personal.ts`

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

**Consumed by:** `hero-section.tsx` (stats, bio, email), `contact-section.tsx` (email, phone, linkedin), `navigation.tsx` (email), `footer.tsx` (location)

---

## `src/data/nav.ts`

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

**Consumed by:** `navigation.tsx`

---

## `src/data/projects.ts`

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

**Consumed by:** `projects-section.tsx`

---

## `src/data/services.ts`

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

**Consumed by:** `services-section.tsx`

---

## `src/data/methodology.ts`

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

**Consumed by:** `methodology-section.tsx`

---

## `src/data/skills.ts`

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
      { name: "Next.js",    core: true },
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

**Consumed by:** `skills-section.tsx`

---

## `src/data/learning.ts`

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
      { name: "Computer Science Illuminated",      sub: "رحلة شاملة في أساسيات علوم الحاسب — من الدوائر للخوارزميات" },
      { name: "Introduction to Mathematical Thinking", sub: "كيف يفكر عقل الرياضياتي؟ منهجية التفكير المنطقي" },
      { name: "Algebra and Trigonometry 2e",       sub: "بناء قاعدة رياضية متينة لعلوم البيانات والخوارزميات" },
    ],
  },
  {
    label: "مجالات الاهتمام",
    type: "tags",
    items: [
      { name: "الرياضيات",       tag: true },
      { name: "الأدب",           tag: true },
      { name: "التاريخ",         tag: true },
      { name: "الفلسفة",         tag: true },
      { name: "علوم الشريعة",    tag: true },
      { name: "علوم الحاسب",    tag: true },
      { name: "ريادة الأعمال",  tag: true },
      { name: "الأنظمة المعقدة", tag: true },
    ],
  },
];
```

**Consumed by:** `learning-section.tsx`

---

## `src/data/now.ts`

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
      { name: "Data Science",          sub: "Python والإحصاء وتحليل البيانات" },
      { name: "System Analysis & Design", sub: "التعمق في تحليل وتصميم الأنظمة" },
      { name: "Computer Science",      sub: "الأساسيات والرياضيات والخوارزميات" },
    ],
  },
  {
    label: "أقرأ",
    icon: "📖",
    items: [
      { name: "Computer Science Illuminated",          sub: "في التقدم" },
      { name: "Intro to Mathematical Thinking",        sub: "في التقدم" },
      { name: "Algebra and Trigonometry 2e",           sub: "في التقدم" },
    ],
  },
];
```

**Consumed by:** `now-section.tsx`

---

## `src/data/site.ts`

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

**Consumed by:** `src/app/layout.tsx`

---

## Entity Relationship Summary

```
personal ──► hero-section (stats, bio)
         ──► contact-section (email, phone, linkedin)
         ──► navigation (email for CTA)
         ──► footer (location)

navLinks ──► navigation

projects  ──► projects-section (card list)
venture   ──► projects-section (featured card)

services        ──► services-section
methodologySteps ──► methodology-section
skillGroups     ──► skills-section
learningColumns ──► learning-section
nowColumns      ──► now-section

site ──► app/layout.tsx (Next.js metadata export)
```