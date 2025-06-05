import { Hero } from "@/components/sections/home/Hero";
import { NewArrivals } from "@/components/sections/home/NewArrivals";
import { TopSelling } from "@/components/sections/home/TopSelling";
import { BrowseByDressStyle } from "@/components/sections/home/BrowseByDressStyle";
import { OurHappyCustomers } from "@/components/sections/home/OurHappyCustomers";
import { Container } from "@/components/ui-kit/Container";
import { Divider } from "@/components/ui-kit/Divider";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewArrivals />
      <Container>
        <Divider addClass="mb-[40px] xl:mb-[64px]" />
      </Container>
      <TopSelling />
      <BrowseByDressStyle />
      <OurHappyCustomers />
    </main>
  );
}
