import { useEffect, useRef, useState } from "react";

/**
 * useReveal
 * Lightweight scroll-reveal hook (no extra dependencies).
 * Returns a ref to attach to any element and a boolean that flips to
 * true once the element scrolls into view, so it can be paired with
 * the `.reveal` / `.reveal-visible` utility classes in index.css.
 */
export function useReveal({ threshold = 0.15, rootMargin = "0px 0px -60px 0px", once = true } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect users who prefer reduced motion — show content immediately
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, visible];
}

export default useReveal;
