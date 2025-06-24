import { NextResponse } from "next/server";
import { products } from "@/data/products";

type Params = {
  params: {
    slug: string;
  };
};

export async function GET(_: Request, { params }: Params) {
  const { slug } = await params;
  const product = products.find((item) => item.id === slug);

  if (!product) {
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}
