"use client";
import useEmblaCarousel from "embla-carousel-react";
import { Product } from "@/types/product";
import { ProductCard } from "../ui-kit/ProductCard";

type PropType = {
  slides: Product[];
};

export const ProductsCarousel: React.FC<PropType> = ({ slides }) => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
  });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="mb-[24px] flex gap-[16px]">
        {slides.map(
          (item, index) =>
            index < 4 && (
              <div
                key={index}
                className="flex w-full max-w-[200px] min-w-0 flex-[0_0_100%] md:max-w-[300px]"
              >
                <ProductCard
                  id={item.id}
                  category={item.category.toLowerCase()}
                  productName={item.title}
                  image={item.colors[0].images[0]}
                  rating={item.rating}
                  price={item.price}
                  discount={item.discount}
                />
              </div>
            ),
        )}
      </div>
    </div>
  );
};
