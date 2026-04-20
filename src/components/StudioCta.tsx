"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    id: "01",
    title: "Digital Strategy",
    desc: "Auditoría, posicionamiento y arquitectura de producto.",
  },
  {
    id: "02",
    title: "Web Design",
    desc: "Plataformas a medida con estética editorial.",
  },
  {
    id: "03",
    title: "E-Commerce",
    desc: "Ventas optimizadas sin perder el prestigio visual.",
  },
  {
    id: "04",
    title: "Branding",
    desc: "Identidad visual, tono comunicacional y manifiesto.",
  },
];

export default function StudioCta() {
  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#FAFAF7] pt-24 md:pt-40 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-14">
        {/* Header de sección */}
        <div className="flex items-start gap-4 mb-20 md:mb-32">
          <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#1E2A47]" />
          <h2 className="text-[11px] font-mono tracking-[0.22em] uppercase text-[#1E2A47]">
            Core Expertise
          </h2>
        </div>

        {/* Lista de Servicios (Acordeón minimalista estático) */}
        <div className="flex flex-col border-t border-[#0A0A0A]/10">
          {services.map((srv, i) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group border-b border-[#0A0A0A]/10 py-8 md:py-12 flex flex-col md:flex-row md:items-end justify-between gap-6 cursor-default hover:bg-[#F5F3EE] transition-colors -mx-6 px-6 md:-mx-14 md:px-14"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-20">
                <span className="text-[11px] font-mono tracking-[0.2em] text-[#0A0A0A]/40 group-hover:text-[#1E2A47] transition-colors">
                  {srv.id}
                </span>
                <h3
                  className="font-serif text-[#0A0A0A] leading-none tracking-[-0.02em] group-hover:italic transition-all duration-500"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
                >
                  {srv.title}
                </h3>
              </div>
              <p className="text-base md:text-lg text-[#0A0A0A]/60 max-w-sm md:text-right group-hover:text-[#1E2A47] transition-colors duration-500">
                {srv.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquesina Infinita */}
      <div className="mt-32 md:mt-48 pb-20 md:pb-32 overflow-hidden flex whitespace-nowrap opacity-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          className="flex font-serif text-[#0A0A0A] tracking-[-0.04em] pr-4 uppercase"
          style={{ fontSize: "clamp(6rem, 15vw, 12rem)", lineHeight: 0.85 }}
        >
          {Array(4).fill(" DIGITAL EXPERIENCES · WEB DESIGN · BRANDING ·").map((text, i) => (
            <span key={i} className="px-4">{text}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
