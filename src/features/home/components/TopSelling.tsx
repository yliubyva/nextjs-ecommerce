import { ProductsPreviewList } from "@/features/products/components/ProductsPreviewList";
import { Container } from "@/shared/ui/atoms/Container";
import { Product } from "@/features/products/types/product";
import { sortByMostPopularity } from "@/features/products/utils/product-sorts";

type Props = {
  products: Product[];
};

export const TopSelling: React.FC<Props> = ({ products }) => {
  return (
    <section className="mb-[50px] xl:mb-[80px]">
      <Container>
        <ProductsPreviewList
          title="Top Selling"
          productList={sortByMostPopularity(products)}
          sortType="rating-desc"
        />
      </Container>
    </section>
  );
};
