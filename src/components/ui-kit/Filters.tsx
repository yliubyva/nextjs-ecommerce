import clsx from "clsx";
import { Divider } from "./Divider";
import { MultiColorSelect } from "@/components/ui-kit/SelectColor";
import { MultiSizeSelect } from "@/components/ui-kit/SelectSize";
import { PriceRangeSlider } from "./PriceRangeSlider";
import { SelectType } from "./SelectType";
import { Button } from "./Button";
import { FilterDropdown } from "./FilterDropdown";
import Filter from "@public/icons/icon-filters.svg";
import CloseIcon from "@public/icons/icon-close.svg";

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
  if (isMobile) {
    return (
      <div
        className={clsx(
          "invisible fixed top-0 right-0 bottom-0 left-0 z-200 transition-all duration-700 ease-in-out",
          isOpen ? "visible opacity-100" : "opacity-0",
        )}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/20 transition-all duration-700 ease-in-out"></div>
        <div
          className={clsx(
            "absolute top-[60px] bottom-0 left-0 w-full overflow-auto rounded-tl-[20px] rounded-tr-[20px] border border-(--color-border-container) bg-white px-[24px] py-[20px] transition-transform duration-700 ease-in-out",
            isOpen ? "-translate-y-0" : "translate-y-full",
          )}
        >
          <div className="mb-[16px] flex items-center justify-between">
            <p className="text-xl font-normal">Filters</p>
            <button onClick={onClose} className="cursor-pointer p-[4px]">
              <CloseIcon className="h-[16px] w-[16px] fill-black" />
            </button>
          </div>
          <FiltersBody />
        </div>
      </div>
    );
  }

  return (
    <aside className="sticky top-[110px] w-full max-w-[295px] overflow-auto rounded-[20px] border border-(--color-border-container) bg-white px-[24px] py-[20px]">
      <div className="mb-[16px] flex items-center justify-between">
        <p className="text-xl font-normal">Filters</p>
        <Filter className="h-[20px] w-[20px] fill-black" />
      </div>
      <FiltersBody />
    </aside>
  );
};

const FiltersBody = () => {
  return (
    <>
      <Divider />
      <div className="my-[20px]">
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
      <Button
        variant="primary"
        onClick={() => console.log("click")}
        label="Apply Filter"
        addStyle="my-[20px]"
      />
    </>
  );
};
