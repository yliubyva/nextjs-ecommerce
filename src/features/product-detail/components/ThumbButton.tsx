import clsx from "clsx";
import Image from "next/image";
import React from "react";

type PropType = {
  selected: boolean;
  src: string;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, src, onClick } = props;

  return (
    <div className="min-w-0 flex-[0_0_33%] pl-[12px] lg:flex-[0_0_168px] lg:pt-[14px] lg:pl-0">
      <button
        onClick={onClick}
        type="button"
        className={clsx(
          "relative flex h-[106px] w-full cursor-pointer touch-manipulation items-center justify-center overflow-hidden rounded-[20px] sm:h-[168px] lg:h-full lg:max-h-[168px] lg:flex-col",
          selected && "border border-black",
        )}
      >
        <Image
          src={src}
          alt="product image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          className="h-full w-full min-w-[111px] object-cover lg:h-[168px] lg:w-[152px]"
        />
      </button>
    </div>
  );
};
