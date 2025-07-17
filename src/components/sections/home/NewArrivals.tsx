import { Product } from "@/types/product";
import { PreviewList } from "@/components/ui-kit/PreviewList";
import { Container } from "@/components/ui-kit/Container";

export const NewArrivals = async () => {
  const res = await fetch("http://localhost:3000/api/products/");
  const products: Product[] = await res.json();

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
        <PreviewList title="New Arrivals" productList={sortByDate(products)} />
      </Container>
    </section>
  );
};
