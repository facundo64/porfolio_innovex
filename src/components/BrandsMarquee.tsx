"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Logo 1" },
  { name: "Logo 2" },
  { name: "Logo 3" },
];

// Duplicamos para el loop infinito sin saltos
const track = [...brands, ...brands, ...brands, ...brands];

export default function BrandsMarquee() {
  return (
    <section className="relative py-20 border-y border-[#E8E6DF] bg-[#FAFAF7] overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#8A8A85]">
          Marcas que confían en nosotros
        </span>
      </motion.div>

      {/* Fade lateral para bordes suaves */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#FAFAF7] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#FAFAF7] to-transparent z-10" />

        <div className="flex overflow-hidden">
          <div className="flex animate-marquee shrink-0 items-center gap-16 md:gap-24 pr-16 md:pr-24">
            {track.map((brand, i) => (
              <BrandItem key={i} name={brand.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandItem({ name }: { name: string }) {
  return (
    <div className="group shrink-0 flex items-center justify-center min-w-[180px] h-16 px-6 rounded-2xl border border-transparent hover:border-[#E8E6DF] hover:bg-white transition-all duration-300">
      {/* Placeholder: forma geométrica + texto */}
      <div className="flex items-center gap-3 opacity-50 group-hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2D3E66] to-[#1E2A47] group-hover:scale-110 transition-transform" />
        <span className="font-serif text-xl text-[#3A3A3A] group-hover:text-[#0A0A0A] tracking-tight">
          {name}
        </span>
      </div>
    </div>
  );
}
