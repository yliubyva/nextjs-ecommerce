import { Container } from "@/shared/ui/atoms/Container";
import { ShopClient } from "@/features/shop/components/ShopClient";
import { filterByCategory } from "@/features/products/utils/product-filters";
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
