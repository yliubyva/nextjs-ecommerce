"use client";
import { useAppSelector } from "@/lib/hooks";
import { Button } from "../../ui-kit/Button";
import { Divider } from "../../ui-kit/Divider";
import { selectTotalPrice } from "@/lib/selectors/cartSelectors";
import { formatPrice } from "@/utils/price";

export const OrderSummary = () => {
  const subtotalPrice = useAppSelector(selectTotalPrice);
  const deliveryFee = subtotalPrice ? 15 : 0;
  const totalPrice = subtotalPrice + deliveryFee;
  return (
    <div className="max-h-[400px] w-full max-w-[715px] rounded-[20px] border border-(--color-border-container) p-[20px] md:col-span-5 md:max-w-[505px] md:px-[24px]">
      <h2 className="mb-[16px] text-xl font-medium md:mb-[24px] md:text-2xl">
        Order Summary
      </h2>
      <div className="mb-[16px] flex flex-col gap-[20px] md:mb-[24px]">
        <div className="flex w-full justify-between">
          <p className="text-base text-(--color-text-primary) md:text-xl">
            Subtotal
          </p>
          <span className="text-base font-normal md:text-xl md:font-medium">
            {formatPrice(subtotalPrice)}
          </span>
        </div>
        <div className="flex w-full justify-between">
          <p className="text-base text-(--color-text-primary) md:text-xl">
            Delivery Fee
          </p>
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
        label="Go to Checkout"
        onClick={() => console.log("clicked")}
        variant="primary"
        addStyle="w-full max-w-[715px] md:max-w-[505px] xl:max-w-[505px]"
      />
    </div>
  );
};
