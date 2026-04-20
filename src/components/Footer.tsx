"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  const containerRef = useRef(null);

  // Efecto sutil de "Revelación al llegar al fondo"
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <footer 
      ref={containerRef}
      className="relative bg-[#0A0A0A] overflow-hidden flex flex-col justify-between"
      style={{ minHeight: "100vh" }}
    >
      {/* Noise overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.25]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <motion.div 
        style={{ y, opacity }}
        className="relative flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-6 md:px-14 text-center"
      >
        <span className="inline-flex items-center gap-3 text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/60 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1E2A47]" />
          Project Inquiries
        </span>
        
        <h2 
          className="font-serif text-[#FAFAF7] leading-[0.9] tracking-[-0.04em] cursor-default"
          style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
        >
          Let's talk.
        </h2>
        
        <a 
          href="mailto:hello@innhovex.com"
          className="group mt-12 md:mt-20 inline-flex flex-col items-center justify-center font-mono tracking-[0.05em] text-lg md:text-2xl text-[#FAFAF7] hover:text-[#1E2A47] transition-colors duration-500"
        >
          hello@innhovex.com
          <span className="block w-full h-[1px] bg-[#FAFAF7]/30 mt-2 group-hover:bg-[#1E2A47] transition-colors duration-500 scale-x-0 group-hover:scale-x-100 origin-center" />
        </a>
      </motion.div>

      {/* Footer Físico (Links y Legales) */}
      <motion.div 
        style={{ opacity }}
        className="relative border-t border-[#FAFAF7]/10"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-14 py-8 md:py-12 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10">
          
          {/* Logo Footer */}
          <div className="flex items-center gap-2 font-serif text-[#FAFAF7]" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            <span className="tracking-[-0.04em]">IEX</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-12 text-[11px] font-mono tracking-[0.2em] uppercase text-[#FAFAF7]/70">
             {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/services" className="hover:text-[#FAFAF7] transition-colors">Servicios</a>
            <a href="/work" className="hover:text-[#FAFAF7] transition-colors">Casos</a>
            <a href="/process" className="hover:text-[#FAFAF7] transition-colors">Proceso</a>
            <a href="/contact" className="hover:text-[#FAFAF7] transition-colors">Contacto</a>
          </nav>

          <div className="text-[11px] font-mono text-[#FAFAF7]/50 tracking-[0.1em] uppercase text-center lg:text-right">
            © {year} INNHOVEX <br className="hidden lg:block"/>
            <span className="hidden lg:inline">· </span>Hecho en Argentina
          </div>

        </div>
      </motion.div>
    </footer>
  );
}
