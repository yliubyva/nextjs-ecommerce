import { Product } from "@/features/products/types/product";
import { calculateDiscountedPrice } from "@/shared/utils/price";

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

export function getFinalPrice(product: Product): number {
  return product.discount
    ? calculateDiscountedPrice(product.price, product.discount)
    : product.price;
}
