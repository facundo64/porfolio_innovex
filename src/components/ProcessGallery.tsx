"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useT } from "@/lib/i18n/LocaleProvider";
import TransitionLink from "./TransitionLink";
import Cabecera, { Banda, Subrayado } from "./lapiz/Cabecera";

const EASE = [0.22, 1, 0.36, 1] as const;
// Círculo a mano alrededor del número de cada paso (uno distinto por paso).
const CIRCULOS = [
  "M50 4 C 80 3, 97 22, 96 50 C 95 80, 76 97, 48 96 C 20 95, 4 78, 4 50 C 4 22, 22 5, 56 6",
  "M48 3 C 78 4, 96 20, 97 52 C 96 82, 74 97, 50 97 C 20 96, 3 78, 4 48 C 5 20, 26 4, 60 7",
  "M52 4 C 84 5, 97 26, 95 52 C 93 80, 72 96, 46 95 C 18 94, 4 74, 5 46 C 6 18, 28 3, 58 5",
  "M50 3 C 82 4, 98 24, 96 50 C 94 82, 72 98, 48 96 C 18 94, 3 76, 4 48 C 5 20, 24 4, 62 6",
];
const ROT = ["hl-rot-2", "hl-rot-1", "hl-rot-4", "hl-rot-3"];

export default function ProcessGallery() {
  const t = useT();
  const p = t.process;
  const pasosRef = useRef<HTMLDivElement>(null);

  // La línea punteada que une los pasos se dibuja a medida que se baja.
  useEffect(() => {
    const el = pasosRef.current;
    if (!el) return;
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const prog = Math.min(1, Math.max(0, (vh * 0.7 - r.top) / r.height));
      el.style.setProperty("--prog", prog.toFixed(3));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="hl hl-pagina hl-lienzo" data-theme="light">
      <Cabecera
        meta={[p.eyebrow, p.stepsLabel]}
        kicker={p.kicker}
        lineas={[
          p.titleLine1,
          <i key="i">{p.titleLine2}</i>,
          <>
            <Subrayado>{p.titleEm}</Subrayado>
            <span className="hl-punto">.</span>
          </>,
        ]}
        sub={p.subtitle}
      />

      <section className="hl-seccion">
        <motion.div
          className={`hl-postit hl-proc-intro hl-rot-3`}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1, ease: EASE }}
        >
          {p.intro}
        </motion.div>

        <div ref={pasosRef} className="hl-pasos">
          <div className="hl-pasos-linea" aria-hidden />
          {p.steps.map((step, i) => (
            <motion.article
              key={step.n}
              className="hl-paso"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <div className="hl-paso-num">
                <svg viewBox="0 0 100 100" aria-hidden>
                  <path d={CIRCULOS[i % CIRCULOS.length]} />
                </svg>
                {step.n}
              </div>
              <div className="hl-paso-cuerpo">
                <h3>{step.title}</h3>
                <span className={`hl-postit ${ROT[i % ROT.length]}`}>{step.duration}</span>
                <p>{step.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Banda kicker={p.bandKicker} titulo={p.closing} tituloEm="">
        <TransitionLink className="hl-btn-lapiz" href="/contact">
          {t.nav.talk} →
        </TransitionLink>
      </Banda>
    </div>
  );
}
