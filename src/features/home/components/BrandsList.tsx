import clsx from "clsx";
import Image from "next/image";

export function BrandsList() {
  return (
    <div className="w-full overflow-hidden bg-black py-[40px] xl:py-[44px]">
      <div className="mx-auto flex w-[1200px] justify-between gap-[10%] overflow-hidden whitespace-nowrap">
        <List />
        <List />
      </div>
    </div>
  );
}

const List = () => {
  const brands = [
    { name: "versace", src: "logos/logo-versace.svg" },
    { name: "zara", src: "logos/logo-zara.svg" },
    { name: "gucci", src: "logos/logo-gucci.svg" },
    { name: "prada", src: "logos/logo-prada.svg" },
    { name: "calvin-klein", src: "logos/logo-calvin.svg" },
  ];
  return (
    <ul className="animate-scroll flex min-w-full shrink-0 items-center justify-between gap-[40px]">
      {brands.map((logo, index) => (
        <li
          key={index}
          className={clsx(
            logo.name === "zara" ? "min-w-[65px]" : "min-w-[135px]",
            "relative h-6.5",
          )}
          aria-hidden="true"
        >
          <Image
            src={logo.src}
            alt={logo.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={clsx("w-[135px]", logo.name === "zara" && "w-[65px]")}
          />
        </li>
      ))}
    </ul>
  );
};
