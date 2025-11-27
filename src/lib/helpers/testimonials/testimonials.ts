import testimonials from "./testimonials.json";

export type TestimonialsProps = {
  id: number;
  name: string;
  review: string;
  stars: string;
}

export const testimonialsMap = testimonials as TestimonialsProps[];