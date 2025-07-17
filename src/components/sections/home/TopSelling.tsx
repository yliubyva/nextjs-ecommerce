import { PreviewList } from "@/components/ui-kit/PreviewList";
import { Container } from "@/components/ui-kit/Container";
import { Product } from "@/types/product";

export const TopSelling = async () => {
  const res = await fetch("http://localhost:3000/api/products/");
  const products: Product[] = await res.json();

  const sorted = [...products].sort((a, b) => b.popularity - a.popularity);

  return (
    <section className="mb-[50px] xl:mb-[80px]">
      <Container>
        <PreviewList title="Top Selling" productList={sorted} />
      </Container>
    </section>
  );
};
