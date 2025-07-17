import { PaginationArrowButton, PaginationButton } from "./Button";

type Props = {
  currentPage: number;
  productPerPage: number;
  length: number;
  handlePagination: (param: number) => void;
  handlePrevPage: () => void;
  handleNextPage: () => void;
};

export const Pagination: React.FC<Props> = ({
  currentPage,
  productPerPage,
  length,
  handlePagination,
  handlePrevPage,
  handleNextPage,
}) => {
  const totalPages = Math.ceil(length / productPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => {
    return index + 1;
  });
  return (
    <div className="flex items-center justify-between">
      <PaginationArrowButton
        label="Previous"
        isNext={false}
        onClick={() => handlePrevPage()}
      />
      <div className="flex gap-[10px]">
        {pageNumbers.map((pageNumber) => (
          <PaginationButton
            key={pageNumber}
            isActive={pageNumber === currentPage}
            onClick={() => handlePagination(pageNumber)}
            label={pageNumber}
          ></PaginationButton>
        ))}
      </div>
      <PaginationArrowButton
        label="Next"
        isNext
        onClick={() => handleNextPage()}
        disabled={currentPage === totalPages}
      />
    </div>
  );
};
