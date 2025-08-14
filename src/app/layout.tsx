import type { Metadata } from "next";
import { Header } from "@/shared/ui/organisms/Header";
import { Footer } from "@/shared/ui/organisms/Footer";
import { Breadcrumbs } from "@/shared/ui/molecules/Breadcrumbs";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { getAllProducts } from "@/lib/api/products";
import { Product } from "@/features/products/types/product";

export const metadata: Metadata = {
  title: "Shop – Trendy Fashion Store",
  description:
    "ShopVerse is a modern online clothing store offering the latest fashion for men and women. Discover new styles, browse curated collections, and shop with ease.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const allProducts: Product[] = await getAllProducts();
  return (
    <html lang="en">
      <body className="font-lexend flex h-screen flex-col font-extralight">
        <StoreProvider allProducts={allProducts}>
          <Header />
          <div className="mt-[64px] mb-[184px] flex-[1] xl:mt-[96px]">
            <Breadcrumbs />
            {children}
          </div>
          <footer className="bg-category-background">
            <Footer />
          </footer>
        </StoreProvider>
      </body>
    </html>
  );
}
