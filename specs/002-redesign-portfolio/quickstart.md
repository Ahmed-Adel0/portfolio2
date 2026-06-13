# Quickstart & Validation Guide

This guide details the validation steps to verify that the portfolio redesign matches the specifications and design goals.

## Prerequisites

- Node.js (v18 or higher)
- npm (v10 or higher)
- A modern web browser with developer tools (Chrome, Safari, Firefox, or Edge)

## Setup and Commands

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Dev Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

3. **Verify Production Build:**
   ```bash
   npm run build
   ```

4. **Linting Check:**
   ```bash
   npm run lint
   ```

---

## Validation Scenarios

### Scenario 1: Light Theme Migration Verification
- **Test:** Open the site in a web browser. Inspect the background and cards.
- **Expected Outcome:** 
  - Main body background must be a very light cream `#F9F9F7` or white `#FFFFFF`.
  - No dark background `#080809` or dark text `#EFEFED` should remain.
  - Text must be dark `#0D0D0D` and subtexts gray `#6B7280` with clear contrast.

### Scenario 2: Primary WhatsApp CTA Verification
- **Test:** Locate the primary CTA button in the Hero section or sticky Navigation. Click the button.
- **Expected Outcome:**
  - The link must open a new tab targeting `https://wa.me/201554463626?text=...`.
  - The `text` query parameter must decode to: `"مرحباً أحمد، أود الاستفسار عن تفاصيل العمل على مشروعي."`

### Scenario 3: Mobile Stacked Comparison Table
- **Test:** Resize the browser window to mobile width (<768px) or inspect using mobile device simulator (e.g., iPhone 12/13).
- **Expected Outcome:**
  - The comparison section must not show horizontal scrolling.
  - The table must transform into a vertical layout where each comparison aspect is stacked.

### Scenario 4: Testimonials Dynamic Toggle
- **Test:** Open `src/data/testimonials.ts` and set the exported array to empty (`export const testimonials: TestimonialCard[] = [];`). Reload the page.
- **Expected Outcome:**
  - The Testimonials section must not render.
  - There should be no empty space, missing headers, or console errors.
  - Restore the data to verify it shows up again when elements are present.

### Scenario 5: Business-Oriented Content Validation
- **Test:** Search the codebase or use browser Find (`Ctrl+F` or `Cmd+F`) to scan H1, H2, and Services descriptions.
- **Expected Outcome:**
  - No technical jargon (e.g., "Next.js", "Supabase", "CRUD", "REST API") in H1/H2 headings.
  - The Cairo font must render correctly.
