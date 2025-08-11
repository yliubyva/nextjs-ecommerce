"use client";
import Link from "next/link";
import Search from "@public/icons/icon-search.svg";
import Cart from "@public/icons/icon-cart.svg";
import Account from "@public/icons/icon-account.svg";
import { useAppSelector } from "@/lib/hooks";
import { selectTotalQuantities } from "@/lib/selectors/cartSelectors";

export const UserActions = () => {
  const totalQuantities = useAppSelector(selectTotalQuantities);

  return (
    <div className="flex items-center gap-[12px] xl:gap-[40px]">
      <div className="h-[24px] bg-white xl:flex xl:h-[48px] xl:w-[577px] xl:items-center xl:justify-evenly xl:rounded-[62px] xl:bg-(--color-category-background) xl:px-[8px] xl:py-[6px] xl:text-stone-300">
        <button className="cursor-pointer">
          <Search
            width={24}
            height={24}
            className="fill-black xl:h-[20px] xl:w-[20px] xl:fill-stone-400"
          />
        </button>

        <input
          type="text"
          className="hidden w-[520px] text-black outline-none xl:block"
          placeholder="Search for products..."
        />
      </div>
      <div className="flex gap-[12px]">
        <Link href="/cart" className="relative">
          {totalQuantities >= 1 && (
            <div className="absolute top-[-10px] left-[15px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-red-400 text-xs text-white">
              {totalQuantities}
            </div>
          )}
          <Cart width={24} height={24} />
        </Link>
        <Account width={24} height={24} />
      </div>
    </div>
  );
};
