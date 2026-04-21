"use client";

import Image from "next/image";
import Link from "./TransitionLink";
import { motion } from "framer-motion";
import { featuredProjects } from "@/data/projects";
import type { Project } from "@/types";

/**
 * Grid de proyectos featured estilo Exo Ape — imágenes grandes,
 * tipografía dramática al lado, hover con zoom sutil.
 * Consume la data real desde `@/data/projects`.
 */
export default function FeaturedWork() {
  return (
    <section className="relative py-24 md:py-36 px-6 md:px-14 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
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
      <Link href="/work" className="group block">
        <div
          className={`relative overflow-hidden rounded-2xl md:rounded-3xl ${
            isLarge ? "aspect-[16/9]" : "aspect-[4/5]"
          }`}
          style={{ backgroundColor: project.bgColor ?? "#E8E6DF" }}
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
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          <div className="absolute top-5 left-5 z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FAFAF7]/85 backdrop-blur-sm text-[#1E2A47] text-[10px] font-mono tracking-[0.22em] uppercase px-3 py-1.5">
              {project.category}
            </span>
          </div>
          {project.logoNegative || project.logo ? (
            <div className="absolute bottom-5 left-5 z-10 h-8 md:h-10 w-24 md:w-32">
              <Image
                src={project.logoNegative ?? project.logo!}
                alt={`${project.title} logo`}
                fill
                sizes="128px"
                className="object-contain object-left drop-shadow-lg"
              />
            </div>
          ) : null}
          <div className="absolute bottom-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <div className="w-12 h-12 rounded-full bg-[#FAFAF7] text-[#1E2A47] flex items-center justify-center text-xl">
              →
            </div>
          </div>
        </div>

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
