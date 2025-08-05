import { Hero } from "@/components/sections/home/Hero";
import { NewArrivals } from "@/components/sections/home/NewArrivals";
import { TopSelling } from "@/components/sections/home/TopSelling";
import { BrowseByDressStyle } from "@/components/sections/home/BrowseByDressStyle";
import { OurHappyCustomers } from "@/components/sections/home/OurHappyCustomers";
import { Container } from "@/components/ui-kit/Container";
import { Divider } from "@/components/ui-kit/Divider";
import { Product } from "@/types/product";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/products/");
  const products: Product[] = await res.json();
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
