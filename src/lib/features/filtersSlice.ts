import { ColorName } from "@/types/colors";
import { SizeName } from "@/types/sizes";
import { TypeClothesName } from "@/types/clothes";
import { toggleItem } from "@/utils/selection-utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterAvailableOptions {
  colors: ColorName[];
  sizes: SizeName[];
  types: TypeClothesName[];
  priceRange: {
    min: number;
    max: number;
  };
}

export interface FilterSelectedOptions {
  selectedColors: ColorName[];
  selectedSizes: SizeName[];
  selectedTypes: TypeClothesName[];
  selectedRangeValues: number[];
}

interface FilterState {
  available: FilterAvailableOptions;
  selected: FilterSelectedOptions;
}

const initialState: FilterState = {
  available: {
    colors: [],
    sizes: [],
    types: [],
    priceRange: {
      min: 0,
      max: 100,
    },
  },
  selected: {
    selectedColors: [],
    selectedSizes: [],
    selectedTypes: [],
    selectedRangeValues: [0, 100],
  },
};

const FiltersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    initializeAvailableOptions(
      state,
      action: PayloadAction<FilterAvailableOptions>,
    ) {
      state.available = action.payload;

      state.selected.selectedRangeValues = [
        state.available.priceRange.min,
        state.available.priceRange.max,
      ];
    },
    toggleColors(state, action: PayloadAction<ColorName>) {
      state.selected.selectedColors = toggleItem(
        state.selected.selectedColors,
        action.payload,
      );
    },
    toggleSizes(state, action: PayloadAction<SizeName>) {
      state.selected.selectedSizes = toggleItem(
        state.selected.selectedSizes,
        action.payload,
      );
    },
    toggleTypes(state, action: PayloadAction<TypeClothesName>) {
      state.selected.selectedTypes = toggleItem(
        state.selected.selectedTypes,
        action.payload,
      );
    },
    togglePriceRange(state, action: PayloadAction<number[]>) {
      state.selected.selectedRangeValues = action.payload;
    },
    resetFilters(state) {
      state.selected = {
        selectedColors: [],
        selectedSizes: [],
        selectedTypes: [],
        selectedRangeValues: [
          state.available.priceRange.min,
          state.available.priceRange.max,
        ],
      };
    },
  },
});

export const {
  initializeAvailableOptions,
  toggleColors,
  toggleSizes,
  toggleTypes,
  togglePriceRange,
  resetFilters,
} = FiltersSlice.actions;

export default FiltersSlice.reducer;
