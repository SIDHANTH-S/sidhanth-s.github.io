"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll position to top on route change
    // The small delay ensures it happens after React DOM updates
    // and after any scroll-jacking libraries (like Lenis) unmount
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}
