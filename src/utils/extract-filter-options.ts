import { Product } from "@/types/product";
import { filterByCategory } from "./product-filters";
import { calculateDiscountedPrice } from "./price";

function getUniqueOptions(products: Product[]) {
  const types = [...new Set(products.map((p) => p.type))];
  const sizes = [...new Set(products.flatMap((p) => p.sizes))];
  const colors = [
    ...new Set(products.flatMap((p) => p.colors.map((c) => c.name))),
  ];

  return {
    colors,
    sizes,
    types,
  };
}

function getPriceRange(products: Product[]) {
  const prices: number[] = products.map((product) => {
    return product.discount
      ? calculateDiscountedPrice(product.price, product.discount)
      : product.price;
  });

  return { min: Math.min(...prices), max: Math.max(...prices) };
}

export function extractFilterOptionsFromProducts(
  products: Product[],
  category: string,
) {
  const filteredProductsByCategory = filterByCategory(products, category);
  const priceRange = getPriceRange(filteredProductsByCategory);
  const options = getUniqueOptions(filteredProductsByCategory);

  return {
    ...options,
    priceRange,
  };
}
