"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";
import { Product } from "@/types/product";
import { initializeAllProducts } from "@/lib/features/productsSlice";

export default function StoreProvider({
  children,
  allProducts,
}: {
  children: React.ReactNode;
  allProducts: Product[];
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();

    if (allProducts) {
      storeRef.current.dispatch(initializeAllProducts(allProducts));
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
