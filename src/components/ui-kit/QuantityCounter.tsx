import Minus from "@public/icons/minus.svg";
import Plus from "@public/icons/plus.svg";
import clsx from "clsx";

type Props = {
  counter: number;
  onCounterChange: (counter: number) => void;
  isCart: boolean;
};

export const QuantityCounter: React.FC<Props> = ({
  counter,
  onCounterChange,
  isCart,
}) => {
  const handleIncreaseCount = () => {
    if (counter === 10) return;
    onCounterChange(counter + 1);
  };
  const handlerDecreaseCount = () => {
    if (counter === 1) return;
    onCounterChange(counter - 1);
  };
  return (
    <div
      className={clsx(
        "grid w-full grid-cols-[20px_20px_20px] grid-rows-1 items-center justify-between rounded-full bg-[#F0F0F0] px-[16px] md:px-[20px]",
        isCart
          ? "max-w-[105px] py-[6px] md:max-w-[124px] md:py-[12px]"
          : "max-w-[170px] py-[12px] md:py-[14px]",
      )}
    >
      <button
        className="h-[20px] w-[20px] cursor-pointer"
        onClick={handlerDecreaseCount}
      >
        <Minus width={16} />
      </button>
      <p className="justify-self-center text-sm font-normal xl:text-base">
        {counter}
      </p>
      <button
        className="h-[20px] w-[20px] cursor-pointer"
        onClick={handleIncreaseCount}
      >
        <Plus width={16} />
      </button>
    </div>
  );
};
