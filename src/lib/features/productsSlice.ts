import { Product } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FilterSelectedOptions } from "./filtersSlice";
import { applyFilter } from "@/utils/product-filters";
import { doSort, SortType } from "@/utils/product-sorts";

interface ProductState {
  all: Product[];
  filteredByCategory: Product[];
  filtered: Product[];
  pagination: {
    currentPage: number;
    itemsPerPage: number;
  };
  sortOption: SortType;
}

const initialState: ProductState = {
  all: [],
  filteredByCategory: [],
  filtered: [],
  pagination: {
    currentPage: 1,
    itemsPerPage: 6,
  },
  sortOption: "none",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    initializeAllProducts(state, action: PayloadAction<Product[]>) {
      state.all = action.payload;
    },
    initializeFilteredProducts(state, action: PayloadAction<Product[]>) {
      state.filteredByCategory = action.payload;
      state.filtered = action.payload;
    },
    applyFilters(state, action: PayloadAction<FilterSelectedOptions>) {
      state.filtered = applyFilter(state.filteredByCategory, action.payload);
      if (state.sortOption) {
        state.filtered = doSort(state.filtered, state.sortOption);
      }
      state.pagination.currentPage = 1;
    },
    setItemsPerPage(state, action: PayloadAction<number>) {
      state.pagination.itemsPerPage = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.pagination.currentPage = action.payload;
    },
    goToPrevPage(state) {
      if (state.pagination.currentPage > 1) {
        state.pagination.currentPage = state.pagination.currentPage - 1;
      }
    },
    goToNextPage(state) {
      if (
        state.pagination.currentPage <
        Math.ceil(state.filtered.length / state.pagination.itemsPerPage)
      ) {
        state.pagination.currentPage = state.pagination.currentPage + 1;
      }
    },
    sortProducts(state, action: PayloadAction<SortType>) {
      state.sortOption = action.payload;
      state.filtered = doSort(state.filtered, action.payload);
      state.pagination.currentPage = 1;
    },
  },
});

export const {
  initializeAllProducts,
  initializeFilteredProducts,
  applyFilters,
  setItemsPerPage,
  setCurrentPage,
  goToPrevPage,
  goToNextPage,
  sortProducts,
} = productsSlice.actions;
export default productsSlice.reducer;
