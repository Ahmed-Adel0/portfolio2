# Research: Portfolio Redesign & Light Theme Migration

## 1. Light Theme Migration Strategy

### Decision
We will redefine the Tailwind theme tokens (`bg`, `bg-2`, `bg-3`, `bg-4`, `text`, `muted`, `border`, `border-2`) inside `tailwind.config.ts` to light theme values and set `color-scheme: light` in `src/app/globals.css`.

### Rationale
- **Seamless Transition:** The current components already use Tailwind tokens (like `bg-bg-2` for card backgrounds, `border-border` for borders, `text-text` for main text). Redefining these tokens in the config immediately migrates all sections to the light theme without requiring manual search-and-replace of hundreds of class names across components.
- **Maintainability:** Avoids polluting JSX files with conflicting `dark:` classes or hardcoded hex colors, adhering to Principle IV (Modularity) and Principle V (No Unnecessary Complexity).

### Alternatives Considered
1. **Tailwind Dark Mode Suffix (`dark:` classes):** Using `dark:` overrides (e.g. `bg-white dark:bg-black`). Rejected because the site must be 100% light theme (FR-027), so adding extra responsive selectors adds unnecessary bloat.
2. **CSS Custom Properties (CSS Variables):** Using `var(--color-bg)`. Rejected because Tailwind config maps cleanly to static hex strings, and we do not need dynamic runtime theme-switching.

---

## 2. Component Refactoring & Removal

### Decision
- **Removed Sections:** `learning`, `now`, `methodology` (standalone), and `skills` sections will be removed from `src/app/page.tsx` and their data files deprecated.
- **Why Me Section:** A new component `WhyMeSection.tsx` will be created under `src/features/why-me/` replacing the old `AboutSection.tsx`.
- **Comparison Section:** A new component `ComparisonSection.tsx` under `src/features/comparison/` will implement a vertical card layout on mobile and a standard table layout on desktop.

### Rationale
- Removes developer-centric/technical noise (like tech stacks, active learning, and personal updates) to center the visitor's experience around business results.

---

## 3. Communication Integration

### Decision
WhatsApp is the primary CTA (`https://wa.me/` link structure with phone number and pre-filled message URL-encoded).

### Rationale
- Reduces user friction, allowing instant contact. Avoids backend contact form API overhead or third-party service dependencies (Principle V).
