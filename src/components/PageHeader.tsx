"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      delay: 0.1 + i * 0.08,
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
    <section className="relative grain overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
      {/* Glow navy radiante */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,#1E2A47_0%,transparent_65%)] blur-3xl opacity-[0.08]" />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: "radial-gradient(#1E2A47 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage:
              "radial-gradient(ellipse at top, rgba(0,0,0,0.5) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-center flex flex-col items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2.5 rounded-full border border-[#1E2A47]/10 bg-white/60 backdrop-blur-md px-4 py-1.5 text-[11px] font-mono tracking-[0.18em] uppercase text-[#1E2A47] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#1E2A47]" />
          {eyebrow}
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-serif text-[3rem] md:text-[5rem] lg:text-[6.5rem] leading-[0.95] tracking-[-0.03em] text-[#0A0A0A] max-w-4xl radiant-glow"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-8 text-base md:text-lg text-[#3A3A3A] leading-relaxed max-w-xl"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
