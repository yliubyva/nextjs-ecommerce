import { Product } from "@/types/product";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FilterSelectedOptions } from "./filtersSlice";
import { applyFilter } from "@/utils/product-filters";

interface ProductState {
  all: Product[];
  filtered: Product[];
}

const initialState: ProductState = {
  all: [],
  filtered: [],
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
    },
  },
});

export const { initializeProducts, applyFilters } = productsSlice.actions;
export default productsSlice.reducer;
