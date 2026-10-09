"use client";

import type { CSSProperties, ReactNode } from "react";

/**
 * Piezas de los casos de /work armados como pieza de venta:
 * vitrina de teléfonos, pasos de "cómo se armó" y la oferta final.
 * La estructura y las reglas de celular viven en expediente.css; cada tema
 * pone colores, tipografías y bordes.
 */

/**
 * Pantalla de celular. En escritorio va dentro de un marco de teléfono; en el celular
 * (que ya es un teléfono) el marco se saca y queda un recorte grande centrado en `foco`.
 */
export function Tel({ src, alt, foco }: { src: string; alt: string; /** object-position del recorte en celular, ej. "50% 30%" */ foco?: string }) {
  return (
    <div className="tel" style={foco ? ({ "--foco": foco } as CSSProperties) : undefined}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" width={520} height={1126} />
    </div>
  );
}

/** Flecha a mano que baja desde la nota hasta el teléfono. */
function Flecha() {
  return (
    <svg className="flecha" viewBox="0 0 60 46" aria-hidden>
      <path d="M8,4 C22,8 40,16 44,38" />
      <path d="M36,31 L44,40 L50,30" />
    </svg>
  );
}

export type Pantalla = readonly [src: string, alt: string, nota: string, foco?: string];

/** Banda a todo el ancho con tres teléfonos inclinados y una nota a mano sobre cada uno. */
export function Vitrina({
  eyebrow,
  titulo,
  bajada,
  pantallas,
  children,
}: {
  eyebrow: string;
  titulo: string;
  bajada: ReactNode;
  pantallas: readonly Pantalla[];
  /** lo que va debajo de los teléfonos (ej. un post-it) */
  children?: ReactNode;
}) {
  return (
    <section className="lamina vitrina-lamina">
      <div className="banda">
        <div className="banda-in">
          <span className="mano-eyebrow">{eyebrow}</span>
          <h2 className="banda-tit">{titulo}</h2>
          <p className="banda-bajada">{bajada}</p>

          <div className="tira vitrina">
            {pantallas.map(([src, alt, nota, foco]) => (
              <figure key={src}>
                <figcaption className="nota-mano">
                  <span>{nota}</span>
                  <Flecha />
                </figcaption>
                <Tel src={src} alt={alt} foco={foco} />
              </figure>
            ))}
          </div>
          <p className="tira-aviso">deslizá →</p>
          {children}
        </div>
      </div>
    </section>
  );
}

export function Paso({ n, titulo, children, visual }: { n: string; titulo: string; children: ReactNode; visual: ReactNode }) {
  return (
    <div className="paso">
      <div className="paso-txt">
        <span className="paso-n">{n}</span>
        <h3>{titulo}</h3>
        <p className="prosa">{children}</p>
      </div>
      <div className="paso-vis">{visual}</div>
    </div>
  );
}

/** Cierre: qué podemos hacer por el que mira, con el botón a contacto (mensaje precargado). */
export function Oferta({
  eyebrow,
  items,
  nota,
  mensaje,
  boton,
  extra,
}: {
  eyebrow: string;
  items: readonly (readonly [titulo: string, texto: string])[];
  nota: string;
  mensaje: string;
  boton: string;
  /** acción secundaria (ej. enlace al sitio del cliente) */
  extra?: ReactNode;
}) {
  return (
    <section className="lamina cierre">
      <span className="mano-eyebrow">{eyebrow}</span>
      <h2>Lo mismo, con tu marca</h2>
      <div className="oferta">
        {items.map(([tit, txt]) => (
          <div className="oferta-item" key={tit}>
            <h3>{tit}</h3>
            <p>{txt}</p>
          </div>
        ))}
      </div>
      <p className="prosa">{nota}</p>
      <div className="cierre-acciones">
        <a className="btn" href={`/contact?msg=${encodeURIComponent(mensaje)}`}>
          {boton} →
        </a>
        {extra}
      </div>
    </section>
  );
}
