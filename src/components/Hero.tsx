export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 overflow-hidden">

      {/* Fondo: gradiente y grilla estilo galería */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Grilla sutil */}
        <div
          className="absolute inset-0 opacity-[0.03] animate-move-grid"
          style={{
            backgroundImage:
              "linear-gradient(#0088ff 1px, transparent 1px), linear-gradient(90deg, #0088ff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Resplandor azul eléctrico en la esquina superior derecha */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0088ff] opacity-[0.05] rounded-full blur-[120px] pointer-events-none animate-breathe" />
        {/* Resplandor tenue abajo izquierda */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0055cc] opacity-[0.03] rounded-full blur-[100px] pointer-events-none animate-breathe" style={{ animationDelay: "2s" }} />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-5xl">

        {/* Etiqueta superior tipo galería */}
        <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="block w-12 h-[1px] bg-gradient-to-r from-[#0088ff] to-transparent" />
          <span className="text-[#0088ff] text-xs font-mono tracking-[0.3em] uppercase">
            INNHOVEX — Est. 2024
          </span>
        </div>

        {/* Título principal */}
        <h1 className="text-6xl md:text-7xl lg:text-[7rem] font-bold leading-[1.05] tracking-tight mb-8">
          <span className="block text-[#f0f0f0] opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>Desarrollo</span>
          <span className="block text-[#f0f0f0] opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>Web &</span>
          <span
            className="block pb-2 opacity-0 animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-[#0088ff] via-[#4db8ff] to-[#f0f0f0]"
            style={{ animationDelay: "0.4s" }}
          >
            Software.
          </span>
        </h1>

        {/* Descripción */}
        <p className="text-[#888888] text-lg md:text-xl max-w-2xl leading-relaxed mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          Soluciones digitales a medida — desde aplicaciones web dinámicas hasta robustos sistemas de gestión. 
          Elevando cada proyecto a la categoría de obra de arte.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-5 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="#proyectos"
            className="group relative inline-flex items-center justify-center gap-3 bg-[#0088ff] text-white font-semibold px-8 py-4 overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,136,255,0.4)] hover:scale-105"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10">Ver proyectos</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-3 border border-[#333] hover:border-[#0088ff] text-[#a0a0a0] hover:text-white bg-white/5 backdrop-blur-sm font-semibold px-8 py-4 transition-all duration-300 hover:bg-[#0088ff]/10"
          >
            Contacto
          </a>
        </div>

      </div>

      {/* Número de sección estilo galería */}
      <div className="absolute bottom-12 right-6 md:right-16 lg:right-24 font-mono text-xs text-[#444] tracking-widest select-none opacity-0 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
        01 / INICIO
      </div>

      {/* Línea decorativa vertical derecha */}
      <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-[#0088ff33] to-transparent hidden lg:block opacity-0 animate-fade-in-up" style={{ animationDelay: "1s" }} />

    </section>
  );
}
