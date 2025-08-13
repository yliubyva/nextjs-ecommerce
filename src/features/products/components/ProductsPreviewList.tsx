"use client";
import { Product } from "@/features/products/types/product";
import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import { ProductsCarousel } from "@/features/products/components/ProductsCarousel";
import { Button } from "@/shared/ui/molecules/Button";
import { ProductCard } from "@/features/products/components/ProductCard";
import { useAppDispatch } from "@/lib/redux/redux-hooks";
import { sortProducts } from "@/features/products/store/productsSlice";
import { SortType } from "@/features/products/utils/product-sorts";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  productList: Product[];
  sortType: SortType;
};

export const ProductsPreviewList: React.FC<Props> = ({
  title,
  productList,
  sortType,
}) => {
  const width = useWindowWidth();
  const isMobile = width < 1240;

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(sortProducts(sortType));
    router.push("/shop");
  };

  const renderProductList = () => {
    if (isMobile) {
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
                    category={item.category.toLowerCase()}
                    productName={item.title}
                    image={item.colors[0].images[0]}
                    rating={item.rating}
                    price={item.price}
                    discount={item.discount}
                    isHeroPage
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
      <Button variant="secondary" label="View All" onClick={handleClick} />
    </div>
  );
};
