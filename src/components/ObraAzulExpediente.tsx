"use client";

import { useEffect, useRef } from "react";
import "./ObraAzulExpediente.css";

/* ── Paths del isotipo (7 trazos) — reutilizados en construcción y variantes ── */
const D = {
  olaSup:
    "M46.63,213.22c-2.3-5.99-6.89-12.08-9.01-18.04-.52-1.47-1.47-2.64-.38-4.06,1.01-1.33,8.41-6.51,10.3-7.76,30.26-20,67.92-25.47,103.05-16.59,11.46,2.9,22.54,8.15,33.92,10.84,32.6,7.71,67.68,2.6,95.26-16.62,1.26,1.72-5.49,26.58-7.14,29.85s-7.19,5.83-10.47,7.56c-25.43,13.46-55.63,15.37-83.25,7.8-32.38-8.88-49.25-18.14-85.17-11.45-16.76,3.12-32.38,10.23-47.12,18.47Z",
  olaMed:
    "M266.09,205.14l-5.82,10.03c-7.23,10.1-15.63,21.57-25.59,29.12-7.88,5.98-34.09,4.46-43.96,2.96-15.23-2.32-28.11-9.14-42.74-12.59-20.57-4.85-42.48-4.76-62.95.51-2.8.72-14.28,4.95-15.7,4.81-2.67-.27-15.18-16.86-17.73-19.59,29.07-20.02,66.28-24.31,100.09-14.92,10.45,2.9,20.32,7.68,30.96,10.07,22.34,5.02,47.13,4.16,68.67-3.7,5.08-1.85,9.87-4.43,14.77-6.68Z",
  escalera:
    "M111.9,95.7h83.94v-19.59c0-19.06,22.21-36.66,40.18-38.16,5.65-.47,11.15.26,10.84,7.08-.3,6.7-6.34,4.78-10.84,5.35-12.57,1.59-28.37,13.3-28.37,26.97v95.44c-3.77-.05-8.54.22-11.81-1.55v-29.53h-83.94v13.06l-11.81.62v-78.65c0-11.69-13.98-23.48-24.74-25.62-4.89-.97-13.44.59-14.39-5.51-2.09-13.36,21.97-5.86,28.15-2.65,9.98,5.19,22.81,20.24,22.81,31.91v20.83ZM195.84,107.52h-83.94v22.38h83.94v-22.38Z",
  olaInf:
    "M216.36,256.12c-1.8,2.39-5.53,3.77-8.28,5.08-43.22,20.55-89.91,15.48-128.45-12.28l-3.16-3.36c19.35-5.93,38.48-8.5,58.68-5.52,18.52,2.73,34.81,11.5,53.12,14.65,9.47,1.63,18.5,1.63,28.09,1.45Z",
  destA:
    "M302.58,47.47l-13.05,7.77-6.23,12.12c-.61.46-6.4-11.61-7.66-12.85-2.31-2.26-9.13-4.72-12.23-6.43-.55-.74,11.58-6.17,12.78-7.42,2.87-3,4.5-8.96,6.81-12.45,2.22,3.28,4.68,10.48,7.44,13.06,2.24,2.09,9.13,4.73,12.14,6.21Z",
  destB:
    "M37.29,98.2c.28.34.09.86-.38,1.28-2.54,2.25-9.02,3.84-11.77,6.76-1.84,1.94-4.86,11.23-6.8,11.23-2.04-3.4-3.84-8.65-6.51-11.54-3.23-3.51-8.45-4.15-11.83-7.43.02-.72,10.76-5.57,12.43-7.45s5.29-10.9,6.52-11.51c2.8,4.18,3.78,10.63,8.17,13.58,1.71,1.15,9.38,4.14,10.16,5.08Z",
  destC:
    "M277.68,13.66c-2.34,1.98-6.93,3.19-9.11,5.22-1.57,1.45-3.98,8.27-5.23,8.89-3.03-5.69-3.78-8.49-9.64-11.76-.73-.4-3.67-1.29-3.79-1.45-.9-1.21,6.2-4.09,6.98-4.62,3.43-2.35,4.24-6.89,6.91-9.94,1.75,2.58,2.96,7.31,5.21,9.35,1.91,1.73,6.26,3.13,8.67,4.31Z",
};

type IsoColors = {
  escalera: string;
  olaSup: string;
  olaMed: string;
  olaInf: string;
  destA: string;
  destB: string;
  destC: string;
};

const ISO_ORIGINAL: IsoColors = {
  olaSup: "#7fcbd8",
  olaMed: "#319eca",
  escalera: "#29235c",
  olaInf: "#299cc8",
  destA: "#349dc8",
  destB: "#7fcbd8",
  destC: "#7fcbd8",
};

/** Isotipo completo con colores configurables (viewBox 0 0 310 277.98) */
function Iso({ c = ISO_ORIGINAL }: { c?: IsoColors }) {
  return (
    <g>
      <path d={D.olaSup} fill={c.olaSup} />
      <path d={D.olaMed} fill={c.olaMed} />
      <path d={D.escalera} fill={c.escalera} />
      <path d={D.olaInf} fill={c.olaInf} />
      <path d={D.destA} fill={c.destA} />
      <path d={D.destB} fill={c.destB} />
      <path d={D.destC} fill={c.destC} />
    </g>
  );
}

const CAP = "/projects/obra-azul";

export default function ObraAzulExpediente({ id }: { id?: string }) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll(".caratula, .lamina");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id={id} ref={rootRef} className="oa-exp relative z-[110]">
      <div className="hoja">
        {/* ═════════ CARÁTULA ═════════ */}
        <header className="caratula">
          <div className="sello">
            <span className="marca-chip">
              <svg viewBox="0 0 310 277.98" aria-label="Isotipo Obra Azul">
                <Iso />
              </svg>
            </span>
            <span className="eyebrow">Expediente de proyecto · INNHOVEX · 2026</span>
          </div>

          <h1 className="titulo-caratula">Obra Azul.</h1>

          <p className="prosa" style={{ fontSize: "1.06rem" }}>
            Empresa de reparación y construcción de piscinas en el conurbano bonaerense, sin identidad
            visual ni presencia digital. El trabajo cubrió tres frentes: marca, sitio público y sistema
            de gestión de servicios en campo.
          </p>

        </header>

        {/* ═════════ F.00 ALCANCE ═════════ */}
        <section className="lamina">
          <div className="lamina-cab">
            <span className="folio">F.00</span>
            <h2>Entregables</h2>
          </div>
          <p className="prosa bajada">
            Se trabajó como un encargo único con tres frentes que comparten una misma identidad. La
            marca se definió primero porque alimenta a las otras dos: el sitio y el sistema toman de
            ella el color, la tipografía y el isotipo.
          </p>

          <div className="pizarra">
            <svg viewBox="0 0 700 250" role="img" aria-label="La identidad alimenta al sitio y al sistema">
              <defs>
                <marker id="oa-pf" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                  <path
                    d="M0.5,0.8 L7.5,4.5 L0.5,8.2"
                    fill="none"
                    stroke="var(--tinta-3)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </marker>
              </defs>

              <rect className="d-caja" x="22" y="92" width="170" height="72" rx="4" />
              <text className="d-mono" x="38" y="116">FASE 1</text>
              <text className="d-tit" x="38" y="136">Identidad de marca</text>
              <text className="d-sub" x="38" y="152">Isotipo, paleta, tipografía</text>

              <path className="d-flecha" d="M195,116 C232,114 236,64 268,62" markerEnd="url(#oa-pf)" />
              <path className="d-flecha" d="M195,142 C232,144 236,192 268,194" markerEnd="url(#oa-pf)" />

              <rect className="d-caja" x="272" y="26" width="186" height="74" rx="4" />
              <text className="d-mono" x="288" y="50">FASE 2</text>
              <text className="d-tit" x="288" y="70">Sitio público</text>
              <text className="d-sub" x="288" y="86">Capta y convierte consultas</text>

              <rect className="d-caja" x="272" y="158" width="186" height="74" rx="4" />
              <text className="d-mono" x="288" y="182">FASE 3</text>
              <text className="d-tit" x="288" y="202">Sistema de gestión</text>
              <text className="d-sub" x="288" y="218">Opera el trabajo vendido</text>

              <path className="d-flecha-acento" d="M461,63 C500,66 502,110 528,116" markerEnd="url(#oa-pf)" />
              <path className="d-flecha-acento" d="M461,195 C500,192 502,146 528,140" markerEnd="url(#oa-pf)" />

              <rect className="d-caja-alt" x="532" y="92" width="146" height="72" rx="4" />
              <text className="d-tit" x="548" y="124">Un mismo cliente</text>
              <text className="d-sub" x="548" y="141">de la consulta a la factura</text>

            </svg>
          </div>

          <div className="cols c3" style={{ marginTop: 22 }}>
            <div className="bloque">
              <h3>Identidad</h3>
              <p>
                Isotipo original vectorizado, sistema de color, tipografía y variantes de uso para
                pantalla, impresión y fondo oscuro.
              </p>
            </div>
            <div className="bloque">
              <h3>Sitio público</h3>
              <p>
                Tres rutas, video en portada, portfolio de obras y contacto centralizado en WhatsApp.
                En producción con dominio propio.
              </p>
            </div>
            <div className="bloque">
              <h3>Sistema de gestión</h3>
              <p>
                Cotizaciones, órdenes de servicio, agenda, inventario, facturación y seguimiento de
                técnicos en cuatro roles distintos.
              </p>
            </div>
          </div>
        </section>

        {/* ═════════ F.01 ANATOMÍA DEL ISOTIPO ═════════ */}
        <section className="lamina">
          <div className="lamina-cab">
            <span className="folio">F.01</span>
            <h2>Isotipo</h2>
          </div>
          <p className="prosa bajada">
            Dos signos del rubro: la escalera que baja al agua y las olas de la superficie. La escalera
            va en negativo —el vacío entre los trazos— para que no se empaste a tamaño de favicon.
          </p>

          <div className="tablero-logo">
            <div className="construccion">
              <svg viewBox="-70 -54 452 410" role="img" aria-label="Isotipo con anotaciones">
                <defs>
                  {/* wobble tipo excalidraw, solo para las anotaciones (no para el logo) */}
                  <filter id="oa-rough" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="7" result="n" />
                    <feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" />
                  </filter>
                  <marker id="oa-arrow" markerWidth="13" markerHeight="13" refX="8" refY="6" orient="auto">
                    <path d="M1.5,1.5 L9.5,6 L1.5,10.5" fill="none" stroke="var(--lapiz)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </marker>
                </defs>

                {/* área de seguridad, a mano alzada */}
                <g filter="url(#oa-rough)">
                  <rect x="-20" y="-20" width="350" height="318" fill="none" stroke="var(--tinta-3)" strokeWidth="1.4" strokeDasharray="8 7" />
                </g>

                <Iso />

                {/* flecha → escalera */}
                <g filter="url(#oa-rough)">
                  <path d="M8,20 C60,22 116,44 147,70" fill="none" stroke="var(--lapiz)" strokeWidth="1.7" strokeLinecap="round" markerEnd="url(#oa-arrow)" />
                </g>
                <text className="d-mano" x="-52" y="12" style={{ fontSize: "15px" }}>escalera en negativo</text>

                {/* flecha → olas */}
                <g filter="url(#oa-rough)">
                  <path d="M300,312 C258,300 232,250 210,216" fill="none" stroke="var(--lapiz)" strokeWidth="1.7" strokeLinecap="round" markerEnd="url(#oa-arrow)" />
                </g>
                <text className="d-mano" x="362" y="330" textAnchor="end" style={{ fontSize: "15px" }}>tres olas, tres azules</text>
              </svg>
            </div>

            <div className="capas">
              <div className="capa">
                <span className="muestra">
                  <svg viewBox="60 30 195 165">
                    <path d={D.escalera} fill="#29235c" />
                  </svg>
                </span>
                <div>
                  <h4>Escalera · trazo estructural</h4>
                  <span className="mono chico">#29235C — el único elemento que cambia de color en la variante monocroma</span>
                </div>
              </div>
              <div className="capa">
                <span className="muestra">
                  <svg viewBox="30 160 250 70">
                    <path d={D.olaSup} fill="#7fcbd8" />
                  </svg>
                </span>
                <div>
                  <h4>Ola superior · claro</h4>
                  <span className="mono chico">#7FCBD8 — la lámina de agua vista desde arriba</span>
                </div>
              </div>
              <div className="capa">
                <span className="muestra">
                  <svg viewBox="30 195 250 70">
                    <path d={D.olaMed} fill="#319eca" />
                  </svg>
                </span>
                <div>
                  <h4>Ola media · profundidad</h4>
                  <span className="mono chico">#319ECA — el azul que gobierna toda la interfaz</span>
                </div>
              </div>
              <div className="capa">
                <span className="muestra">
                  <svg viewBox="60 230 180 45">
                    <path d={D.olaInf} fill="#299cc8" />
                  </svg>
                </span>
                <div>
                  <h4>Ola inferior · fondo</h4>
                  <span className="mono chico">#299CC8 — cierra la base y apoya el conjunto</span>
                </div>
              </div>
              <div className="capa">
                <span className="muestra">
                  <svg viewBox="245 -5 70 90">
                    <path d={D.destA} fill="#349dc8" />
                    <path d={D.destC} fill="#7fcbd8" />
                  </svg>
                </span>
                <div>
                  <h4>Tres destellos · agua limpia</h4>
                  <span className="mono chico">Asimétricos a propósito: dan movimiento y evitan que el conjunto quede rígido</span>
                </div>
              </div>
            </div>
          </div>

          <h3 style={{ marginTop: 34, marginBottom: 14 }}>Variantes de uso</h3>
          <div className="variantes">
            <div className="variante">
              <div className="lienzo claro">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${CAP}/logo-horizontal.svg`} alt="Isologo completo sobre fondo claro" style={{ maxHeight: 62, width: "auto", maxWidth: "100%" }} />
              </div>
              <div className="pie">
                <b>Principal</b>Isologo completo sobre fondo claro
              </div>
            </div>

            <div className="variante">
              <div className="lienzo oscuro">
                <svg viewBox="0 0 310 277.98">
                  <Iso c={{ ...ISO_ORIGINAL, escalera: "#ffffff" }} />
                </svg>
              </div>
              <div className="pie">
                <b>Fondo oscuro</b>La escalera pasa a blanco; el agua no cambia
              </div>
            </div>

            <div className="variante">
              <div className="lienzo agua">
                <svg viewBox="0 0 310 277.98">
                  <Iso
                    c={{
                      escalera: "#ffffff",
                      olaSup: "#ffffff",
                      olaMed: "#ffffff",
                      olaInf: "#ffffff",
                      destA: "#ffffff",
                      destB: "#ffffff",
                      destC: "#ffffff",
                    }}
                  />
                </svg>
              </div>
              <div className="pie">
                <b>Monocromo</b>Vinilo, bordado, sellos y una sola tinta
              </div>
            </div>

            <div className="variante">
              <div className="lienzo gris">
                <svg viewBox="0 0 310 277.98">
                  <Iso
                    c={{
                      olaSup: "#b9c0c7",
                      olaMed: "#8a949e",
                      escalera: "#3d4247",
                      olaInf: "#767f88",
                      destA: "#8a949e",
                      destB: "#b9c0c7",
                      destC: "#b9c0c7",
                    }}
                  />
                </svg>
              </div>
              <div className="pie">
                <b>Escala de grises</b>Verifica que el contraste sobreviva sin color
              </div>
            </div>
          </div>

          <div className="bloque" style={{ marginTop: 26 }}>
            <h3>Lo que se entregó</h3>
            <p>
              Isologo y isotipo aislado en SVG, versiones positiva, negativa, monocroma y en escala de
              grises, juego completo de favicons e íconos de aplicación (32, 192, 512 px y apple-touch)
              e imagen de previsualización para redes.
            </p>
          </div>
        </section>

        {/* ═════════ F.02 SISTEMA VISUAL ═════════ */}
        <section className="lamina">
          <div className="lamina-cab">
            <span className="folio">F.02</span>
            <h2>Color</h2>
          </div>
          <p className="prosa bajada">
            La paleta se extrajo del logo: los tres azules del agua son los mismos valores del isotipo.
            Así el sitio se ve de la misma empresa sin repetir el logo en cada pantalla.
          </p>

          <div className="paleta">
            {[
              ["Navy estructural", "#29235C", "Trazo del logo, títulos, fondo de aplicación"],
              ["Azul Obra", "#319ECA", "Acción principal, enlaces, estados activos"],
              ["Cyan superficie", "#7FCBD8", "Acentos, fondos suaves, gráficos"],
              ["Azul profundo", "#299CC8", "Bordes, hover, tercera ola"],
              ["Papel", "#F8FAFC", "Fondo de trabajo de toda la interfaz"],
              ["Tinta", "#0F172A", "Texto corrido y modo oscuro"],
            ].map(([nombre, hex, uso]) => (
              <div className="tono" key={hex}>
                <div
                  className="swatch"
                  style={{
                    background: hex,
                    borderBottom: hex === "#F8FAFC" ? "1px solid var(--borde-suave)" : undefined,
                  }}
                />
                <div className="info">
                  <b>{nombre}</b>
                  <code>{hex}</code>
                  <span>{uso}</span>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ═════════ F.03 EL SITIO ═════════ */}
        <section className="lamina">
          <div className="lamina-cab">
            <span className="folio">F.03</span>
            <h2>El sitio</h2>
          </div>
          <p className="prosa bajada">
            Tres rutas. La empresa no vende por catálogo sino por visita técnica, así que todo el sitio
            empuja a una acción: abrir la conversación por WhatsApp. Estas son las pantallas principales.
          </p>

          <p style={{ marginBottom: 26 }}>
            <a className="enlace" href="https://www.obraazulpiscinas.com" target="_blank" rel="noopener noreferrer">
              obraazulpiscinas.com →
            </a>
          </p>

          <div className="lado">
            <figure>
              <div className="captura">
                <span className="pin" style={{ top: "14%", left: "47%" }}>1</span>
                <span className="pin" style={{ top: "6%", right: "6%" }}>2</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${CAP}/web-hero.jpg`} alt="Portada: video aéreo de una piscina a pantalla completa" loading="lazy" />
              </div>
              <figcaption>
                <b>P.01</b>
                <span>Portada — video aéreo a pantalla completa</span>
              </figcaption>
            </figure>
            <div className="notas">
              <div className="nota-pin">
                <span className="b">1</span>
                <p>
                  <strong>Barra flotante en pastilla.</strong> Se separa del borde y se contrae al
                  bajar. En pantalla chica colapsa a una cápsula que sólo muestra el isotipo y se
                  despliega al tocarla, para no comerle ancho a la portada.
                </p>
              </div>
              <div className="nota-pin">
                <span className="b">2</span>
                <p>
                  <strong>Contacto siempre presente.</strong> El botón de WhatsApp queda fijo en la
                  esquina durante todo el recorrido: es el único canal de conversión del sitio.
                </p>
              </div>
              <div className="nota-pin">
                <span className="b">·</span>
                <p>
                  <strong>Pantalla de carga con garantía.</strong> La portada no se descubre hasta que
                  la imagen de respaldo del video terminó de cargar, para que nadie vea una versión
                  borrosa mientras baja el video.
                </p>
              </div>
            </div>
          </div>

          <div className="cols c2" style={{ marginTop: 30 }}>
            <figure>
              <div className="captura">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${CAP}/web-titular.jpg`} alt="Titular animado sobre el video" loading="lazy" />
              </div>
              <figcaption>
                <b>P.02</b>
                <span>
                  El titular se completa con el scroll: la palabra “proyectos” entra en azul de marca y
                  fija el posicionamiento — no limpieza de pileta, obra.
                </span>
              </figcaption>
            </figure>
            <figure>
              <div className="captura">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${CAP}/web-expertos.jpg`} alt="Sección de oficio con foto propia de obra" loading="lazy" />
              </div>
              <figcaption>
                <b>P.03</b>
                <span>Prueba de oficio con fotografía propia de obra, no de banco. El fondo pasa a navy y el bloque respira aparte del resto.</span>
              </figcaption>
            </figure>
          </div>

          <div className="cols c2" style={{ marginTop: 22 }}>
            <figure>
              <div className="captura">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${CAP}/web-servicios.jpg`} alt="Grilla de seis servicios" loading="lazy" />
              </div>
              <figcaption>
                <b>P.04</b>
                <span>Los seis servicios, redactados en el vocabulario del cliente. En móvil la grilla se apila a una columna con el ícono al costado del texto.</span>
              </figcaption>
            </figure>
            <figure>
              <div className="captura">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${CAP}/web-portfolio.jpg`} alt="Sección Nuestro trabajo con fotos de piscinas terminadas" loading="lazy" />
              </div>
              <figcaption>
                <b>P.05</b>
                <span>Portfolio de obras terminadas. Cada imagen se sirve en formato moderno y en varias resoluciones según el dispositivo.</span>
              </figcaption>
            </figure>
          </div>

          <h3 style={{ marginTop: 36, marginBottom: 12 }}>Decisiones que definieron el sitio</h3>
          <div className="decisiones">
            <div className="decision">
              <span className="n">01</span>
              <div>
                <h4>Un solo canal de contacto</h4>
                <p>
                  Se descartó el formulario de contacto y se centralizó todo en WhatsApp con el mensaje
                  ya redactado. El endpoint de correo quedó en el código, desconectado, por si el
                  criterio cambia.
                </p>
                <span className="porque">un formulario que nadie contesta es peor que no tenerlo</span>
              </div>
            </div>
            <div className="decision">
              <span className="n">02</span>
              <div>
                <h4>Móvil rediseñado, no encogido</h4>
                <p>
                  La sección de compromiso usa en escritorio una secuencia con video de fondo y
                  tarjetas con inclinación. En el teléfono esa misma sección se resuelve con otro
                  componente: apilada, sin desplazamiento forzado, con el video como banda decorativa.
                </p>
                <span className="porque">el gesto de scroll vertical competía con el carrusel horizontal</span>
              </div>
            </div>
            <div className="decision">
              <span className="n">03</span>
              <div>
                <h4>Se sacaron los números que no se podían probar</h4>
                <p>
                  Los contadores de “años de experiencia” y “obras completadas” salieron de todas las
                  páginas por pedido de la revisión: una cifra que no se puede respaldar erosiona el
                  resto del mensaje.
                </p>
              </div>
            </div>
            <div className="decision">
              <span className="n">04</span>
              <div>
                <h4>Ficha de negocio local para buscadores</h4>
                <p>
                  Se declaró la empresa como negocio de construcción con dirección, teléfono, horarios
                  y zona de cobertura en datos estructurados, más mapa embebido en el pie.
                </p>
                <span className="porque">acá el tráfico llega por búsqueda local, no por marca</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════ CIERRE — invitación a ver el sitio ═════════ */}
        <section className="lamina cierre">
          <p className="cierre-eyebrow">El sitio está publicado</p>
          <h2>Míralo funcionando</h2>
          <a className="cta-ver" href="https://www.obraazulpiscinas.com" target="_blank" rel="noopener noreferrer">
            Entrar a obraazulpiscinas.com <span aria-hidden>→</span>
          </a>
        </section>
      </div>
    </section>
  );
}
