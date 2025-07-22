import clsx from "clsx";
import Checkmark from "@public/icons/checkmark-white.svg";
import { ColorName, listColors } from "@/data/colors";

type ColorSelectBaseProps = {
  colors: ColorName[];
  selectedColors: ColorName | ColorName[];
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

  const isSelected = (color: ColorName) => {
    if (Array.isArray(selectedColors)) {
      return selectedColors.includes(color);
    }
    return selectedColors === color;
  };

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
          {isSelected(color) && (
            <Checkmark
              className={clsx(color === "white" ? "fill-black" : "fill-white")}
            />
          )}
        </button>
      ))}
    </div>
  );
};

type MultiColorSelectProps = {
  colors: ColorName[];
  selectedColors: ColorName[];
  onColorChange: (colors: ColorName[]) => void;
};

export const MultiColorSelect: React.FC<MultiColorSelectProps> = ({
  colors,
  selectedColors,
  onColorChange,
}) => {
  const toggleColor = (color: ColorName) => {
    if (selectedColors.includes(color)) {
      onColorChange(selectedColors.filter((c) => c !== color));
    } else {
      onColorChange([...selectedColors, color]);
    }
  };
  return (
    <ColorSelectBase
      colors={colors}
      toggleColor={toggleColor}
      selectedColors={selectedColors}
    />
  );
};

type SingleColorSelectProps = {
  colors: ColorName[];
  selectedColor: ColorName;
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
