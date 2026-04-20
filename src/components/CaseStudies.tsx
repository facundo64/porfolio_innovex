"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import type { Project } from "@/types";
import SectionLabel from "./SectionLabel";

const categoryLabel: Record<Project["category"], string> = {
  web: "Web",
  software: "Software",
  academic: "Académico",
};

function CaseCard({ project, index }: { project: Project; index: number }) {
  const isLarge = index === 0 || index === 3;

  return (
    <motion.a
      href={project.demo ?? project.github}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-3xl border border-[#E8E6DF] bg-white/70 backdrop-blur-md overflow-hidden hover:shadow-[0_30px_80px_-30px_rgba(74,107,62,0.25)] hover:-translate-y-1 transition-all duration-500 ${
        isLarge ? "md:col-span-2" : ""
      }`}
    >
      {/* Preview visual */}
      <div
        className={`relative overflow-hidden ${
          isLarge ? "h-[280px] md:h-[360px]" : "h-[220px]"
        } bg-gradient-to-br from-[#F5F3EE] via-[#FAFAF7] to-[#E8E6DF]`}
      >
        {/* Pattern sutil */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(#1E2A47 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* "Screenshot" mockup */}
        <div className="absolute inset-6 md:inset-10 rounded-2xl bg-white border border-[#E8E6DF] shadow-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-[#FAFAF7] border-b border-[#E8E6DF]">
            <span className="w-2 h-2 rounded-full bg-[#E8E6DF]" />
            <span className="w-2 h-2 rounded-full bg-[#E8E6DF]" />
            <span className="w-2 h-2 rounded-full bg-[#E8E6DF]" />
          </div>
          <div className="p-4 md:p-6 flex flex-col gap-2">
            <div className="h-2.5 rounded-full bg-[#0A0A0A]/80 w-1/3" />
            <div className="h-1.5 rounded-full bg-[#E8E6DF] w-full" />
            <div className="h-1.5 rounded-full bg-[#E8E6DF] w-5/6" />
            <div className="grid grid-cols-3 gap-2 mt-3">
              <div className="h-14 rounded-lg bg-gradient-to-br from-[#2D3E66] to-[#1E2A47]/60" />
              <div className="h-14 rounded-lg bg-[#F5F3EE] border border-[#E8E6DF]" />
              <div className="h-14 rounded-lg bg-[#F5F3EE] border border-[#E8E6DF]" />
            </div>
          </div>
        </div>

        {/* Tag categoría */}
        <span className="absolute top-4 left-4 text-[10px] font-mono tracking-[0.2em] uppercase text-[#1E2A47] bg-white/80 backdrop-blur-sm border border-[#E8E6DF] rounded-full px-3 py-1">
          {categoryLabel[project.category]}
        </span>
      </div>

      {/* Info */}
      <div className="p-6 md:p-8 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl md:text-3xl text-[#0A0A0A] leading-tight">
            {project.title}
          </h3>
          <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#E8E6DF] text-[#1E2A47] group-hover:bg-[#0A0A0A] group-hover:text-white group-hover:border-[#0A0A0A] transition-all group-hover:rotate-[-45deg]">
            →
          </span>
        </div>
        <p className="text-[#3A3A3A] text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono text-[#3A3A3A] bg-[#F5F3EE] border border-[#E8E6DF] px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function CaseStudies() {
  const showcased = projects.filter((p) => p.category !== "academic");

  return (
    <section
      id="casos"
      className="relative px-6 md:px-10 lg:px-14 py-32 bg-[#FAFAF7] border-y border-[#E8E6DF] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <SectionLabel number="02" title="Casos de éxito" />
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-[#0A0A0A] max-w-3xl">
              Proyectos que
              <br />
              <em className="italic text-[#1E2A47]">importan</em>.
            </h2>
          </div>
          <a
            href="https://github.com/facundo64"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#0A0A0A] border-b border-[#0A0A0A]/20 hover:border-[#1E2A47] pb-1 self-start"
          >
            Ver todos los proyectos
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {showcased.map((project, i) => (
            <CaseCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
