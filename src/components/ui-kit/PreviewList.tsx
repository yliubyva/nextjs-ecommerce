"use client";
import { Product } from "@/types/product";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { ProductsCarousel } from "@/components/EmblaCarousel/ProductsCarousel";
import { Button } from "@/components/ui-kit/Button";
import {
  ProductCard,
  ProductCardSkeleton,
} from "@/components/ui-kit/ProductCard";

type Props = {
  title: string;
  productList: Product[];
  isLoading: boolean;
};

export const PreviewList: React.FC<Props> = ({
  title,
  productList,
  isLoading,
}) => {
  const width = useWindowWidth();
  const isMobile = width < 1240;

  const renderProductList = () => {
    if (isLoading) {
      return Array.from({ length: 4 }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ));
    } else if (isMobile) {
      return <ProductsCarousel slides={productList} />;
    } else {
      return (
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
      );
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-hubot mb-[32px] text-3xl font-black uppercase xl:mb-[55px] xl:text-5xl">
        {title}
      </h2>
      <div className="mb-[24px] flex w-full gap-[16px] self-start overflow-hidden sm:self-center xl:mb-[44px] xl:h-[415px]">
        {renderProductList()}
      </div>
      <Button variant="secondary" label="View All" href="/shop" />
    </div>
  );
};
