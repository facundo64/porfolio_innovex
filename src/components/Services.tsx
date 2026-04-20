"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const services = [
  {
    id: "web",
    title: "Desarrollo Web",
    description:
      "Landings, sitios institucionales y e-commerce con foco en velocidad, SEO y conversión.",
    bullets: ["Next.js & React", "Diseño responsive", "Animaciones premium"],
    icon: "◐",
  },
  {
    id: "software",
    title: "Software a medida",
    description:
      "Sistemas de gestión, dashboards y herramientas internas adaptadas a tu operación.",
    bullets: ["Dashboards", "CRM / ERP", "Automatizaciones"],
    icon: "◇",
  },
  {
    id: "producto",
    title: "Producto digital",
    description:
      "Del wireframe al deploy. Diseñamos, prototipamos y construimos tu producto desde cero.",
    bullets: ["UI/UX", "MVPs rápidos", "Iteración continua"],
    icon: "◉",
  },
  {
    id: "escala",
    title: "Mantenimiento & escala",
    description:
      "Evolucionamos tu plataforma existente — performance, nuevas features y soporte continuo.",
    bullets: ["Code review", "Refactors", "Monitoreo"],
    icon: "◎",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative px-6 md:px-10 lg:px-14 py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <SectionLabel number="01" title="Servicios" />
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#0A0A0A] max-w-3xl">
              Todo lo que necesitás
              <br />
              para construir <em className="italic text-[#1E2A47]">online</em>.
            </h2>
          </div>
          <p className="text-[#3A3A3A] max-w-sm text-base leading-relaxed">
            Trabajamos con empresas, emprendedores y startups que buscan una presencia
            digital a la altura de su producto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative rounded-3xl border border-[#E8E6DF] bg-white/60 backdrop-blur-md p-8 md:p-10 hover:bg-white hover:shadow-[0_20px_60px_-20px_rgba(74,107,62,0.2)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              {/* Glow verde en hover */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-[#2D3E66]/0 via-transparent to-[#2D3E66]/0 group-hover:from-[#2D3E66]/20 group-hover:to-[#1E2A47]/10 transition-all duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F5F3EE] to-[#E8E6DF] border border-[#E8E6DF] flex items-center justify-center text-2xl text-[#1E2A47] group-hover:bg-gradient-to-br group-hover:from-[#2D3E66] group-hover:to-[#1E2A47] group-hover:text-white group-hover:border-[#1E2A47] transition-all duration-500">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#8A8A85]">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-serif text-3xl text-[#0A0A0A] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#3A3A3A] leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-xs font-mono text-[#3A3A3A] bg-[#F5F3EE] border border-[#E8E6DF] rounded-full px-3 py-1.5 group-hover:border-[#2D3E66] group-hover:bg-[#2D3E66]/20 transition-colors"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
