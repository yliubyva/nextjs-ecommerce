"use client";
import { useEffect, useMemo, useState } from "react";
import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import { Filters } from "@/features/filters/components/Filters";
import { firstLetterToUpperCase } from "@/shared/utils/string";
import FilterIcon from "@public/icons/icon-filters.svg";
import { useAppDispatch, useAppSelector } from "@/lib/redux/redux-hooks";
import { Divider } from "@/shared/ui/atoms/Divider";
import { Pagination } from "@/features/shop/components/Pagination";
import {
  initializeFilteredProducts,
  setCurrentPage,
  setItemsPerPage,
  sortProducts,
} from "@/features/products/store/productsSlice";
import { SortType } from "@/features/products/utils/product-sorts";
import { ProductsGrid } from "@/features/shop/components/ProductsGrid";
import { Product } from "@/features/products/types/product";
import { initializeAvailableOptions } from "@/features/filters/store/filtersSlice";
import { extractFilterOptionsFromProducts } from "@/features/filters/utils/extract-filter-options";
import { SelectOptions } from "./SelectOptions";

type Props = {
  category: string;
  filteredProducts: Product[];
};

export const ShopClient: React.FC<Props> = ({ category, filteredProducts }) => {
  const width = useWindowWidth();
  const isMobile = width !== null && 768 > width;

  const [isOpenFilters, setIsOpenFilters] = useState(() => {
    return !isMobile;
  });

  const { filtered, pagination } = useAppSelector((state) => state.products);
  const { currentPage, itemsPerPage } = pagination;
  const dispatch = useAppDispatch();
  const selectedOption = useAppSelector((state) => state.products.sortOption);

  useEffect(() => {
    dispatch(initializeFilteredProducts(filteredProducts));
    const filtersAvalibaleOptions =
      extractFilterOptionsFromProducts(filteredProducts);
    dispatch(initializeAvailableOptions(filtersAvalibaleOptions));

    if (selectedOption) {
      dispatch(sortProducts(selectedOption));
    }
  }, []);

  useEffect(() => {
    if (width === null) return;
    const newItemsPerPage = width < 768 ? 6 : 9;

    dispatch(setItemsPerPage(newItemsPerPage));
  }, [width, dispatch]);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [itemsPerPage]);

  const { currentProducts, indexOfFirstProduct, indexOfLastProduct } =
    useMemo(() => {
      const indexOfLast = currentPage * itemsPerPage;
      const indexOfFirst = indexOfLast - itemsPerPage;
      const products = filtered.slice(indexOfFirst, indexOfLast);

      return {
        currentProducts: products,
        indexOfFirstProduct: indexOfFirst,
        indexOfLastProduct: indexOfLast,
      };
    }, [filtered, currentPage, itemsPerPage]);

  const showingStart = indexOfFirstProduct + 1;
  const showingEnd = Math.min(indexOfLastProduct, filtered.length);

  return (
    <>
      <div className="md:flex md:gap-[20px]">
        <div className="md:w-full md:max-w-[295px]">
          <Filters
            isOpen={isOpenFilters}
            onClose={() => setIsOpenFilters(false)}
            isMobile={isMobile}
          />
        </div>
        <div className="grid w-full grid-cols-1 grid-rows-[32px_1fr_57px] gap-[25px] md:grid-rows-[44px_1fr_60px]">
          <div className="flex items-center justify-between">
            <div className="flex items-end gap-[8px] md:w-full md:items-center md:justify-between">
              <h1 className="text-2xl font-normal">
                {firstLetterToUpperCase(category)}
              </h1>
              <div className="flex gap-[12px]">
                <p className="text-primary">
                  Showing {showingStart}-{showingEnd} of {filtered.length}{" "}
                  Products
                </p>
                <SelectOptions
                  selectedOption={selectedOption}
                  onChange={(event) =>
                    dispatch(sortProducts(event.target.value as SortType))
                  }
                />
              </div>
            </div>
            <button
              className="cursor-pointer rounded-full bg-category-background p-[8px] md:hidden"
              onClick={() => setIsOpenFilters(true)}
            >
              <FilterIcon className="h-[16px] w-[16px]" />
            </button>
          </div>
          <ProductsGrid products={currentProducts} />
          <div>
            <Divider addClass="mb-[20px]" />
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};
