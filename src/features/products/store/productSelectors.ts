import { createSelector } from "@reduxjs/toolkit";
import { applyFilter } from "../utils/product-filters";
import { RootState } from "@/lib/redux/store";
import { doSort } from "../utils/product-sorts";

const selectAllProducts = (state: RootState) => state.products.all;
const selectSearchQuery = (state: RootState) => state.products.searchQuery;
const selectSelectedGender = (state: RootState) =>
  state.products.selectedGender;
const selectSortOption = (state: RootState) => state.products.sortOption;
const selectFilterOptions = (state: RootState) => state.filters.selected;
const selectPaginationOptions = (state: RootState) => state.products.pagination;

const selectProductsByGender = createSelector(
  [selectAllProducts, selectSelectedGender],
  (products, selectedGender) => {
    if (selectedGender === "all") {
      return products;
    }
    return products.filter(
      (product) => product.category.toLowerCase() === selectedGender,
    );
  },
);

export const selectProductsBySearchQuery = createSelector(
  [selectProductsByGender, selectSearchQuery],
  (products, searchQuery) => {
    const words = searchQuery.toLowerCase().split(" ").filter(Boolean);

    return products.filter((product) =>
      words.every(
        (word) =>
          product.title.toLowerCase().includes(word) ||
          product.colors.some((color) =>
            color.name.toLowerCase().includes(word),
          ),
      ),
    );
  },
);

export const selectFilteredProducts = createSelector(
  [selectProductsBySearchQuery, selectFilterOptions],
  (products, filterOptions) => {
    return applyFilter(products, filterOptions);
  },
);

export const selectSortedProducts = createSelector(
  [selectFilteredProducts, selectSortOption],
  (products, sortOption) => {
    return doSort(products, sortOption);
  },
);

export const selectPaginatedProducts = createSelector(
  [selectSortedProducts, selectPaginationOptions],
  (products, pagination) => {
    const { currentPage, itemsPerPage } = pagination;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return products.slice(startIndex, endIndex);
  },
);

export const selectTotalFilteredProducts = createSelector(
  selectSortedProducts,
  (products) => products.length,
);

export const selectSearchSuggestion = createSelector(
  [selectProductsByGender, selectSearchQuery],
  (products, searchQuery) => {
    if (!searchQuery) return [];

    const lowerCaseQuery = searchQuery.toLowerCase();
    const filteredProducts = products.filter((product) => {
      return (
        product.title.toLowerCase().includes(lowerCaseQuery) ||
        product.colors.some((color) =>
          color.name.toLowerCase().includes(lowerCaseQuery),
        )
      );
    });

    const uniqueTitles = Array.from(
      new Set(filteredProducts.map((product) => product.title)),
    );

    return uniqueTitles.slice(0, 10);
  },
);
