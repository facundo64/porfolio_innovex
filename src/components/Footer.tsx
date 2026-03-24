export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] px-6 md:px-16 lg:px-24 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#0088ff] rounded-full" />
          <span className="text-xs font-mono text-[#555] tracking-widest uppercase">INNHOVEX</span>
        </div>
        <p className="text-xs font-mono text-[#333]">
          © {new Date().getFullYear()} INNHOVEX — Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
