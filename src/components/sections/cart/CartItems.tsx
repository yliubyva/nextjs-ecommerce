"use client";
import { Divider } from "@/components/ui-kit/Divider";
import { CartItem } from "@/components/ui-kit/CartItem";
import { useAppSelector } from "@/lib/hooks";
import { Product } from "@/types/product";
import { getProduct } from "@/utils/getProduct";

export const CartItems = () => {
  const storeCart = useAppSelector((state) => state.cart.cartItems);
  const allProducts = useAppSelector((state) => state.products.all);
  return (
    <>
      {storeCart.length === 0 ? (
        <p className="h-full w-full max-w-[715px] md:py-[20px]">
          Your cart is currently empty.
        </p>
      ) : (
        <div className="h-full w-full max-w-[715px] rounded-[20px] border border-(--color-border-container) p-[14px] md:px-[24px] md:py-[20px]">
          {storeCart.map((cartItem, index) => {
            const product: Product | undefined = getProduct(
              cartItem.productId,
              allProducts,
            );
            if (!product) return;
            return (
              <div key={cartItem.cartItemId}>
                <CartItem
                  size={cartItem.size}
                  color={cartItem.color}
                  product={product}
                  selectedQuantity={cartItem.quantity}
                  cartItemId={cartItem.cartItemId}
                />
                {index < storeCart.length - 1 && (
                  <Divider addClass="my-[16px]" />
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
