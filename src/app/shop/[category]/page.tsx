import { Container } from "@/shared/ui/atoms/Container";
import { ShopClient } from "@/features/productCatalog/components/ShopClient";

export default async function ShopPage({
  params,
}: {
  params: Promise<{ category: "men" | "women" }>;
}) {
  const { category } = await params;

  return (
    <Container>
      <ShopClient category={category} />
    </Container>
  );
}
