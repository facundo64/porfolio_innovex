"use client";

import { Captura, Expediente } from "./expediente/Expediente";
import { Oferta, Paso, Vitrina, type Pantalla } from "./expediente/Venta";
import { kalam, montserrat, playfair } from "@/lib/fonts/expedientes";
import "./JemsiExpediente.css";

const A = "/projects/jem-si";

/** Isotipo JEM-SI (4 planos), mismo trazado que usa el sitio. viewBox 160 -5 308 330 */
function Iso({ color = "#181818" }: { color?: string }) {
  return (
    <g fill={color}>
      <polygon points="226.02 40.15 226.02 81.36 263.64 62.42 263.64 187.61 305.04 170.77 305.04 0 226.02 40.15" />
      <polygon points="321.06 0.04 460.25 79.1 460.25 154.37 417.54 130.5 417.72 99.36 364.8 69.3 364.8 118.65 460.25 174.52 460.25 253.09 315.66 315.9 243.84 276.12 288.84 255.42 316.56 270.72 417.6 228.51 417.6 195.35 321.06 139.68 321.06 0.04" />
      <polygon points="167.32 143.03 211.14 120.77 211.01 206.01 213.78 209.52 167.32 230.96 167.32 143.03" />
      <polygon points="168.6 247.14 343.02 171 385.68 195.66 212.7 271.8 168.6 247.14" />
    </g>
  );
}

const ISO_VB = "160 -5 308 330";

// Vitrina: el folleto de cada división en formato celular, listo para reenviar.
const VITRINA: readonly Pantalla[] = [
  [`${A}/j-cel-met-2.jpg`, "Folleto de Metalúrgica en formato celular: Precisión en cada milímetro", "metalúrgica: naranja"],
  [`${A}/j-cel-rci-2.jpg`, "Folleto de Contra incendio en formato celular: Ingeniería en protección", "contra incendio: rojo"],
  [`${A}/j-cel-pr-2.jpg`, "Folleto de Pack Rack en formato celular: Estructura que sostiene la industria", "pack rack: ámbar"],
];

const DIVISIONES = [
  ["Metalúrgica", "#FF4500"],
  ["Contra incendio", "#CC1111"],
  ["Pack Rack", "#F3C300"],
] as const;

const PAGINAS = [
  [`${A}/j-met-hero.jpg`, "Página de Metalúrgica: Estructuras que perduran"],
  [`${A}/j-rci-hero.jpg`, "Página de Contra incendio: Protección que no falla"],
  [`${A}/j-pr-hero.jpg`, "Página de Pack Rack: Estructura que sostiene la industria"],
] as const;

const OFERTA = [
  ["Tu marca", "Un sistema que ordene todos tus negocios bajo un mismo nombre, con un color para cada uno."],
  ["Tu sitio", "Una portada que presente al grupo y una página propia para cada línea de negocio."],
  ["Tu material de venta", "Folletos impresos y para el celular, listos para mandar por WhatsApp a cada cliente."],
] as const;

export default function JemsiExpediente({ id }: { id?: string }) {
  return (
    <Expediente id={id} className={`jm-exp ${kalam.variable} ${montserrat.variable} ${playfair.variable}`}>
      {/* ═════════ CARÁTULA ═════════ */}
      <header className="caratula">
        <div className="sello">
          <span className="marca-chip">
            <svg viewBox={ISO_VB} aria-label="Isotipo JEM-SI">
              <Iso />
            </svg>
          </span>
          <span className="eyebrow">Grupo industrial · Plottier, Neuquén</span>
        </div>

        <div>
          <h1 className="titulo-caratula">JEM-SI.</h1>
          <div className="tricolor" style={{ marginTop: 18 }} aria-hidden>
            <span />
            <span />
            <span />
          </div>
          <p className="pie-titular">— tres negocios, una sola marca —</p>
        </div>

        <p className="prosa entrada">
          Un grupo de Plottier con tres negocios: metalúrgica, redes contra incendio y pack rack. Se
          presentaban como tres empresas sueltas. Les armamos una marca común, un sitio con una
          puerta para cada división y el material que el equipo comercial manda todos los días.
        </p>
      </header>

      {/* ═════════ VITRINA: las piezas de venta ═════════ */}
      <Vitrina
        eyebrow="Piezas de venta"
        titulo="Listo para mandar por WhatsApp"
        bajada="El equipo comercial vende por WhatsApp y en reuniones. Cada división tiene su folleto pensado para el celular, para reenviar a cada cliente."
        pantallas={VITRINA}
      >
        <div className="postit">
          <p>Cada división tiene su color, así se distingue a simple vista.</p>
          <span className="quien">Un sistema, tres negocios</span>
        </div>
      </Vitrina>

      {/* ═════════ CÓMO SE ARMÓ ═════════ */}
      <section className="lamina">
        <span className="mano-eyebrow">Cómo se armó</span>
        <h2>Un grupo, tres puertas</h2>

        <div className="pasos">
          <Paso
            n="1"
            titulo="Una marca, tres colores"
            visual={
              <div className="divisiones">
                {DIVISIONES.map(([nombre, color]) => (
                  <div className="division" key={nombre}>
                    <svg viewBox={ISO_VB} aria-hidden>
                      <Iso color={color} />
                    </svg>
                    <span style={{ borderColor: color }}>{nombre}</span>
                  </div>
                ))}
              </div>
            }
          >
            El mismo isotipo para todo el grupo, con un color por división: naranja, rojo y ámbar. Funciona en un cartel de obra, en un folleto o en el celular.
          </Paso>

          <Paso
            n="2"
            titulo="Una portada para el grupo"
            visual={
              <Captura
                src={`${A}/j-hub-1.jpg`}
                alt="Portada del sitio: una sola toma de cámara que pasa por las tres divisiones"
              />
            }
          >
            Un recorrido por las tres divisiones a medida que se baja. Cada parada
            es la puerta a uno de los negocios.
          </Paso>

          <Paso
            n="3"
            titulo="Una página por división"
            visual={
              <div className="paginas">
                {PAGINAS.map(([src, alt]) => (
                  <Captura key={src} src={src} alt={alt} />
                ))}
              </div>
            }
          >
            Cada negocio tiene su página, su tono y sus trabajos, sin dejar de ser parte del mismo
            grupo. Desde cualquiera de ellas se llega a las otras dos.
          </Paso>
        </div>
      </section>

      {/* ═════════ PARA TU EMPRESA ═════════ */}
      <Oferta
        eyebrow="¿Y para tu empresa?"
        items={OFERTA}
        nota="Se puede hacer todo junto o por partes: empezar por la marca y el material de venta, y sumar el sitio después."
        mensaje="Vi el caso de JEM-SI y quiero algo así para mi empresa."
        boton="Contanos tu empresa"
      />
    </Expediente>
  );
}
