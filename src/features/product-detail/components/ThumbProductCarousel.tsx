"use client";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Thumb } from "./ThumbButton";
import Image from "next/image";

type PropType = {
  slides: string[];
  axis: "x" | "y";
};

export const ThumbProductCarousel: React.FC<PropType> = ({ slides, axis }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({
    axis: axis,
  });
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    axis: axis,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect, axis]);

  return (
    <div className="mx-auto grid w-full max-w-[640px] grid-cols-1 grid-rows-[290px_106px] gap-[12px] sm:max-w-[1024px] sm:grid-rows-[728px_168px] lg:h-[530px] lg:w-[610px] lg:grid-cols-[152px_444px] lg:grid-rows-1">
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="-ml-[16px] flex touch-pan-y touch-pinch-zoom flex-row sm:h-[728px] lg:col-start-2 lg:-mt-[2px] lg:-ml-0 lg:h-[530px] lg:touch-pan-x lg:flex-col">
          {slides.map((item, index) => (
            <div
              className="min-w-0 flex-[0_0_100%] pl-[16px] lg:min-h-0 lg:flex-[0_0_530px] lg:pt-[2px] lg:pl-0"
              key={index}
            >
              <div className="relative flex h-[290px] w-full items-center justify-center overflow-hidden rounded-[20px] select-none sm:h-full lg:w-[444px] lg:flex-col">
                <Image
                  src={item}
                  alt="product image"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="h-[290px] w-full min-w-[312px] object-cover sm:h-full lg:max-h-[530px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="overflow-hidden lg:col-start-1 lg:row-start-1"
        ref={emblaThumbsRef}
      >
        <div className="-ml-[12px] flex flex-row lg:-mt-[14px] lg:-ml-0 lg:h-[530px] lg:flex-col">
          {slides.map((item, index) => (
            <Thumb
              key={index}
              selected={index === selectedIndex}
              src={item}
              onClick={() => onThumbClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
