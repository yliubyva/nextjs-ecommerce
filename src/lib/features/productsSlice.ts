import { Product } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FilterSelectedOptions } from "./filtersSlice";
import { applyFilter } from "@/utils/product-filters";

interface ProductState {
  all: Product[];
  filtered: Product[];
  pagination: {
    currentPage: number;
    itemsPerPage: number;
  };
}

const initialState: ProductState = {
  all: [],
  filtered: [],
  pagination: {
    currentPage: 1,
    itemsPerPage: 4,
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    initializeProducts(state, action: PayloadAction<Product[]>) {
      state.all = action.payload;
      state.filtered = action.payload;
    },
    applyFilters(state, action: PayloadAction<FilterSelectedOptions>) {
      state.filtered = applyFilter(state.all, action.payload);
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
  },
});

export const {
  initializeProducts,
  applyFilters,
  setItemsPerPage,
  setCurrentPage,
  goToPrevPage,
  goToNextPage,
} = productsSlice.actions;
export default productsSlice.reducer;
