import { useState } from "react";
import Arrow from "@public/icons/greater.svg";
import clsx from "clsx";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const FilterDropdown: React.FC<Props> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={clsx(
        "my-[20px] h-[30px] overflow-hidden",
        isOpen && "h-fit overflow-auto",
      )}
    >
      <div className="mb-[20px] flex justify-between">
        <p className="text-xl font-normal">{title}</p>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={clsx(
            "cursor-pointer transition duration-300 ease-in-out",
            isOpen && "rotate-180",
          )}
        >
          <Arrow className="h-[16px] w-[16px] rotate-90 fill-(--color-text-primary)" />
        </button>
      </div>
      <div
        className={clsx(
          "bg-white opacity-0 transition duration-300 ease-in-out",
          isOpen && "opacity-100",
        )}
      >
        {children}
      </div>
    </div>
  );
};
