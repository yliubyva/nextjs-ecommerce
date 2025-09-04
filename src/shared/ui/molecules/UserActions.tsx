"use client";
import Link from "next/link";
import Search from "@public/icons/icon-search.svg";
import Cart from "@public/icons/icon-cart.svg";
import Account from "@public/icons/icon-account.svg";
import { useAppSelector } from "@/lib/redux/redux-hooks";
import { selectTotalQuantities } from "@/features/cart/store/cartSelectors";
import { useState } from "react";
import { Modal } from "../atoms/Modal";
import { SearchBar } from "../atoms/SearchBar";
import { NoSSR } from "../atoms/NoSSR";

export const UserActions = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const totalQuantities = useAppSelector(selectTotalQuantities);
  return (
    <>
      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        title="Search"
      >
        <SearchBar />
      </Modal>
      <div className="flex items-center gap-[12px] xl:gap-[40px]">
        <div className="flex gap-[12px]">
          <button
            className="cursor-pointer"
            aria-label="Open search dialog"
            aria-haspopup="dialog"
            onClick={() => setIsOpenModal(true)}
          >
            <Search width={24} height={24} className="fill-black" />
          </button>
          <NoSSR>
            <Link
              href="/cart"
              className="relative"
              aria-label={
                totalQuantities >= 1
                  ? `Cart, ${totalQuantities} items`
                  : "Cart, empty"
              }
            >
              {totalQuantities >= 1 && (
                <div className="absolute top-[-10px] left-[15px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-red-400 text-xs text-white">
                  {totalQuantities}
                </div>
              )}
              <Cart width={24} height={24} />
            </Link>
          </NoSSR>
          <Account width={24} height={24} />
        </div>
      </div>
    </>
  );
};
