// import { Product } from "@/features/products/types/product";
import { products } from "@/data/products";

// export async function getAllProducts(): Promise<Product[]> {
//   const res = await fetch(`${process.env.BASE_URL ?? ""}/api/products/`);
//   return res.json();
// }

export const getAllProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return products;
};

export const getProductBySlug = async (slug: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return products.find((item) => item.id === slug);
};
