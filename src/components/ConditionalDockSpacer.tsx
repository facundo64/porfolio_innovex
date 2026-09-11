"use client";

import { usePathname } from "next/navigation";

/**
 * Reserva el espacio inferior que ocupa el BottomDock flotante (solo desktop).
 * En mobile el dock está oculto, así que no hace falta.
 *
 * En la home NO se renderiza: ahí el Footer oscuro ya aporta su propio
 * padding inferior para que el dock flote sin tapar contenido (y así evitamos
 * una tira crema del body debajo del footer).
 */
export default function ConditionalDockSpacer() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <div aria-hidden className="hidden md:block h-24 shrink-0" />;
}
