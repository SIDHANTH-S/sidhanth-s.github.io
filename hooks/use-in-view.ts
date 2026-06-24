import { useEffect, useState, RefObject } from 'react';

interface UseInViewOptions {
  once?: boolean;
  margin?: string;
}

export function useInView(ref: RefObject<Element | null>, options: UseInViewOptions = {}) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options.once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!options.once) {
          setIsInView(false);
        }
      },
      {
        rootMargin: options.margin ?? '0px 0px 0px 0px',
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options.once, options.margin]);

  return isInView;
}
