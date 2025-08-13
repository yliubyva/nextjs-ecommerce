import { ColorName } from "./colors";
import { SizeName } from "./sizes";
import { TypeClothesName } from "./clothes";

export type Color = {
  name: ColorName;
  images: string[];
};

type Review = {
  author: string;
  date: string;
  rating: number;
  text?: string;
};

export type Product = {
  id: string;
  title: string;
  category: "Men" | "Women";
  type: TypeClothesName;
  brand: "Versache" | "Zara" | "Gucci" | "Prade" | "Calvin Klein";
  price: number;
  discount: number | null;
  rating: number;
  colors: Color[];
  sizes: SizeName[];
  description: string;
  popularity: number;
  reviews?: Review[];
  arrivalDate: Date | string;
  inStock: boolean;
  tags?: string[];
  dressStyle: "Casual" | "Formal" | "Party" | "Gym";
};
