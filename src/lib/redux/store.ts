import { configureStore } from "@reduxjs/toolkit";
import FiltersReducer from "@/features/filters/store/filtersSlice";
import ProductsReducer from "@/features/products/store/productsSlice";
import CartReducer from "@/features/cart/store/cartSlice";
import { ThunkAction, UnknownAction } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: ProductsReducer,
      filters: FiltersReducer,
      cart: CartReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  UnknownAction
>;
