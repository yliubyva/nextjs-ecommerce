import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getFinalPrice } from "@/utils/price";

export const selectCartItems = (state: RootState) => state.cart.cartItems;
export const selectAllProducts = (state: RootState) => state.products.all;

export const selectTotalPrice = createSelector(
  [selectCartItems, selectAllProducts],
  (cartItems, allProducts) => {
    return cartItems.reduce((total, item) => {
      const product = allProducts.find((p) => p.id === item.productId);
      const price = product ? getFinalPrice(product) : 0;
      return total + price * item.quantity;
    }, 0);
  },
);

export const selectTotalQuantities = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((total, items) => {
      return total + items.quantity;
    }, 0);
  },
);
