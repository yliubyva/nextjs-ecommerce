"use client";
import { Product } from "@/types/product";
import { PreviewList } from "@/components/ui-kit/PreviewList";
import { Container } from "@/components/ui-kit/Container";
import { useProducts } from "@/hooks/useProducts";

export const NewArrivals = () => {
  const { products, isLoading } = useProducts();

  const sortByDate = (products: Product[]): Product[] => {
    const productsWithDate = products.map((p) => ({
      ...p,
      arrivalDate: new Date(p.arrivalDate),
    }));

    return productsWithDate.sort(
      (a, b) => b.arrivalDate.getTime() - a.arrivalDate.getTime(),
    );
  };

  return (
    <section className="mb-[40px] xl:mb-[64px]">
      <Container>
        <PreviewList
          title="New Arrivals"
          productList={sortByDate(products)}
          isLoading={isLoading}
        />
      </Container>
    </section>
  );
};
