"use client";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton, usePrevNextButtons } from "./ArrowButtons";
import Image from "next/image";
import { Stars } from "@/components/ui-kit/Stars";
import { Container } from "@/components/ui-kit/Container";
import { useWindowWidth } from "@/hooks/useWindowWidth";

type Review = {
  id: number;
  userName: string;
  textReview: string;
  date?: string;
  rating: number;
};

type PropType = {
  title: string;
  slides: Review[];
};

export const ReviewsCarousel: React.FC<PropType> = (props) => {
  const { title, slides } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth > 1240;
  const slideWidth = isDesktop ? (windowWidth - 1240) / 2 : 0;

  return (
    <>
      <Container>
        <div className="mb-[24px] flex justify-between xl:mb-[40px]">
          <h2 className="font-hubot w-[286px] text-3xl font-black uppercase md:w-full xl:text-5xl">
            {title}
          </h2>
          <div className="flex items-center justify-between gap-[4px]">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </Container>
      <div className="relative mx-auto w-full min-w-[358px] px-[10px]">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-[20px] flex touch-pan-y touch-pinch-zoom">
            {slides.concat(slides).map((review, index) => (
              <div
                className="flex-[0_0_40%] pl-[20px] md:flex-[0_0_0]"
                key={index}
              >
                <div className="border-border-container h-full w-full min-w-[312px] rounded-[20px] border p-[24px] xl:min-w-[400px]">
                  <Stars rating={review.rating} showNum={false} />
                  <div className="mt-[12px] mb-[8px] flex gap-[4px]">
                    <p className="text-base font-bold xl:text-xl">
                      {review.userName}
                    </p>
                    <Image
                      src="/icons/checkmark.svg"
                      alt="checkmark icon"
                      width={16}
                      height={16}
                    />
                  </div>
                  <p className="max-w-[336px] min-w-[250px] text-xs text-(--color-text-primary) xl:text-base">
                    {review.textReview}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {isDesktop && (
          <>
            <div
              style={{ width: `${slideWidth}px` }}
              className="absolute top-0 left-0 z-50 h-full backdrop-blur-xs"
            ></div>
            <div
              style={{ width: `${slideWidth}px` }}
              className="absolute top-0 right-0 z-50 h-full backdrop-blur-xs"
            ></div>
          </>
        )}
      </div>
    </>
  );
};
