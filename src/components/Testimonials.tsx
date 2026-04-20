"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const testimonials = [
  {
    quote:
      "Entregaron el sistema antes de lo prometido y con una calidad que superó lo esperado. La atención al detalle fue impecable.",
    author: "Cliente 01",
    role: "Director — Empresa ejemplo",
    avatar: "from-[#2D3E66] to-[#1E2A47]",
  },
  {
    quote:
      "INNHOVEX entendió el negocio desde la primera reunión. El producto que construyeron nos permitió escalar sin fricciones.",
    author: "Cliente 02",
    role: "Fundadora — Startup ejemplo",
    avatar: "from-[#F5F3EE] to-[#8A8A85]",
  },
  {
    quote:
      "Profesionalismo total. Comunicación clara, código limpio y deploys constantes. Volvería a trabajar con ellos sin dudar.",
    author: "Cliente 03",
    role: "CTO — Agencia ejemplo",
    avatar: "from-[#1E2A47] to-[#0A0A0A]",
  },
];

export default function Testimonials() {
  return (
    <section 
      data-theme="dark"
      className="relative px-6 md:px-14 py-24 md:py-32 bg-[#0A0A0A] overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto border-t border-[#FAFAF7]/10 pt-20">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#FAFAF7]/50 border border-[#FAFAF7]/10 rounded-full px-4 py-1.5 backdrop-blur-md">
              03 — Testimonios
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-[#FAFAF7] max-w-3xl mx-auto">
            Lo que dicen <em className="italic text-[#FAFAF7]/70">nuestros clientes</em>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative rounded-3xl border border-[#FAFAF7]/10 bg-white/[0.02] backdrop-blur-md p-8 md:p-10 transition-all duration-500 flex flex-col hover:bg-white/[0.04]"
            >
              <p className="relative z-10 font-serif text-lg md:text-xl leading-snug text-[#FAFAF7]/90 italic mb-8 flex-1">
                "{t.quote}"
              </p>

              <footer className="flex items-center gap-4 pt-6 border-t border-[#FAFAF7]/10">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatar} shrink-0 opacity-80`}
                />
                <div>
                  <div className="text-sm font-medium text-[#FAFAF7] not-italic">
                    {t.author}
                  </div>
                  <div className="text-[11px] font-mono tracking-wider text-[#FAFAF7]/50 not-italic uppercase mt-1">
                    {t.role}
                  </div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
