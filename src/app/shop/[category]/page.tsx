import { Container } from "@/shared/ui/atoms/Container";
import { ShopClient } from "@/features/productCatalog/components/ShopClient";

type Params = {
  params: {
    category: "men" | "women";
  };
};

export default async function ShopPage({ params }: Params) {
  const { category } = await params;

  return (
    <Container>
      <ShopClient category={category} />
    </Container>
  );
}
