# Ahmed El-Nahhas Portfolio

A modern Next.js portfolio website showcasing software engineering projects, skills, and expertise. Built with TypeScript, Tailwind CSS, and Feature-Based Architecture.

## 🚀 Features

- **Responsive Design** - Optimized for all screen sizes
- **RTL Support** - Full Arabic (RTL) language support
- **Dark Theme** - Beautiful dark mode with custom color scheme
- **Smooth Animations** - Intersection observer-based reveal animations
- **Feature-Based Architecture** - Clean, scalable code structure
- **TypeScript** - Full type safety
- **Tailwind CSS** - Utility-first styling

## 📁 Project Structure

```
portfolio/
├── public/
│   └── assets/
│       ├── fonts/
│       ├── icons/
│       └── images/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── features/
│   │   ├── hero/
│   │   ├── about/
│   │   ├── services/
│   │   ├── methodology/
│   │   ├── projects/
│   │   ├── skills/
│   │   ├── learning/
│   │   ├── now/
│   │   └── contact/
│   └── shared/
│       ├── components/
│       │   ├── navigation/
│       │   ├── footer/
│       │   └── section-header.tsx
│       ├── constants/
│       └── lib/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React 18** - UI library

## 📦 Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🔧 Building

To build for production:

```bash
npm run build
npm start
```

## 📝 Customization

### Update Navigation Links

Edit `src/shared/constants/nav.constant.ts`:

```typescript
export const NAV_LINKS = [
  { label: "من أنا", href: "#about" },
  // Add more links...
];
```

### Update Contact Information

Modify `src/shared/constants/nav.constant.ts`:

```typescript
export const CONTACT_EMAIL = "your-email@example.com";
export const PHONE = "your-phone";
export const LINKEDIN = "your-linkedin-url";
```

### Add Profile Image

Place your profile image in `public/assets/images/` and update `src/features/hero/components/hero-section.tsx`.

## 🎨 Color Customization

Edit `tailwind.config.ts` to modify the color scheme:

```typescript
colors: {
  bg: "#080809",
  "bg-2": "#0F0F11",
  // ... more colors
}
```

## 📄 License

© 2025 أحمد النحاس — All rights reserved

## 🤝 Contributing

Feel free to fork and customize this portfolio for your own use!

---

**Built with ❤️ using Next.js and Tailwind CSS**
