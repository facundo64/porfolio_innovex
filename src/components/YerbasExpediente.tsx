"use client";

import { Captura, Expediente } from "./expediente/Expediente";
import { Oferta, Paso, Tel, Vitrina, type Pantalla } from "./expediente/Venta";
import { zilla, oswald, lora, caveat } from "@/lib/fonts/expedientes";
import "./YerbasExpediente.css";

const A = "/projects/yerbas-de-mi-tierra";

// Vitrina del club: pantallas reales de la app (socio de ejemplo), su nota a mano y el foco del recorte en celular.
const VITRINA: readonly Pantalla[] = [
  [`${A}/club/tarjeta.jpg`, "Tarjeta del socio con el sol naciente, los puntos y el nivel", "la tarjeta del socio"],
  [`${A}/club/sello.jpg`, "La ronda: el mate se llena con cada compra y deja un sello cada 1.000 puntos", "cada compra llena el mate", "50% 28%"],
  [`${A}/club/cupon.jpg`, "Canje listo: el cupón queda guardado para retirar en el local", "el canje, desde la app", "50% 50%"],
];

const PALETA = ["#2E2218", "#EFE3CD", "#D67B54", "#515A32", "#F1B977"];

const ILUSTRACIONES = [
  ["dario-ceba.webp", "El dueño cebando mate"],
  ["dario-relax.webp", "El dueño tomando mate"],
  ["sello.png", "Sello: aprobado por maestros"],
  ["ritual-02.webp", "Ritual del mate"],
] as const;

const OFERTA = [
  ["Tu marca", "Colores, ilustraciones y, si hace falta, una letra propia. Partimos de lo que ya tenés."],
  ["Tu sitio", "Pensado para el celular y para que te escriban: pedidos por WhatsApp, cómo llegar y tu historia."],
  ["Tu club de clientes", "Puntos, premios y una tarjeta en el celular de tus clientes, con un panel para vos."],
] as const;

export default function YerbasExpediente({ id }: { id?: string }) {
  return (
    <Expediente id={id} className={`y-exp ${zilla.variable} ${oswald.variable} ${lora.variable} ${caveat.variable}`}>
      {/* ═════════ CARÁTULA ═════════ */}
      <header className="caratula">
        <div className="sello-cab">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${A}/isologo.png`} alt="Isologo de Yerbas de mi Tierra" />
          <span className="eyebrow">Yerbatería · Río Grande, Tierra del Fuego</span>
        </div>

        <div>
          <h1 className="titular">Yerbas de mi Tierra</h1>
          <p className="pie-titular">— de un logo a un club de clientes en el celular —</p>
        </div>

        <p className="prosa entrada">
          Traen yerba de pequeños productores de Misiones al fin del mundo. Les armamos la marca, el
          sitio y un club de puntos para que sus clientes vuelvan. Hoy se usa todos los días en el
          mostrador.
        </p>
      </header>

      {/* ═════════ EL CLUB: la vitrina ═════════ */}
      <Vitrina
        eyebrow="Club del Mate"
        titulo="Un club para el local"
        bajada="Un club de puntos en el celular: los clientes suman en cada compra y canjean por yerba, mates y termos."
        pantallas={VITRINA}
      />

      {/* ═════════ CÓMO SE ARMÓ ═════════ */}
      <section className="lamina">
        <span className="mano-eyebrow">Cómo se armó</span>
        <h2>Del logo al mostrador</h2>

        <div className="pasos">
          <Paso
            n="1"
            titulo="Partimos de su logo"
            visual={
              <div className="marca-vis">
                <div className="lienzo-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${A}/isologo.png`} alt="Emblema: un tarefero carga un raído de hojas con el sol naciente detrás" />
                </div>
                <div className="marca-lado">
                  <div className="paleta" aria-label="Paleta de la marca">
                    {PALETA.map((hex) => <span key={hex} style={{ background: hex }} />)}
                  </div>
                  <p className="esp-frase">Yerba de mi tierra, en tu mesa</p>
                  <div className="stickers">
                    {ILUSTRACIONES.map(([f, alt]) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={f} src={`${A}/stickers/${f}`} alt={alt} loading="lazy" />
                    ))}
                  </div>
                </div>
              </div>
            }
          >
            Llegaron con un logo que querían conservar. De ahí salieron los colores, un set de
            ilustraciones del dueño y una letra propia, dibujada a partir del nombre del logo.
          </Paso>

          <Paso
            n="2"
            titulo="Un sitio para el celular"
            visual={
              <div className="sitio-vis">
                <Captura
                  src={`${A}/web/hero-escritorio.jpg`}
                  alt="Portada del sitio: el titular en la letra propia sobre rayos de sol, con la ilustración del dueño"
                />
                <div className="sitio-tel">
                  <Tel src={`${A}/web/hero.jpg`} alt="Portada del sitio en el celular" />
                </div>
              </div>
            }
          >
            La gente llega desde Instagram, en el teléfono. El sitio cuenta la historia, enseña a
            elegir la yerba y lleva a lo que importa: hacer un pedido, visitar el local o sumarse al
            club.
          </Paso>

          <Paso
            n="3"
            titulo="El club, con la misma cara"
            visual={
              <div className="dos-tel">
                <Tel src={`${A}/web/club.jpg`} alt="Sección Sumate al Club del Mate en el sitio" />
                <Tel src={`${A}/club/tarjeta.jpg`} alt="Tarjeta del socio con el sol y las lomas del logo" />
              </div>
            }
          >
            La tarjeta repite el sol y las lomas del logo, y el sitio invita a sumarse con puntos de
            regalo. Así el club se reconoce como parte de la marca.
          </Paso>
        </div>
      </section>

      {/* ═════════ PARA EL DUEÑO ═════════ */}
      <section className="lamina">
        <span className="mano-eyebrow">Para el dueño</span>
        <h2>Los números, a la vista</h2>
        <p className="prosa bajada">
          En el mostrador, el cajero suma los puntos en la misma compra. El dueño ve cuántas ventas tienen un
          cliente del club detrás, cuántos vuelven a comprar y qué premios salen.
        </p>
        {/* En el celular, el panel completo no se lee: va un recorte de los números principales. */}
        <div className="solo-esc">
          <Captura
            src={`${A}/club/caja-panel.jpg`}
            alt="Panel del comercio: ventas con cliente del club, puntos dados, premios y recompra"
            caption="El panel del comercio. Captura con datos de ejemplo."
          />
        </div>
        <div className="solo-cel">
          <Captura
            src={`${A}/club/caja-panel-cel.jpg`}
            alt="Panel del comercio: porcentaje de ventas con cliente del club, ventas y socios nuevos"
            caption="El panel del comercio. Captura con datos de ejemplo."
          />
        </div>
      </section>

      {/* ═════════ PARA TU COMERCIO ═════════ */}
      <Oferta
        eyebrow="¿Y para tu comercio?"
        items={OFERTA}
        nota="Se puede hacer todo junto o por partes: empezar por el sitio y sumar el club después."
        mensaje="Vi el caso de Yerbas de mi Tierra y quiero algo así para mi comercio."
        boton="Contanos tu comercio"
      />
    </Expediente>
  );
}
