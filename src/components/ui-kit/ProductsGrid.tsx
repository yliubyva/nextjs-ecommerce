import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

type Props = {
  products: Product[];
};

export const ProductsGrid: React.FC<Props> = ({ products }) => {
  return (
    <div className="xl:grid-rows-[300px, 300px] grid h-fit grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-x-[14px] gap-y-[24px] xl:grid-cols-3">
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((product) => {
          return (
            <div key={product.id} className="h-fit xl:h-[425px] xl:w-[295px]">
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
        })
      )}
    </div>
  );
};
