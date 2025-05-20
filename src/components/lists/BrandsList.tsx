import clsx from "clsx";
import Image from "next/image";

export function BrandsList() {
  const brands = [
    { name: "versace", src: "logos/logo-versace.svg" },
    { name: "zara", src: "logos/logo-zara.svg" },
    { name: "gucci", src: "logos/logo-gucci.svg" },
    { name: "prada", src: "logos/logo-prada.svg" },
    { name: "calvin-klein", src: "logos/logo-calvin.svg" },
  ];
  return (
    <div className="w-full overflow-hidden bg-black py-[40px] xl:py-[44px]">
      <div className="mx-auto flex w-[1200px] justify-between gap-[10%] overflow-hidden whitespace-nowrap">
        <ul className="animate-scroll flex min-w-full shrink-0 items-center justify-between gap-[40px]">
          {brands.map((logo, index) => (
            <li
              key={index}
              className={clsx(
                logo.name === "zara" ? "min-w-[65px]" : "min-w-[135px]",
              )}
              aria-hidden="true"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={135}
                height={26}
                className={clsx(logo.name === "zara" && "w-[65px]")}
              />
            </li>
          ))}
        </ul>
        <ul className="animate-scroll flex min-w-full shrink-0 items-center justify-between gap-[40px]">
          {brands.map((logo, index) => (
            <li
              key={index}
              className={clsx(
                logo.name === "zara" ? "min-w-[65px]" : "min-w-[135px]",
              )}
              aria-hidden="true"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={135}
                height={26}
                className={clsx(logo.name === "zara" && "w-[65px]")}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
