import { ProductDetailClient } from "@/features/product-detail/components/ProductDetailClient";
import { Container } from "@/shared/ui/atoms/Container";
import { Product } from "@/features/products/types/product";
import { notFound } from "next/navigation";
import { Stars } from "@/shared/ui/atoms/Stars";
import { Price } from "@/shared/ui/atoms/Price";

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
      <ProductDetailClient product={product}>
        <div className="mb-[24px]">
          <div className="mb-[20px] flex flex-col gap-[12px]">
            <h1 className="font-hubot text-2xl font-black uppercase xl:w-[600px] xl:text-4xl">
              {product.title}
            </h1>
            <Stars rating={product.rating} showNum />
            <Price price={product.price} discount={product.discount} />
          </div>
          <p className="text-sm text-(--color-text-primary) xl:text-base">
            {product.description}
          </p>
        </div>
      </ProductDetailClient>
    </Container>
  );
}
