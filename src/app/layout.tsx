import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/ui-kit/Breadcrumbs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shop – Trendy Fashion Store",
  description:
    "ShopVerse is a modern online clothing store offering the latest fashion for men and women. Discover new styles, browse curated collections, and shop with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-lexend flex h-screen flex-col font-extralight">
        <header className="fixed right-0 left-0 z-100 bg-white">
          <Header />
        </header>
        <div className="mt-[64px] mb-[184px] flex-[1] xl:mt-[96px]">
          <Breadcrumbs />
          {children}
        </div>
        <footer className="bg-(--color-category-background)">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
