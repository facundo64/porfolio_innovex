import { projects } from "@/data/projects";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="group relative bg-[#0e0e0e] border border-[#1a1a1a] hover:border-[#0088ff33] transition-all duration-500 flex flex-col overflow-hidden">

      {/* Número de obra estilo galería */}
      <div className="absolute top-4 right-4 font-mono text-[10px] text-[#2a2a2a] group-hover:text-[#0088ff44] transition-colors duration-500 select-none">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Línea superior con glow al hover */}
      <div className="h-[1px] w-0 group-hover:w-full bg-[#0088ff] transition-all duration-500" />

      <div className="p-6 flex flex-col gap-4 flex-1">

        {/* Categoría */}
        <span className="text-[10px] font-mono text-[#444] tracking-[0.25em] uppercase">
          {project.category === "web" ? "Web" : project.category === "software" ? "Software" : "Académico"}
        </span>

        {/* Título */}
        <h3 className="font-semibold text-[#e0e0e0] text-lg leading-snug group-hover:text-white transition-colors duration-300">
          {project.title}
        </h3>

        {/* Descripción */}
        <p className="text-[#555] text-sm leading-relaxed flex-1 group-hover:text-[#888] transition-colors duration-300">
          {project.description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono text-[#444] bg-[#161616] border border-[#222] px-2 py-1 group-hover:border-[#0088ff22] group-hover:text-[#666] transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>

      {/* Footer de la card */}
      <div className="px-6 py-4 border-t border-[#1a1a1a] flex items-center gap-6">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-mono text-[#444] hover:text-[#0088ff] transition-colors duration-200 flex items-center gap-1.5"
        >
          <span>GitHub</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono text-[#444] hover:text-[#0088ff] transition-colors duration-200 flex items-center gap-1.5"
          >
            <span>Demo</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
          </a>
        )}
        {project.featured && (
          <span className="ml-auto text-[9px] font-mono text-[#0088ff66] border border-[#0088ff22] px-2 py-0.5 tracking-widest uppercase">
            Featured
          </span>
        )}
      </div>

    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured && p.category !== "academic");
  const academic = projects.filter((p) => p.category === "academic");

  return (
    <section id="proyectos" className="px-6 md:px-16 lg:px-24 py-32 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="flex items-end justify-between mb-16 gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="block w-8 h-[1px] bg-[#0088ff]" />
              <span className="text-[#0088ff] text-[10px] font-mono tracking-[0.3em] uppercase">02 / Galería</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Proyectos</h2>
          </div>
          <a
            href="https://github.com/facundo64"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#444] hover:text-[#0088ff] transition-colors duration-200 pb-1 border-b border-[#222] hover:border-[#0088ff44]"
          >
            Ver todo en GitHub →
          </a>
        </div>

        {/* Grid destacados — 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Grid resto — 4 columnas más chicas */}
        {rest.length > 0 && (
          <div className="mt-px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={featured.length + i} />
            ))}
          </div>
        )}

        {/* Académicos */}
        {academic.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] font-mono text-[#333] tracking-[0.25em] uppercase">Formación académica</span>
              <span className="flex-1 h-[1px] bg-[#1a1a1a]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]">
              {academic.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={featured.length + rest.length + i} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
