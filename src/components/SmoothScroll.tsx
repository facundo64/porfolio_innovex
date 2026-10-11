"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Con "reducir movimiento" (Windows con efectos de animación apagados) el
    // scroll suave sigue activo pero con inercia corta: sin él la rueda salta
    // ~100px por click y las animaciones del Home avanzan a los tirones.
    const reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // La rueda del mouse baja menos por click que el trackpad: así el Home no
    // se recorre de un tirón y las animaciones tienen margen para verse.
    // Rueda = saltos grandes y enteros, separados en el tiempo o iguales entre
    // sí; el trackpad manda una ráfaga continua de valores chicos y variables.
    const FACTOR_RUEDA = 0.7;
    let ultimoT = 0;
    let ultimoAbs = 0;
    const esRueda = (e: WheelEvent) => {
      const abs = Math.abs(e.deltaY);
      const ahora = e.timeStamp;
      const rueda =
        e.deltaMode !== 0 ||
        (abs >= 50 && Number.isInteger(e.deltaY) && e.deltaX === 0 && (ahora - ultimoT > 60 || abs === ultimoAbs));
      ultimoT = ahora;
      ultimoAbs = abs;
      return rueda;
    };

    const lenis = new Lenis({
      lerp: reducido ? 0.18 : 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      syncTouch: false,
      virtualScroll: (data) => {
        if (data.event instanceof WheelEvent && esRueda(data.event)) {
          data.deltaY *= FACTOR_RUEDA;
        }
        return true;
      },
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
