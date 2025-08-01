"use client";
import { useEffect, useMemo, useState } from "react";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { Filters } from "@/components/ui-kit/Filters";
import { firstLetterToUpperCase } from "@/utils/string";
import FilterIcon from "@public/icons/icon-filters.svg";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Divider } from "@/components/ui-kit/Divider";
import { Pagination } from "@/components/ui-kit/Pagination";
import {
  setCurrentPage,
  setItemsPerPage,
  sortProducts,
} from "@/lib/features/productsSlice";
import { SortType } from "@/utils/product-sorts";
import { ProductsGrid } from "@/components/ui-kit/ProductsGrid";

type Props = {
  category: string;
};

export const ShopClient: React.FC<Props> = ({ category }) => {
  const width = useWindowWidth();
  const isMobile = width !== null && 768 > width;

  const [isOpenFilters, setIsOpenFilters] = useState(() => {
    return !isMobile;
  });

  const { filtered, pagination } = useAppSelector(
    (state) => state.products,
  );
  const { currentPage, itemsPerPage } = pagination;
  const dispatch = useAppDispatch();

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
            <div className="flex gap-[8px] items-end md:items-center md:w-full md:justify-between">
              <h1 className="text-2xl font-normal">
                {firstLetterToUpperCase(category)}
              </h1>
              <div className="flex gap-[12px]">
                <p className="text-(--color-text-primary)">
                  Showing {showingStart}-{showingEnd} of {filtered.length}{" "}
                  Products
                </p>
                <label className="hidden text-(--color-text-primary) md:block">
                  Sort by:
                  <select
                    name="sort"
                    onChange={(event) =>
                      dispatch(sortProducts(event.target.value as SortType))
                    }
                    className="cursor-pointer font-normal text-black"
                  >
                    <option value="">Choose an option</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="rating-desc">Most Popular</option>
                    <option value="newest">Newest</option>
                  </select>
                </label>
              </div>
            </div>
            <button
              className="cursor-pointer rounded-full bg-(--color-category-background) p-[8px] md:hidden"
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
