import clsx from "clsx";
import { useEffect } from "react";
import { Divider } from "@/shared/ui/atoms/Divider";
import { MultiColorSelect } from "@/shared/ui/molecules/SelectColor";
import { MultiSizeSelect } from "@/shared/ui/molecules/SelectSize";
import { PriceRangeSlider } from "@/features/filters/components/PriceRangeSlider";
import { SelectType } from "@/features/filters/components/SelectType";
import { FilterDropdown } from "./FilterDropdown";
import Filter from "@public/icons/icon-filters.svg";
import CloseIcon from "@public/icons/icon-close.svg";
import { useAppDispatch } from "@/lib/redux/redux-hooks";
import { resetFilters } from "../store/filtersSlice";

type FiltersProps = {
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
};

export const Filters: React.FC<FiltersProps> = ({
  isOpen,
  onClose,
  isMobile,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);
  if (isMobile) {
    return (
      <div
        className={clsx(
          "invisible fixed top-0 right-0 bottom-0 left-0 z-200 transition-all duration-700 ease-in-out",
          isOpen ? "visible opacity-100" : "opacity-0",
        )}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 bg-black/20 transition-all duration-700 ease-in-out"
          onClick={onClose}
        ></div>
        <div
          className={clsx(
            "border-secondary filter-modal-height absolute bottom-0 left-0 flex w-full flex-col overflow-y-auto rounded-tl-[20px] rounded-tr-[20px] border bg-white transition-transform duration-700 ease-in-out",
            isOpen ? "-translate-y-0" : "translate-y-full",
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-10 bg-white px-6">
            <div className="mb-4 flex items-center justify-between pt-5">
              <p className="text-xl font-normal">Filters</p>
              <button
                onClick={onClose}
                aria-label="Close filters"
                className="cursor-pointer p-1"
              >
                <CloseIcon className="h-4 w-4 fill-black" />
              </button>
            </div>
            <Divider />
          </div>
          <div className="h-full grow-1 px-6 pb-5">
            <FiltersBody onClose={onClose} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <aside className="border-secondary sticky top-[110px] w-full max-w-[295px] overflow-auto rounded-[20px] border bg-white px-[24px] py-[20px]">
      <div className="mb-[16px] flex items-center justify-between">
        <p className="text-xl font-normal">Filters</p>
        <Filter className="h-[20px] w-[20px] fill-black" />
      </div>
      <Divider />
      <FiltersBody />
    </aside>
  );
};

type FiltersBodyProps = {
  onClose?: () => void;
};

const FiltersBody: React.FC<FiltersBodyProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="my-5">
        <SelectType />
      </div>
      <Divider />
      <FilterDropdown title="Price">
        <PriceRangeSlider />
      </FilterDropdown>
      <Divider />
      <FilterDropdown title="Colors">
        <MultiColorSelect />
      </FilterDropdown>
      <Divider />
      <FilterDropdown title="Size">
        <MultiSizeSelect />
      </FilterDropdown>
      <button
        onClick={() => {
          dispatch(resetFilters());
          if (onClose) onClose();
        }}
        className="w-full cursor-pointer"
      >
        <span className="hover:border-b">Reset Filters</span>
      </button>
    </>
  );
};
