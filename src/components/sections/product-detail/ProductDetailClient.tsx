"use client";
import { useEffect, useState } from "react";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { ThumbProductCarousel } from "@/components/EmblaCarousel/ThumbProductCarousel";
import { Divider } from "@/components/ui-kit/Divider";
import { Price } from "@/components/ui-kit/Price";
import { Stars } from "@/components/ui-kit/Stars";
import { SingleColorSelect } from "@/components/ui-kit/SelectColor";
import { SingleSizeSelect } from "@/components/ui-kit/SelectSize";
import { QuantityCounter } from "@/components/ui-kit/QuantityCounter";
import { Button } from "@/components/ui-kit/Button";
import { Product } from "@/types/product";
import { SizeName } from "@/types/sizes";
import { ColorName } from "@/types/colors";

type Props = {
  product: Product;
};

export const ProductDetailClient: React.FC<Props> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState<ColorName | null>(null);
  const [selectedSize, setSelectedSize] = useState<SizeName | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  useEffect(() => {
    if (!selectedColor && product.colors.length > 0) {
      setSelectedColor(product.colors[0].name);
    }
  }, [selectedColor, product.colors]);

  const width = useWindowWidth();
  const isMobile = width !== null && width < 1024;

  const selectedColorData = product.colors.find(
    (color) => color.name === selectedColor,
  );

  const renderCarousel = () => {
    if (!selectedColorData?.images?.length) return null;

    return (
      <ThumbProductCarousel
        key={isMobile ? "mobile" : "desktop"}
        slides={selectedColorData.images}
        axis={isMobile ? "x" : "y"}
      />
    );
  };

  return (
    <section>
      <div className="flex flex-col gap-[20px] lg:flex-row lg:gap-[40px]">
        {renderCarousel()}
        <div>
          <div className="mb-[24px]">
            <div className="mb-[20px] flex flex-col gap-[12px]">
              <h1 className="font-hubot text-2xl font-black uppercase xl:w-[600px] xl:text-4xl">
                {product.title}
              </h1>
              <Stars rating={product.rating} showNum />
              <Price price={product.price} discount={product.discount} />
            </div>
            <p className="text-sm text-(--color-text-primary) xl:text-base">
              {product.description}
            </p>
          </div>
          <div className="flex flex-col gap-[24px]">
            <Divider />
            <div>
              <p className="mb-[16px] text-sm text-(--color-text-primary) xl:text-base">
                Select Colors
              </p>
              <SingleColorSelect
                colors={product.colors.map((color) => color.name)}
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
              />
            </div>
            <Divider />
            <div>
              <p className="mb-[16px] text-sm text-(--color-text-primary) xl:text-base">
                Chooze Size
              </p>
              <SingleSizeSelect
                sizes={product.sizes}
                selectedSize={selectedSize}
                onSizeChange={setSelectedSize}
              />
            </div>
            <Divider />
            <div className="flex gap-[12px]">
              <QuantityCounter
                counter={selectedQuantity}
                onCounterChange={setSelectedQuantity}
                isCart={false}
              />
              <Button
                onClick={() =>
                  console.log(
                    `Added: ${product.id} ${selectedColor} ${selectedSize} ${selectedQuantity}`,
                  )
                }
                label="Add to Cart"
                variant="primary"
                addStyle="max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
