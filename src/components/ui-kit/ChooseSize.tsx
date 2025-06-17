import clsx from "clsx";

type Props = {
  sizes: string[];
  selectedSize: string | null;
  onSizeChange: (size: string) => void;
};

export const ChooseSize: React.FC<Props> = ({
  sizes,
  selectedSize,
  onSizeChange,
}) => {
  return (
    <div>
      <div className="flex flex-wrap gap-[8px] xl:gap-[16px]">
        {sizes.map((size) => (
          <button
            key={size}
            className={clsx(
              "w-full max-w-[120px] min-w-[76px] cursor-pointer rounded-full bg-[#F0F0F0] py-[10px] text-sm text-(--color-text-primary) transition duration-250 ease-in-out hover:bg-black hover:font-normal hover:text-white xl:px-[24px] xl:py-[12px] xl:text-base",
              selectedSize === size && "bg-black font-normal text-white",
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
