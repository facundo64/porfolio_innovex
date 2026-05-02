"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { useT } from "@/lib/i18n/LocaleProvider";
import { useLocalizedProject } from "@/lib/i18n/useLocalizedProject";

const SHOWCASE_IDS = ["citep", "jem-si", "obra-azul", "cripnar"] as const;
const showcase: Project[] = SHOWCASE_IDS.map(
  (id) => projects.find((p) => p.id === id)!
).filter(Boolean);

const EASE = [0.76, 0, 0.24, 1] as const;

type OverlayCfg = {
  scaleX: number;
  x: number;
  originY: "top" | "bottom";
  color: string;
};

export default function WorkGallery() {
  const t = useT();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [cfg, setCfg] = useState<OverlayCfg | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleOpen = (i: number) => {
    const el = itemRefs.current[i];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setCfg({
      scaleX: rect.width / window.innerWidth,
      x: rect.left,
      originY: i % 2 === 1 ? "bottom" : "top",
      color: showcase[i].accentColor ?? "#1E2A47",
    });
    setOpenIndex(i);
  };

  const handleClose = () => setOpenIndex(null);

  useEffect(() => {
    if (openIndex !== null) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") handleClose();
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [openIndex]);

  const current = openIndex !== null ? showcase[openIndex] : null;

  return (
    <div 
      className="relative w-full min-h-[100dvh] text-[#FAFAF7] overflow-hidden"
      style={{
        background: "radial-gradient(circle at 60% 120%, #D1D2C1 0%, #88A6A5 55%, #50747E 90%, #283A42 120%)",
      }}
    >
      {/* Viñeta oscura en el borde superior para dar la profundidad exacta de la imagen */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-64 pointer-events-none bg-gradient-to-b from-[#0F161A]/80 to-transparent z-0"
      />

      {/* Ruido texturizado extra fino y sutil (casi imperceptible) */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-[0.08] pointer-events-none z-0"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Header — salón visual. En mobile va abajo del TopHeader (top-20). En desktop al costado del logo. */}
      <div className="absolute top-20 md:top-10 left-6 md:left-60 right-6 md:right-44 z-20 flex items-start justify-between gap-6 text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/75">
        <span>{t.common.selectedWork} / 2025—2026</span>
        <span className="hidden md:inline">{t.common.salonVisual}</span>
      </div>

      {/* Salón visual — grid de 4 cards alineados */}
      <div className="relative min-h-[100dvh] w-full flex items-center px-6 md:px-14 pt-28 md:pt-32 pb-20 md:pb-24">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 items-end">
          {showcase.map((p, i) => (
            <GridCard
              key={p.id}
              project={p}
              index={i}
              isOpen={openIndex === i}
              isAnyOpen={openIndex !== null}
              setRef={(el) => {
                itemRefs.current[i] = el;
              }}
              onOpen={() => handleOpen(i)}
            />
          ))}
        </div>
      </div>

      {/* Overlay franja + preview */}
      <AnimatePresence>
        {current && cfg ? (
          <>
            <FrangaOverlay key="franja" cfg={cfg} />
            <Preview key="preview" project={current} onClose={handleClose} />
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

/* ─── Grid card (salón) ─────────────────────────────────────────────── */

function GridCard({
  project,
  index,
  isOpen,
  isAnyOpen,
  setRef,
  onOpen,
}: {
  project: Project;
  index: number;
  isOpen: boolean;
  isAnyOpen: boolean;
  setRef: (el: HTMLDivElement | null) => void;
  onOpen: () => void;
}) {
  const localized = useLocalizedProject(project);
  return (
    <figure className="flex flex-col gap-5 md:gap-6">
      {/* Título — serif gigante estilo Hero, slide up reveal */}
      <div className="overflow-hidden">
        <motion.h3
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.1, delay: 0.25 + index * 0.08, ease: EASE }}
          className="font-serif tracking-[-0.03em] leading-[0.92] text-[#FAFAF7]"
          style={{ fontSize: "clamp(2.25rem, 4.4vw, 4.5rem)" }}
        >
          {project.title}
        </motion.h3>
      </div>

      {/* Imagen — z alto SOLO en la activa (viaja arriba de la franja). Las demás siguen visibles pero la franja las tapa al expandirse. */}
      <motion.div
        ref={setRef}
        layoutId={`work-img-${project.id}`}
        onClick={onOpen}
        whileHover={isAnyOpen ? undefined : "hover"}
        style={{ zIndex: isOpen ? 100 : 1 }}
        className="relative w-full aspect-[3/4] cursor-pointer overflow-hidden bg-black"
      >
        <motion.div
          variants={{ hover: { scale: 1.06 } }}
          transition={{ duration: 0.7, ease: EASE }}
          className="absolute inset-0"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover"
            priority={index < 2}
          />
        </motion.div>

        {/* Logo overlay (esquina inferior izq) */}
        {project.logoNegative || project.logo ? (
          <div className="absolute bottom-3 left-3 w-20 h-7 md:w-24 md:h-8 opacity-90 pointer-events-none">
            <Image
              src={project.logoNegative ?? project.logo!}
              alt=""
              fill
              sizes="120px"
              className="object-contain object-left"
            />
          </div>
        ) : null}

        {/* Indicador de click */}
        <span className="absolute top-3 right-3 text-[9px] font-mono tracking-[0.2em] uppercase text-[#FAFAF7]/70">
          0{index + 1}
        </span>
      </motion.div>

      {/* Caption */}
      <figcaption className="text-[11px] md:text-xs text-[#FAFAF7]/55 leading-relaxed normal-case">
        {localized.tagline}
      </figcaption>
    </figure>
  );
}

/* ─── Franja overlay (escala vertical → horizontal) ─────────────────── */

function FrangaOverlay({ cfg }: { cfg: OverlayCfg }) {
  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 w-screen h-screen z-[90] pointer-events-none"
      style={{
        background: cfg.color,
        transformOrigin: cfg.originY === "top" ? "0% 0%" : "0% 100%",
      }}
      initial={{ scaleY: 0, scaleX: cfg.scaleX, x: cfg.x }}
      animate={{
        scaleY: 1,
        scaleX: 1,
        x: 0,
      }}
      exit={{
        scaleX: cfg.scaleX,
        x: cfg.x,
        scaleY: 0,
      }}
      transition={{
        scaleY: {
          duration: 0.55,
          ease: EASE,
          delay: 0,
        },
        scaleX: {
          duration: 0.55,
          ease: EASE,
          delay: 0.5,
        },
        x: {
          duration: 0.55,
          ease: EASE,
          delay: 0.5,
        },
      }}
    />
  );
}

/* ─── Preview (detalle) ─────────────────────────────────────────────── */

function Preview({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const t = useT();
  const localized = useLocalizedProject(project);
  // Cuando el preview entra, los textos aparecen después de la franja (~1.1s)
  const TEXT_DELAY = 1.05;

  return (
    <motion.div
      key={project.id}
      className="fixed inset-0 z-[95] flex flex-col overflow-y-auto overscroll-contain"
      initial={{ pointerEvents: "auto" }}
      exit={{ opacity: 0 }}
    >
      {/* HEADER — botón volver + cliente, en flex (sin superposición posible) */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5, delay: TEXT_DELAY, ease: EASE },
        }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
        className="relative z-[110] flex items-center justify-between gap-4 px-6 md:px-14 pt-24 md:pt-28 pb-2"
      >
        <button
          onClick={onClose}
          aria-label={t.common.back}
          className="inline-flex items-center gap-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7] hover:bg-white/20 transition-colors"
        >
          <span aria-hidden>←</span>
          <span>{t.common.back}</span>
        </button>

        <span className="hidden md:inline text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/75 truncate max-w-[55%] text-right">
          {project.client}
        </span>
      </motion.header>

      {/* BODY — imagen central + boxes laterales */}
      <div className="relative flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start md:items-center px-6 md:px-14 py-6">
        {/* Box izquierda — Problema */}
        <motion.div
          initial={{ opacity: 0, x: 8 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, delay: TEXT_DELAY + 0.05, ease: EASE },
          }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          className="md:col-span-3 max-w-xs space-y-3"
        >
          <h4 className="text-[10px] md:text-[11px] font-mono tracking-[0.25em] uppercase text-[#FAFAF7] border-l-2 border-[#FAFAF7]/50 pl-3">
            {t.common.problem}
          </h4>
          <p className="text-[13px] md:text-sm leading-relaxed text-[#FAFAF7]/90 pl-3">
            {localized.problem}
          </p>
        </motion.div>

        {/* Centro — imagen (con su logo embebido) + título superpuesto */}
        <div className="md:col-span-6 relative w-full h-full flex items-center justify-center md:min-h-[55vh]">
          <motion.div
            layoutId={`work-img-${project.id}`}
            transition={{
              layout: { duration: 0.6, delay: 0.5, ease: EASE },
            }}
            style={{ zIndex: 100 }}
            className="relative w-full max-w-md aspect-[3/4] overflow-hidden bg-black shadow-2xl"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          {/* Título gigante superpuesto */}
          <div className="absolute inset-0 z-[105] flex items-center justify-center pointer-events-none">
            <div className="overflow-hidden w-full">
              <motion.h2
                initial={{ y: "110%" }}
                animate={{
                  y: "0%",
                  transition: { duration: 1, delay: TEXT_DELAY, ease: EASE },
                }}
                exit={{
                  y: "110%",
                  transition: { duration: 0.4, ease: EASE },
                }}
                className="font-serif text-center leading-[0.85] tracking-[-0.04em] text-[#FAFAF7] mix-blend-difference"
                style={{ fontSize: "clamp(2.5rem, 11vw, 9rem)" }}
              >
                {project.title}
              </motion.h2>
            </div>
          </div>
        </div>

        {/* Box derecha — Solución */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, delay: TEXT_DELAY + 0.05, ease: EASE },
          }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          className="md:col-span-3 max-w-xs space-y-3 md:justify-self-end md:text-right"
        >
          <h4 className="text-[10px] md:text-[11px] font-mono tracking-[0.25em] uppercase text-[#FAFAF7] border-l-2 md:border-l-0 md:border-r-2 border-[#FAFAF7]/50 pl-3 md:pl-0 md:pr-3">
            {t.common.solution}
          </h4>
          <p className="text-[13px] md:text-sm leading-relaxed text-[#FAFAF7]/90 pl-3 md:pl-0 md:pr-3">
            {localized.solution}
          </p>
        </motion.div>
      </div>

      {/* FOOTER — rol · tagline · año */}
      <motion.footer
        initial={{ opacity: 0, y: 8 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay: TEXT_DELAY + 0.1, ease: EASE },
        }}
        exit={{ opacity: 0, transition: { duration: 0.25 } }}
        className="relative z-[110] flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-8 px-6 md:px-14 py-5 md:py-6 border-t border-white/12"
      >
        <span className="text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/70 shrink-0">
          {localized.role}
        </span>
        <p className="font-serif text-base md:text-lg lg:text-xl tracking-[-0.01em] text-[#FAFAF7]/95 max-w-2xl md:text-center leading-snug">
          {localized.tagline}
        </p>
        <span className="text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/70 shrink-0">
          {project.year}
        </span>
      </motion.footer>
    </motion.div>
  );
}
