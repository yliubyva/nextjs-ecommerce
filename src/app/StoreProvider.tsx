"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/redux/store";
import { Product } from "@/features/products/types/product";
import { initializeAllProducts } from "@/features/products/store/productsSlice";
import { loadCartState, saveCartState } from "@/features/cart/utils/cartLocalStorage";

export default function StoreProvider({
  children,
  allProducts,
}: {
  children: React.ReactNode;
  allProducts: Product[];
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    const preloadedCartState = loadCartState();

    const preloadedState = {
      cart: preloadedCartState,
    };

    storeRef.current = makeStore(preloadedState);

    if (allProducts) {
      storeRef.current.dispatch(initializeAllProducts(allProducts));
    }
  }

  useEffect(() => {
    const store = storeRef.current;
    if (!store) return;

    const unsubscribe = store.subscribe(() => {
      const stateToSave = store.getState().cart;
      saveCartState(stateToSave);
    });

    return () => unsubscribe();
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
