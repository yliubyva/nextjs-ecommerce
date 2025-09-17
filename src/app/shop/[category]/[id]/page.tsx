import { ProductDetailClient } from "@/features/product-detail/components/ProductDetailClient";
import { Container } from "@/shared/ui/atoms/Container";
import { Product } from "@/features/products/types/product";
import { notFound } from "next/navigation";
import { Stars } from "@/shared/ui/atoms/Stars";
import { Price } from "@/shared/ui/atoms/Price";
import { getAllProducts } from "@/lib/api/products";
import { ProductsPreviewList } from "@/features/products/components/ProductsPreviewList";
import { filterByCategory } from "@/features/products/utils/product-filters";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string; category: string }>;
}) {
  const { id, category } = await params;
  const res = await fetch(`${process.env.BASE_URL ?? ""}/api/products/${id}`, {
    cache: "no-store",
  });
  const product: Product = await res.json();

  if (product.category.toLowerCase() !== category) {
    return notFound();
  }

  const allProducts = await getAllProducts();
  const filteredByCategoryProducts = filterByCategory(allProducts, category);
  const alsoLikeProducts = filteredByCategoryProducts
    .filter((p) => {
      return p.type === product.type && p.id !== product.id;
    })
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <Container>
      <div className="mb-5 md:mb-16">
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
      </div>
      {alsoLikeProducts.length > 0 && (
        <ProductsPreviewList
          title="You might also like"
          productList={alsoLikeProducts}
          sortType="newest"
          category={category}
          filterOption={product.type}
        />
      )}
    </Container>
  );
}
