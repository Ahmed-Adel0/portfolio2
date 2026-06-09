# Quick Start Guide

## 1. Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 2. Update Your Information

### Navigation Links & Contact

**File:** `src/shared/constants/nav.constant.ts`

```typescript
export const CONTACT_EMAIL = "your-email@example.com";
export const PHONE = "your-phone-number";
export const LINKEDIN = "https://linkedin.com/in/your-profile";
```

### Content Updates

- **Hero Section:** `src/features/hero/components/hero-section.tsx`
- **About Section:** `src/features/about/components/about-section.tsx`
- **Services:** `src/features/services/components/services-section.tsx`
- **Projects:** `src/features/projects/components/projects-section.tsx`
- **Skills:** `src/features/skills/components/skills-section.tsx`
- **Learning:** `src/features/learning/components/learning-section.tsx`
- **Now Section:** `src/features/now/components/now-section.tsx`
- **Contact:** `src/features/contact/components/contact-section.tsx`

## 3. Add Images

Place images in `public/assets/images/` and reference them in your components:

```tsx
import Image from "next/image";

<Image
  src="/assets/images/your-image.jpg"
  alt="Description"
  width={400}
  height={300}
/>;
```

## 4. Customize Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  bg: "#080809",        // Primary background
  blue: "#1A6EFF",      // Primary accent
  text: "#EFEFED",      // Text color
  // Add/modify more colors...
}
```

## 5. Build for Production

```bash
npm run build
npm start
```

## 6. Deploy

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Other Platforms

- Netlify
- GitHub Pages
- AWS Amplify
- Firebase Hosting

See Next.js docs for deployment: https://nextjs.org/docs/deployment

## 7. Project Structure

```
src/
├── app/                    # Next.js app directory
├── features/               # Feature modules
│   ├── hero/
│   ├── about/
│   ├── services/
│   ├── projects/
│   └── ...
└── shared/                 # Global components & utilities
    ├── components/
    ├── constants/
    └── lib/
```

## 8. Key Files to Modify

| Task                | File                                                    |
| ------------------- | ------------------------------------------------------- |
| Change colors       | `tailwind.config.ts`                                    |
| Update contact info | `src/shared/constants/nav.constant.ts`                  |
| Modify navigation   | `src/shared/components/navigation/navigation.tsx`       |
| Update hero text    | `src/features/hero/components/hero-section.tsx`         |
| Add projects        | `src/features/projects/components/projects-section.tsx` |

## 9. Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Tips

- Use **`npm run dev`** during development
- Keep features self-contained and isolated
- Use **Shared** folder only for truly global code
- Follow naming conventions (e.g., `use-*` for hooks, `*.component.tsx` for components)
- Check `ARCHITECTURE.md` for detailed structure explanation

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs
