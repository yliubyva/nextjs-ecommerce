"use client";
import { useEffect, useState } from "react";
import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import { ThumbProductCarousel } from "@/features/product-detail/components/ThumbProductCarousel";
import { Divider } from "@/shared/ui/atoms/Divider";
import { SingleColorSelect } from "@/shared/ui/molecules/SelectColor";
import { SingleSizeSelect } from "@/shared/ui/molecules/SelectSize";
import { QuantityCounter } from "@/shared/ui/atoms/QuantityCounter";
import { Button } from "@/shared/ui/molecules/Button";
import { Product } from "@/features/products/types/product";
import { SizeName } from "@/features/products/types/sizes";
import { ColorName } from "@/features/products/types/colors";
import { useAppDispatch } from "@/lib/redux/redux-hooks";
import { addToCart } from "@/features/cart/store/cartSlice";
import { CartItemType } from "@/features/cart/types/cartItem";

type Props = {
  product: Product;
  children: React.ReactNode;
};

export const ProductDetailClient: React.FC<Props> = ({ product, children }) => {
  const [selectedColor, setSelectedColor] = useState<ColorName | null>(null);
  const [selectedSize, setSelectedSize] = useState<SizeName | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

  useEffect(() => {
    if (!selectedColor && product.colors.length > 0) {
      setSelectedColor(product.colors[0].name);
    }

    if (!selectedSize && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
  }, []);

  const dispatch = useAppDispatch();

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
          {children}
          <div className="flex flex-col gap-[24px]">
            <Divider />
            <div>
              <p className="mb-[16px] text-sm text-primary xl:text-base">
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
              <p className="mb-[16px] text-sm text-primary xl:text-base">
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
                onIncrease={() => {
                  if (selectedQuantity < 10)
                    setSelectedQuantity(selectedQuantity + 1);
                }}
                onDecrease={() => {
                  if (selectedQuantity > 1)
                    setSelectedQuantity(selectedQuantity - 1);
                }}
                isCart={false}
              />
              <Button
                onClick={() => {
                  let itemForCart: CartItemType;

                  if (selectedColor && selectedSize) {
                    itemForCart = {
                      cartItemId: self.crypto.randomUUID(),
                      productId: product.id,
                      color: selectedColor,
                      size: selectedSize,
                      quantity: selectedQuantity,
                    };
                    dispatch(addToCart(itemForCart));
                  }
                }}
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
