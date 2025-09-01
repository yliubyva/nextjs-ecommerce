"use client";

import { useEffect, useState } from "react";
import Arrow from "@public/icons/arrow-bottom.svg";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="fixed right-4 bottom-4 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="cursor-pointer rounded-full bg-black p-3 text-white shadow-lg transition-opacity duration-300 hover:opacity-50 focus:outline-none"
        >
          <Arrow className="h-6 w-6 rotate-180 fill-white" />
        </button>
      )}
    </div>
  );
};
