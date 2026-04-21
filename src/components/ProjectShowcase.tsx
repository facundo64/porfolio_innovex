"use client";

import Image from "next/image";
import Link from "./TransitionLink";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { featuredProjects } from "@/data/projects";
import type { Project } from "@/types";

/**
 * Sales Showcase — tarjetas sticky "Card Stacking" que cuentan cada proyecto
 * como un mini pitch comercial: cliente, promesa, problema → solución → valor,
 * stack y logo real de la marca.
 */
export default function ProjectShowcase() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const total = featuredProjects.length;

  return (
    <section
      ref={container}
      className="relative w-full"
      style={{ height: `${total * 100}vh` }}
      data-theme="dark"
    >
      {featuredProjects.map((project, i) => (
        <CardStage
          key={project.id}
          project={project}
          index={i}
          progress={scrollYProgress}
          total={total}
        />
      ))}
    </section>
  );
}

function CardStage({
  project,
  index,
  progress,
  total,
}: {
  project: Project;
  index: number;
  progress: MotionValue<number>;
  total: number;
}) {
  const targetScale = 1 - (total - index) * 0.05;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  const overlayOpacity = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [0, 0.65]
  );

  const counter = String(index + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden">
      <motion.div
        style={{
          scale,
          backgroundColor: project.bgColor ?? "#0A0A0A",
          willChange: "transform",
        }}
        className="relative w-full h-full origin-top overflow-hidden"
      >
        {/* Imagen de fondo */}
        <div className="absolute inset-0 h-[115%] w-full -top-[7.5%]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            quality={85}
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
          />
        </div>

        {/* Gradiente de legibilidad */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0A0A0A]/20 via-[#0A0A0A]/55 to-[#0A0A0A]/95"
        />

        {/* Overlay sticky darkening */}
        <motion.div
          aria-hidden
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-[#0A0A0A] pointer-events-none"
        />

        {/* Ruido fino */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.18]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Top bar — cliente + counter */}
        <div className="absolute top-8 md:top-14 left-6 md:left-14 right-6 md:right-14 z-10 flex items-start justify-between gap-4 text-[10px] md:text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/85">
          <span className="max-w-[60%] truncate">
            {project.client ?? project.role}
          </span>
          <span className="backdrop-blur-md bg-white/5 py-1.5 px-4 rounded-full border border-white/10 shrink-0">
            <span className="text-[#FAFAF7]">{counter}</span>
            <span className="text-[#FAFAF7]/50"> / {totalStr}</span>
          </span>
        </div>

        {/* Contenido principal */}
        <div className="relative z-20 h-full px-6 md:px-14 pb-12 md:pb-20 pt-24 md:pt-28 flex flex-col justify-end">
          <div className="max-w-6xl">
            {/* Logo real + pill featured */}
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              {project.logoNegative || project.logo ? (
                <div className="relative h-10 md:h-12 w-28 md:w-32 shrink-0">
                  <Image
                    src={project.logoNegative ?? project.logo!}
                    alt={`${project.title} logo`}
                    fill
                    className="object-contain object-left"
                    sizes="160px"
                  />
                </div>
              ) : null}
              {project.tags?.slice(0, 1).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#1E2A47] bg-[#FAFAF7] px-3 py-1 rounded-sm font-semibold shadow-xl"
                >
                  {tag}
                </span>
              ))}
              <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/70 border border-white/15 px-3 py-1 rounded-full">
                {project.year}
              </span>
            </div>

            {/* Título + tagline */}
            <Link href="/work" className="group block">
              <h3
                className="font-serif text-[#FAFAF7] leading-[0.92] tracking-[-0.03em]"
                style={{ fontSize: "clamp(2.75rem, 9vw, 7.5rem)" }}
              >
                {project.title}
              </h3>
              <p className="mt-5 md:mt-6 text-[#FAFAF7]/85 text-lg md:text-2xl font-medium max-w-2xl leading-snug">
                {project.tagline}
              </p>
            </Link>

            {/* Pitch + stack + CTA */}
            <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-end">
              {/* Pitch de venta */}
              <div className="lg:col-span-7 space-y-3 text-[#FAFAF7]/75 text-sm md:text-[15px] leading-relaxed">
                {project.value ? (
                  <p className="text-[#FAFAF7]">
                    <span className="text-[#FAFAF7]/50 font-mono text-[10px] tracking-[0.22em] uppercase mr-2">
                      Resultado
                    </span>
                    {project.value}
                  </p>
                ) : null}
                {project.highlights && project.highlights.length > 0 ? (
                  <ul className="space-y-1.5 pt-2">
                    {project.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex gap-2 items-start">
                        <span className="mt-[7px] w-1 h-1 rounded-full bg-[#FAFAF7]/55 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              {/* Stack + CTA */}
              <div className="lg:col-span-5 flex flex-col md:flex-row lg:flex-col gap-5 lg:items-end">
                <div className="flex flex-wrap gap-1.5 lg:justify-end">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono tracking-[0.05em] uppercase text-[#FAFAF7]/85 bg-white/10 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href="/work"
                  className="group shrink-0 inline-flex items-center justify-center gap-3 bg-[#FAFAF7] text-[#0A0A0A] px-6 md:px-7 py-3.5 md:py-4 rounded-full text-[11px] font-mono tracking-[0.12em] uppercase shadow-2xl hover:scale-[1.03] hover:bg-[#1E2A47] hover:text-[#FAFAF7] transition-all duration-300 self-start md:self-center lg:self-end"
                >
                  Ver caso
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
