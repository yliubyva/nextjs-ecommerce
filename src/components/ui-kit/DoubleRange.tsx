import { Range } from "react-range";
import clsx from "clsx";

type Props = {
  min: number;
  max: number;
  values: number[];
  onValuesChange: (values: number[]) => void;
};

export const DoubleRange: React.FC<Props> = ({
  min,
  max,
  values,
  onValuesChange,
}) => {
  return (
    <div className="w-full px-[10px] pb-[26px]">
      <Range
        step={1}
        min={min}
        max={max}
        values={values}
        onChange={onValuesChange}
        renderTrack={({ props, children }) => {
          return (
            <div {...props} className="relative h-2 w-full rounded bg-gray-300">
              <div
                className="absolute h-2 rounded bg-black"
                style={{
                  left: `${((values[0] - min) / (max - min)) * 100}%`,
                  width: `${((values[1] - values[0]) / (max - min)) * 100}%`,
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
                ${index === 0 ? values[0] : values[1]}
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};
