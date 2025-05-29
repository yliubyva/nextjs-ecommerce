"use client";
import { PreviewList } from "@/components/ui-kit/PreviewList";
import { Container } from "@/components/ui-kit/Container";
import { useProducts } from "@/hooks/useProducts";

export const TopSelling = () => {
  const { products } = useProducts();

  const sorted = [...products].sort((a, b) => b.popularity - a.popularity);

  return (
    <section className="mb-[50px] xl:mb-[80px]">
      <Container>
        <PreviewList title="Top Selling" productList={sorted} />
      </Container>
    </section>
  );
};
