"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const WORD = "INNHOVEX";
const BOUNCE_INDICES = new Set([0, 6, 7]);

const SESSION_KEY = "innhovex:preloader-seen";

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

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
    const duration = reduceMotion ? 600 : 2600;
    const t = window.setTimeout(() => {
      setVisible(false);
      window.sessionStorage.setItem(SESSION_KEY, "1");
      document.documentElement.style.overflow = "";
    }, duration);
    return () => window.clearTimeout(t);
  }, [visible, reduceMotion]);

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      {visible ? (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={
            reduceMotion
              ? { opacity: 0, transition: { duration: 0.3 } }
              : { y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }
          }
          className="fixed inset-0 z-[100] bg-[#0A0A0A] flex items-center justify-center overflow-hidden"
        >
          <div className="flex items-center">
            {WORD.split("").map((letter, i) => (
              <LetterDrop
                key={i}
                letter={letter}
                index={i}
                bounce={BOUNCE_INDICES.has(i)}
                reduceMotion={!!reduceMotion}
              />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-mono tracking-[0.32em] uppercase text-[#FAFAF7]/40"
          >
            Digital Studio · 2026
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function LetterDrop({
  letter,
  index,
  bounce,
  reduceMotion,
}: {
  letter: string;
  index: number;
  bounce: boolean;
  reduceMotion: boolean;
}) {
  if (reduceMotion) {
    return (
      <span
        className="font-serif text-[#FAFAF7] leading-none"
        style={{ fontSize: "clamp(3rem, 14vw, 11rem)" }}
      >
        {letter}
      </span>
    );
  }

  const baseDelay = index * 0.075;
  const bounceDelay = baseDelay + 0.9;

  return (
    <motion.span
      className="font-serif leading-none inline-block"
      style={{ fontSize: "clamp(3rem, 14vw, 11rem)" }}
      initial={{ y: "-120%", rotate: -8, opacity: 0, color: "#FAFAF7" }}
      animate={
        bounce
          ? {
              y: ["-120%", "0%", "0%", "0%"],
              rotate: [-8, 0, 0, 0],
              opacity: [0, 1, 1, 1],
              scale: [1, 1, 1.12, 1],
              color: ["#FAFAF7", "#FAFAF7", "#1E2A47", "#FAFAF7"],
            }
          : {
              y: "0%",
              rotate: 0,
              opacity: 1,
            }
      }
      transition={
        bounce
          ? {
              duration: 1.4,
              delay: baseDelay,
              times: [0, 0.45, 0.7, 1],
              ease: [0.16, 1.4, 0.3, 1],
              color: { delay: bounceDelay, duration: 0.5 },
              scale: { delay: bounceDelay, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
            }
          : {
              duration: 1,
              delay: baseDelay,
              ease: [0.16, 1.4, 0.3, 1],
            }
      }
    >
      {letter}
    </motion.span>
  );
}
