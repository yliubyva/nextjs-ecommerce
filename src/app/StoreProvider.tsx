"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";
import {
  FilterAvailableOptions,
  initializeAvailableOptions,
} from "@/lib/features/filtersSlice";

export default function StoreProvider({
  children,
  filterOptions,
}: {
  children: React.ReactNode;
  filterOptions?: FilterAvailableOptions;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();

    if (filterOptions) {
      storeRef.current.dispatch(initializeAvailableOptions(filterOptions));
    }
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
