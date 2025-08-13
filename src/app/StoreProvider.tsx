"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/redux/store";
import { Product } from "@/features/products/types/product";
import { initializeAllProducts } from "@/features/products/store/productsSlice";

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
