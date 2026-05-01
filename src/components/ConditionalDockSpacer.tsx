/**
 * Reserva el espacio inferior que ocupa el BottomDock flotante,
 * para que el contenido de la página no quede tapado.
 */
export default function ConditionalDockSpacer() {
  return <div aria-hidden className="h-24 shrink-0" />;
}
