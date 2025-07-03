import Minus from "@public/icons/minus.svg";
import Plus from "@public/icons/plus.svg";

type Props = {
  counter: number;
  onCounterChange: (counter: number) => void;
};

export const QuantityCounter: React.FC<Props> = ({
  counter,
  onCounterChange,
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
    <div className="grid w-full max-w-[170px] grid-cols-[20px_20px_20px] grid-rows-1 items-center justify-between rounded-full bg-[#F0F0F0] px-[16px] py-[12px] md:px-[20px] md:py-[14px]">
      <button className="cursor-pointer" onClick={handlerDecreaseCount}>
        <Minus width={16} />
      </button>
      <p className="justify-self-center text-sm font-normal xl:text-base">
        {counter}
      </p>
      <button className="cursor-pointer" onClick={handleIncreaseCount}>
        <Plus width={16} />
      </button>
    </div>
  );
};
