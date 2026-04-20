"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const HERO_IMAGE =
  "https://images.pexels.com/photos/32895774/pexels-photo-32895774.jpeg";

/**
 * Hero estilo exoape: section más alta que el viewport (2.0x).
 * La imagen cubre TODO el alto del hero, así al scrollear la imagen va
 * "bajando lentamente" ganando un efecto de escala masivo sin cansar al usuario.
 */
export default function Hero() {
  const { scrollY } = useScroll();
  // El fondo se desplazará hacia abajo sutilmente para crear un efecto parallax real
  // y que se "despegue" visualmente de las letras.
  const backgroundY = useTransform(scrollY, [0, 1500], ["0%", "15%"]);

  return (
    <section
      data-theme="dark"
      className="relative w-full bg-[#0A0A0A] overflow-hidden"
      style={{ height: "200vh" }}
    >
      {/* Imagen: ocupa MÁS del 100% (-top y h-[120%]) para tener "sobra" de imagen para el parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: backgroundY, willChange: "transform" }}
          className="relative h-[125%] w-full -top-[15%]"
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
          className="absolute inset-x-0 top-0 h-72 pointer-events-none bg-gradient-to-b from-[#0A0A0A]/60 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-96 pointer-events-none bg-gradient-to-t from-[#0A0A0A]/70 to-transparent"
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
      <div className="relative px-6 md:px-14">
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

        {/* Contenedor central — pl-2 lo corre apenas a la derecha para no coincidir con IEX */}
        <div className="mt-[38vh] md:mt-[44vh] max-w-5xl flex flex-col gap-12 md:gap-16 pl-6 md:pl-10">
          
          {/* Intro Original (Arriba) */}
          <p
            className="font-serif text-[#FAFAF7] leading-[1.15] tracking-[-0.02em] max-w-2xl"
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

          {/* Título Innhovex gigante */}
          <h1
            className="font-serif text-[#FAFAF7] tracking-[-0.05em]"
            style={{
              fontSize: "clamp(5rem, 19vw, 20rem)",
              lineHeight: 0.85,
              marginLeft: "-1vw",
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
                    delay: 0.6 + i * 0.08, // Ligeramente retrasado para flow
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

          {/* NUEVO BLOQUE: Texto Marketing + Detalles de Contacto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col md:flex-row md:items-end justify-between border-t border-[#FAFAF7]/10 pt-8 mt-4 gap-12"
          >
            {/* Texto de cierre / posicionamiento (Marketing Opción 2) */}
            <p className="font-serif text-[#FAFAF7]/70 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-xl">
              No solo hacemos páginas web. Construimos el activo digital más valioso de tu empresa mediante diseño de vanguardia y tecnología inmersiva.
            </p>

            {/* Datos de contacto (Margen derecho) */}
            <div className="flex flex-col gap-2 text-xs md:text-sm font-mono tracking-[0.1em] uppercase text-[#FAFAF7]/60 md:text-right shrink-0">
              <span className="text-[#FAFAF7] font-bold tracking-[0.2em] mb-2">Comienza un proyecto</span>
              <a href="mailto:hello@innhovex.com" className="hover:text-[#FAFAF7] transition-colors duration-300">
                hello@innhovex.com
              </a>
              <a href="tel:+5491100000000" className="hover:text-[#FAFAF7] transition-colors duration-300 mt-1">
                +54 9 11 0000-0000
              </a>
            </div>
          </motion.div>

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
