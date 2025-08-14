import { toggleTypes } from "@/features/filters/store/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/redux-hooks";
import { isSelected } from "@/features/filters/utils/selection-utils";
import Arrow from "@public/icons/greater.svg";
import clsx from "clsx";

export const SelectType = () => {
  const uniqueTypes = useAppSelector((state) => state.filters.available.types);
  const selectedType = useAppSelector(
    (state) => state.filters.selected.selectedTypes,
  );
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col">
      {uniqueTypes.map((type, index) => (
        <button
          onClick={() => dispatch(toggleTypes(type))}
          key={index}
          className={clsx(
            "text-primary hover:bg-secondary flex cursor-pointer items-center justify-between rounded-2xl py-[10px] text-base transition duration-250 ease-in-out",
            isSelected(selectedType, type) && "font-medium text-black",
          )}
        >
          {type}
          <Arrow
            className={clsx(
              "fill-primary h-[16px] w-[16px]",
              isSelected(selectedType, type) && "fill-black",
            )}
          />
        </button>
      ))}
    </div>
  );
};
