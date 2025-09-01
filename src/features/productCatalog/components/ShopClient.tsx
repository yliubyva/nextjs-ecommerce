"use client";
import { useEffect } from "react";
import { firstLetterToUpperCase } from "@/shared/utils/string";
import { useAppDispatch, useAppSelector } from "@/lib/redux/redux-hooks";
import {
  setSearchQuery,
  setSelectedGender,
} from "@/features/products/store/productsSlice";
import { initializeAvailableOptions } from "@/features/filters/store/filtersSlice";
import { extractFilterOptionsFromProducts } from "@/features/filters/utils/extract-filter-options";
import { filterByCategory } from "@/features/products/utils/product-filters";
import { useProductFilterAndPagination } from "../hooks/useProductFilterAndPagination";
import { ProductCatalog } from "@/features/productCatalog/components/ProductCatalog";

type Props = {
  category: "men" | "women";
};

export const ShopClient: React.FC<Props> = ({ category }) => {
  const { allProducts } = useProductFilterAndPagination();

  const dispatch = useAppDispatch();

  const { searchQuery } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(setSelectedGender(category));

    const productsForCategory = filterByCategory(allProducts, category);

    const filtersAvaliableOptions =
      extractFilterOptionsFromProducts(productsForCategory);
    dispatch(initializeAvailableOptions(filtersAvaliableOptions));
  }, [allProducts, dispatch, category]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      dispatch(setSearchQuery(""));
    }
  }, [searchQuery.length, dispatch, category]);

  return <ProductCatalog title={firstLetterToUpperCase(category)} />;
};
