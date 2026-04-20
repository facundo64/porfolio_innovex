"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Grid de proyectos featured estilo Exo Ape — imágenes grandes,
 * tipografía dramática al lado, hover con zoom sutil.
 */
const featured = [
  {
    id: "jem-si",
    title: "JEM-SI",
    category: "Software",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85",
    href: "/work",
  },
  {
    id: "rifa",
    title: "Rifa Salame y Pico",
    category: "Web Platform",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1800&q=85",
    href: "/work",
  },
  {
    id: "cabanas",
    title: "Cabañas Don Theo",
    category: "Web Design",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1800&q=85",
    href: "/work",
  },
  {
    id: "bambinu",
    title: "Bambinu Tienda",
    category: "E-commerce",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=85",
    href: "/work",
  },
];

export default function FeaturedWork() {
  return (
    <section className="relative py-24 md:py-36 px-6 md:px-14 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.22em] uppercase text-[#1E2A47] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1E2A47]" />
              Selected work
            </div>
            <h2
              className="font-serif text-[#0A0A0A] leading-[0.92] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}
            >
              Proyectos <em className="italic text-[#1E2A47]">recientes</em>.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-medium text-[#0A0A0A] border-b border-[#0A0A0A]/20 hover:border-[#1E2A47] pb-1"
            >
              Ver todo el trabajo
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof featured)[number];
  index: number;
}) {
  const isLarge = index === 0 || index === 3;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 1,
        delay: (index % 2) * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={isLarge ? "md:col-span-2" : ""}
    >
      <Link href={project.href} className="group block">
        {/* Imagen */}
        <div
          className={`relative overflow-hidden rounded-2xl md:rounded-3xl bg-[#E8E6DF] ${
            isLarge ? "aspect-[16/9]" : "aspect-[4/5]"
          }`}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes={isLarge ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
              className="object-cover"
            />
          </motion.div>
          {/* Vignette sutil */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/30 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          {/* Categoría flotante */}
          <div className="absolute top-5 left-5 z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FAFAF7]/85 backdrop-blur-sm text-[#1E2A47] text-[10px] font-mono tracking-[0.22em] uppercase px-3 py-1.5">
              {project.category}
            </span>
          </div>
          {/* Arrow en hover */}
          <div className="absolute bottom-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <div className="w-12 h-12 rounded-full bg-[#FAFAF7] text-[#1E2A47] flex items-center justify-center text-xl">
              →
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex items-start justify-between gap-4 mt-5">
          <h3 className="font-serif text-2xl md:text-3xl text-[#0A0A0A] leading-tight">
            {project.title}
          </h3>
          <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#8A8A85] pt-2">
            {project.year}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
