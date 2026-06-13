# Data Schema Contracts

Since this portfolio is a static Next.js frontend application without a custom backend API, the "contracts" consist of internal interfaces between the data layer (`src/data/`) and the UI components consuming them.

## Content Integrity Principles

1. **No JSX in Data Files:** Data files must contain only raw values (strings, arrays, numbers, booleans) and must not import React or Next.js components.
2. **Nullable Links:** Project links (`link`) must be optional. UI components must check for the presence of the link and gracefully omit the "View Project" button if it is undefined (rather than breaking or showing dead links).
3. **Arabic-First String Validation:** All text content (titles, descriptions, questions, answers) must be written in Arabic. Technical terms in tags can remain in English.
4. **WhatsApp URL Structure:** The primary CTA URL must strictly follow the format:
   `https://wa.me/{phone_number}?text={url_encoded_message}`
   The phone number must match the format `201554463626` (Egyptian country code `20` + number without leading `0`).
5. **Dynamic Testimonials Toggle:** If `testimonials` data array exported from `src/data/testimonials.ts` is empty (length is 0), the component must completely omit rendering the section markup, avoiding empty placeholder blocks.
