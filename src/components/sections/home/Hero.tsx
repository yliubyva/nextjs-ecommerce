"use client";
import clsx from "clsx";
import Image from "next/image";
import { Container } from "@/components/ui-kit/Container";
import { Button } from "@/components/ui-kit/Button";
import { BrandsList } from "@/components/lists/BrandsList";

export const Hero = () => {
  const usp = [
    { value: "200+", label: "International Brands" },
    { value: "2,000+", label: "High-Quality Products" },
    { value: "30,000+", label: "Happy Customers" },
  ];

  return (
    <section className="mb-[50px] bg-(--color-category-background) xl:mb-[72px]">
      <Container>
        <div className="flex flex-col items-center sm:flex-row sm:justify-between md:justify-evenly xl:justify-between">
          <div className="pt-[40px] md:pb-[20px] xl:pt-[100px] xl:pb-[50px]">
            <div className="mb-[20px] flex flex-col gap-[20px] xl:mb-[48px] xl:gap-[30px]">
              <h1 className="font-hubot w-[315px] text-4xl font-black xl:w-[580px] xl:text-6xl">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="max-w-[358px] text-sm text-(--color-text-primary) xl:max-w-[580px] xl:text-base">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Button variant="primary" label="Shop Now" href="/shop" />
            </div>
            <div className="grid-cols-[1fr 1px 1fr] md:grid-cols-[1fr 1px 1fr 1px 1fr] mx-auto grid max-w-[280px] justify-between justify-items-center md:mx-0 md:max-w-[600px]">
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
                  <p className="text-xs text-(--color-text-primary) xl:text-base">
                    {item.label}
                  </p>
                </div>
              ))}
              <div className="col-start-2 col-end-3 row-start-1 h-[52px] w-[1px] justify-self-center bg-(--color-border-container) xl:h-[74px]"></div>
              <div className="col-start-4 col-end-5 row-start-1 hidden h-[52px] w-[1px] bg-(--color-border-container) md:block xl:h-[74px]"></div>
            </div>
          </div>
          <div className="relative sm:self-end">
            <Image
              src="/hero-image.png"
              alt="hero image"
              width={390}
              height={448}
              className="xl:h-[580px] xl:w-full"
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
