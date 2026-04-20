"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2400&q=90";

/**
 * Hero estilo exoape: section MUCHO más alta que el viewport (≈2.6x).
 * La imagen cubre TODO el alto del hero, así al scrollear la imagen va
 * "bajando lentamente" porque recién termina de salir después de ~2.5 pantallas.
 * El texto vive dentro de la misma sección y se desliza junto con la imagen.
 */
export default function Hero() {
  return (
    <section
      data-theme="dark"
      className="relative w-full bg-[#0A0A0A]"
      style={{ height: "260vh" }}
    >
      {/* Imagen: ocupa el 100% del hero (≈260vh) */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Vignettes */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-56 pointer-events-none bg-gradient-to-b from-[#0A0A0A]/40 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-72 pointer-events-none bg-gradient-to-t from-[#0A0A0A]/50 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.18]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Contenido: layout vertical dentro del hero largo */}
      <div className="relative h-full flex flex-col px-6 md:px-14">
        {/* Meta superior */}
        <div className="pt-28 md:pt-32 flex items-start justify-between text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/70">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Estudio digital · Est. 2024
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block"
          >
            Buenos Aires — Argentina
          </motion.div>
        </div>

        {/* Intro: aparece arriba (primera pantalla) — mask reveal al entrar en viewport */}
        <div className="mt-[28vh] max-w-4xl">
          <p
            className="font-serif text-[#FAFAF7] leading-[1.15] tracking-[-0.02em]"
            style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.5rem)" }}
          >
            {[
              "Estudio digital partnering con marcas",
              "y negocios que crean experiencias",
              "excepcionales donde las personas",
              "viven, trabajan y se conectan.",
            ].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.3 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </p>
        </div>

        {/* Título apilado estilo exoape: 3 palabras stacked con line-height ajustado.
            Cada una aparece con mask-reveal al entrar en viewport mientras scrolleás. */}
        <div className="mt-auto pb-32 md:pb-40">
          <h1
            className="font-serif text-[#FAFAF7] tracking-[-0.04em]"
            style={{
              fontSize: "clamp(4rem, 15vw, 16rem)",
              lineHeight: 0.88,
            }}
          >
            {[
              { word: "Digital", italic: false },
              { word: "Studio", italic: true },
              { word: "Innhovex.", italic: false, accent: true },
            ].map(({ word, italic, accent }, i) => (
              <span
                key={word}
                className="block overflow-hidden"
                style={{ lineHeight: 0.88 }}
              >
                <motion.span
                  initial={{ y: "110%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{
                    duration: 1.4,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`block ${italic ? "italic text-[#FAFAF7]/92" : ""}`}
                >
                  {accent ? (
                    <>
                      Innhovex<span className="text-[#1E2A47]">.</span>
                    </>
                  ) : (
                    word
                  )}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>
      </div>

      {/* Scroll hint fixed-en-viewport solo al principio (via sticky dentro del hero) */}
      <div className="absolute bottom-0 left-0 right-0 h-screen pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="sticky top-[calc(100vh-3.5rem)] flex items-center justify-between px-6 md:px-14 text-[11px] font-mono tracking-[0.22em] uppercase text-[#FAFAF7]/60"
        >
          <span className="flex items-center gap-2">
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              ↓
            </motion.span>
            Scroll
          </span>
          <span className="hidden md:inline">Reel · 2026</span>
        </motion.div>
      </div>
    </section>
  );
}
