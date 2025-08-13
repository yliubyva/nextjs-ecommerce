import { Hero } from "@/features/home/components/Hero";
import { NewArrivals } from "@/features/home/components/NewArrivals";
import { TopSelling } from "@/features/home/components/TopSelling";
import { BrowseByDressStyle } from "@/features/home/components/BrowseByDressStyle";
import { OurHappyCustomers } from "@/features/home/components/OurHappyCustomers";
import { Container } from "@/shared/ui/atoms/Container";
import { Divider } from "@/shared/ui/atoms/Divider";
import { getAllProducts } from "@/lib/api/products";
import { Product } from "@/features/products/types/product";

export default async function Home() {
  const products: Product[] = await getAllProducts();
  return (
    <main>
      <Hero />
      <NewArrivals products={products} />
      <Container>
        <Divider addClass="mb-[40px] xl:mb-[64px]" />
      </Container>
      <TopSelling products={products} />
      <BrowseByDressStyle />
      <OurHappyCustomers />
    </main>
  );
}
