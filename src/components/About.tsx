export default function About() {
  return (
    <section id="sobre-mi" className="px-6 md:px-16 lg:px-24 py-32 border-t border-[#1e1e1e]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-[1px] bg-[#0088ff]" />
            <span className="text-[#0088ff] text-xs font-mono tracking-[0.3em] uppercase">04 / Bio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f0] mb-8">Sobre mí</h2>

          <div className="flex flex-col gap-4 text-[#888] leading-relaxed">
            <p>
              Soy Facundo, desarrollador web y de software con foco en crear soluciones digitales
              funcionales y con identidad propia.
            </p>
            <p>
              Fundé <span className="text-[#f0f0f0] font-medium">INNHOVEX</span> con la convicción
              de que cada proyecto merece ser tratado como una obra: con cuidado, precisión y visión.
            </p>
            <p>
              Trabajo principalmente con TypeScript, JavaScript y el ecosistema de React/Next.js,
              y tengo formación en programación orientada a objetos con C#.
            </p>
          </div>
        </div>

        {/* Stats / datos rápidos */}
        <div className="grid grid-cols-2 gap-px bg-[#1e1e1e]">
          {[
            { label: "Proyectos", value: "10+" },
            { label: "Tecnologías", value: "8+" },
            { label: "Empresa", value: "INNHOVEX" },
            { label: "GitHub", value: "facundo64" },
          ].map((item) => (
            <div key={item.label} className="bg-[#0a0a0a] p-8 flex flex-col gap-2">
              <span className="text-3xl font-bold text-[#0088ff]">{item.value}</span>
              <span className="text-xs font-mono text-[#555] uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
