"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";
import { Product } from "@/types/product";
import { initializeProducts } from "@/lib/features/productsSlice";
import {
  FilterAvailableOptions,
  initializeAvailableOptions,
} from "@/lib/features/filtersSlice";

export default function StoreProvider({
  children,
  products,
  filterOptions,
}: {
  children: React.ReactNode;
  products?: Product[];
  filterOptions?: FilterAvailableOptions;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();

    if (products) {
      storeRef.current.dispatch(initializeProducts(products));
    }

    if (filterOptions) {
      storeRef.current.dispatch(initializeAvailableOptions(filterOptions));
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
