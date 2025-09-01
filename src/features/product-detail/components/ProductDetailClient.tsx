"use client";
import { useState } from "react";
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
import Check from "@public/icons/checkmark-white.svg";
import { Modal } from "@/shared/ui/atoms/Modal";

type Props = {
  product: Product;
  children: React.ReactNode;
};

export const ProductDetailClient: React.FC<Props> = ({ product, children }) => {
  const [selectedColor, setSelectedColor] = useState<ColorName | null>(null);
  const [selectedSize, setSelectedSize] = useState<SizeName | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        key={"thumb-carousel"}
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
              <p className="text-primary mb-[16px] text-sm xl:text-base">
                Select Color
              </p>
              <SingleColorSelect
                colors={product.colors.map((color) => color.name)}
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
              />
            </div>
            <Divider />
            <div>
              <p className="text-primary mb-[16px] text-sm xl:text-base">
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
                  setIsModalOpen(true);
                }}
                variant="primary"
                addStyle="max-w-full"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title=""
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="relative flex h-14 w-14 animate-bounce items-center justify-center rounded-full bg-emerald-500">
            <Check className="fill-white" />
          </div>
          <p className="text-xl font-medium">Success!</p>
          <p className="text-center">{product.title} has been added.</p>
          <p>Continue shopping or go to cart.</p>
          <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-evenly md:gap-2">
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Continue
            </Button>
            <Button variant="secondary" href="/cart">
              Go to cart
            </Button>
          </div>
        </div>
      </Modal>
    </section>
  );
};
