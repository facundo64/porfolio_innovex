"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useT } from "@/lib/i18n/LocaleProvider";
import TransitionLink from "./TransitionLink";
import Cabecera, { Subrayado } from "./lapiz/Cabecera";

const EASE = [0.22, 1, 0.36, 1] as const;
// Trazo que encierra el servicio elegido (el mismo gesto que "¿Qué necesitás?").
const CIRCULO = "M52 3 C 82 2, 98 18, 97 50 C 96 84, 76 98, 48 97 C 18 96, 3 80, 3 50 C 3 20, 20 4, 58 6";

export default function ServicesGallery() {
  const t = useT();
  const s = t.services;
  const [activeId, setActiveId] = useState<string>(s.items[0]?.id ?? "");
  const active = s.items.find((x) => x.id === activeId) ?? s.items[0];
  if (!active) return null;

  const msg = s.ctaMsg.replace("{s}", active.title);

  return (
    <div className="hl hl-pagina hl-lienzo" data-theme="light">
      <Cabecera
        meta={[s.eyebrow, t.contact.info.locationValue]}
        kicker={s.kicker}
        lineas={[
          s.titleLine1,
          <i key="i">{s.titleLine2}</i>,
          <>
            <Subrayado>{s.titleEm}</Subrayado>
            <span className="hl-punto">.</span>
          </>,
        ]}
        sub={s.subtitle}
      />

      <section className="hl-seccion">
        <div className="hl-serv-grid">
          <div className="hl-serv-lista" role="group" aria-label={t.nav.services}>
            {s.items.map((item, i) => (
              <motion.button
                key={item.id}
                type="button"
                className="hl-serv-item"
                aria-pressed={item.id === active.id}
                onClick={() => setActiveId(item.id)}
                onMouseEnter={() => setActiveId(item.id)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 + i * 0.07, ease: EASE }}
              >
                <svg className="hl-circulo" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
                  <path pathLength={1} d={CIRCULO} />
                </svg>
                <span className="hl-serv-n">{item.number}</span>
                <span className="hl-serv-t">{item.title}</span>
              </motion.button>
            ))}
          </div>

          <div className="hl-serv-detalle">
            <div className="hl-ventana">
              <div className="hl-ventana-barra">
                <span className="hl-pts" aria-hidden><i /><i /><i /></span>
                <span className="hl-url">
                  {s.detailLabel} {active.number} / {active.title.toLowerCase()}
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  className="hl-serv-cuerpo"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  aria-live="polite"
                >
                  <p className="hl-serv-tag">{active.tagline}</p>
                  <p>{active.description}</p>
                  <div className="hl-tarea">
                    <div className="hl-tarea-tit">
                      <h4>{t.common.deliverables}</h4>
                    </div>
                    {active.deliverables.map((d, k) => (
                      <motion.div
                        key={d}
                        className="hl-linea-t hl-on"
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.15 + k * 0.12 }}
                      >
                        <span className="hl-ok">✓</span>
                        <span>{d}</span>
                      </motion.div>
                    ))}
                  </div>
                  <TransitionLink className="hl-btn-lapiz hl-oscuro" href={`/contact?msg=${encodeURIComponent(msg)}`}>
                    {s.cta} →
                  </TransitionLink>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="hl-serv-pie">
          <div className="hl-postit hl-rot-1">{s.process}</div>
          <TransitionLink className="hl-btn-lapiz" href="/process">
            {s.processCta}
          </TransitionLink>
        </div>
      </section>
    </div>
  );
}
