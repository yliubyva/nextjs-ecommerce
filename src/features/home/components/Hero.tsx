import clsx from "clsx";
import Image from "next/image";
import { Container } from "@/shared/ui/atoms/Container";
import { Button } from "@/shared/ui/molecules/Button";
import { BrandsList } from "@/features/home/components/BrandsList";

export const Hero = () => {
  const usp = [
    { value: "200+", label: "International Brands" },
    { value: "2,000+", label: "High-Quality Products" },
    { value: "30,000+", label: "Happy Customers" },
  ];

  return (
    <section className="bg-category-background mb-12.5 xl:mb-18">
      <Container>
        <div className="flex flex-col items-center sm:flex-row sm:justify-between md:justify-evenly xl:justify-between">
          <div className="pt-10 md:pb-5 xl:pt-25 xl:pb-12.5">
            <div className="mb-5 flex flex-col gap-5 xl:mb-12 xl:gap-[30px]">
              <h1 className="font-hubot w-[315px] text-4xl font-black xl:w-[580px] xl:text-6xl">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-primary max-w-[358px] text-sm xl:max-w-[580px] xl:text-base">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Button variant="primary" href="/shop">
                Shop Now
              </Button>
            </div>
            <div className="grid-cols mx-auto grid max-w-[280px] justify-between justify-items-center md:mx-0 md:max-w-[600px]">
              {usp.map((item, index) => (
                <div
                  key={index}
                  className={clsx(
                    index === 2 &&
                      "col-[1/4] row-start-2 justify-self-center md:col-[5/6] md:row-start-1",
                  )}
                >
                  <span className="text-2xl font-medium xl:text-4xl">
                    {item.value}
                  </span>
                  <p className="text-primary text-xs xl:text-base">
                    {item.label}
                  </p>
                </div>
              ))}
              <div className="bg-secondary col-start-2 col-end-3 row-start-1 h-13 w-[1px] justify-self-center xl:h-[74px]"></div>
              <div className="bg-secondary col-start-4 col-end-5 row-start-1 hidden h-[52px] w-[1px] md:block xl:h-[74px]"></div>
            </div>
          </div>
          <div className="relative h-100 w-full max-w-100 min-w-[390px] sm:self-end xl:h-[580px] xl:max-w-[610px]">
            <Image
              src="/hero-image.webp"
              alt="hero image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 33px"
              priority={true}
            />
            <Image
              src="/vector-star.svg"
              alt="star-icon"
              width={44}
              height={44}
              className="absolute top-[137px] left-[27px] xl:top-[280px] xl:left-0 xl:h-[56px] xl:w-[56px]"
            />
            <Image
              src="/vector-star.svg"
              alt="star-icon"
              width={76}
              height={76}
              className="absolute top-[40px] right-[21px] xl:top-[86px] xl:right-0 xl:h-[104px] xl:w-[104px]"
            />
          </div>
        </div>
      </Container>
      <BrandsList />
    </section>
  );
};
