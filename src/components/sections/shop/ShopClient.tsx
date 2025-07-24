"use client";
import { useState } from "react";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { Filters } from "@/components/ui-kit/Filters";
import { ProductCard } from "@/components/ui-kit/ProductCard";
import { firstLetterToUpperCase } from "@/utils/string";
import FilterIcon from "@public/icons/icon-filters.svg";
import { useAppSelector } from "@/lib/hooks";
import { filterByCategory } from "@/utils/product-filters";

type Props = {
  category: string;
};

export const ShopClient: React.FC<Props> = ({ category }) => {
  const width = useWindowWidth();
  const isMobile = width !== null && 768 > width;

  const [isOpenFilters, setIsOpenFilters] = useState(() => {
    return !isMobile;
  });

  const products = useAppSelector((state) => state.products.filtered);
  const filteredProductsByCategory = filterByCategory(products, category);

  return (
    <>
      <div className="md:flex md:gap-[20px]">
        <div className="md:w-full md:max-w-[295px]">
          <Filters
            isOpen={isOpenFilters}
            onClose={() => setIsOpenFilters(false)}
            isMobile={isMobile}
          />
        </div>
        <div className="grid w-full grid-cols-1 grid-rows-[32px_1fr_57px] gap-[25px] md:grid-rows-[44px_1fr_60px]">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-normal">
              {firstLetterToUpperCase(category)}
            </h1>
            <button
              className="cursor-pointer rounded-full bg-(--color-category-background) p-[8px] md:hidden"
              onClick={() => setIsOpenFilters(true)}
            >
              <FilterIcon className="h-[16px] w-[16px]" />
            </button>
          </div>
          <div className="xl:grid-rows-[300px, 300px] grid h-fit grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-x-[14px] gap-y-[24px] xl:grid-cols-3">
            {filteredProductsByCategory.map((product) => {
              return (
                <div
                  key={product.id}
                  className="h-fit xl:h-[425px] xl:w-[295px]"
                >
                  <ProductCard
                    id={product.id}
                    category={product.category.toLowerCase()}
                    productName={product.title}
                    image={product.colors[0].images[0]}
                    rating={product.rating}
                    price={product.price}
                    discount={product.discount}
                    isHeroPage={false}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
