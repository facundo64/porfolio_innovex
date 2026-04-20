"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

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
    <section 
      data-theme="dark"
      className="relative overflow-hidden pt-40 pb-16 md:pt-56 md:pb-24 bg-[#0A0A0A]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 flex flex-col items-start text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="inline-flex items-center gap-3 text-[11px] font-mono tracking-[0.2em] uppercase text-[#FAFAF7]/60 mb-10 md:mb-16"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#1E2A47]" />
          {eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="font-serif leading-[0.9] tracking-[-0.04em] text-[#FAFAF7] max-w-5xl"
          style={{ fontSize: "clamp(4rem, 12vw, 11rem)" }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="mt-12 md:mt-16 text-base md:text-xl text-[#FAFAF7]/70 leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
