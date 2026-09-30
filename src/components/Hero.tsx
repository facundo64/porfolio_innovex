"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useT } from "@/lib/i18n/LocaleProvider";
import Lapiz from "./home/Lapiz";

const EASE = [0.22, 1, 0.36, 1] as const;
const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/**
 * Hero largo (2x viewport) con parallax. Cuando el texto ya pasó, un lápiz
 * redibuja la misma foto de Buenos Aires desde abajo y el dibujo se funde en
 * la hoja punteada del mapa que sigue (ver HomeViaje).
 * La foto y su versión a lápiz son 3:2 y comparten el recorte (object-cover).
 */
export default function Hero() {
  const t = useT();
  const secRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const lapizRef = useRef<HTMLDivElement>(null);
  const vigRef = useRef<HTMLDivElement>(null);
  const finRef = useRef<HTMLDivElement>(null);
  const lapicitoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = secRef.current, img = imgRef.current, lap = lapizRef.current;
    const vig = vigRef.current, fin = finRef.current, lapicito = lapicitoRef.current;
    if (!sec || !img || !lap || !vig || !fin || !lapicito) return;
    const reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      const vh = window.innerHeight;
      if (!reducir) img.style.transform = `translate3d(0,${window.scrollY * 0.15}px,0)`;
      const hr = sec.getBoundingClientRect();
      const tl = reducir ? (hr.bottom < vh * 1.3 ? 1 : 0) : clamp((vh * 1.45 - hr.bottom) / (vh * 0.75));
      const pr = img.getBoundingClientRect();
      const bordeVp = vh * (1.05 - tl * 1.25);
      const rev = clamp((pr.bottom - bordeVp) / pr.height, 0, 1.2) * 100;
      lap.style.setProperty("--rev", rev.toFixed(2));
      vig.style.opacity = String(1 - tl);
      fin.style.opacity = String(clamp(tl * 2.5));
      const enPapel = tl > 0.68;
      sec.classList.toggle("hl-en-papel", enPapel);
      // El TopHeader lee data-theme para elegir el color del logo: le avisamos
      // cuando cambia, porque puede haberlo leído antes en este mismo frame.
      const tema = enPapel ? "light" : "dark";
      if (sec.dataset.theme !== tema) {
        sec.dataset.theme = tema;
        window.dispatchEvent(new Event("hl:tema"));
      }
      const enCurso = tl > 0.02 && tl < 0.98;
      lapicito.style.opacity = enCurso ? "1" : "0";
      lapicito.style.left = `${8 + tl * 80}%`;
      lapicito.style.top = `${bordeVp - hr.top + vh * 0.06}px`;
    };

    let tick = false;
    const onScrollRaf = () => {
      if (tick) return;
      tick = true;
      requestAnimationFrame(() => {
        onScroll();
        tick = false;
      });
    };
    window.addEventListener("scroll", onScrollRaf, { passive: true });
    window.addEventListener("resize", onScrollRaf);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScrollRaf);
      window.removeEventListener("resize", onScrollRaf);
    };
  }, []);

  return (
    <section ref={secRef} data-theme="dark" className="hl-hero" id="inicio">
      <div ref={imgRef} className="hl-hero-img" aria-hidden>
        <motion.div
          className="hl-hero-foto"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: EASE }}
        >
          <Image src="/home/hero.jpg" alt="" fill priority quality={92} sizes="100vw" />
        </motion.div>
        <div ref={lapizRef} className="hl-hero-lapiz">
          <Image src="/home/hero-lapiz.jpg" alt="" fill quality={75} sizes="100vw" />
        </div>
      </div>
      <div ref={vigRef} className="hl-hero-vig" aria-hidden />
      <div ref={finRef} className="hl-hero-fin" aria-hidden />
      <div ref={lapicitoRef} className="hl-hero-lapicito" aria-hidden>
        <svg width="1" height="1" viewBox="0 0 1 1" overflow="visible">
          <Lapiz scale={1.15} />
        </svg>
      </div>

      <div className="hl-hero-in">
        <motion.div
          className="hl-hero-meta hl-mono"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: EASE }}
        >
          <span>{t.hero.metaLeft}</span>
          <span>{t.hero.metaRight}</span>
        </motion.div>
        <div className="hl-hero-cuerpo">
          <p className="hl-hero-intro">
            {t.hero.intro.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </p>
          <h1 className="hl-hero-titulo">
            {[t.hero.titleLine1, t.hero.titleLine2, t.hero.titleLine3].map((word, i) => (
              <span key={i} className="hl-linea">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.4, delay: 0.6 + i * 0.08, ease: EASE }}
                >
                  {i === 1 ? (
                    <i>{word}</i>
                  ) : i === 2 ? (
                    <>
                      {word.replace(".", "")}
                      <span className="hl-punto">.</span>
                    </>
                  ) : (
                    word
                  )}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div
            className="hl-hero-pie"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <p>{t.hero.closingText}</p>
            <div className="hl-hero-contacto hl-mono">
              <strong>{t.hero.ctaTitle}</strong>
              <a href={`mailto:${t.contact.info.emailValue}`}>{t.contact.info.emailValue}</a>
              <a href={`tel:${t.contact.info.phoneValue.replace(/\s/g, "")}`}>{t.contact.info.phoneValue}</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
