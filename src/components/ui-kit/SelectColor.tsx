import clsx from "clsx";
import Checkmark from "@public/icons/checkmark-white.svg";
import { ColorName, listColors } from "@/data/colors";

type Props = {
  colors: ColorName[];
  selectedColor: string;
  onColorChange: (color: ColorName) => void;
};

export const SelectColor: React.FC<Props> = ({
  colors,
  selectedColor,
  onColorChange,
}) => {
  const findHexColor = (name: ColorName): string | undefined => {
    const hex = listColors[name];
    if (!hex) {
      console.warn(`Color "${name}" not found in listColors!`);
    }
    return hex;
  };

  return (
    <div className="flex gap-[12px] xl:gap-[16px]">
      {colors.map((color, index) => (
        <button
          key={index}
          className={clsx(
            `flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full xl:h-[37px] xl:w-[37px]`,
            color === "white" && "border",
          )}
          onClick={() => onColorChange(color)}
          style={{
            backgroundColor: `${findHexColor(color)}`,
          }}
        >
          {selectedColor === color && (
            <Checkmark
              className={clsx(color === "white" ? "fill-black" : "fill-white")}
            />
          )}
        </button>
      ))}
    </div>
  );
};
