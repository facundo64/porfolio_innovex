"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Subrayado amarillo a mano (el mismo de "todo el país" en el Home). */
export function Subrayado({ children }: { children: React.ReactNode }) {
  return (
    <span className="hl-subrayado">
      {children}
      <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden>
        <path d="M2 8 C 50 2, 120 12, 198 5" fill="none" stroke="#FFE36E" strokeWidth="7" strokeLinecap="round" />
      </svg>
    </span>
  );
}

/**
 * Cabecera común de las páginas internas: meta en mono, nota a mano,
 * título serif gigante (línea por línea) y bajada.
 */
export default function Cabecera({
  meta,
  kicker,
  lineas,
  sub,
  children,
}: {
  meta: [string, React.ReactNode?];
  kicker: string;
  lineas: React.ReactNode[];
  sub?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className="hl-cabecera">
      <motion.div
        className="hl-cab-meta hl-mono"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: EASE }}
      >
        <span>{meta[0]}</span>
        {meta[1] ? <span>{meta[1]}</span> : null}
      </motion.div>
      <motion.span
        className="hl-kicker hl-cab-kicker"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
      >
        {kicker}
      </motion.span>
      <h1 className="hl-cab-titulo">
        {lineas.map((linea, i) => (
          <span key={i} className="hl-linea">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.2, delay: 0.35 + i * 0.08, ease: EASE }}
            >
              {linea}
            </motion.span>
          </span>
        ))}
      </h1>
      {sub ? (
        <motion.p
          className="hl-cab-sub"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: EASE }}
        >
          {sub}
        </motion.p>
      ) : null}
      {children}
    </header>
  );
}

/** Cierre oscuro de página con CTA (mismo lenguaje que "¿Qué necesitás?"). */
export function Banda({
  kicker,
  titulo,
  tituloEm,
  texto,
  children,
}: {
  kicker: string;
  titulo: string;
  tituloEm: string;
  texto?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="hl-banda" data-theme="dark">
      <span className="hl-kicker">{kicker}</span>
      <h2 className={`hl-titulo${tituloEm ? "" : " hl-largo"}`}>
        {titulo}
        {tituloEm ? <i>{tituloEm}</i> : null}
      </h2>
      {texto ? <p>{texto}</p> : null}
      <div>{children}</div>
    </section>
  );
}
