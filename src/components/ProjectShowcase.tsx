"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Carrusel vertical de proyectos — estilo Exo Ape.
 * Cada proyecto es una sección fullscreen (100vh) con imagen de fondo,
 * apiladas verticalmente. El scroll normal hace que bajen contigo,
 * con parallax sutil en la imagen para dar profundidad.
 */
const showcase = [
  {
    id: "jem-si",
    title: "JEM-SI",
    subtitle: "Sistema integral de gestión",
    category: "Software · 2025",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=90",
    href: "/work",
    index: "01",
  },
  {
    id: "rifa",
    title: "Rifa Salame y Pico",
    subtitle: "Plataforma de gestión de rifas",
    category: "Web Platform · 2025",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=2400&q=90",
    href: "/work",
    index: "02",
  },
  {
    id: "cabanas",
    title: "Cabañas Don Theo",
    subtitle: "Sitio de alquiler vacacional",
    category: "Web Design · 2024",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=90",
    href: "/work",
    index: "03",
  },
  {
    id: "bambinu",
    title: "Bambinu Tienda",
    subtitle: "E-commerce de productos infantiles",
    category: "E-commerce · 2024",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2400&q=90",
    href: "/work",
    index: "04",
  },
];

export default function ProjectShowcase() {
  return (
    <>
      {showcase.map((project, i) => (
        <ShowcaseSection key={project.id} project={project} total={showcase.length} pos={i} />
      ))}
    </>
  );
}

function ShowcaseSection({
  project,
  pos,
  total,
}: {
  project: (typeof showcase)[number];
  pos: number;
  total: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Parallax: imagen se mueve más lenta que el scroll
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "15%"]);
  // Título: leve levantada al entrar en viewport
  const titleY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -30]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="relative h-screen min-h-[640px] w-full overflow-hidden bg-[#0A0A0A]"
    >
      {/* Imagen parallax */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-[1.2]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Overlays */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0A0A0A]/15 via-transparent to-[#0A0A0A]/70"
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.28]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Meta superior — index + contador */}
      <div className="absolute top-24 md:top-28 left-6 md:left-14 right-6 md:right-14 z-10 flex items-start justify-between text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/85">
        <span>{project.category}</span>
        <span>
          <span className="text-[#FAFAF7]">{project.index}</span>
          <span className="text-[#FAFAF7]/50"> / 0{total}</span>
        </span>
      </div>

      {/* Título + info */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="absolute bottom-28 md:bottom-32 left-6 md:left-14 right-6 md:right-14 z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          <div className="text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/70 mb-4">
            Featured project
          </div>
          <Link href={project.href} className="group block">
            <h3
              className="font-serif text-[#FAFAF7] leading-[0.92] tracking-[-0.03em] italic"
              style={{ fontSize: "clamp(3rem, 9vw, 8rem)" }}
            >
              {project.title}
            </h3>
            <p className="mt-3 text-[#FAFAF7]/75 text-base md:text-lg max-w-md">
              {project.subtitle}
            </p>
          </Link>
        </div>

        <Link
          href={project.href}
          className="group inline-flex items-center gap-3 text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7] border-b border-[#FAFAF7]/30 hover:border-[#FAFAF7] pb-2 self-start md:self-end transition-colors"
        >
          View project
          <span className="inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
