"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const steps = [
  {
    n: "01",
    title: "Descubrimiento",
    description:
      "Charla inicial sin compromiso. Entendemos tu negocio, objetivos y alcance. Te pasamos una propuesta clara con tiempos y costos.",
  },
  {
    n: "02",
    title: "Diseño",
    description:
      "Wireframes, UI y prototipo navegable. Iteramos hasta que cada pantalla refleje exactamente lo que tenés en mente.",
  },
  {
    n: "03",
    title: "Desarrollo",
    description:
      "Codeamos con buenas prácticas, tipado estricto y commits diarios. Vos seguís el progreso en tiempo real.",
  },
  {
    n: "04",
    title: "Entrega & soporte",
    description:
      "Deploy a producción, capacitación y documentación. Seguimos acompañándote después del launch.",
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="relative px-6 md:px-10 lg:px-14 py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div>
            <SectionLabel number="03" title="Proceso" />
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#0A0A0A] max-w-3xl">
              Simple, transparente,
              <br />
              sin <em className="italic text-[#1E2A47]">sorpresas</em>.
            </h2>
          </div>
          <p className="text-[#3A3A3A] max-w-sm text-base leading-relaxed">
            Un proceso que evita las fricciones comunes de la industria. Vos te enfocás
            en tu negocio, nosotros en el producto.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical en mobile, horizontal en desktop */}
          <div className="absolute top-10 left-10 bottom-10 w-px bg-gradient-to-b from-[#2D3E66] via-[#E8E6DF] to-transparent md:hidden" />
          <div className="hidden md:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2D3E66] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-24 md:pl-0"
              >
                {/* Círculo con número */}
                <div className="absolute md:relative left-0 top-0 md:mb-8">
                  <div className="w-20 h-20 rounded-full bg-white border border-[#E8E6DF] flex items-center justify-center shadow-[0_8px_24px_-10px_rgba(74,107,62,0.2)]">
                    <span className="font-serif text-2xl text-[#1E2A47]">{step.n}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-[#0A0A0A] mb-3">{step.title}</h3>
                <p className="text-[#3A3A3A] text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
