import { ProductDetailClient } from "@/components/sections/product-detail/ProductDetailClient";
import { Container } from "@/components/ui-kit/Container";
import { Product } from "@/types/product";
import { notFound } from "next/navigation";

type Params = {
  params: {
    id: string;
    category: string;
  };
};

export default async function ProductDetailPage({ params }: Params) {
  const { id, category } = await params;
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    cache: "no-store",
  });
  const product: Product = await res.json();

  if (product.category.toLowerCase() !== category) {
    return notFound();
  }

  return (
    <Container>
      <ProductDetailClient product={product} />
    </Container>
  );
}
