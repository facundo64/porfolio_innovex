"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { projects } from "@/data/projects";
import { usePathname } from "next/navigation";

// Curva bézier épica (Expo/Power4 equivalente)
const TRANSITION_EASE = [0.8, 0, 0.1, 1] as const;
const DURATION = 1.4;

export default function CaseStudies() {
  const showcased = projects.filter((p) => p.category !== "academic");
  const total = showcased.length;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);

  // Manejo Lógico de Slides con loop infinito (módulo)
  const handleNext = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setCurrentIndex((prev) => (prev + 1) % total);
    setTimeout(() => { isAnimating.current = false; }, 1400);
  }, [total]);

  const handlePrev = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
    setTimeout(() => { isAnimating.current = false; }, 1400);
  }, [total]);

  // Interceptar el Scroll Global en esta página
  useEffect(() => {
    // Al entrar al carrusel, matamos el scroll nativo. Eres un prisionero de la experiencia.
    document.body.style.overflow = "hidden";

    const handleWheel = (e: WheelEvent) => {
      // Ignorar saltos milimétricos (mouses hiper-sensibles)
      if (Math.abs(e.deltaY) < 15) return;
      
      if (e.deltaY > 0) handleNext();
      else handlePrev();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("wheel", handleWheel);
    };
  }, [handleNext, handlePrev]);

  // Intercepción Táctil (Mobile Swipes)
  const touchStart = useRef(0);
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => { 
      touchStart.current = e.touches[0].clientY; 
    };
    const handleTouchMove = (e: TouchEvent) => {
      const delta = touchStart.current - e.touches[0].clientY;
      if (Math.abs(delta) < 40) return; // Umbral de swipe
      if (delta > 0) handleNext();
      else handlePrev();
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleNext, handlePrev]);

  return (
    <div className="relative w-full h-[100dvh] bg-[#0A0A0A] overflow-hidden selection:bg-[#FAFAF7] selection:text-[#0A0A0A]">
      
      {/* Controles Flotantes Globales (Fuera de la vía del tren) */}
      <div className="absolute top-1/2 -translate-y-1/2 right-6 md:right-14 z-50 flex flex-col gap-3 opacity-50 mix-blend-difference">
        {showcased.map((_, i) => (
          <button 
            key={i} 
            onClick={() => {
              if (isAnimating.current) return;
              isAnimating.current = true;
              setCurrentIndex(i);
              setTimeout(() => { isAnimating.current = false; }, 1400);
            }}
            aria-label={`Ir al proyecto ${i + 1}`}
            className="group py-2 flex justify-end"
          >
            <div className={`h-[2px] transition-all duration-700 ${i === currentIndex ? "w-8 bg-[#FAFAF7]" : "w-2 bg-[#FAFAF7]/40 group-hover:bg-[#FAFAF7]/80 group-hover:w-4"}`} />
          </button>
        ))}
      </div>

      <div className="absolute bottom-8 right-6 md:right-14 z-50 text-[10px] md:text-[11px] font-mono tracking-[0.2em] text-[#FAFAF7]/50 mix-blend-difference pointer-events-none">
        0{currentIndex + 1} / {total < 10 ? `0${total}` : total}
      </div>

      {/* Menú hamburguesa flotante (arriba derecha) */}
      <WorkMenu />


      {/* "La Vía del Tren" Container que desplaza hacia arriba enteros */}
      <motion.div 
        className="w-full h-full"
        animate={{ y: `-${currentIndex * 100}dvh` }}
        transition={{ duration: DURATION, ease: TRANSITION_EASE }}
      >
        {showcased.map((project, i) => {
          const isActive = i === currentIndex;
          const isNext = i > currentIndex;
          
          // Parallax de la ventana de cristal (si está debajo, empieza abajo; si está activa, entra al centro)
          const centralWindowParallax = isActive ? "0%" : isNext ? "20%" : "-20%";

          return (
            <div key={project.id} className="relative w-full h-[100dvh] flex items-center justify-center">
              
              {/* Capa 1: Fondo cinemático — full bleed constante */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover brightness-[0.55] saturate-[0.9] scale-105"
                  priority={i === 0}
                />
                {/* Viñeta radial para darle profundidad al foco central */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.65)_100%)]"
                />
              </div>

              {/* Capa 2: Ventana Focal Central (Rebota en Parallax Inverso durante el viaje) */}
              <div className="relative z-10 w-[85vw] md:w-[35vw] h-[65vh] overflow-hidden drop-shadow-2xl bg-black">
                <motion.div 
                  className="absolute inset-[-20%] w-[140%] h-[140%]"
                  animate={{ y: centralWindowParallax }}
                  transition={{ duration: DURATION, ease: TRANSITION_EASE }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 40vw, 90vw"
                    className="object-cover brightness-110"
                  />
                </motion.div>
                
                <Link
                  href={project.demo ?? project.github ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver proyecto ${project.title}`}
                  className="absolute inset-0 z-20 group"
                >
                  <span className="absolute bottom-4 right-4 flex items-center gap-2 text-[10px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7] opacity-70 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-500">
                    View
                    <span aria-hidden className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </div>

              {/* Capa 3: Tipografía Titánica */}
              <motion.div 
                className="absolute top-1/2 -translate-y-1/2 left-6 md:left-[10vw] z-20 pointer-events-none hidden md:block"
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? "-50%" : "-30%" }}
                transition={{ duration: 1, delay: isActive ? 0.3 : 0, ease: [0.33, 1, 0.68, 1] }}
              >
                <h2 className="font-serif text-[#FAFAF7] text-4xl md:text-5xl lg:text-6xl leading-[0.9] tracking-[-0.03em] drop-shadow-2xl">
                  {project.title}
                </h2>
                <p className="mt-4 text-[#FAFAF7]/60 font-mono tracking-widest uppercase text-xs md:text-sm">
                  {project.subtitle || project.client}
                </p>
              </motion.div>

              {/* Tipografía Mobile */}
              <motion.div 
                className="absolute bottom-20 left-6 z-20 pointer-events-none md:hidden max-w-[80vw]"
                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                transition={{ duration: 1, delay: isActive ? 0.3 : 0, ease: [0.33, 1, 0.68, 1] }}
              >
                <h2 className="font-serif text-[#FAFAF7] text-3xl leading-[0.9] tracking-tight drop-shadow-lg">
                  {project.title}
                </h2>
                <p className="mt-3 text-[#FAFAF7]/60 font-mono tracking-widest uppercase text-[10px]">
                  {project.subtitle || project.client}
                </p>
              </motion.div>

            </div>
          );
        })}
      </motion.div>

    </div>
  );
}

/**
 * Menú flotante arriba-derecha para /work: círculo con hamburguesa que
 * despliega el resto de las páginas del sitio (reemplaza al BottomDock
 * que está oculto en esta ruta).
 */
const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

function WorkMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open]);

  return (
    <div className="fixed top-5 md:top-6 right-6 md:right-14 z-[60]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        className="liquid-glass relative flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-[#1E2A47]/70 hover:text-[#1E2A47] transition-colors"
      >
        <span className="relative flex flex-col items-center justify-center w-4 h-4 gap-[3px]">
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="block w-4 h-[1.5px] bg-current rounded-full origin-center"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="block w-4 h-[1.5px] bg-current rounded-full"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="block w-4 h-[1.5px] bg-current rounded-full origin-center"
          />
        </span>
        <motion.span
          initial={false}
          animate={{ width: open ? 0 : "auto", opacity: open ? 0 : 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden whitespace-nowrap"
        >
          Menu
        </motion.span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="liquid-glass absolute top-[calc(100%+12px)] right-0 w-48 rounded-3xl p-2 flex flex-col gap-0.5 origin-top-right"
          >
            {menuLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "bg-[#1E2A47]/5 text-[#1E2A47]"
                      : "text-[#0A0A0A]/70 hover:bg-black/5 hover:text-[#0A0A0A]"
                  }`}
                >
                  <span>{link.label}</span>
                  {active ? (
                    <span className="text-[9px] font-mono tracking-[0.22em] uppercase text-[#1E2A47]/50">
                      ON
                    </span>
                  ) : (
                    <span aria-hidden className="text-[#0A0A0A]/30 opacity-50 group-hover:opacity-100 transition-opacity">→</span>
                  )}
                </Link>
              );
            })}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

