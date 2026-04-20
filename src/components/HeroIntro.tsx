"use client";

import { motion } from "framer-motion";

const lines = [
  "Estudio digital partnering con marcas",
  "y negocios que crean experiencias",
  "excepcionales donde las personas",
  "viven, trabajan y se conectan.",
];

export default function HeroIntro() {
  return (
    <section className="relative bg-[#FAFAF7] px-6 md:px-14 py-24 md:py-40">
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-serif text-[#0A0A0A] leading-[1.05] tracking-[-0.025em]"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}
        >
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 1.1,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
