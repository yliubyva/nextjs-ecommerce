import { configureStore } from "@reduxjs/toolkit";
import FiltersReducer from "@/lib/features/filtersSlice";
import ProductsReducer from "@/lib/features/productsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: ProductsReducer,
      filters: FiltersReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
