"use client";

import { motion } from "framer-motion";
import { useT } from "@/lib/i18n/LocaleProvider";
import TransitionLink from "./TransitionLink";

const EASE = [0.76, 0, 0.24, 1] as const;

export default function ProcessGallery() {
  const t = useT();

  return (
    <div
      className="relative w-full min-h-[100dvh] text-[#FAFAF7] overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 60% 120%, #D1D2C1 0%, #88A6A5 55%, #50747E 90%, #283A42 120%)",
      }}
    >
      {/* Viñeta oscura arriba */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-64 pointer-events-none bg-gradient-to-b from-[#0F161A]/80 to-transparent z-0"
      />

      {/* Grano texturizado */}
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-overlay opacity-[0.08] pointer-events-none z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* HERO TÍTULO */}
      <section className="relative z-10 px-6 md:px-14 pt-28 md:pt-32 pb-12 md:pb-16">
        {/* Eyebrow */}
        <div className="flex items-start justify-between text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/75">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
          >
            {t.process.eyebrow}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="hidden md:inline"
          >
            04 / Steps
          </motion.span>
        </div>

        {/* Título gigante */}
        <h1
          className="font-serif text-[#FAFAF7] tracking-[-0.04em] mt-10 md:mt-14"
          style={{ fontSize: "clamp(2.75rem, 9vw, 10rem)", lineHeight: 0.9 }}
        >
          {[
            { text: t.process.titleLine1, italic: false, accent: false },
            { text: t.process.titleLine2, italic: true, accent: false },
            { text: `${t.process.titleEm}.`, italic: false, accent: true },
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
          transition={{ duration: 1, delay: 0.95, ease: EASE }}
          className="mt-10 md:mt-14 max-w-2xl text-base md:text-xl font-serif text-[#FAFAF7]/80 leading-relaxed"
        >
          {t.process.subtitle}
        </motion.p>
      </section>

      {/* INTRO + STEPS */}
      <section className="relative z-10 px-6 md:px-14 pb-20 md:pb-24">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05, ease: EASE }}
          className="max-w-xl text-sm md:text-base text-[#FAFAF7]/65 leading-relaxed mb-16 md:mb-20 ml-auto md:text-right"
        >
          {t.process.intro}
        </motion.p>

        {/* Steps — lista editorial vertical */}
        <div className="space-y-0 border-t border-[#FAFAF7]/15">
          {t.process.steps.map((step, i) => (
            <motion.article
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.06, ease: EASE }}
              className="group relative grid grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-b border-[#FAFAF7]/15 hover:bg-[#FAFAF7]/[0.03] transition-colors duration-500"
            >
              {/* Número gigante */}
              <div className="col-span-12 md:col-span-2">
                <span
                  className="font-serif text-[#FAFAF7]/40 group-hover:text-[#FAFAF7]/70 transition-colors duration-500 leading-none"
                  style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)" }}
                >
                  {step.n}
                </span>
              </div>

              {/* Título del paso */}
              <div className="col-span-12 md:col-span-4">
                <h3
                  className="font-serif text-[#FAFAF7] tracking-[-0.03em] leading-[0.95]"
                  style={{ fontSize: "clamp(1.75rem, 3.6vw, 3.25rem)" }}
                >
                  {step.title}
                </h3>
                <span className="mt-3 inline-block text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/55">
                  {step.duration}
                </span>
              </div>

              {/* Descripción */}
              <div className="col-span-12 md:col-span-6 md:pl-8 flex items-center">
                <p className="text-base md:text-lg text-[#FAFAF7]/85 leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>

              {/* Línea de progreso animada en hover */}
              <motion.div
                aria-hidden
                className="absolute left-0 right-0 bottom-0 h-px bg-[#FAFAF7]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                style={{ transformOrigin: "left" }}
                transition={{ duration: 0.6, ease: EASE }}
              />
            </motion.article>
          ))}
        </div>
      </section>

      {/* CLOSING + CTA */}
      <section className="relative z-10 px-6 md:px-14 py-20 md:py-24 border-t border-[#FAFAF7]/12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE }}
            className="lg:col-span-7 font-serif text-[#FAFAF7] tracking-[-0.02em] leading-[1.1]"
            style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)" }}
          >
            {t.process.closing}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
            className="lg:col-span-5 flex flex-col items-start lg:items-end gap-5"
          >
            <span className="text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/55">
              {t.common.startProject}
            </span>
            <TransitionLink
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#FAFAF7] text-[#0A0A0A] px-7 py-4 rounded-full text-[11px] font-mono tracking-[0.18em] uppercase hover:bg-[#1E2A47] hover:text-[#FAFAF7] transition-colors duration-300"
            >
              {t.services.cta}
              <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </TransitionLink>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
