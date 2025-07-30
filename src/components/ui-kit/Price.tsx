import { formatPrice, calculateDiscountedPrice } from "@/utils/price";

type Props = { price: number; discount: number | null };

export const Price: React.FC<Props> = ({ price, discount }) => {
  return (
    <>
      {discount ? (
        <div className="flex items-center gap-[5px]">
          <p className="text-xl font-normal xl:text-2xl">
            {formatPrice(calculateDiscountedPrice(price, discount))}
          </p>
          <p className="text-sm font-normal text-gray-400 line-through xl:text-2xl">
            {formatPrice(price)}
          </p>
          <p className="flex h-[20px] w-[42px] items-center justify-center rounded-[60px] bg-(--color-discount-background) text-xs font-light text-(--color-discount-text)">
            -{discount}%
          </p>
        </div>
      ) : (
        <p className="text-xl font-normal xl:text-2xl">{formatPrice(price)}</p>
      )}
    </>
  );
};
