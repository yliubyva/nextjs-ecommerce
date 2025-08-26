"use client";
import { useAppDispatch, useAppSelector } from "@/lib/redux/redux-hooks";
import { setSelectedGender } from "@/features/products/store/productsSlice";
import { SearchBar } from "@/shared/ui/atoms/SearchBar";
import { useEffect } from "react";
import { filterByCategory } from "../../products/utils/product-filters";
import { extractFilterOptionsFromProducts } from "../../filters/utils/extract-filter-options";
import { initializeAvailableOptions } from "../../filters/store/filtersSlice";
import { useProductFilterAndPagination } from "../hooks/useProductFilterAndPagination";
import { ProductCatalog } from "./ProductCatalog";

export const SearchClient = () => {
  const { allProducts } = useProductFilterAndPagination();

  const dispatch = useAppDispatch();

  const selectedCategory = useAppSelector(
    (state) => state.products.selectedGender,
  );

  useEffect(() => {
    dispatch(setSelectedGender(selectedCategory));

    const productsForCategory = filterByCategory(allProducts, selectedCategory);

    const filtersAvaliableOptions =
      extractFilterOptionsFromProducts(productsForCategory);
    dispatch(initializeAvailableOptions(filtersAvaliableOptions));
  }, [allProducts, dispatch, selectedCategory]);

  return (
    <>
      <div className="mx-auto mb-[30px] w-full max-w-[580px]">
        <SearchBar />
      </div>
      <ProductCatalog title="Search results" />
    </>
  );
};
