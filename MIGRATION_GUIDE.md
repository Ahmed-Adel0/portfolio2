# Migration Guide: HTML to Next.js

This guide explains how your original `portfolio.html` was converted to a Next.js project.

## Original Structure

Your original portfolio was a **single HTML file** containing:

- HTML structure
- Embedded CSS (styled with CSS custom properties)
- Inline JavaScript (Intersection Observer, scroll events)
- All content in one place

**Original file:** `d:\projects\my portfolio\portfolio.html`

## New Structure

The project has been reorganized into a **Feature-Based Architecture**:

### 1. **Styling Changes**

**Before:** Inline `<style>` tag
**After:**

- Global styles → `src/app/globals.css`
- Tailwind CSS → `tailwind.config.ts`
- Component-scoped styles → Tailwind classes

### 2. **Content Organization**

**Before:** Everything in one file
**After:** Organized by features

| Section     | Component            | Location                            |
| ----------- | -------------------- | ----------------------------------- |
| Navigation  | `Navigation`         | `src/shared/components/navigation/` |
| Hero        | `HeroSection`        | `src/features/hero/`                |
| About       | `AboutSection`       | `src/features/about/`               |
| Services    | `ServicesSection`    | `src/features/services/`            |
| Methodology | `MethodologySection` | `src/features/methodology/`         |
| Projects    | `ProjectsSection`    | `src/features/projects/`            |
| Skills      | `SkillsSection`      | `src/features/skills/`              |
| Learning    | `LearningSection`    | `src/features/learning/`            |
| Now         | `NowSection`         | `src/features/now/`                 |
| Contact     | `ContactSection`     | `src/features/contact/`             |
| Footer      | `Footer`             | `src/shared/components/footer/`     |

### 3. **JavaScript Changes**

**Before:**

```javascript
// Vanilla JS in <script> tag
const observer = new IntersectionObserver(...);
```

**After:**

```typescript
// React hooks in component
useEffect(() => {
  const observer = new IntersectionObserver(...);
}, []);
```

### 4. **Content Data**

Data that was hardcoded in HTML is now organized:

- **Navigation links** → `src/shared/constants/nav.constant.ts`
- **Contact info** → `src/shared/constants/nav.constant.ts`
- **Project data** → Inside component files
- **Skills data** → Inside component files

## Detailed Mapping

### Hero Section

**Before (HTML):**

```html
<div class="hero">
  <div class="hero-content">
    <h1 class="hero-name">أحمد<br /><span>النحاس</span></h1>
    <!-- ... more content -->
  </div>
  <div class="hero-photo">
    <!-- ... -->
  </div>
</div>
```

**After (React/TypeScript):**

```typescript
// src/features/hero/components/hero-section.tsx
export function HeroSection() {
  return (
    <div className="grid grid-cols-[1fr_400px] min-h-screen...">
      {/* Left content */}
      {/* Right photo */}
    </div>
  );
}
```

### Styling Example

**Before:**

```css
.hero {
  display: grid;
  grid-template-columns: 1fr 400px;
  min-height: 100vh;
  padding-top: 57px;
  border-bottom: 1px solid var(--border);
}
```

**After:**

```typescript
<div className="grid grid-cols-[1fr_400px] min-h-screen pt-14 border-b border-border">
```

## Color Theme Migration

**Original:** CSS custom properties

```css
--bg: #080809 --text: #efefed --blue: #1a6eff;
```

**New:** Tailwind config

```typescript
// tailwind.config.ts
colors: {
  bg: "#080809",
  text: "#EFEFED",
  blue: "#1A6EFF",
  // ...
}
```

## Data Migration

### Navigation Links

**Before:**

```html
<a href="#about">من أنا</a> <a href="#what">ماذا أفعل</a>
```

**After:**

```typescript
// src/shared/constants/nav.constant.ts
export const NAV_LINKS = [
  { label: "من أنا", href: "#about" },
  { label: "ماذا أفعل", href: "#what" },
];
```

### Projects

**Before:** HTML markup with data mixed in
**After:** JavaScript objects in component

```typescript
// src/features/projects/components/projects-section.tsx
const PROJECTS = [
  {
    id: 1,
    code: "MED+",
    role: "Team Lead · Frontend Engineer",
    // ... more fields
  },
];
```

## Animation Migration

**Before:**

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
});
```

**After:**

```typescript
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.08 },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);
```

## File Size & Performance

| Metric          | Before      | After                 |
| --------------- | ----------- | --------------------- |
| File Size       | ~40 KB      | ~5 KB (per component) |
| Build Output    | Single HTML | Optimized bundles     |
| Initial Load    | Single file | Code splitting        |
| Type Safety     | None        | Full TypeScript       |
| Maintainability | Limited     | Highly modular        |

## How to Update Content

### Update Hero Section

**File:** `src/features/hero/components/hero-section.tsx`

- Change name, title, bio
- Update stats
- Modify buttons and links

### Update Projects

**File:** `src/features/projects/components/projects-section.tsx`

- Edit `PROJECTS` array
- Update `VENTURE` object
- Modify descriptions and results

### Update Skills

**File:** `src/features/skills/components/skills-section.tsx`

- Edit `SKILL_GROUPS` array
- Add/remove skills
- Mark core skills with `core: true`

### Update Contact

**File:** `src/features/contact/components/contact-section.tsx`

- Change email
- Update phone
- Modify social links

## Deployment

### Old Way

Upload `portfolio.html` to any web host

### New Way

Three options:

1. **Vercel (Recommended)**

   ```bash
   npm i -g vercel
   vercel
   ```

2. **Static Export**

   ```bash
   npm run build
   npm run export  # Creates static HTML
   ```

3. **Traditional Hosting**
   Deploy `out/` folder to any static host

## Benefits of Migration

✅ **Scalability** - Easy to add features
✅ **Maintainability** - Organized code
✅ **Type Safety** - TypeScript
✅ **Performance** - Code splitting
✅ **Developer Experience** - Better tooling
✅ **SEO** - Better metadata handling
✅ **Reusability** - Component-based
✅ **Testing** - Easier to test

## Potential Issues & Solutions

### Issue: "Module not found"

**Solution:** Check import paths use `@/` aliases

### Issue: Styling not applied

**Solution:** Ensure `globals.css` is imported in `layout.tsx`

### Issue: Images not loading

**Solution:** Place images in `public/assets/` and use relative paths

### Issue: RTL not working

**Solution:** Check `html` tag has `dir="rtl"` or set in layout

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Run dev server: `npm run dev`
3. ✅ Update content in components
4. ✅ Add your profile image
5. ✅ Test all sections
6. ✅ Build: `npm run build`
7. ✅ Deploy to production

## Quick Reference

| Task           | File                                   |
| -------------- | -------------------------------------- |
| Change colors  | `tailwind.config.ts`                   |
| Update contact | `src/shared/constants/nav.constant.ts` |
| Edit hero      | `src/features/hero/`                   |
| Edit projects  | `src/features/projects/`               |
| Edit skills    | `src/features/skills/`                 |
| Add images     | `public/assets/images/`                |
| Change fonts   | `src/app/layout.tsx`                   |

---

**Need help?** Check `QUICKSTART.md` or `ARCHITECTURE.md`
