import { Filters } from "@/features/filters/components/Filters";
import { Pagination } from "@/features/productCatalog/components/Pagination";
import { ProductsGrid } from "@/features/productCatalog/components/ProductsGrid";
import { SelectOptions } from "@/features/productCatalog/components/SelectOptions";
import { useProductFilterAndPagination } from "../hooks/useProductFilterAndPagination";
import { Divider } from "@/shared/ui/atoms/Divider";
import FilterIcon from "@public/icons/icon-filters.svg";
import { useState } from "react";

type Props = {
  title: string;
};

export const ProductCatalog: React.FC<Props> = ({ title }) => {
  const {
    showingStart,
    showingEnd,
    totalItems,
    selectedOption,
    handleChangeOption,
    currentProducts,
    isMobile,
  } = useProductFilterAndPagination();

  const [isOpenFilters, setIsOpenFilters] = useState(() => {
    return !isMobile;
  });

  return (
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
            <h1 className="text-2xl font-normal">{title}</h1>
            <div className="flex items-center gap-[12px]">
              <p className="text-primary w-[230px]">
                Showing {showingEnd === 0 ? 0 : showingStart}-{showingEnd} of{" "}
                {totalItems} Products
              </p>
              <SelectOptions
                selectedOption={selectedOption}
                onChange={handleChangeOption}
              />
            </div>
          </div>
          <button
            className="bg-category-background cursor-pointer rounded-full p-[8px] md:hidden"
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
  );
};
