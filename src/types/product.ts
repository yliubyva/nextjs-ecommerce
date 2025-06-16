import { ColorName } from "@/data/colors";

type Color = {
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
  type: "T-shirt" | "Shorts" | "Shirts" | "Hoodie" | "Jeans";
  brand: "Versache" | "Zara" | "Gucci" | "Prade" | "Calvin Klein";
  price: number;
  discount: number | null;
  rating: number;
  colors: Color[];
  sizes: Array<"Small" | "Medium" | "Large" | "X-Large">;
  description: string;
  popularity: number;
  reviews?: Review[];
  arrivalDate: Date | string;
  inStock: boolean;
  tags?: string[];
  dressStyle: "Casual" | "Formal" | "Party" | "Gym";
};
