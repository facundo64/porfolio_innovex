export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden">

      {/* Fondo: gradiente y grilla estilo galería */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Grilla sutil */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#0088ff 1px, transparent 1px), linear-gradient(90deg, #0088ff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Resplandor azul eléctrico en la esquina superior derecha */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0088ff] opacity-[0.07] rounded-full blur-[120px] pointer-events-none" />
        {/* Resplandor tenue abajo izquierda */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0055cc] opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-5xl">

        {/* Etiqueta superior tipo galería */}
        <div className="flex items-center gap-3 mb-8">
          <span className="block w-8 h-[1px] bg-[#0088ff]" />
          <span className="text-[#0088ff] text-xs font-mono tracking-[0.3em] uppercase">
            INNHOVEX — Est. 2024
          </span>
        </div>

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6">
          <span className="block text-[#f0f0f0]">Desarrollo</span>
          <span className="block text-[#f0f0f0]">Web &</span>
          <span
            className="block"
            style={{
              color: "#0088ff",
              textShadow: "0 0 40px #0088ff66, 0 0 80px #0088ff33",
            }}
          >
            Software.
          </span>
        </h1>

        {/* Descripción */}
        <p className="text-[#888888] text-lg md:text-xl max-w-xl leading-relaxed mb-10">
          Soluciones digitales a medida — desde aplicaciones web hasta sistemas de gestión.
          Cada proyecto, una obra.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#proyectos"
            className="group inline-flex items-center gap-3 bg-[#0088ff] hover:bg-[#0077ee] text-white font-semibold px-7 py-3.5 transition-all duration-200 hover:shadow-[0_0_30px_#0088ff55]"
          >
            Ver proyectos
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 border border-[#1e1e1e] hover:border-[#0088ff] text-[#888888] hover:text-[#f0f0f0] font-semibold px-7 py-3.5 transition-all duration-200"
          >
            Contacto
          </a>
        </div>

      </div>

      {/* Número de sección estilo galería */}
      <div className="absolute bottom-10 right-6 md:right-16 lg:right-24 font-mono text-xs text-[#333] tracking-widest select-none">
        01 / INICIO
      </div>

      {/* Línea decorativa vertical derecha */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-[#0088ff22] to-transparent hidden lg:block" />

    </section>
  );
}
