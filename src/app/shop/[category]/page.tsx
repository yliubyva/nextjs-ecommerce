import { Container } from "@/components/ui-kit/Container";
import { ShopClient } from "@/components/sections/shop/ShopClient";
import { filterByCategory } from "@/utils/product-filters";
import { getAllProducts } from "@/lib/api/products";

type Params = {
  params: {
    category: string;
  };
};

export default async function ShopPage({ params }: Params) {
  const { category } = await params;
  const allProducts = await getAllProducts();

  const filteredProductsByCategory = filterByCategory(allProducts, category);

  return (
    <Container>
      <ShopClient
        category={category}
        filteredProducts={filteredProductsByCategory}
      />
    </Container>
  );
}
