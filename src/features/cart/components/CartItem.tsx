"use client";
import Image from "next/image";
import { QuantityCounter } from "@/shared/ui/atoms/QuantityCounter";
import TrashCan from "@public/icons/icon-trash-can.svg";
import { formatPrice } from "@/shared/utils/price";
import { getFinalPrice } from "@/features/products/utils/product-helpers";
import Link from "next/link";
import { useAppDispatch } from "@/lib/redux/redux-hooks";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/features/cart/store/cartSlice";
import { Product } from "@/features/products/types/product";

type Props = {
  size: string;
  color: string;
  product: Product;
  selectedQuantity: number;
  cartItemId: string;
};

export const CartItem: React.FC<Props> = ({
  size,
  color,
  product,
  selectedQuantity,
  cartItemId,
}) => {
  const dispatch = useAppDispatch();

  const colorIndex: number = product.colors.findIndex(
    (item) => item.name === color,
  );
  return (
    <div className="flex w-full min-w-[330px] items-center gap-[14px] md:gap-[16px]">
      <div className="h-[99px] w-full max-w-[99px] overflow-hidden rounded-[9px] md:h-[124px] md:max-w-[124px]">
        <Image
          src={product.colors[colorIndex].images[0]}
          alt={product.title}
          width={99}
          height={99}
          className="object-cover object-center md:h-[124px] md:w-[124px]"
        />
      </div>
      <div className="flex h-full w-full flex-col justify-between">
        <div className="flex flex-col gap-[1px] md:gap-[2px]">
          <div className="flex items-center justify-between">
            <Link
              href={`/shop/${product.category.toLowerCase()}/${product.id}`}
              className="text-base font-medium md:text-xl"
            >
              {product.title}
            </Link>
            <button
              onClick={() => dispatch(removeFromCart(cartItemId))}
              className="cursor-pointer transition-all ease-in-out hover:opacity-50"
            >
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
            {formatPrice(getFinalPrice(product) * selectedQuantity)}
          </p>
          <QuantityCounter
            counter={selectedQuantity}
            isCart
            onIncrease={() => dispatch(increaseQuantity(cartItemId))}
            onDecrease={() => dispatch(decreaseQuantity(cartItemId))}
          />
        </div>
      </div>
    </div>
  );
};
