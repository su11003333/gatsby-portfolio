import { useEffect } from "react";

const DEFAULT_OPTIONS = {
  threshold: 0.18,
  rootMargin: "0px 0px -10% 0px"
};

const useAnimateOnScroll = (options) => {
  const { threshold, rootMargin } = options ?? DEFAULT_OPTIONS;

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const elements = document.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [threshold, rootMargin]);
};

export default useAnimateOnScroll;
