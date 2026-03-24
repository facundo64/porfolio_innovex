import { projects } from "@/data/projects";
import type { Project } from "@/types";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-[#1e1e1e] bg-[#111] p-6 flex flex-col gap-4 hover:border-[#0088ff44] transition-colors duration-300">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-[#f0f0f0] text-lg leading-tight">{project.title}</h3>
        {project.featured && (
          <span className="shrink-0 text-[10px] font-mono text-[#0088ff] border border-[#0088ff44] px-2 py-0.5 tracking-widest uppercase">
            Destacado
          </span>
        )}
      </div>

      <p className="text-[#888] text-sm leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="text-[11px] font-mono text-[#555] bg-[#1a1a1a] px-2 py-1">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-2 border-t border-[#1e1e1e]">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#888] hover:text-[#0088ff] transition-colors duration-200 font-mono"
        >
          GitHub →
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#888] hover:text-[#0088ff] transition-colors duration-200 font-mono"
          >
            Demo en vivo →
          </a>
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
    <section id="proyectos" className="px-6 md:px-16 lg:px-24 py-32">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-8 h-[1px] bg-[#0088ff]" />
          <span className="text-[#0088ff] text-xs font-mono tracking-[0.3em] uppercase">02 / Galería</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f0] mb-16">Proyectos</h2>

        {/* Destacados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1e1e1e] mb-px">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Resto */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1e1e1e] mt-px">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Académicos */}
        {academic.length > 0 && (
          <div className="mt-16">
            <p className="text-xs font-mono text-[#555] tracking-widest uppercase mb-6">Formación académica</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1e1e1e]">
              {academic.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
