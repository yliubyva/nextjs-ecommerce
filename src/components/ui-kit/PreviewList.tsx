"use client";
import { Product } from "@/types/product";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { ProductsCarousel } from "@/components/EmblaCarousel/ProductsCarousel";
import { Button } from "@/components/ui-kit/Button";
import { ProductCard } from "@/components/ui-kit/ProductCard";

type Props = {
  title: string;
  productList: Product[];
};

export const PreviewList: React.FC<Props> = ({ title, productList }) => {
  const width = useWindowWidth();
  const isMobile = width < 1240;

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-hubot mb-[32px] text-3xl font-black uppercase xl:mb-[55px] xl:text-5xl">
        {title}
      </h2>
      <div className="mb-[24px] flex w-full gap-[16px] self-start overflow-hidden sm:self-center xl:mb-[44px] xl:h-[415px]">
        {isMobile ? (
          <ProductsCarousel slides={productList} />
        ) : (
          <div className="flex gap-[16px]">
            {productList.map(
              (item, index) =>
                index < 4 && (
                  <div
                    key={index}
                    className="flex w-full max-w-[300px] min-w-0 flex-[0_0_100%]"
                  >
                    <ProductCard
                      id={item.id}
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
        )}
      </div>
      <Button
        isPrimaryButton={false}
        label="View All"
        onClick={() => alert("click all view")}
      />
    </div>
  );
};
