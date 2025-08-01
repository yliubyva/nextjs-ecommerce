import { AppThunk } from "../store";
import { resetFilters } from "./filtersSlice";
import { applyFilters, sortProducts } from "./productsSlice";

export const resetAndApplyFilters = (): AppThunk => (dispatch, getState) => {
  dispatch(resetFilters());

  const state = getState();
  const selected = state.filters.selected;
  const sortOption = state.products.sortOption;

  dispatch(applyFilters(selected));
  dispatch(sortProducts(sortOption));
};
