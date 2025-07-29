import { AppThunk } from "../store";
import { resetFilters } from "./filtersSlice";
import { applyFilters } from "./productsSlice";

export const resetAndApplyFilters = (): AppThunk => (dispatch, getState) => {
  dispatch(resetFilters());

  const state = getState();
  const selected = state.filters.selected;

  dispatch(applyFilters(selected));
};
