"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { createPortal } from "react-dom";
import "./expediente.css";

/**
 * Piezas compartidas de los expedientes de /work.
 *
 * - <Expediente>: la hoja (section + ancho de lectura) y la aparición al hacer scroll.
 * - <Captura>: captura de pantalla con pines y epígrafe; al tocarla se abre en grande
 *   con desplazamiento lateral, porque una pantalla de escritorio en 350 px no se lee.
 *
 * La estructura y todas las reglas de celular viven en expediente.css. Cada expediente
 * sólo define su tema (colores, tipografías, bordes) y sus piezas propias.
 */

export function Expediente({
  id,
  className,
  children,
}: {
  id?: string;
  /** clase del tema (ej. "oa-exp") + variables de next/font */
  className: string;
  children: ReactNode;
}) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll(".caratula, .lamina");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={rootRef} className={`exp ${className} relative z-[110]`}>
      <div className="hoja">{children}</div>
    </section>
  );
}

export type Pin = { n: string; style: CSSProperties };

export function Captura({
  src,
  alt,
  n,
  caption,
  pins,
  className,
}: {
  src: string;
  alt: string;
  /** rótulo corto del epígrafe, ej. "P.01" */
  n?: string;
  caption?: ReactNode;
  pins?: Pin[];
  /** clases extra del marco (ej. filete de color de una división) */
  className?: string;
}) {
  const [abierta, setAbierta] = useState(false);

  return (
    <figure>
      <div className={`captura${className ? ` ${className}` : ""}`}>
        {pins?.map((p) => (
          <span className="pin" style={p.style} key={p.n}>
            {p.n}
          </span>
        ))}
        <button type="button" className="captura-zoom" onClick={() => setAbierta(true)} aria-label={`Ampliar: ${alt}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} loading="lazy" />
          <span className="captura-lupa" aria-hidden>
            ⤢
          </span>
        </button>
      </div>
      {(n || caption) && (
        <figcaption>
          {n && <b>{n}</b>}
          {caption && <span>{caption}</span>}
        </figcaption>
      )}
      {abierta && <Visor src={src} alt={alt} onClose={() => setAbierta(false)} />}
    </figure>
  );
}

/** Visor a pantalla completa. Va por portal para escapar de los transforms del preview. */
function Visor({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  const cerrarRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    cerrarRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div className="exp-visor" role="dialog" aria-modal="true" aria-label={alt} data-lenis-prevent onClick={onClose}>
      <button ref={cerrarRef} type="button" className="exp-visor-cerrar" onClick={onClose} aria-label="Cerrar">
        ✕
      </button>
      <div className="exp-visor-lienzo" onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
      </div>
      <p className="exp-visor-pie">Deslizá para recorrerla · tocá afuera para cerrar</p>
    </div>,
    document.body
  );
}
