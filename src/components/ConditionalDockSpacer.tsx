"use client";

import { usePathname } from "next/navigation";

/**
 * Reserva el espacio inferior que ocupa el BottomDock en rutas normales.
 * En /work el dock está oculto y la página es 100dvh full-bleed, así que
 * no queremos padding ni franja blanca debajo.
 */
export default function ConditionalDockSpacer() {
  const pathname = usePathname();
  if (pathname === "/work") return null;
  return <div aria-hidden className="h-24 shrink-0" />;
}
