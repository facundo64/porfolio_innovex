export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative px-6 md:px-10 lg:px-14 py-12 border-t border-[#E8E6DF] bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-serif text-xl text-[#0A0A0A]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#1E2A47]" />
          <span className="tracking-tight">INNHOVEX</span>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm text-[#3A3A3A]">
          <a href="#servicios" className="hover:text-[#1E2A47] transition-colors">
            Servicios
          </a>
          <a href="#casos" className="hover:text-[#1E2A47] transition-colors">
            Casos
          </a>
          <a href="#proceso" className="hover:text-[#1E2A47] transition-colors">
            Proceso
          </a>
          <a href="#contacto" className="hover:text-[#1E2A47] transition-colors">
            Contacto
          </a>
        </nav>

        <div className="text-xs font-mono text-[#8A8A85] tracking-wider">
          © {year} INNHOVEX · Hecho en Argentina
        </div>
      </div>
    </footer>
  );
}
