import { SizeName } from "@/types/sizes";
import { toggleSizes } from "@/lib/features/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { isSelected, toggleItem } from "@/utils/selection-utils";
import clsx from "clsx";

type SizeSelectBaseProps = {
  sizes: SizeName[];
  selectedSize: SizeName | SizeName[] | null;
  onSizeChange: (size: SizeName) => void;
};

const SizeSelectBase: React.FC<SizeSelectBaseProps> = ({
  sizes,
  selectedSize,
  onSizeChange,
}) => {
  const isSelectedSize = (size: string) => isSelected(selectedSize, size);
  return (
    <div>
      <div className="flex flex-wrap gap-[8px] xl:gap-[16px]">
        {sizes.map((size) => (
          <button
            key={size}
            className={clsx(
              "cursor-pointer rounded-full bg-[#F0F0F0] px-[20px] py-[10px] text-sm font-light text-(--color-text-primary) transition duration-250 ease-in-out hover:bg-black hover:text-white xl:px-[24px] xl:py-[12px] xl:text-base",
              isSelectedSize(size) && "bg-black text-white",
            )}
            onClick={() => onSizeChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export const MultiSizeSelect = () => {
  const uniqueSizes = useAppSelector((state) => state.filters.available.sizes);
  const selectedSize = useAppSelector(
    (state) => state.filters.selected.selectedSizes,
  );
  const dispatch = useAppDispatch();
  return (
    <SizeSelectBase
      sizes={uniqueSizes}
      selectedSize={selectedSize}
      onSizeChange={(size) => dispatch(toggleSizes(size))}
    />
  );
};

type SingleSizeSelectProps = {
  sizes: SizeName[];
  selectedSize: SizeName | null;
  onSizeChange: (size: SizeName) => void;
};

export const SingleSizeSelect: React.FC<SingleSizeSelectProps> = ({
  sizes,
  selectedSize,
  onSizeChange,
}) => {
  return (
    <SizeSelectBase
      sizes={sizes}
      selectedSize={selectedSize}
      onSizeChange={(size) => onSizeChange(size)}
    />
  );
};
