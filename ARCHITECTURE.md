# Feature-Based Architecture

This portfolio uses a **Feature-Based Architecture** that organizes code by features rather than by layer (like controllers, services, etc.). This approach improves scalability and maintainability.

## Architecture Overview

### `/public`

Contains all static assets served at the root URL path.

```
public/
└── assets/
    ├── fonts/       # Font files (ttf, woff, etc.)
    ├── icons/       # SVG and PNG icons
    └── images/      # JPG, PNG, WebP images
```

### `/src` - Main Application Code

#### `/app` - Next.js App Router

The root application directory following Next.js conventions.

- `layout.tsx` - Root layout, wraps all pages
- `page.tsx` - Home page component
- `globals.css` - Global styles

#### `/features` - Feature Modules

Each feature is self-contained and includes all related code.

**Feature Structure:**

```
features/
├── <feature-name>/
│   ├── components/          # Feature-specific components
│   │   └── <name>.tsx
│   ├── hooks/               # Feature-specific hooks
│   │   └── use-<name>.ts
│   ├── lib/                 # Utilities and services
│   │   ├── <name>.util.ts
│   │   └── <name>.service.ts
│   ├── constants/           # Feature constants
│   │   └── <name>.constant.ts
│   ├── types/               # Feature types/interfaces
│   │   └── <name>.d.ts
│   └── actions/             # Server actions
│       └── <name>.action.ts
```

**Current Features:**

- `hero/` - Hero section with intro
- `about/` - About me section with journey
- `services/` - What I do section
- `methodology/` - How I think section
- `projects/` - Projects showcase
- `skills/` - Skills section
- `learning/` - Learning journey
- `now/` - Current activities
- `contact/` - Contact section

#### `/shared` - Global/Shared Code

Code used across multiple features goes here.

```
shared/
├── components/              # Global components
│   ├── navigation/
│   │   └── navigation.tsx
│   ├── footer/
│   │   └── footer.tsx
│   └── section-header.tsx
├── hooks/                   # Global custom hooks
│   └── use-<name>.ts
├── lib/                     # Global utilities
│   ├── cn.ts
│   └── <name>.util.ts
├── constants/               # Global constants
│   ├── nav.constant.ts
│   └── <name>.constant.ts
├── types/                   # Global types
│   └── <name>.d.ts
├── services/                # API services
│   └── <name>.service.ts
└── actions/                 # Global server actions
    └── <name>.action.ts
```

## Benefits

✅ **Scalability** - Easy to add new features without affecting existing code
✅ **Maintainability** - All feature-related code is in one place
✅ **Reusability** - Shared components/utilities are clearly separated
✅ **Organization** - Clear folder structure and conventions
✅ **Testing** - Easy to unit test isolated features
✅ **Collaboration** - Multiple developers can work on features independently

## File Naming Conventions

| File Type        | Convention                   | Example            |
| ---------------- | ---------------------------- | ------------------ |
| Components       | PascalCase                   | `HeroSection.tsx`  |
| Hooks            | camelCase with `use` prefix  | `use-scroll.ts`    |
| Utils            | camelCase with suffix        | `cn.util.ts`       |
| Services         | camelCase with suffix        | `api.service.ts`   |
| Constants        | UPPER_SNAKE_CASE with suffix | `nav.constant.ts`  |
| Types/Interfaces | PascalCase with `.d.ts`      | `hero.d.ts`        |
| Server Actions   | camelCase with suffix        | `submit.action.ts` |

## Import Paths

This project uses path aliases defined in `tsconfig.json`:

```typescript
// Instead of:
import { something } from "../../../shared/lib/something";

// Use:
import { something } from "@/shared/lib/something";
import { something } from "@/features/hero/components/something";
```

## Adding a New Feature

1. Create a new folder in `/src/features/<feature-name>`
2. Add `components/` subdirectory
3. Create your feature components
4. If needed, add `lib/`, `hooks/`, `constants/`, `types/` subdirectories
5. Import and use in the main page or other features
6. Update `README.md` with feature documentation

Example:

```
features/
└── blog/
    ├── components/
    │   ├── blog-post.tsx
    │   ├── blog-list.tsx
    │   └── blog-card.tsx
    ├── hooks/
    │   └── use-blog-posts.ts
    ├── lib/
    │   └── blog.service.ts
    └── constants/
        └── blog.constant.ts
```

## Best Practices

1. **Keep features focused** - One feature = one responsibility
2. **Avoid feature coupling** - Features shouldn't import from other features
3. **Use shared for truly global code** - Only code used by multiple features
4. **Follow naming conventions** - Consistent naming makes code easier to find
5. **Co-locate related code** - Keep related files close together
6. **Export from index files** - Create index files for cleaner imports (optional)

---

For more information on Next.js App Router, visit: https://nextjs.org/docs/app
