import { useAppDispatch, useAppSelector } from "@/lib/redux/redux-hooks";
import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import React, { useEffect } from "react";
import {
  selectPaginatedProducts,
  selectTotalFilteredProducts,
} from "@/features/products/store/productSelectors";
import {
  setCurrentPage,
  setItemsPerPage,
  sortProducts,
} from "@/features/products/store/productsSlice";
import { SortType } from "@/features/products/utils/product-sorts";

export const useProductFilterAndPagination = () => {
  const width = useWindowWidth();
  const isMobile = width !== null && 768 > width;
  const dispatch = useAppDispatch();

  const currentProducts = useAppSelector(selectPaginatedProducts);
  const totalItems = useAppSelector(selectTotalFilteredProducts);
  const allProducts = useAppSelector((state) => state.products.all);
  const selectedOption = useAppSelector((state) => state.products.sortOption);
  const { currentPage, itemsPerPage } = useAppSelector(
    (state) => state.products.pagination,
  );

  const handleChangeOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(sortProducts(event.target.value as SortType));
  };

  useEffect(() => {
    if (width === null) return;
    const newItemsPerPage = width < 768 ? 6 : 9;

    dispatch(setItemsPerPage(newItemsPerPage));
  }, [width, dispatch]);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [totalItems]);

  const showingStart = (currentPage - 1) * itemsPerPage + 1;
  const showingEnd = Math.min(currentPage * itemsPerPage, totalItems);

  return {
    allProducts,
    showingStart,
    showingEnd,
    totalItems,
    selectedOption,
    handleChangeOption,
    currentProducts,
    isMobile,
  };
};
