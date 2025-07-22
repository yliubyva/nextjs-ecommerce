import { isSelected, toggleItem } from "@/utils/selection-utils";
import clsx from "clsx";

type SizeSelectBaseProps = {
  sizes: string[];
  selectedSize: string | string[];
  onSizeChange: (size: string) => void;
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

type MultiSizeSelectProps = {
  sizes: string[];
  selectedSize: string[];
  onSizeChange: (size: string[]) => void;
};

export const MultiSizeSelect: React.FC<MultiSizeSelectProps> = ({
  sizes,
  selectedSize,
  onSizeChange,
}) => {
  const toggleSize = (size: string) =>
    onSizeChange(toggleItem(selectedSize, size));
  return (
    <SizeSelectBase
      sizes={sizes}
      selectedSize={selectedSize}
      onSizeChange={toggleSize}
    />
  );
};

type SingleSizeSelectProps = {
  sizes: string[];
  selectedSize: string;
  onSizeChange: (size: string) => void;
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
