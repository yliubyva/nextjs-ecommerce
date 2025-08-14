"use client";
import { useAppSelector } from "@/lib/redux/redux-hooks";
import { Button } from "@/shared/ui/molecules/Button";
import { Divider } from "@/shared/ui/atoms/Divider";
import { selectTotalPrice } from "@/features/cart/store/cartSelectors";
import { formatPrice } from "@/shared/utils/price";
import Arrow from "@public/icons/arrow.svg";

export const OrderSummary = () => {
  const subtotalPrice = useAppSelector(selectTotalPrice);
  const deliveryFee = subtotalPrice ? 15 : 0;
  const totalPrice = subtotalPrice + deliveryFee;
  return (
    <div className="border-secondary max-h-[400px] w-full max-w-[715px] rounded-[20px] border p-[20px] md:col-span-5 md:max-w-[505px] md:px-[24px]">
      <h2 className="mb-[16px] text-xl font-medium md:mb-[24px] md:text-2xl">
        Order Summary
      </h2>
      <div className="mb-[16px] flex flex-col gap-[20px] md:mb-[24px]">
        <div className="flex w-full justify-between">
          <p className="text-primary text-base md:text-xl">Subtotal</p>
          <span className="text-base font-normal md:text-xl md:font-medium">
            {formatPrice(subtotalPrice)}
          </span>
        </div>
        <div className="flex w-full justify-between">
          <p className="text-primary text-base md:text-xl">Delivery Fee</p>
          <span className="text-base font-normal md:text-xl md:font-medium">
            {formatPrice(deliveryFee)}
          </span>
        </div>
        <Divider />
        <div className="flex w-full justify-between">
          <p className="text-base md:text-xl">Total</p>
          <span className="text-base font-normal md:text-xl md:font-medium">
            {formatPrice(totalPrice)}
          </span>
        </div>
      </div>
      <Button
        onClick={() => console.log("clicked")}
        variant="primary"
        addStyle="w-full max-w-[715px] md:max-w-[505px] xl:max-w-[505px] gap-[12px] group"
      >
        Go to Checkout
        <Arrow className="h-[20px] w-[20px] scale-x-[-1] fill-white transition delay-150 duration-300 ease-in-out group-hover:fill-black md:h-[24px] md:w-[24px]" />
      </Button>
    </div>
  );
};
