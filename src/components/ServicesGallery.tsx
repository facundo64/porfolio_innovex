"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useT } from "@/lib/i18n/LocaleProvider";
import TransitionLink from "./TransitionLink";

const EASE = [0.76, 0, 0.24, 1] as const;

export default function ServicesGallery() {
  const t = useT();
  const services = t.services.items;
  const fallbackId = services[0]?.id ?? "";
  const [activeId, setActiveId] = useState<string>(fallbackId);

  const active = services.find((s) => s.id === activeId) ?? services[0];

  if (!active) {
    return null;
  }

  return (
    <div
      className="relative w-full min-h-[100dvh] text-[#FAFAF7] overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 60% 120%, #D1D2C1 0%, #88A6A5 55%, #50747E 90%, #283A42 120%)",
      }}
    >
      {/* Viñeta oscura arriba (igual que Work) */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-64 pointer-events-none bg-gradient-to-b from-[#0F161A]/80 to-transparent z-0"
      />

      {/* Grano texturizado (igual que Work) */}
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-overlay opacity-[0.08] pointer-events-none z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* HERO TÍTULO */}
      <section className="relative z-10 px-6 md:px-14 pt-28 md:pt-32 pb-16 md:pb-20">
        {/* Eyebrow */}
        <div className="flex items-start justify-between text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/55">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
          >
            {t.services.eyebrow}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="hidden md:inline"
          >
            Buenos Aires — Argentina
          </motion.span>
        </div>

        {/* Título gigante */}
        <h1
          className="font-serif text-[#FAFAF7] tracking-[-0.04em] mt-10 md:mt-14"
          style={{ fontSize: "clamp(2.75rem, 9vw, 10rem)", lineHeight: 0.9 }}
        >
          {[
            { text: t.services.titleLine1, italic: false, accent: false },
            { text: t.services.titleLine2, italic: true, accent: false },
            { text: t.services.titleEm + ".", italic: false, accent: true },
          ].map((line, i) => (
            <span key={i} className="block overflow-hidden" style={{ lineHeight: 0.92 }}>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.3, delay: 0.4 + i * 0.08, ease: EASE }}
                className={`block ${line.italic ? "italic text-[#FAFAF7]/92" : ""}`}
              >
                {line.accent ? (
                  <>
                    {line.text.replace(".", "")}
                    <span className="text-[#1E2A47]">.</span>
                  </>
                ) : (
                  line.text
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: EASE }}
          className="mt-12 md:mt-14 max-w-2xl text-base md:text-xl font-serif text-[#FAFAF7]/75 leading-relaxed"
        >
          {t.services.subtitle}
        </motion.p>
      </section>

      {/* GRID DE SERVICIOS — lista interactiva izq + detalle der */}
      <section className="relative z-10 px-6 md:px-14 pb-24 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
        {/* Lista de servicios */}
        <div className="lg:col-span-5 flex flex-col">
          {services.map((s, i) => {
            const isActive = s.id === activeId;
            return (
              <motion.button
                key={s.id}
                type="button"
                onClick={() => setActiveId(s.id)}
                onMouseEnter={() => setActiveId(s.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 1.0 + i * 0.08, ease: EASE }}
                className="group relative text-left py-6 md:py-8 border-t border-[#FAFAF7]/12 first:border-t-0"
              >
                <div className="flex items-baseline gap-4 md:gap-6">
                  <span className="text-[10px] md:text-[11px] font-mono tracking-[0.22em] text-[#FAFAF7]/40 shrink-0">
                    {s.number}
                  </span>
                  <h3
                    className="font-serif tracking-[-0.03em] leading-[0.95] transition-colors duration-500"
                    style={{
                      fontSize: "clamp(2rem, 4vw, 4rem)",
                      color: isActive ? "#FAFAF7" : "rgba(250,250,247,0.5)",
                    }}
                  >
                    {s.title}
                  </h3>
                </div>
                <motion.div
                  className="absolute left-0 right-0 bottom-0 h-px bg-[#FAFAF7]"
                  initial={false}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.button>
            );
          })}
        </div>

        {/* Detalle del servicio activo */}
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="lg:col-span-7 lg:sticky lg:top-32 space-y-8"
        >
          {/* Header del servicio activo — solo visible en mobile/tablet (en desktop la lista de la izquierda ya da contexto) */}
          <div className="lg:hidden flex items-baseline gap-3 border-t border-[#FAFAF7]/12 pt-6">
            <span className="text-[10px] font-mono tracking-[0.22em] text-[#FAFAF7]/40 shrink-0">
              {active.number}
            </span>
            <h3
              className="font-serif text-[#FAFAF7] tracking-[-0.03em] leading-[0.95]"
              style={{ fontSize: "clamp(1.75rem, 6vw, 2.75rem)" }}
            >
              {active.title}
            </h3>
          </div>

          {/* Tagline */}
          <p
            className="font-serif text-[#FAFAF7] leading-[1.05] tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.5rem, 3.4vw, 3rem)" }}
          >
            {active.tagline}
          </p>

          {/* Descripción */}
          <p className="text-base md:text-lg text-[#FAFAF7]/75 leading-relaxed max-w-2xl">
            {active.description}
          </p>

          {/* Deliverables */}
          <div className="border-t border-[#FAFAF7]/12 pt-6">
            <h4 className="text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/55 mb-5">
              {t.common.deliverables}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {active.deliverables.map((d) => (
                <li
                  key={d}
                  className="flex items-start gap-3 text-sm md:text-[15px] text-[#FAFAF7]/85"
                >
                  <span className="mt-[8px] w-1 h-1 rounded-full bg-[#1E2A47] shrink-0" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <TransitionLink
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#FAFAF7] text-[#0A0A0A] px-7 py-4 rounded-full text-[11px] font-mono tracking-[0.18em] uppercase hover:bg-[#1E2A47] hover:text-[#FAFAF7] transition-colors duration-300"
            >
              {t.services.cta}
              <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </TransitionLink>
          </div>
        </motion.div>
      </section>

      {/* Pie con proceso */}
      <section className="relative z-10 px-6 md:px-14 py-16 md:py-20 border-t border-[#FAFAF7]/10">
        <p className="font-serif text-[#FAFAF7]/70 text-lg md:text-xl max-w-3xl leading-relaxed">
          {t.services.process}
        </p>
      </section>
    </div>
  );
}
