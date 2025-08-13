import { Product } from "@/features/products/types/product";
import { getFinalPrice } from "@/features/products/utils/product-helpers";

export type Direction = "desc" | "asc";

export function sortProductsByPrice(
  products: Product[],
  direction: Direction,
): Product[] {
  return [...products].sort((a, b) => {
    let finalPriceA = getFinalPrice(a);
    let finalPriceB = getFinalPrice(b);

    return direction === "desc"
      ? finalPriceB - finalPriceA
      : finalPriceA - finalPriceB;
  });
}

export function sortByMostPopularity(products: Product[]): Product[] {
  return [...products].sort((a, b) => b.popularity - a.popularity);
}

export function sortByDate(products: Product[]): Product[] {
  return [...products].sort((a, b) => {
    const dateA = new Date(a.arrivalDate).getTime();
    const dateB = new Date(b.arrivalDate).getTime();
    return dateB - dateA;
  });
}

export type SortType =
  | "price-asc"
  | "price-desc"
  | "rating-desc"
  | "newest"
  | "none";

export function doSort(products: Product[], sortOption: SortType): Product[] {
  switch (sortOption) {
    case "price-asc":
      return sortProductsByPrice(products, "asc");
    case "price-desc":
      return sortProductsByPrice(products, "desc");
    case "rating-desc":
      return sortByMostPopularity(products);
    case "newest":
      return sortByDate(products);
    default:
      return products;
  }
}
