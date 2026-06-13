# Quickstart: Data-Driven Content Layer

## Prerequisites

- Node.js dependencies installed with `npm install`.
- Feature artifacts are under `specs/001-data-driven-content/`.

## Validation Steps

1. Confirm the active feature resolves:

   ```bash
   .specify/scripts/powershell/check-prerequisites.ps1 -Json -RequireTasks -IncludeTasks
   ```

2. Run the TypeScript check:

   ```bash
   npx tsc --noEmit
   ```

3. Run the application:

   ```bash
   npm run dev
   ```

4. Edit values in `src/data/personal.ts`, `src/data/projects.ts`, and `src/data/skills.ts`.

5. Confirm the browser reflects those changes through normal Next.js HMR without editing component files.

6. Confirm no legacy content constants remain:

   ```bash
   grep -rn "nav.constant\|^const [A-Z_]* = \[" src/features/ src/shared/
   ```

7. Run the production build:

   ```bash
   npm run build
   ```

## Expected Result

- `src/data/` contains the editable content source of truth.
- Components import data from `@/data/*`.
- `src/shared/constants/nav.constant.ts` is deleted.
- `npm run build` completes without TypeScript or Next.js errors.
