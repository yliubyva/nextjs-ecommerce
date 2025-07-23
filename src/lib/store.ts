import { configureStore } from "@reduxjs/toolkit";
import FiltersReducer from "@/lib/features/filtersSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      filters: FiltersReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
