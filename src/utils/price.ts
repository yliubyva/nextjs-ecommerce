import { Product } from "@/types/product";

export const calculateDiscountedPrice = (price: number, discount: number) => {
  return price - (price * discount) / 100;
};

export const formatPrice = (price: number) => {
  return `$${price.toFixed(2)}`;
};

export function getFinalPrice(product: Product): number {
  return product.discount
    ? calculateDiscountedPrice(product.price, product.discount)
    : product.price;
}
