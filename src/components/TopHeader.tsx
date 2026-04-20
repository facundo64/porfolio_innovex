"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

  // Azul navy al inicio, blanco al bajar un poco sobre la imagen oscura
  const color = scrolled ? "#FAFAF7" : "#1E2A47";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      <div className="relative flex items-center px-6 md:px-14 py-5 md:py-6">
        <Link href="/">
          <motion.span
            animate={{ color }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif tracking-[-0.04em] leading-none"
            style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}
          >
            IEX
          </motion.span>
        </Link>
      </div>
    </motion.header>
  );
}

