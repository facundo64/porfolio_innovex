"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import { useT } from "@/lib/i18n/LocaleProvider";
import { useLocalizedProject } from "@/lib/i18n/useLocalizedProject";

const SHOWCASE_IDS = ["citep", "jem-si", "obra-azul", "cripnar"] as const;
const showcase: Project[] = SHOWCASE_IDS
  .map((id) => projects.find((p) => p.id === id))
  .filter((p): p is Project => p !== undefined);

if (showcase.length !== SHOWCASE_IDS.length) {
  const missing = SHOWCASE_IDS.filter(
    (id) => !projects.some((p) => p.id === id)
  );
  console.error("[WorkGallery] Proyectos faltantes:", missing.join(", "));
}

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
          className="font-serif tracking-[-0.02em] leading-[1] text-[#FAFAF7]"
          style={{ fontSize: "clamp(1.25rem, 2.5vw, 2.5rem)" }}
        >
          {project.title}
        </motion.h3>
      </div>

      {/* Imagen / Logo — z alto SOLO en la activa (viaja arriba de la franja). */}
      <motion.div
        ref={setRef}
        layoutId={`work-img-${project.id}`}
        onClick={onOpen}
        whileHover={isAnyOpen ? undefined : "hover"}
        style={{
          zIndex: isOpen ? 100 : 1,
          backgroundColor:
            project.displayMode === "logo"
              ? project.bgColor ?? "#0A0A0A"
              : "#000000",
        }}
        className="relative w-full aspect-[3/4] cursor-pointer overflow-hidden"
      >
        {project.displayMode === "logo" ? (
          // Modo logo: logo grande centrado, sin imagen de fondo
          <motion.div
            variants={{ hover: { scale: 1.04 } }}
            transition={{ duration: 0.7, ease: EASE }}
            className="absolute inset-0 flex items-center justify-center p-8 md:p-10"
          >
            {project.cardLogo || project.logoNegative || project.logo ? (
              <div style={{ filter: "brightness(0) invert(1)" }}>
                <Image
                  src={project.cardLogo ?? project.logoNegative ?? project.logo ?? ""}
                  alt={`${project.title} logo`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-contain"
                  priority={index < 2}
                />
              </div>
            ) : null}
          </motion.div>
        ) : (
          // Modo image (default): imagen full-bleed con filter pack sutil para cohesión visual
          <>
            <motion.div
              variants={{
                hover: { scale: 1.06, filter: "grayscale(0%) contrast(1)" },
              }}
              initial={{ filter: "grayscale(55%) contrast(1.02)" }}
              transition={{ duration: 0.8, ease: EASE }}
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

            {/* Tinte navy MUY sutil con mix-blend-multiply. En hover desaparece → full color. */}
            <motion.div
              aria-hidden
              variants={{ hover: { opacity: 0 } }}
              initial={{ opacity: 0.35 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="absolute inset-0 pointer-events-none mix-blend-multiply"
              style={{ backgroundColor: "#1E2A47" }}
            />

            {/* Velo sutil para legibilidad del logo y número */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0A0A0A]/35 via-transparent to-transparent"
            />

            {/* Logo overlay (esquina inferior izq) — más grande, forzado a blanco */}
            {project.cardLogo || project.logoNegative || project.logo ? (
              <div
                className="absolute bottom-4 left-4 w-32 h-12 md:w-40 md:h-14 opacity-95 pointer-events-none"
                style={{ filter: "brightness(0) invert(1)" }}
              >
                <Image
                  src={project.cardLogo ?? project.logoNegative ?? project.logo ?? ""}
                  alt=""
                  fill
                  sizes="180px"
                  className="object-contain object-left"
                />
              </div>
            ) : null}
          </>
        )}

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
  const scrollRef = useRef<HTMLDivElement>(null);
  // Cuando el preview entra, los textos aparecen después de la franja (~1.1s)
  const TEXT_DELAY = 1.05;

  const scrollToGallery = () => {
    const container = scrollRef.current;
    const target = container?.querySelector<HTMLElement>(`#gallery-${project.id}`);
    if (!container || !target) return;
    const start = container.scrollTop;
    const end = Math.max(0, target.offsetTop - 40);
    const distance = end - start;
    if (Math.abs(distance) < 4) return;
    const duration = 1600;
    const startTime = performance.now();
    const easeInOutCubic = (x: number) =>
      x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      container.scrollTop = start + distance * easeInOutCubic(progress);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <motion.div
      key={project.id}
      ref={scrollRef}
      data-lenis-prevent
      className="fixed inset-0 z-[95] flex flex-col overflow-y-auto overscroll-contain"
      initial={{ pointerEvents: "auto" }}
      exit={{ opacity: 0 }}
    >
      {/* HEADER — botón volver + cliente + visitar sitio */}
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
          className="md:col-span-3 flex flex-col items-start gap-6 md:gap-8 md:max-w-xs"
        >
          {/* Spacer simétrico que matchea el alto del logo del lado derecho — solo desktop */}
          <div className="hidden md:block w-20 md:w-24 h-10 md:h-14" aria-hidden />

          <div className="space-y-4 md:min-h-[180px]">
            <h4 className="text-[10px] md:text-[11px] font-mono tracking-[0.25em] uppercase text-[#FAFAF7] border-l-2 border-[#FAFAF7]/50 pl-3">
              {t.common.problem}
            </h4>
            <p className="text-sm md:text-[15px] leading-[1.55] text-[#FAFAF7]/90 pl-3">
              {localized.problem}
            </p>
          </div>
        </motion.div>

        {/* Centro — imagen (con su logo embebido) + título superpuesto */}
        <div className="md:col-span-6 relative w-full h-full flex items-center justify-center md:min-h-[55vh]">
          <motion.div
            layoutId={`work-img-${project.id}`}
            transition={{
              layout: { duration: 0.6, delay: 0.5, ease: EASE },
            }}
            style={{
              zIndex: 100,
              backgroundColor:
                project.displayMode === "logo"
                  ? project.bgColor ?? "#0A0A0A"
                  : "#000000",
            }}
            className="relative w-full max-w-md aspect-[3/4] overflow-hidden shadow-2xl"
          >
            {project.displayMode === "logo" ? (
              <div className="absolute inset-0 flex items-center justify-center p-12 md:p-16">
                {project.cardLogo || project.logoNegative || project.logo ? (
                  <div style={{ filter: "brightness(0) invert(1)" }} className="w-full h-full relative">
                    <Image
                      src={project.cardLogo ?? project.logoNegative ?? project.logo ?? ""}
                      alt={`${project.title} logo`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </div>
                ) : null}
              </div>
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            )}
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

        {/* Box derecha — Logo + Solución */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, delay: TEXT_DELAY + 0.05, ease: EASE },
          }}
          exit={{ opacity: 0, transition: { duration: 0.25 } }}
          className="md:col-span-3 flex flex-col items-start md:items-end gap-6 md:gap-8 md:justify-self-end md:max-w-xs"
        >
          {/* Logo arriba de solución — forzado a blanco para uniformidad */}
          {project.logoNegative || project.logo ? (
            <div 
              className="relative w-20 md:w-24 h-10 md:h-14 opacity-70"
              style={{ filter: "brightness(0) invert(1)" }}
            >
              <Image
                src={project.logoNegative ?? project.logo ?? ""}
                alt={`${project.title} logo`}
                fill
                sizes="(max-width: 768px) 80px, 96px"
                className="object-contain object-left md:object-right"
              />
            </div>
          ) : null}

          <div className="space-y-4 md:text-right md:min-h-[180px]">
            <h4 className="text-[10px] md:text-[11px] font-mono tracking-[0.25em] uppercase text-[#FAFAF7] border-l-2 md:border-l-0 md:border-r-2 border-[#FAFAF7]/50 pl-3 md:pl-0 md:pr-3">
              {t.common.solution}
            </h4>
            <p className="text-sm md:text-[15px] leading-[1.55] text-[#FAFAF7]/90 pl-3 md:pl-0 md:pr-3">
              {localized.solution}
            </p>
          </div>
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
        <div className="flex flex-col gap-2 shrink-0">
          <span className="text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/70">
            {localized.role}
          </span>
          {project.discipline && project.discipline.length > 0 && (
            <ul className="flex flex-wrap gap-1.5 max-w-xs">
              {project.discipline.map((d) => (
                <li
                  key={d}
                  className="text-[9px] font-mono tracking-[0.18em] uppercase text-[#FAFAF7]/55 border border-white/15 rounded-full px-2 py-0.5"
                >
                  {d}
                </li>
              ))}
            </ul>
          )}
        </div>
        <p className="font-serif text-base md:text-lg lg:text-xl tracking-[-0.01em] text-[#FAFAF7]/95 max-w-2xl md:text-center leading-snug">
          {localized.tagline}
        </p>
        <div className="flex items-center gap-4 shrink-0">
          <span className="text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/70">
            {project.year}
          </span>
          {project.gallery && project.gallery.length > 0 && (
            <button
              type="button"
              onClick={scrollToGallery}
              className="text-[9px] font-mono tracking-[0.18em] uppercase text-[#FAFAF7]/55 hover:text-[#FAFAF7] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
                aria-hidden
              >
                ↓
              </motion.span>
              {t.common.gallery}
            </button>
          )}
        </div>
      </motion.footer>

      {/* GALLERY — stack vertical cinematográfico con scroll-snap + captions numerados */}
      {project.gallery && project.gallery.length > 0 && (
        <motion.section
          id={`gallery-${project.id}`}
          initial={{ opacity: 0, y: 24 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay: TEXT_DELAY + 0.35, ease: EASE },
          }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="relative z-[110] px-6 md:px-14 pt-12 pb-24 md:pt-16 md:pb-32"
        >
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/40 shrink-0">
              {t.common.gallery}
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="flex flex-col gap-20 md:gap-28">
            {project.gallery.map((item, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.9, ease: EASE }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
              >
                {/* Caption lateral — numeración + fase + descripción */}
                <div className="md:col-span-4 md:sticky md:top-32 flex flex-col gap-3">
                  <span className="text-[10px] font-mono tracking-[0.28em] uppercase text-[#FAFAF7]/40">
                    {String(i + 1).padStart(2, "0")} / {item.phase}
                  </span>
                  <p className="font-serif text-base md:text-lg leading-snug tracking-[-0.01em] text-[#FAFAF7]/90 max-w-sm">
                    {item.caption}
                  </p>
                </div>

                {/* Imagen o placeholder */}
                <div className="md:col-span-8 relative w-full aspect-video overflow-hidden bg-[#0A0A0A] border border-white/8">
                  {item.src ? (
                    <Image
                      src={item.src}
                      alt={`${project.title} — ${item.phase}`}
                      fill
                      sizes="(min-width: 768px) 66vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#FAFAF7]/25">
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage:
                            "linear-gradient(135deg, transparent 49%, rgba(255,255,255,0.04) 50%, transparent 51%)",
                          backgroundSize: "12px 12px",
                        }}
                      />
                      <span className="relative font-mono text-xs tracking-[0.28em] uppercase">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="relative text-[10px] font-mono tracking-[0.22em] uppercase">
                        {t.common.imagePending}
                      </span>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      )}

      {/* CTA FIJO — botón "Visitar sitio" si está live, chip de estado si no */}
      {project.demo ? (
        <motion.a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, delay: TEXT_DELAY + 0.3, ease: EASE },
          }}
          exit={{ opacity: 0, y: 12, transition: { duration: 0.2 } }}
          className="fixed bottom-36 right-6 md:bottom-40 md:right-14 z-[115] inline-flex items-center gap-2.5 rounded-full bg-white/12 backdrop-blur-md border border-white/20 px-5 py-2.5 text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7] hover:bg-white/22 transition-colors shadow-lg"
        >
          <span>{t.common.visitSite}</span>
          <span aria-hidden>↗</span>
        </motion.a>
      ) : project.status === "in-progress" || project.status === "private" ? (
        <motion.button
          type="button"
          onClick={
            project.gallery && project.gallery.length > 0
              ? scrollToGallery
              : undefined
          }
          initial={{ opacity: 0, y: 12 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.55, delay: TEXT_DELAY + 0.3, ease: EASE },
          }}
          exit={{ opacity: 0, y: 12, transition: { duration: 0.2 } }}
          className={`fixed bottom-36 right-6 md:bottom-40 md:right-14 z-[115] inline-flex items-center gap-2.5 rounded-full bg-white/8 backdrop-blur-md border border-white/15 px-5 py-2.5 text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/85 shadow-lg transition-colors ${
            project.gallery && project.gallery.length > 0
              ? "hover:bg-white/15 hover:text-[#FAFAF7] cursor-pointer"
              : "cursor-default"
          }`}
        >
          <motion.span
            aria-hidden
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-amber-300"
          />
          <span>
            {project.status === "in-progress"
              ? t.common.statusInProgress
              : t.common.statusPrivate}
          </span>
          {project.gallery && project.gallery.length > 0 && (
            <span aria-hidden className="opacity-50">↓</span>
          )}
        </motion.button>
      ) : null}
    </motion.div>
  );
}
