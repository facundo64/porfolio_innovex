"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import SectionLabel from "./SectionLabel";

const categoryLabel: Record<string, string> = {
  lenguaje: "Lenguajes",
  frontend: "Frontend",
  backend: "Backend",
  herramientas: "Herramientas",
};

export default function Skills() {
  const grouped = skills.reduce<Record<string, typeof skills>>((acc, skill) => {
    (acc[skill.category] ??= []).push(skill);
    return acc;
  }, {});

  return (
    <section className="relative px-6 md:px-10 lg:px-14 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <SectionLabel number="05" title="Stack técnico" />
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#0A0A0A] max-w-3xl">
              Tecnología <em className="italic text-[#1E2A47]">moderna</em>,
              <br />
              elegida con criterio.
            </h2>
          </div>
          <p className="text-[#3A3A3A] max-w-sm text-base leading-relaxed">
            No perseguimos hype. Usamos herramientas probadas que garantizan performance,
            mantenibilidad y escala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {Object.entries(grouped).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="rounded-2xl border border-[#E8E6DF] bg-white/70 backdrop-blur-md p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E2A47]" />
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#1E2A47]">
                  {categoryLabel[category] ?? category}
                </span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between text-sm text-[#0A0A0A]"
                  >
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-[10px] font-mono text-[#8A8A85] uppercase tracking-wider">
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
