import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "../types/cartItem";

export interface CartState {
  cartItems: CartItemType[];
}

const initialState: CartState = {
  cartItems: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItemType>) {
      const check = state.cartItems.find(
        (element) =>
          element.productId === action.payload.productId &&
          element.color === action.payload.color &&
          element.size === action.payload.size,
      );

      if (check) {
        check.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const result = state.cartItems.filter(
        (item) => item.cartItemId !== action.payload,
      );
      state.cartItems = result;
    },
    increaseQuantity(state, action: PayloadAction<string>) {
      const findedProduct = state.cartItems.find(
        (product) => product.cartItemId === action.payload,
      );
      if (!findedProduct) return;
      findedProduct.quantity += 1;
    },
    decreaseQuantity(state, action: PayloadAction<string>) {
      const findedProduct = state.cartItems.find(
        (product) => product.cartItemId === action.payload,
      );
      if (!findedProduct) return;
      if (findedProduct.quantity > 1) {
        findedProduct.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  CartSlice.actions;

export default CartSlice.reducer;
