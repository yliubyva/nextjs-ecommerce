import { useState, useEffect } from "react";

export const useWindowWidth = (): number => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    let timeoutId: number;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setWidth(window.innerWidth);
      }, 200);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};
