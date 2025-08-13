import { reviews } from "@/data/reviews";
import { ReviewsCarousel } from "@/features/home/components/ReviewsCarousel";

export const OurHappyCustomers = () => {
  return (
    <section className="relative">
      <ReviewsCarousel title="Our happy customers" slides={reviews} />
    </section>
  );
};
