"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SESSION_KEY = "innhovex:preloader-seen";

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const reduceMotion = useReducedMotion();
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    const seen = window.sessionStorage.getItem(SESSION_KEY);
    if (!seen) {
      setVisible(true);
      document.documentElement.style.overflow = "hidden";
    }
  }, []);

  useEffect(() => {
    if (!visible) return;

    if (reduceMotion) {
      setCount(100);
      setRevealed(true);
      const t = window.setTimeout(() => dismiss(), 700);
      return () => window.clearTimeout(t);
    }

    const duration = 1500;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setRevealed(true);
        window.setTimeout(() => dismiss(), 1300);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [visible, reduceMotion]);

  function dismiss() {
    setVisible(false);
    window.sessionStorage.setItem(SESSION_KEY, "1");
    document.documentElement.style.overflow = "";
  }

  if (!mounted) return null;

  const countStr = String(count).padStart(3, "0");
  const curtainEase = [0.76, 0, 0.24, 1] as const;

  return (
    <AnimatePresence mode="wait">
      {visible ? (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] pointer-events-auto"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          {/* Cortina superior */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-[#0A0A0A] overflow-hidden"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.95, ease: curtainEase, delay: 0.25 }}
          />
          {/* Cortina inferior */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0A0A0A] overflow-hidden"
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.95, ease: curtainEase, delay: 0.25 }}
          />

          {/* Contenido */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-[#FAFAF7]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Label superior izquierda */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-8 md:top-10 left-6 md:left-10 flex items-center gap-3 text-[10px] md:text-[11px] font-mono tracking-[0.28em] uppercase text-[#FAFAF7]/55"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FAFAF7]/70" />
              INNHOVEX · Digital Studio
            </motion.div>

            {/* Label superior derecha */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-8 md:top-10 right-6 md:right-10 text-[10px] md:text-[11px] font-mono tracking-[0.28em] uppercase text-[#FAFAF7]/55"
            >
              2026 · Loading
            </motion.div>

            {/* Counter */}
            <AnimatePresence>
              {!revealed ? (
                <motion.div
                  key="counter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-14 md:bottom-16 right-6 md:right-10 font-mono tabular-nums leading-[0.9]"
                  style={{ fontSize: "clamp(4.5rem, 14vw, 12rem)" }}
                >
                  {countStr}
                </motion.div>
              ) : null}
            </AnimatePresence>

            {/* IEX reveal */}
            <AnimatePresence>
              {revealed ? (
                <motion.div
                  key="iex"
                  className="relative overflow-hidden px-4"
                  initial={{ opacity: 1 }}
                >
                  {/* Caption arriba */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center text-[10px] md:text-[11px] font-mono tracking-[0.32em] uppercase text-[#FAFAF7]/55 mb-5"
                  >
                    innhov<span className="text-[#FAFAF7]">iex</span>
                  </motion.div>

                  {/* IEX con clip-path izquierda → derecha */}
                  <motion.h1
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{ duration: 0.85, ease: curtainEase }}
                    className="font-serif leading-[0.85] tracking-[-0.045em] text-center"
                    style={{ fontSize: "clamp(5.5rem, 24vw, 20rem)" }}
                  >
                    IEX
                  </motion.h1>

                  {/* Línea de subrayado que recorre */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.85,
                      ease: curtainEase,
                      delay: 0.05,
                    }}
                    className="mt-3 h-px bg-[#FAFAF7]/70 origin-left"
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>

            {/* Progress bar inferior */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-[#FAFAF7]/10">
              <div
                className="h-full bg-[#FAFAF7] origin-left"
                style={{
                  transform: `scaleX(${count / 100})`,
                  transformOrigin: "left",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
