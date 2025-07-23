import { Range } from "react-range";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { togglePriceRange } from "@/lib/features/filtersSlice";

export const PriceRangeSlider = () => {
  const { min, max } = useAppSelector(
    (state) => state.filters.available.priceRange,
  );
  const selectedRangeValues = useAppSelector(
    (state) => state.filters.selected.selectedRangeValues,
  );
  const dispatch = useAppDispatch();

  return (
    <div className="w-full px-[10px] pb-[26px]">
      <Range
        step={1}
        min={min}
        max={max}
        values={selectedRangeValues}
        onChange={(values) => dispatch(togglePriceRange(values))}
        renderTrack={({ props, children }) => {
          return (
            <div {...props} className="relative h-2 w-full rounded bg-gray-300">
              <div
                className="absolute h-2 rounded bg-black"
                style={{
                  left: `${((selectedRangeValues[0] - min) / (max - min)) * 100}%`,
                  width: `${((selectedRangeValues[1] - selectedRangeValues[0]) / (max - min)) * 100}%`,
                }}
              />
              {children}
            </div>
          );
        }}
        renderThumb={({ index, props }) => {
          const { key, ...restProps } = props;
          return (
            <div
              key={key}
              {...restProps}
              className={clsx(
                "flex h-5 w-5 cursor-pointer rounded-full bg-black shadow-md",
                index === 0 ? "justify-start" : "justify-end",
              )}
            >
              <div className="mt-[24px] text-sm">
                ${index === 0 ? selectedRangeValues[0] : selectedRangeValues[1]}
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};
