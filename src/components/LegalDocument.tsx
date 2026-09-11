"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { legalDocuments, type LegalSlug } from "@/lib/legal/documents";
import TransitionLink from "./TransitionLink";

const EASE = [0.76, 0, 0.24, 1] as const;

const PAGE_GRADIENT =
  "radial-gradient(circle at 60% 120%, #D1D2C1 0%, #88A6A5 55%, #50747E 90%, #283A42 120%)";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function LegalDocument({ slug }: { slug: LegalSlug }) {
  const { locale } = useLocale();
  const doc = legalDocuments[slug][locale];

  return (
    <div
      data-theme="dark"
      className="relative w-full min-h-[100dvh] text-[#FAFAF7] overflow-hidden"
      style={{ background: PAGE_GRADIENT }}
    >
      {/* Viñeta oscura arriba (igual que services/work) */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-64 pointer-events-none bg-gradient-to-b from-[#0F161A]/80 to-transparent z-0"
      />
      {/* Grano texturizado */}
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-overlay opacity-[0.08] pointer-events-none z-0"
        style={{ backgroundImage: GRAIN }}
      />

      <main className="relative z-10 px-6 md:px-14 pt-28 md:pt-32 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto">
          {/* Meta superior: eyebrow + volver */}
          <div className="flex items-center justify-between text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/55">
            <span>{doc.index}</span>
            <TransitionLink
              href="/"
              className="inline-flex items-center gap-2 hover:text-[#FAFAF7] transition-colors"
            >
              <span aria-hidden>←</span>
              {doc.backLabel}
            </TransitionLink>
          </div>

          {/* Título gigante (estilo services) */}
          <h1
            className="font-serif tracking-[-0.04em] mt-10 md:mt-14 text-[#FAFAF7]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", lineHeight: 0.92 }}
          >
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.2, ease: EASE }}
                className="block"
              >
                {doc.title}
                <span className="text-[#1E2A47]">.</span>
              </motion.span>
            </span>
          </h1>

          {/* Fecha */}
          <p className="mt-8 text-[10px] md:text-[11px] font-mono tracking-[0.2em] uppercase text-[#FAFAF7]/50">
            {doc.updatedLabel} · {doc.updated}
          </p>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
            className="mt-10 font-serif text-lg md:text-2xl leading-relaxed text-[#FAFAF7]/75 max-w-2xl"
          >
            {doc.intro}
          </motion.p>

          {/* Secciones */}
          <div className="mt-16 flex flex-col">
            {doc.sections.map((section, i) => (
              <section
                key={section.heading}
                className="border-t border-[#FAFAF7]/12 py-8 md:py-10 grid md:grid-cols-[auto_1fr] gap-4 md:gap-10"
              >
                <span className="text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/40 pt-1.5 md:w-10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl tracking-[-0.02em] text-[#FAFAF7]">
                    {section.heading}
                  </h2>
                  <div className="mt-5 flex flex-col gap-4 text-[15px] md:text-base leading-relaxed text-[#FAFAF7]/70">
                    {section.body.map((paragraph, j) => (
                      <p key={j}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Aviso de borrador */}
          <div className="mt-14 rounded-2xl border border-[#FAFAF7]/15 bg-[#FAFAF7]/[0.04] px-6 py-5">
            <p className="text-[13px] leading-relaxed text-[#FAFAF7]/55">{doc.disclaimer}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
