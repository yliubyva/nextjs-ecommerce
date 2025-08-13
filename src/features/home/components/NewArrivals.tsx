import { Product } from "@/features/products/types/product";
import { ProductsPreviewList } from "@/features/products/components/ProductsPreviewList";
import { Container } from "@/shared/ui/atoms/Container";
import { sortByDate } from "@/features/products/utils/product-sorts";

type Props = {
  products: Product[];
};

export const NewArrivals: React.FC<Props> = ({ products }) => {
  return (
    <section className="mb-[40px] xl:mb-[64px]">
      <Container>
        <ProductsPreviewList
          title="New Arrivals"
          productList={sortByDate(products)}
          sortType="newest"
        />
      </Container>
    </section>
  );
};
