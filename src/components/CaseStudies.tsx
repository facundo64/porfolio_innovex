"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { projects } from "@/data/projects";

// Curva bézier épica (Expo/Power4 equivalente)
const TRANSITION_EASE = [0.8, 0, 0.1, 1] as const;
const DURATION = 1.4;

export default function CaseStudies() {
  const showcased = projects.filter((p) => p.category !== "academic");
  const total = showcased.length;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);

  // Manejo Lógico de Slides
  const handleNext = useCallback(() => {
    if (isAnimating.current || currentIndex >= total - 1) return;
    isAnimating.current = true;
    setCurrentIndex((prev) => prev + 1);
    setTimeout(() => { isAnimating.current = false; }, 1400); // Bloquear wheel por el tiempo entero
  }, [currentIndex, total]);

  const handlePrev = useCallback(() => {
    if (isAnimating.current || currentIndex <= 0) return;
    isAnimating.current = true;
    setCurrentIndex((prev) => prev - 1);
    setTimeout(() => { isAnimating.current = false; }, 1400);
  }, [currentIndex]);

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

      <div className="absolute bottom-8 left-6 md:left-14 z-50 text-[10px] md:text-[11px] font-mono tracking-[0.2em] uppercase text-[#FAFAF7]/50 flex items-center gap-2 mix-blend-difference pointer-events-none">
          <span className="grid grid-cols-2 gap-[2px]">
            <span className="w-[3px] h-[3px] bg-[#FAFAF7]/50 rounded-full" />
            <span className="w-[3px] h-[3px] bg-[#FAFAF7]/50 rounded-full" />
            <span className="w-[3px] h-[3px] bg-[#FAFAF7]/50 rounded-full" />
            <span className="w-[3px] h-[3px] bg-[#FAFAF7]/50 rounded-full" />
          </span>
          All Projects
      </div>

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

              {/* Capa 1: Imagen full-bleed con parallax inverso suave */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <motion.div
                  className="absolute inset-[-8%] w-[116%] h-[116%]"
                  animate={{ y: centralWindowParallax }}
                  transition={{ duration: DURATION, ease: TRANSITION_EASE }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="100vw"
                    className="object-cover transition-transform origin-center"
                    style={{
                      transitionDuration: "4s",
                      transitionTimingFunction: "cubic-bezier(0.2, 1, 0.3, 1)",
                      transform: isActive ? "scale(1.02)" : "scale(1.12)",
                    }}
                    priority={i === 0}
                  />
                </motion.div>
                {/* Gradiente cinemático de legibilidad */}
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/60 pointer-events-none"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"
                />
              </div>

              {/* CTA flotante hover invisible sobre toda la escena */}
              <Link
                href={project.demo ?? project.github ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-20 flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-black/10 hover:backdrop-blur-[1.5px] transition-all duration-500 group"
              >
                <span className="w-24 h-24 rounded-full border border-white/50 flex items-center justify-center text-white text-[11px] font-mono tracking-widest uppercase transition-transform duration-500 scale-90 group-hover:scale-100 group-hover:bg-white group-hover:text-black">
                  View
                </span>
              </Link>

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
