export default function About() {
  const stats = [
    { value: "10+", label: "Proyectos" },
    { value: "8+", label: "Tecnologías" },
    { value: "2024", label: "Fundación" },
    { value: "ARG", label: "Origen" },
  ];

  return (
    <section id="sobre-mi" className="px-6 md:px-16 lg:px-24 py-32 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-[1px] bg-[#0088ff]" />
          <span className="text-[#0088ff] text-[10px] font-mono tracking-[0.3em] uppercase">04 / Bio</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Sobre mí</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Texto */}
          <div className="flex flex-col gap-5 text-[#666] leading-relaxed text-[15px]">
            <p>
              Soy <span className="text-[#e0e0e0] font-medium">Facundo Aramayo</span>, desarrollador
              web y de software con foco en crear soluciones digitales funcionales y con identidad propia.
            </p>
            <p>
              Fundé <span className="text-[#e0e0e0] font-medium">INNHOVEX</span> con la convicción
              de que cada proyecto merece ser tratado como una obra: con cuidado, precisión y visión.
            </p>
            <p>
              Trabajo principalmente con <span className="text-[#0088ff]">TypeScript</span> y{" "}
              <span className="text-[#0088ff]">JavaScript</span> dentro del ecosistema React/Next.js,
              y tengo formación en programación orientada a objetos con C#.
            </p>
            <p>
              Cada proyecto que tomo es una oportunidad de construir algo que funcione bien,
              se vea bien y dure.
            </p>

            {/* Link GitHub */}
            <a
              href="https://github.com/facundo64"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 self-start text-xs font-mono text-[#444] hover:text-[#0088ff] transition-colors duration-200 pb-1 border-b border-[#222] hover:border-[#0088ff44]"
            >
              github.com/facundo64 →
            </a>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-px bg-[#1a1a1a]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#0a0a0a] p-8 flex flex-col gap-2 group hover:bg-[#0e0e0e] transition-colors duration-300"
              >
                <span
                  className="text-4xl font-bold text-[#0088ff] group-hover:text-[#00aaff] transition-colors duration-300"
                  style={{ textShadow: "0 0 30px #0088ff44" }}
                >
                  {stat.value}
                </span>
                <span className="text-[10px] font-mono text-[#333] uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
