// lib/scroll-lock.ts
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export const setLenisInstance = (instance: Lenis | null) => {
  lenisInstance = instance;
};

export const lockScroll = () => {
  // Lock Lenis smooth scroll
  if (lenisInstance) {
    lenisInstance.stop();
  }

  // Calculate scrollbar width
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  // Lock native scroll
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = `${scrollbarWidth}px`; // Prevent layout shift
};

export const unlockScroll = () => {
  // Unlock Lenis smooth scroll
  if (lenisInstance) {
    lenisInstance.start();
  }

  // Unlock native scroll
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
};
