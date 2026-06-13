# Data Model Specification

This document defines the TypeScript interfaces and structures representing the static data layer of the portfolio website. All data files reside in `src/data/` and must remain pure TypeScript (no JSX, no external React dependencies).

## 1. Hero Content

**Path:** `src/data/personal.ts` (extended)

```typescript
export interface Stat {
  value: string;
  label: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  primaryCTA: {
    label: string;
    href: string; // URL-encoded WhatsApp link
  };
  secondaryCTA: {
    label: string;
    href: string; // Internal section target (e.g., "#projects")
  };
  stats: Stat[];
}
```

## 2. Why Me (About) Content

**Path:** `src/data/personal.ts` (extended)

```typescript
export interface CredentialBadge {
  label: string;
  icon?: string; // Optional icon name reference
}

export interface WhyMeContent {
  headline: string;
  paragraphs: string[];
  badges: CredentialBadge[];
  photoSrc: string; // e.g., "/assets/images/hero-img.png"
}
```

## 3. Comparison Content

**Path:** `src/data/comparison.ts`

```typescript
export interface ComparisonColumn {
  text: string;
  isPositive: boolean; // Controls green check vs red cross icon styling
}

export interface ComparisonRow {
  aspect: string;
  freelancer: ComparisonColumn;
  withMe: ComparisonColumn;
}

export interface ComparisonData {
  title: string;
  subtitle: string;
  rows: ComparisonRow[];
  quote: {
    text: string;
    author: string;
  };
}
```

## 4. Services Content

**Path:** `src/data/services.ts`

```typescript
export interface Service {
  num: string; // e.g., "01", "02"
  title: string;
  description: string; // Business-focused outcomes (no tech jargon)
  tags: string[];      // Small tech tags (e.g., ["Next.js", "Supabase"])
  icon: string;        // SVG Icon identifier
}
```

## 5. Projects Content

**Path:** `src/data/projects.ts` (inherited & updated)

```typescript
export type ProjectStatus = "Live" | "In Development" | "Validation";

export interface Project {
  id: string;
  code: string;
  status: ProjectStatus;
  name: string;
  businessDescription: string; // Plain-business-language results
  techs: string[];
  link?: string;               // Optional live deployment link
}
```

## 6. How It Works (Methodology) Content

**Path:** `src/data/how-it-works.ts`

```typescript
export interface HowItWorksStep {
  num: string; // e.g., "01"
  title: string;
  description: string;
}

export interface HowItWorksData {
  title: string;
  subtitle: string;
  steps: HowItWorksStep[];
  cta: {
    label: string;
    href: string;
  };
}
```

## 7. FAQ Content

**Path:** `src/data/faq.ts`

```typescript
export interface FAQItem {
  question: string;
  answer: string;
}
```

## 8. Testimonials Content

**Path:** `src/data/testimonials.ts`

```typescript
export interface TestimonialCard {
  id: string;
  stars: number; // e.g., 5
  quote: string;
  tags: string[];
  projectName: string;
  date: string;
  platform: string; // e.g., "Mostaql", "Upwork"
}
```
