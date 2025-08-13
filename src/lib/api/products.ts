import { Product } from "@/features/products/types/product";

export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3000/api/products/");
  return res.json();
}
