"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px",
        ...options,
      }
    );

    const children = element.querySelectorAll(".scroll-reveal");
    children.forEach((child) => observer.observe(child));

    if (element.classList.contains("scroll-reveal")) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [options]);

  return ref;
}
