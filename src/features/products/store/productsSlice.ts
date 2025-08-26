import { Product } from "@/features/products/types/product";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SortType } from "@/features/products/utils/product-sorts";

type SelectGender = "all" | "men" | "women";

interface ProductState {
  all: Product[];
  searchQuery: string;
  selectedGender: SelectGender;
  sortOption: SortType;
  pagination: {
    currentPage: number;
    itemsPerPage: number;
  };
}

const initialState: ProductState = {
  all: [],
  searchQuery: "",
  selectedGender: "all",
  sortOption: "none",
  pagination: {
    currentPage: 1,
    itemsPerPage: 6,
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    initializeAllProducts(state, action: PayloadAction<Product[]>) {
      state.all = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload.toLowerCase();
      state.pagination.currentPage = 1;
    },
    setSelectedGender(state, action: PayloadAction<SelectGender>) {
      state.selectedGender = action.payload;
      state.pagination.currentPage = 1;
    },
    setItemsPerPage(state, action: PayloadAction<number>) {
      state.pagination.itemsPerPage = action.payload;
      state.pagination.currentPage = 1;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.pagination.currentPage = action.payload;
    },
    sortProducts(state, action: PayloadAction<SortType>) {
      state.sortOption = action.payload;
      state.pagination.currentPage = 1;
    },
  },
});

export const {
  initializeAllProducts,
  setSearchQuery,
  setSelectedGender,
  setItemsPerPage,
  setCurrentPage,
  sortProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
