import { ColorName } from "@/features/products/types/colors";
import { SizeName } from "@/features/products/types/sizes";

export type CartItemType = {
  cartItemId: string;
  productId: string;
  color: ColorName;
  size: SizeName;
  quantity: number;
};
