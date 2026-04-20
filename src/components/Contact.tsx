"use client";

import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    value: "facundoarielaramayo@gmail.com",
    href: "mailto:facundoarielaramayo@gmail.com",
  },
  {
    label: "GitHub",
    value: "@facundo64",
    href: "https://github.com/facundo64",
  },
  {
    label: "WhatsApp",
    value: "Chatear",
    href: "https://wa.me/",
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative px-6 md:px-10 lg:px-14 py-32 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br from-[#0A0A0A] via-[#2A302A] to-[#1E2A47] text-[#F5F3EE] p-10 md:p-16 lg:p-24 overflow-hidden shadow-[0_30px_100px_-30px_rgba(74,107,62,0.4)]"
        >
          {/* Orbe decorativo verde */}
          <div
            aria-hidden
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,#2D3E66_0%,transparent_70%)] opacity-30 blur-2xl pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,#1E2A47_0%,transparent_70%)] opacity-20 blur-2xl pointer-events-none"
          />

          {/* Grid pattern sutil */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#2D3E66 1px, transparent 1px), linear-gradient(90deg, #2D3E66 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 text-xs font-mono tracking-[0.25em] uppercase text-[#2D3E66] mb-6">
                <span className="rounded-full border border-[#2D3E66]/30 bg-[#2D3E66]/10 backdrop-blur-sm px-3 py-1">
                  06
                </span>
                <span>Contacto</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight mb-6">
                ¿Listos para
                <br />
                <em className="italic text-[#2D3E66]">empezar</em>?
              </h2>
              <p className="text-[#E8E6DF] leading-relaxed max-w-md text-lg">
                Contános tu idea en un email. Respondemos en menos de 24 horas con los
                siguientes pasos.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.08 }}
                  className="group flex items-center justify-between gap-6 rounded-2xl border border-[#F5F3EE]/10 bg-[#F5F3EE]/5 backdrop-blur-sm hover:bg-[#F5F3EE]/10 hover:border-[#2D3E66]/40 px-6 py-5 transition-all"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#2D3E66]">
                      {link.label}
                    </span>
                    <span className="text-lg text-[#F5F3EE] group-hover:text-white transition-colors">
                      {link.value}
                    </span>
                  </div>
                  <span className="w-10 h-10 rounded-full border border-[#F5F3EE]/20 flex items-center justify-center text-[#2D3E66] group-hover:bg-[#2D3E66] group-hover:text-[#0A0A0A] group-hover:border-[#2D3E66] group-hover:rotate-[-45deg] transition-all">
                    →
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
