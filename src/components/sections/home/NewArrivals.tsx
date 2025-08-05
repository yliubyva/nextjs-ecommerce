import { Product } from "@/types/product";
import { PreviewList } from "@/components/ui-kit/PreviewList";
import { Container } from "@/components/ui-kit/Container";
import { sortByDate } from "@/utils/product-sorts";

type Props = {
  products: Product[];
};

export const NewArrivals: React.FC<Props> = ({ products }) => {
  return (
    <section className="mb-[40px] xl:mb-[64px]">
      <Container>
        <PreviewList
          title="New Arrivals"
          productList={sortByDate(products)}
          sortType="newest"
        />
      </Container>
    </section>
  );
};
