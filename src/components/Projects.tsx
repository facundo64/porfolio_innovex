import { projects } from "@/data/projects";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="group relative bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#0088ff66] transition-all duration-500 flex flex-col overflow-hidden hover:shadow-[0_0_30px_rgba(0,136,255,0.05)] hover:-translate-y-1">

      {/* Fondo con brillo sutil al hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0088ff] to-transparent opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" />

      {/* Número de obra estilo galería */}
      <div className="absolute top-5 right-5 font-mono text-xs text-[#333] group-hover:text-[#0088ff] transition-colors duration-500 select-none">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="p-8 flex flex-col gap-5 flex-1 relative z-10">

        {/* Categoría */}
        <span className="text-[10px] font-mono text-[#0088ff] tracking-[0.3em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
          {project.category === "web" ? "Web" : project.category === "software" ? "Software" : "Académico"}
        </span>

        {/* Título */}
        <h3 className="font-bold text-[#f0f0f0] text-2xl leading-tight group-hover:text-white transition-colors duration-300">
          {project.title}
        </h3>

        {/* Descripción */}
        <p className="text-[#888] text-sm leading-relaxed flex-1 group-hover:text-[#aaa] transition-colors duration-300">
          {project.description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono text-[#666] bg-[#111] border border-[#222] px-2.5 py-1.5 rounded-sm group-hover:border-[#0088ff33] group-hover:text-[#e0e0e0] transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>

      {/* Footer de la card */}
      <div className="px-8 py-5 border-t border-[#1a1a1a] bg-[#0d0d0d] group-hover:bg-[#111] transition-colors duration-500 flex items-center gap-6 relative z-10">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-[#666] hover:text-[#0088ff] transition-colors duration-300 flex items-center gap-2 group/link"
        >
          <span>GitHub</span>
          <span className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">→</span>
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#666] hover:text-[#0088ff] transition-colors duration-300 flex items-center gap-2 group/link"
          >
            <span>Demo</span>
            <span className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300">→</span>
          </a>
        )}
        {project.featured && (
          <span className="ml-auto text-[10px] font-mono text-[#0088ff] bg-[#0088ff]/10 border border-[#0088ff]/20 px-2.5 py-1 tracking-widest uppercase rounded-sm">
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
    <section id="proyectos" className="px-6 md:px-16 lg:px-24 py-32 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1a1a1a] to-transparent" />

      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-12 h-[1px] bg-gradient-to-r from-[#0088ff] to-transparent" />
              <span className="text-[#0088ff] text-[10px] font-mono tracking-[0.3em] uppercase">02 / Galería</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Proyectos Selectos.</h2>
          </div>
          <a
            href="https://github.com/facundo64"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-sm font-mono text-[#888] hover:text-[#0088ff] transition-colors duration-300 pb-2 border-b border-[#333] hover:border-[#0088ff]"
          >
            Ver repositorio completo
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Grid destacados — 2/3 columnas dependiendo del contenido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Grid resto — 3/4 columnas */}
        {rest.length > 0 && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={featured.length + i} />
            ))}
          </div>
        )}

        {/* Académicos */}
        {academic.length > 0 && (
          <div className="mt-24">
            <div className="flex items-center gap-6 mb-8">
              <span className="text-xs font-mono text-[#555] tracking-[0.2em] uppercase">Formación académica</span>
              <span className="flex-1 h-[1px] bg-gradient-to-r from-[#222] to-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
