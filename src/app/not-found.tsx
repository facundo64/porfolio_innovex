"use client";

import TransitionLink from "@/components/TransitionLink";
import Cabecera from "@/components/lapiz/Cabecera";
import { useT } from "@/lib/i18n/LocaleProvider";

// 404 en el mismo estilo a lápiz que el resto del sitio (antes era la genérica de Next, en inglés).
export default function NotFound() {
  const t = useT();
  const n = t.notFound;
  return (
    <div className="hl hl-pagina hl-lienzo" data-theme="light">
      <Cabecera
        meta={["404", ""]}
        kicker={n.kicker}
        lineas={[n.title, <i key="i">{n.titleEm}</i>]}
        sub={n.body}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 36 }}>
          <TransitionLink className="hl-btn-lapiz hl-oscuro" href="/">
            {n.home}
          </TransitionLink>
          <TransitionLink className="hl-btn-lapiz" href="/work">
            {n.work}
          </TransitionLink>
        </div>
      </Cabecera>
    </div>
  );
}
