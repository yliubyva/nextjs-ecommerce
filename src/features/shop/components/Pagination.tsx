import { useAppDispatch, useAppSelector } from "@/lib/redux/redux-hooks";
import {
  PaginationArrowButton,
  PaginationButton,
} from "@/shared/ui/molecules/Button";
import {
  goToNextPage,
  setCurrentPage,
  goToPrevPage,
} from "@/features/products/store/productsSlice";
import { useMemo } from "react";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const length = useAppSelector((state) => state.products.filtered.length);
  const productsPerPage = useAppSelector(
    (state) => state.products.pagination.itemsPerPage,
  );
  const currentPage = useAppSelector(
    (state) => state.products.pagination.currentPage,
  );

  const totalPages = useMemo(
    () => Math.ceil(length / productsPerPage),
    [length, productsPerPage],
  );
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => {
    return index + 1;
  });

  if (pageNumbers.length <= 1) return null;

  return (
    <div className="flex items-center justify-between">
      <PaginationArrowButton
        label="Previous"
        isNext={false}
        onClick={() => dispatch(goToPrevPage())}
        disabled={currentPage === 1}
      />
      <div className="flex gap-[10px]">
        {pageNumbers.map((pageNumber) => (
          <PaginationButton
            key={pageNumber}
            isActive={pageNumber === currentPage}
            onClick={() => dispatch(setCurrentPage(pageNumber))}
            label={pageNumber}
          ></PaginationButton>
        ))}
      </div>
      <PaginationArrowButton
        label="Next"
        isNext
        onClick={() => dispatch(goToNextPage())}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};
