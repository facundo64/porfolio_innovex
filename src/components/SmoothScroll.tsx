"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      syncTouch: false,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Al cambiar de ruta, el contenido nuevo puede tener otra altura y Lenis
  // conserva el `limit` viejo → la rueda/trackpad dejan de scrollear (la barra
  // nativa sí, porque saltea a Lenis). Recalculamos dimensiones cuando el DOM
  // nuevo ya está pintado, y una segunda vez para cubrir contenido async
  // (imágenes que definen el alto final).
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    const raf = requestAnimationFrame(() => lenis.resize());
    const t = window.setTimeout(() => lenis.resize(), 300);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
    };
  }, [pathname]);

  return null;
}
