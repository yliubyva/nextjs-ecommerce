import { Container } from "@/components/ui-kit/Container";
import { Product } from "@/types/product";
import { firstLetterToUpperCase } from "@/utils/string";
import { ShopClient } from "@/components/sections/shop/ShopClient";

type Params = {
  params: {
    category: string;
  };
};

export default async function ShopPage({ params }: Params) {
  const { category } = await params;
  const res = await fetch("http://localhost:3000/api/products/");
  const products: Product[] = await res.json();

  const filteredProducts = products.filter(
    (product) => product.category === firstLetterToUpperCase(category),
  );

  return (
    <Container>
      <ShopClient category={category} products={filteredProducts} />
    </Container>
  );
}
