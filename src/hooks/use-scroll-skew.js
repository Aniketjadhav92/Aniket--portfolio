import { useEffect, useRef, useState } from "react";

/**
 * useScrollSkew
 * Mirrors the "skew on scroll, flatten at rest" effect seen in
 * Awwwards-style work/portfolio scroll animations (e.g. OKCC Labs):
 * fast scrolling tilts elements slightly along Y, and the tilt eases
 * back to 0 the moment scrolling slows or stops.
 *
 * Samples scroll position every animation frame (not on the raw
 * `scroll` event, which fires in bursts) and lerps toward the target
 * skew, so the motion stays smooth instead of jumpy.
 *
 * Returns a single number (degrees) that can be fed into a transform,
 * e.g. `skewY(${skew}deg)`.
 */
export function useScrollSkew({ maxSkew = 6, sensitivity = 0.2, ease = 0.12 } = {}) {
  const [skew, setSkew] = useState(0);
  const lastY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const current = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const tick = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastY.current;
      lastY.current = currentY;

      // Target skew for THIS frame only — if the user isn't actively
      // scrolling right now, delta is 0 and target is 0, so `current`
      // eases straight back to flat.
      const target = Math.max(-maxSkew, Math.min(maxSkew, delta * sensitivity));

      current.current += (target - current.current) * ease;
      if (Math.abs(current.current) < 0.02) current.current = 0;

      setSkew(current.current);
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [maxSkew, sensitivity, ease]);

  return skew;
}

export default useScrollSkew;