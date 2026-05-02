"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/**
 * Smooth scroll configurado para sentirse premium pero responsivo.
 * Evitamos `duration` + `easing` custom porque generan demasiada inercia
 * en bordes (footer, top) y trabón al revertir dirección.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      syncTouch: false,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
