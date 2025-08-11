"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import clsx from "clsx";
import Burger from "@public/icons/icon-burger.svg";
import Close from "@public/icons/icon-close.svg";
import Arrow from "@public/icons/arrow-bottom.svg";

export const Navigation = () => {
  const [openState, setOpenState] = useState({
    menu: false,
    shop: false,
  });

  const menuRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();
  const width = useWindowWidth();
  const isMobile = width !== null && 768 > width;

  function toggleSection(section: "menu" | "shop") {
    setOpenState((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        openState.menu &&
        isMobile &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpenState((prev) => ({ ...prev, menu: false }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openState.menu, isMobile]);

  useEffect(() => {
    if (openState.menu) {
      setOpenState((prev) => ({ ...prev, menu: false }));
    }
  }, [pathname]);
  return (
    <>
      <div className="flex items-center gap-[16px] xl:gap-[0]">
        <button
          onClick={() => toggleSection("menu")}
          className="h-[24px] w-[24px] cursor-pointer md:hidden"
        >
          {openState.menu ? (
            <Close width={20} height={20} />
          ) : (
            <Burger width={24} height={24} />
          )}
        </button>
        <Link href="/">
          <Image
            src="/logo.svg"
            width={126}
            height={18}
            alt="logo"
            priority={true}
            className="h-[18px] w-[126px] xl:h-[30px] xl:w-[160px]"
          />
        </Link>
      </div>
      <nav>
        <div
          className={clsx(
            "absolute top-[64px] right-0 -z-1 h-screen w-full bg-white/20 backdrop-blur-sm transition-opacity duration-300 ease-in-out md:hidden",
            openState.menu
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0",
          )}
        ></div>
        <ul
          ref={menuRef}
          className={clsx(
            "absolute top-[64px] left-0 z-50 flex h-screen w-[80%] flex-col gap-[50px] bg-black pt-[30px] pb-[30px] pl-[20px] text-white transition-transform duration-300 ease-in-out md:static md:h-full md:w-full md:translate-x-0 md:flex-row md:items-center md:gap-[24px] md:bg-transparent md:p-0 md:text-black",
            openState.menu ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <li
            onMouseEnter={() =>
              setOpenState((prev) => ({ ...prev, shop: true }))
            }
          >
            <button
              className="flex cursor-pointer items-center gap-[5px]"
              onClick={() => toggleSection("shop")}
            >
              Shop
              <Arrow
                className={clsx(
                  "relative z-20 fill-white transition duration-300 ease-in-out md:fill-black",
                  openState.shop && "rotate-180",
                )}
              />
            </button>

            <div
              className={clsx(
                "transition-translate ml-[30px] flex flex-col justify-center gap-[30px] duration-200 ease-in-out md:absolute md:top-[45px] md:ml-0 md:h-[100px] md:w-[100px] md:bg-white md:pl-[10px] md:drop-shadow-xs xl:top-[60px]",
                openState.shop
                  ? "h-full translate-y-0 opacity-100"
                  : "relative -z-1 hidden h-0 -translate-y-[30px] opacity-0",
              )}
              onMouseLeave={() =>
                setOpenState((prev) => ({ ...prev, shop: false }))
              }
            >
              <Link href="/shop/men" className="text-sm hover:opacity-50">
                Men
              </Link>
              <Link href="/shop/women" className="text-sm hover:opacity-50">
                Women
              </Link>
            </div>
          </li>
          <li>
            <Link href="/" className="hover:opacity-50">
              On Sale
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:opacity-50">
              New Arrivals
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:opacity-50">
              Brands
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
