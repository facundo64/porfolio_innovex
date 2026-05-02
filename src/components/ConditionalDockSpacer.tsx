/**
 * Reserva el espacio inferior que ocupa el BottomDock flotante (solo desktop).
 * En mobile el dock está oculto, así que no necesitamos padding.
 */
export default function ConditionalDockSpacer() {
  return <div aria-hidden className="hidden md:block h-24 shrink-0" />;
}
