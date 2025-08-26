import { Product } from "@/features/products/types/product";
import { calculateDiscountedPrice } from "@/shared/utils/price";
import { FilterSelectedOptions } from "@/features/filters/store/filtersSlice";
import { firstLetterToUpperCase } from "@/shared/utils/string";

export function applyFilter(
  products: Product[],
  filters: FilterSelectedOptions,
) {
  return products.filter((product) => {
    const matchesType =
      filters.selectedTypes.length === 0 ||
      filters.selectedTypes.includes(product.type);

    const matchesColor =
      filters.selectedColors.length === 0 ||
      product.colors.some((color) =>
        filters.selectedColors.includes(color.name),
      );

    const matchesSize =
      filters.selectedSizes.length === 0 ||
      product.sizes.some((size) => filters.selectedSizes.includes(size));

    const price = product.discount
      ? calculateDiscountedPrice(product.price, product.discount)
      : product.price;

    const mathesPrice =
      !filters.selectedRangeValues ||
      (price >= filters.selectedRangeValues[0] &&
        price <= filters.selectedRangeValues[1]);

    return matchesType && matchesColor && matchesSize && mathesPrice;
  });
}

export function filterByCategory(products: Product[], category: string) {
  if (category === "all") return products;
  return products.filter(
    (product) => product.category === firstLetterToUpperCase(category),
  );
}
