import { useEffect, useRef, useState } from "react";

/**
 * useParallax
 * Returns a smoothly-eased vertical offset (px) derived from page
 * scroll position, for driving background parallax elements.
 * `speed` < 1 makes the element drift slower than the page (feels
 * like it's further back); `speed` > 1 makes it drift faster.
 */
export function useParallax(speed = 0.15) {
  const [offset, setOffset] = useState(0);
  const current = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const tick = () => {
      const target = window.scrollY * speed;
      current.current += (target - current.current) * 0.08;
      setOffset(current.current);
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [speed]);

  return offset;
}

export default useParallax;