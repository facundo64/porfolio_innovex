"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

/*
 * CSS filter para convertir negro (#000) al azul navy de la marca (#1E2A47):
 * invert(14%) sepia(30%) saturate(1800%) hue-rotate(193deg) brightness(92%) contrast(90%)
 * 
 * Para blanco simplemente: brightness(0) invert(1)
 */
const FILTER_NAVY =
  "invert(14%) sepia(30%) saturate(1800%) hue-rotate(193deg) brightness(92%) contrast(90%)";
const FILTER_WHITE = "brightness(0) invert(1)";

export default function TopHeader() {
  const pathname = usePathname();
  const [onDark, setOnDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const check = () => {
      setScrolled(window.scrollY > 80);
      const el = document.elementFromPoint(window.innerWidth / 2, 40);
      if (!el) return;
      const section = el.closest("[data-theme]") as HTMLElement | null;
      setOnDark(section?.dataset.theme === "dark");
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [pathname]);

  // En /work el fondo siempre es oscuro (carrusel cinemático), forzar blanco
  const isWorkPage = pathname === "/work";
  const useWhite = isWorkPage || onDark || scrolled;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-40 pointer-events-none"
    >
      <div className="relative flex items-center px-6 md:px-14 py-5 md:py-6">
        <Link href="/" className="pointer-events-auto">
          <Image
            src="/logo-innhovex.svg"
            alt="INNHOVEX"
            width={120}
            height={40}
            priority
            className="h-24 md:h-28 w-auto transition-[filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ filter: useWhite ? FILTER_WHITE : FILTER_NAVY }}
          />
        </Link>
      </div>
    </motion.header>
  );
}

