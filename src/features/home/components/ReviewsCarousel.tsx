"use client";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/features/home/components/ArrowButtons";
import { Stars } from "@/shared/ui/atoms/Stars";
import { Container } from "@/shared/ui/atoms/Container";
import { useWindowWidth } from "@/shared/hooks/useWindowWidth";
import Checkmark from "@public/icons/checkmark.svg";
import Autoplay from "embla-carousel-autoplay";

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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [Autoplay({ playOnInit: true, delay: 5000 })],
  );

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
        <div className="mb- mb-6 flex justify-between xl:mb-10">
          <h2 className="font-hubot w-[286px] text-3xl font-black uppercase md:w-full xl:text-5xl">
            {title}
          </h2>
          <div className="flex items-center justify-between gap-10 md:gap-1">
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
      <div className="relative mx-auto w-full min-w-[358px] px-2.5">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-1.25 flex touch-pan-y touch-pinch-zoom">
            {slides.concat(slides).map((review, index) => (
              <div
                className="flex-[0_0_40%] pl-[20px] md:flex-[0_0_0]"
                key={index}
              >
                <div className="border-secondary h-full w-full min-w-[312px] rounded-[20px] border p-6 xl:min-w-[400px]">
                  <Stars rating={review.rating} showNum={false} />
                  <div className="mt-3 mb-2 flex items-center gap-1">
                    <p className="text-base font-bold xl:text-xl">
                      {review.userName}
                    </p>
                    <Checkmark width={19} height={19} />
                  </div>
                  <p className="text-primary max-w-[336px] min-w-[250px] text-xs xl:text-base">
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
