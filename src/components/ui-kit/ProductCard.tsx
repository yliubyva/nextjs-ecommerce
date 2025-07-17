import Image from "next/image";
import Link from "next/link";
import { Stars } from "@/components/ui-kit/Stars";
import { Price } from "@/components/ui-kit/Price";
import clsx from "clsx";

type Props = {
  id: string;
  category: string;
  productName: string;
  image: string;
  rating: number;
  price: number;
  discount: number | null;
  isHeroPage: boolean;
};

export const ProductCard: React.FC<Props> = ({
  id,
  category,
  productName,
  image,
  rating,
  price,
  discount,
  isHeroPage,
}) => {
  return (
    <div
      className={clsx(
        "w-full xl:h-[415px] xl:overflow-hidden xl:bg-white xl:transition-all xl:transition-discrete xl:hover:absolute xl:hover:h-[425px] xl:hover:rounded-[30px] xl:hover:p-[5px] xl:hover:drop-shadow-xl",
        isHeroPage
          ? "max-w-[198px] md:max-w-[295px]"
          : "xs:h-[257px] h-[390px] min-w-[175px] md:max-w-[295px] xl:w-[295px]",
      )}
    >
      <Link href={`/shop/${category}/${id}`}>
        <div
          className={clsx(
            "relative mb-[10px] w-full overflow-hidden rounded-3xl xl:mb-[16px] xl:h-[298px]",
            isHeroPage
              ? "h-[200px] w-[198px] md:h-[298px] md:w-full md:max-w-[295px]"
              : "xs:h-[174px] h-[275px]",
          )}
        >
          <Image
            src={image}
            alt={productName}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
          />
        </div>
        <div className="flex flex-col gap-[4px] xl:gap-[8px]">
          <p
            className="w-full max-w-[198px] overflow-hidden text-base font-medium text-nowrap text-ellipsis xl:w-full xl:text-xl"
            title={productName}
          >
            {productName}
          </p>
          <Stars rating={rating} showNum />
          <Price price={price} discount={discount} />
        </div>
      </Link>
    </div>
  );
};

export const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-[198px] animate-pulse md:max-w-[295px] xl:h-[415px]">
      <div className="mb-[10px] h-[200px] w-[198px] rounded-3xl bg-gray-200 md:mb-[16px] md:h-[298px] md:w-[295px]"></div>
      <div className="flex flex-col gap-[4px] xl:gap-[8px]">
        <div className="h-[24px] w-3/4 rounded bg-gray-300 xl:h-[28px]"></div>
        <div className="h-[24px] w-3/5 rounded bg-gray-200"></div>
        <div className="h-[28px] w-1/2 rounded bg-gray-300 xl:h-[32px]"></div>
      </div>
    </div>
  );
};
