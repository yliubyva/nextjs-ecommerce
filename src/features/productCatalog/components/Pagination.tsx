import { useAppDispatch, useAppSelector } from "@/lib/redux/redux-hooks";
import {
  PaginationArrowButton,
  PaginationButton,
} from "@/shared/ui/molecules/Button";
import { setCurrentPage } from "@/features/products/store/productsSlice";
import { useMemo } from "react";
import { selectTotalFilteredProducts } from "@/features/products/store/productSelectors";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const totalItems = useAppSelector(selectTotalFilteredProducts);
  const productsPerPage = useAppSelector(
    (state) => state.products.pagination.itemsPerPage,
  );
  const currentPage = useAppSelector(
    (state) => state.products.pagination.currentPage,
  );

  const totalPages = useMemo(
    () => Math.ceil(totalItems / productsPerPage),
    [totalItems, productsPerPage],
  );
  const pageNumbers = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }, [totalPages]);

  if (pageNumbers.length <= 1) return null;

  const handlePrevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <div className="flex items-center justify-between">
      <PaginationArrowButton
        label="Previous"
        isNext={false}
        onClick={handlePrevPage}
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
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};
