import Image from "next/image";
import { QuantityCounter } from "@/components/ui-kit/QuantityCounter";
import TrashCan from "@public/icons/icon-trash-can.svg";
import { useState } from "react";
import { calculateDiscountedPrice, formatPrice } from "@/utils/price";

type Props = {
  productName: string;
  image: string;
  price: number;
  discount: number | null;
  size: string;
  color: string;
};

export const ItemCart: React.FC<Props> = ({
  productName,
  image,
  price,
  discount,
  size,
  color,
}) => {
  const [quantity, setQuantity] = useState(1);

  const currentPrice = discount
    ? calculateDiscountedPrice(price, discount)
    : price;
  return (
    <div className="flex min-w-[330px] items-center gap-[14px] md:gap-[16px]">
      <div className="h-[99px] w-full max-w-[99px] overflow-hidden rounded-[9px] md:h-[124px] md:max-w-[124px]">
        <Image
          src={image}
          alt={productName}
          width={99}
          height={99}
          className="object-cover object-center md:h-[124px] md:w-[124px]"
        />
      </div>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex flex-col gap-[1px] md:gap-[2px]">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-medium md:text-xl">{productName}</h2>
            <button className="cursor-pointer">
              <TrashCan />
            </button>
          </div>
          <div>
            <p className="text-sm text-black">
              Size: <span className="text-(--color-text-primary)">{size}</span>
            </p>
            <p className="text-sm text-black">
              Color:{" "}
              <span className="text-(--color-text-primary)">{color}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between md:items-end">
          <p className="text-xl font-normal md:text-2xl md:font-medium">
            {formatPrice(currentPrice * quantity)}
          </p>
          <QuantityCounter
            counter={quantity}
            onCounterChange={setQuantity}
            isCart
          />
        </div>
      </div>
    </div>
  );
};
