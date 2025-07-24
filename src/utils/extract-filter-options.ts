import { Product } from "@/types/product";
import { filterByCategory } from "./product-filters";

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
  const max = products.reduce((acc, cur) => Math.max(acc, cur.price), 0);
  const min = products.reduce((acc, cur) => Math.min(acc, cur.price), max);

  return { min, max };
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
