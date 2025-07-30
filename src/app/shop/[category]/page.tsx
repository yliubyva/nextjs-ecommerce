import { Container } from "@/components/ui-kit/Container";
import { Product } from "@/types/product";
import { ShopClient } from "@/components/sections/shop/ShopClient";
import { extractFilterOptionsFromProducts } from "@/utils/extract-filter-options";
import StoreProvider from "@/app/StoreProvider";
import { filterByCategory } from "@/utils/product-filters";

type Params = {
  params: {
    category: string;
  };
};

export default async function ShopPage({ params }: Params) {
  const { category } = await params;
  const res = await fetch("http://localhost:3000/api/products/");
  const products: Product[] = await res.json();

  const filteredProductsByCategory = filterByCategory(products, category);

  const filtersAvalibaleOptions = extractFilterOptionsFromProducts(
    filteredProductsByCategory,
  );

  return (
    <Container>
      <StoreProvider
        products={filteredProductsByCategory}
        filterOptions={filtersAvalibaleOptions}
      >
        <ShopClient category={category} />
      </StoreProvider>
    </Container>
  );
}
