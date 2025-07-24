import { Container } from "@/components/ui-kit/Container";
import { Product } from "@/types/product";
import { ShopClient } from "@/components/sections/shop/ShopClient";
import { extractFilterOptionsFromProducts } from "@/utils/extract-filter-options";
import StoreProvider from "@/app/StoreProvider";

type Params = {
  params: {
    category: string;
  };
};

export default async function ShopPage({ params }: Params) {
  const { category } = await params;
  const res = await fetch("http://localhost:3000/api/products/");
  const products: Product[] = await res.json();

  const filtersAvalibaleOptions = extractFilterOptionsFromProducts(
    products,
    category,
  );

  return (
    <Container>
      <StoreProvider
        products={products}
        filterOptions={filtersAvalibaleOptions}
      >
        <ShopClient category={category} />
      </StoreProvider>
    </Container>
  );
}
