import { useEffect, useState } from "react";

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

const breakpointRems: Record<Breakpoint, number> = {
  sm: 40, // 640px
  md: 48, // 768px
  lg: 64, // 1024px
  xl: 80, // 1280px
  "2xl": 96, // 1536px
};

const getRootFontSize = (): number =>
  parseFloat(getComputedStyle(document.documentElement).fontSize);

const getCurrentRemWidth = (): number => window.innerWidth / getRootFontSize();

/**
 * Compares the current screen width to Tailwind-style breakpoints,
 * using `rem` units for accessibility.
 *
 * @param breakpoint the breakpoint to be monitored
 * @returns true if the screen is at least the size of the breakpoint
 */
export const useBreakpoint = (breakpoint: Breakpoint): boolean => {
  const [isAbove, setIsAbove] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return getCurrentRemWidth() >= breakpointRems[breakpoint];
  });

  useEffect(() => {
    const handleResize = () => {
      setIsAbove(getCurrentRemWidth() >= breakpointRems[breakpoint]);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isAbove;
};
