import { Container } from "@/components/ui-kit/Container";
import { Product } from "@/types/product";

type Params = {
  params: {
    category: string;
  };
};

export default async function ShopPage({ params }: Params) {
  const { category } = await params;
  const res = await fetch("http://localhost:3000/api/products/");
  const products: Product[] = await res.json();

  console.log(products);
  return (
    <Container>
      <p>{category}</p>
    </Container>
  );
}
