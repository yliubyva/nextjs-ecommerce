import { PreviewList } from "@/components/ui-kit/PreviewList";
import { Container } from "@/components/ui-kit/Container";
import { Product } from "@/types/product";
import { sortByMostPopularity } from "@/utils/product-sorts";

type Props = {
  products: Product[];
};

export const TopSelling: React.FC<Props> = ({ products }) => {
  return (
    <section className="mb-[50px] xl:mb-[80px]">
      <Container>
        <PreviewList
          title="Top Selling"
          productList={sortByMostPopularity(products)}
          sortType="rating-desc"
        />
      </Container>
    </section>
  );
};
