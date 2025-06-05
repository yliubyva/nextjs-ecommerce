"use client";

import { reviews } from "@/data/reviews";
import { ReviewsCarousel } from "@/components/EmblaCarousel/ReviewsCarousel";

export const OurHappyCustomers = () => {
  return (
    <section className="relative">
      <ReviewsCarousel title="Our happy customers" slides={reviews} />
    </section>
  );
};
