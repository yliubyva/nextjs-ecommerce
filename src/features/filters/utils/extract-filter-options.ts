import { Product } from "@/features/products/types/product";
import { getFinalPrice } from "@/features/products/utils/product-helpers";

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
    return getFinalPrice(product);
  });

  return { min: Math.min(...prices), max: Math.max(...prices) };
}

export function extractFilterOptionsFromProducts(products: Product[]) {
  const priceRange = getPriceRange(products);
  const options = getUniqueOptions(products);

  return {
    ...options,
    priceRange,
  };
}
