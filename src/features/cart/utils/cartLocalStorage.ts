import { CartState } from "@/features/cart/store/cartSlice";

export const saveCartState = (state: CartState) => {
  if (typeof window === "undefined") {
    return;
  }
  try {
    const cleanState = JSON.parse(JSON.stringify(state));
    const serializedState = JSON.stringify(cleanState);
    localStorage.setItem("cartState", serializedState);
  } catch (error) {
    console.error("Error saving state to localStorage: ", error);
  }
};

export const loadCartState = (): CartState | undefined => {
  if (typeof window === "undefined") {
    return;
  }
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error loading state from localStorage: ", error);
    return undefined;
  }
};
