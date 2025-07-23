import clsx from "clsx";
import Checkmark from "@public/icons/checkmark-white.svg";
import { ColorName, listColors } from "@/types/colors";
import { isSelected } from "@/utils/selection-utils";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleColors } from "@/lib/features/filtersSlice";

type ColorSelectBaseProps = {
  colors: ColorName[];
  selectedColors: ColorName | ColorName[] | null;
  toggleColor: (colors: ColorName) => void;
};

const ColorSelectBase: React.FC<ColorSelectBaseProps> = ({
  colors,
  toggleColor,
  selectedColors,
}) => {
  const findHexColor = (name: ColorName): string | undefined => {
    const hex = listColors[name];
    if (!hex) {
      console.warn(`Color "${name}" not found in listColors!`);
    }
    return hex;
  };

  const isSelectedColor = (color: ColorName) =>
    isSelected(selectedColors, color);

  return (
    <div className="flex flex-wrap gap-[12px] xl:gap-[16px]">
      {colors.map((color, index) => (
        <button
          key={index}
          className={clsx(
            `flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full xl:h-[37px] xl:w-[37px]`,
            color === "white" && "border",
          )}
          onClick={() => toggleColor(color)}
          style={{
            backgroundColor: `${findHexColor(color)}`,
          }}
        >
          {isSelectedColor(color) && (
            <Checkmark
              className={clsx(color === "white" ? "fill-black" : "fill-white")}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export const MultiColorSelect = () => {
  const uniqueColors = useAppSelector(
    (state) => state.filters.available.colors,
  );
  const selectedColors = useAppSelector(
    (state) => state.filters.selected.selectedColors,
  );
  const dispatch = useAppDispatch();

  return (
    <ColorSelectBase
      colors={uniqueColors}
      toggleColor={(color) => dispatch(toggleColors(color))}
      selectedColors={selectedColors}
    />
  );
};

type SingleColorSelectProps = {
  colors: ColorName[];
  selectedColor: ColorName | null;
  onColorChange: (color: ColorName) => void;
};

export const SingleColorSelect: React.FC<SingleColorSelectProps> = ({
  colors,
  selectedColor,
  onColorChange,
}) => {
  return (
    <ColorSelectBase
      colors={colors}
      toggleColor={(color) => onColorChange(color)}
      selectedColors={selectedColor}
    />
  );
};
