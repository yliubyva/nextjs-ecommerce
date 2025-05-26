import Image from "next/image";
import Link from "next/link";
import { Stars } from "@/components/ui-kit/Stars";
import { Price } from "@/components/ui-kit/Price";

type Props = {
  id: string;
  productName: string;
  image: string;
  rating: number;
  price: number;
  discount: number | null;
};

export const ProductCard: React.FC<Props> = ({
  id,
  productName,
  image,
  rating,
  price,
  discount,
}) => {
  return (
    <div className="w-full max-w-[198px] md:max-w-[295px] xl:h-[415px] xl:overflow-hidden xl:bg-white xl:transition-all xl:transition-discrete xl:hover:absolute xl:hover:h-[425px] xl:hover:rounded-[30px] xl:hover:p-[5px] xl:hover:drop-shadow-xl">
      <Link href={`/product-detail/${id}`}>
        <div className="mb-[10px] h-[200px] w-[198px] overflow-hidden rounded-3xl md:mb-[16px] md:h-[298px] md:w-full md:max-w-[295px]">
          <Image
            src={image}
            alt={productName}
            width={198}
            height={200}
            className="h-[200px] w-[198px] object-cover object-center md:h-[298px] md:w-[295px]"
          />
        </div>
        <div className="flex flex-col gap-[4px] xl:gap-[8px]">
          <p
            className="w-[198px] overflow-hidden text-base font-medium text-nowrap text-ellipsis xl:w-full xl:text-xl"
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
