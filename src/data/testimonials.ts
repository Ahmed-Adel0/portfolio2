export interface TestimonialCard {
  id: string;
  stars: number;
  quote: string;
  tags: string[];
  projectName: string;
  date: string;
  platform: string;
}

// Omitted/empty by default for MVP as per FR-003b.
// Add objects here to dynamically trigger Testimonials display on the page.
export const testimonialsData: TestimonialCard[] = [];
