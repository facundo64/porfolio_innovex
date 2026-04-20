"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function StudioCta() {
  return (
    <section className="relative py-24 md:py-36 px-6 md:px-14 bg-[#F5F3EE] border-y border-[#E8E6DF] overflow-hidden">
      {/* Glow navy sutil */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,#1E2A47_0%,transparent_65%)] opacity-[0.06] blur-3xl"
      />

      <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-3 text-[11px] font-mono tracking-[0.22em] uppercase text-[#1E2A47] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#1E2A47]" />
          About the studio
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-[#0A0A0A] leading-[0.95] tracking-[-0.03em] max-w-4xl"
          style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
        >
          Creamos experiencias
          <br />
          donde el <em className="italic text-[#1E2A47]">detalle</em> importa.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-base md:text-lg text-[#3A3A3A] leading-relaxed max-w-xl"
        >
          Somos un estudio digital enfocado en crear productos premium —
          rápidos, elegantes y pensados para escalar. Trabajamos con marcas
          que no se conforman con el promedio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-3"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] text-[#FAFAF7] font-medium px-7 py-3.5 hover:bg-[#1E2A47] transition-all shadow-[0_12px_40px_-10px_rgba(10,10,10,0.35)] text-sm"
          >
            Empecemos a construir
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 rounded-full border border-[#0A0A0A]/15 bg-white/70 backdrop-blur-sm text-[#0A0A0A] font-medium px-7 py-3.5 hover:bg-white hover:border-[#0A0A0A]/40 transition-all text-sm"
          >
            Cómo trabajamos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
