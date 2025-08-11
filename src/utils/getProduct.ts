import { Product } from "@/types/product";

export function getProduct(
  productId: string,
  products: Product[],
): Product | undefined {
  let matchingProduct: Product | undefined;

  products.forEach((product) => {
    if (productId === product.id) {
      matchingProduct = product;
    }
  });
  return matchingProduct;
}
