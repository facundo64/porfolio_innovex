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
    <section className="relative px-6 md:px-10 lg:px-14 py-32 bg-[#FAFAF7] border-y border-[#E8E6DF] overflow-hidden">
      {/* Orbe decorativo */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,#2D3E66_0%,transparent_65%)] blur-3xl opacity-30 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <SectionLabel number="04" title="Testimonios" />
          </div>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#0A0A0A] max-w-4xl mx-auto">
            Lo que dicen <em className="italic text-[#1E2A47]">nuestros clientes</em>.
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
              className="relative rounded-3xl border border-[#E8E6DF] bg-white/70 backdrop-blur-md p-8 md:p-10 hover:bg-white hover:shadow-[0_20px_60px_-20px_rgba(74,107,62,0.15)] transition-all duration-500 flex flex-col"
            >
              {/* Comilla decorativa */}
              <span
                aria-hidden
                className="font-serif text-7xl text-[#2D3E66] leading-none absolute -top-2 left-6"
              >
                &ldquo;
              </span>

              <p className="relative z-10 font-serif text-xl md:text-2xl leading-snug text-[#0A0A0A] italic mb-8 flex-1 pt-4">
                {t.quote}
              </p>

              <footer className="flex items-center gap-3 pt-6 border-t border-[#E8E6DF]">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatar} shrink-0`}
                />
                <div>
                  <div className="text-sm font-medium text-[#0A0A0A] not-italic">
                    {t.author}
                  </div>
                  <div className="text-xs text-[#8A8A85] not-italic">{t.role}</div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
