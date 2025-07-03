import Arrow from "@public/icons/greater.svg";
import clsx from "clsx";

type Props = {
  types: string[];
  selectedType: string | null;
  onTypeChange: (type: string) => void;
};

export const SelectType: React.FC<Props> = ({
  types,
  selectedType,
  onTypeChange,
}) => {
  return (
    <div className="flex flex-col">
      {types.map((type, index) => (
        <button
          onClick={() => onTypeChange(type)}
          key={index}
          className={clsx(
            "flex cursor-pointer items-center justify-between rounded-2xl py-[10px] text-base text-(--color-text-primary) transition duration-250 ease-in-out hover:bg-(--color-border-container)",
            selectedType === type && "font-medium text-black",
          )}
        >
          {type}
          <Arrow
            className={clsx(
              "h-[16px] w-[16px] fill-(--color-text-primary)",
              selectedType === type && "fill-black",
            )}
          />
        </button>
      ))}
    </div>
  );
};
