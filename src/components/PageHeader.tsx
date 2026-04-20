"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.1 + i * 0.1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28 bg-[#FAFAF7]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 flex flex-col items-center text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-3 text-[11px] font-mono tracking-[0.2em] uppercase text-[#1E2A47] mb-10 md:mb-16"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#1E2A47]" />
          {eyebrow}
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-serif text-[#0A0A0A] leading-[0.9] tracking-[-0.04em] max-w-6xl"
          style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-10 md:mt-16 text-base md:text-xl text-[#3A3A3A] leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
