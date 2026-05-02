"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n/LocaleProvider";
import TransitionLink from "./TransitionLink";
import LocaleToggle from "./LocaleToggle";

const EASE = [0.76, 0, 0.24, 1] as const;

/**
 * Menú hamburguesa para mobile (< md).
 * - Botón hamburguesa fijo arriba a la derecha (reemplaza al LocaleToggle visual)
 * - Al tocarlo: panel slide-in desde la derecha con navegación + LocaleToggle adentro
 * - Tap fuera o tecla Esc para cerrar
 */
export default function MobileMenu() {
  const t = useT();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/work", label: t.nav.work },
    { href: "/services", label: t.nav.services },
    { href: "/process", label: t.nav.process },
    { href: "/contact", label: t.nav.contact },
  ];

  // Cerrar con Esc + bloquear scroll del body cuando está abierto
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cerrar al cambiar de ruta — sincronización con navegación externa
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Botón hamburguesa — solo visible en mobile */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? t.nav.close : t.nav.menu}
        aria-expanded={open}
        className="md:hidden relative z-[120] flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/20 pointer-events-auto"
      >
        <span className="relative flex h-3.5 w-5 flex-col items-center justify-between">
          <motion.span
            animate={{
              rotate: open ? 45 : 0,
              y: open ? 6 : 0,
              backgroundColor: open ? "#FAFAF7" : "currentColor",
            }}
            transition={{ duration: 0.35, ease: EASE }}
            className="block h-[1.5px] w-full rounded-full origin-center"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="block h-[1.5px] w-full rounded-full bg-current"
          />
          <motion.span
            animate={{
              rotate: open ? -45 : 0,
              y: open ? -6 : 0,
              backgroundColor: open ? "#FAFAF7" : "currentColor",
            }}
            transition={{ duration: 0.35, ease: EASE }}
            className="block h-[1.5px] w-full rounded-full origin-center"
          />
        </span>
      </button>

      {/* Backdrop + panel deslizable (solo mobile) */}
      <AnimatePresence>
        {open ? (
          <>
            {/* Backdrop semi-transparente */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 z-[115] bg-[#0A0A0A]/60 backdrop-blur-sm"
              aria-hidden
            />

            {/* Panel deslizable desde la derecha */}
            <motion.aside
              key="panel"
              role="dialog"
              aria-modal="true"
              aria-label={t.nav.menu}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="md:hidden fixed top-0 right-0 bottom-0 z-[118] w-[82%] max-w-sm bg-[#0A0A0A] text-[#FAFAF7] flex flex-col"
              style={{
                background:
                  "radial-gradient(circle at 100% 100%, #283A42 0%, #0A0A0A 80%)",
              }}
            >
              {/* Header del panel — espacio para el botón hamburguesa que queda flotando */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4">
                <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/55">
                  {t.nav.menu}
                </span>
              </div>

              {/* Navegación — tipografía grande serif */}
              <nav className="flex-1 flex flex-col justify-center px-6">
                {navLinks.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.15 + i * 0.06,
                        ease: EASE,
                      }}
                    >
                      <TransitionLink
                        href={link.href}
                        className="group flex items-baseline justify-between border-b border-[#FAFAF7]/10 py-4"
                      >
                        <span
                          className={`font-serif tracking-[-0.02em] transition-colors ${
                            active
                              ? "text-[#FAFAF7]"
                              : "text-[#FAFAF7]/55 group-hover:text-[#FAFAF7]"
                          }`}
                          style={{ fontSize: "clamp(1.75rem, 8vw, 2.5rem)" }}
                        >
                          {link.label}
                        </span>
                        {active ? (
                          <span className="text-[9px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/50">
                            ON
                          </span>
                        ) : (
                          <span
                            aria-hidden
                            className="text-[#FAFAF7]/30 group-hover:text-[#FAFAF7] transition-colors"
                          >
                            →
                          </span>
                        )}
                      </TransitionLink>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Footer — locale toggle + meta */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
                className="px-6 pt-6 pb-8 border-t border-[#FAFAF7]/10 flex items-center justify-between gap-4"
              >
                <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/55 leading-tight">
                  Innhovex<br />
                  Buenos Aires
                </div>
                <LocaleToggle />
              </motion.div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
