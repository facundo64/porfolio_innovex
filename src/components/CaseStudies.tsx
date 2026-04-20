"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import type { Project, ProjectCategory } from "@/types";

const categoryLabel: Record<ProjectCategory, string> = {
  saas: "SaaS",
  corporate: "Corporate",
  institutional: "Institucional",
  web: "Web",
  software: "Software",
  infra: "Infrastructure",
  academic: "Académico",
};

function AsymmetricProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  let layoutClasses = "col-span-12";
  let aspectClasses = "aspect-video md:aspect-[21/9]";

  if (index % 3 === 1) {
    layoutClasses = "col-span-12 md:col-span-6 md:col-start-7";
    aspectClasses = "aspect-[4/5]";
  } else if (index % 3 === 2) {
    layoutClasses = "col-span-12 md:col-span-8";
    aspectClasses = "aspect-square md:aspect-video";
  }

  const href = project.demo ?? project.github ?? "#";
  const external = href.startsWith("http");

  return (
    <div
      ref={containerRef}
      className={`${layoutClasses} flex flex-col gap-6 md:gap-8`}
    >
      {/* Hero visual con parallax */}
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={`relative w-full overflow-hidden rounded-2xl block ${aspectClasses} group`}
        style={{ backgroundColor: project.bgColor ?? "#1A1A1A" }}
      >
        <motion.div
          style={{ y }}
          className="absolute inset-[-12%] w-[124%] h-[124%] origin-center"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 75vw, 100vw"
            className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          />
        </motion.div>

        {/* Gradiente de legibilidad */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none"
        />

        {/* Meta superior */}
        <div className="absolute top-5 left-5 right-5 z-10 flex items-start justify-between gap-3 text-[10px] font-mono tracking-[0.22em] uppercase">
          <span className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1">
            {categoryLabel[project.category]}
          </span>
          <span className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/85 px-3 py-1">
            {project.year}
          </span>
        </div>

        {/* Logo flotante + tag "Featured" */}
        <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-4">
          {project.logoNegative || project.logo ? (
            <div className="relative h-10 md:h-12 w-28 md:w-36 shrink-0">
              <Image
                src={project.logoNegative ?? project.logo!}
                alt={`${project.title} logo`}
                fill
                sizes="160px"
                className="object-contain object-left drop-shadow-xl"
              />
            </div>
          ) : (
            <span className="font-serif text-2xl md:text-3xl text-white tracking-tight drop-shadow-xl">
              {project.title}
            </span>
          )}

          {project.tags && project.tags.length > 0 ? (
            <div className="flex flex-wrap gap-1.5 justify-end max-w-[55%]">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] md:text-[10px] font-mono tracking-[0.18em] uppercase text-white bg-black/40 backdrop-blur-md border border-white/25 rounded-full px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        {/* Hover CTA */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <span className="bg-[#FAFAF7] text-[#0A0A0A] font-mono text-[10px] tracking-[0.2em] uppercase px-6 py-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out shadow-2xl">
            Explorar proyecto →
          </span>
        </div>
      </Link>

      {/* Bloque informativo de venta */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        <div className="md:col-span-6 flex flex-col gap-3">
          <h3
            className="font-serif text-[#FAFAF7] leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: "clamp(1.85rem, 4vw, 3.25rem)" }}
          >
            {project.title}
          </h3>
          {project.client ? (
            <p className="text-[#FAFAF7]/55 text-xs md:text-sm font-mono tracking-[0.18em] uppercase">
              {project.client}
            </p>
          ) : null}
          <p className="text-[#FAFAF7]/90 text-base md:text-lg leading-snug font-medium max-w-lg">
            {project.tagline}
          </p>
        </div>

        <div className="md:col-span-6 flex flex-col gap-4 md:border-l md:border-white/10 md:pl-8">
          {project.problem ? (
            <div>
              <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/40">
                Problema
              </span>
              <p className="mt-1.5 text-sm text-[#FAFAF7]/75 leading-relaxed">
                {project.problem}
              </p>
            </div>
          ) : null}
          {project.solution ? (
            <div>
              <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/90">
                Solución
              </span>
              <p className="mt-1.5 text-sm text-[#FAFAF7] leading-relaxed">
                {project.solution}
              </p>
            </div>
          ) : null}
          {project.value ? (
            <div>
              <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#1E2A47] bg-[#FAFAF7] px-2 py-0.5 rounded-sm font-semibold">
                Resultado
              </span>
              <p className="mt-1.5 text-sm text-[#FAFAF7] leading-relaxed">
                {project.value}
              </p>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-1.5 pt-3 mt-auto">
            {project.stack.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono text-[#FAFAF7]/80 border border-[#FAFAF7]/15 bg-white/5 px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const showcased = projects.filter((p) => p.category !== "academic");

  return (
    <section
      id="casos"
      data-theme="dark"
      className="relative px-6 md:px-14 py-24 md:py-36 bg-[#0A0A0A]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/60 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FAFAF7]/80" />
            Casos de éxito — 02
          </div>
          <h2
            className="font-serif text-[#FAFAF7] leading-[0.92] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)" }}
          >
            Productos que <em className="italic text-[#FAFAF7]/70">venden</em>,
            <br />
            marcas que <em className="italic text-[#FAFAF7]/70">crecen</em>.
          </h2>
          <p className="mt-6 text-[#FAFAF7]/70 text-base md:text-lg leading-relaxed">
            Casos reales en producción — de plataformas SaaS multi-tenant a
            portales institucionales y marcas industriales. Cada uno resuelve
            un dolor medible de negocio.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-y-28 md:gap-y-44 gap-x-6">
          {showcased.map((project, i) => (
            <AsymmetricProject key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-24 md:mt-32 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10 pt-10">
          <p className="font-serif text-2xl md:text-3xl text-[#FAFAF7] leading-tight max-w-xl">
            ¿Tu empresa es el próximo caso?
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 self-start rounded-full bg-[#FAFAF7] text-[#0A0A0A] px-7 py-4 text-[11px] font-mono tracking-[0.18em] uppercase hover:bg-[#1E2A47] hover:text-[#FAFAF7] transition-colors shadow-xl"
          >
            Quiero un caso así
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
