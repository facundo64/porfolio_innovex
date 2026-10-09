"use client";

import { Captura, Expediente } from "./expediente/Expediente";
import { Oferta, Paso, Tel, Vitrina, type Pantalla } from "./expediente/Venta";
import { inter, jetbrains, kalam, playfair } from "@/lib/fonts/expedientes";
import "./CitepExpediente.css";

const A = "/projects/citep";
const SITIO = "https://www.citep-forense.com";

// Vitrina: el sitio real en el celular, con su nota a mano y el foco del recorte en celular.
const VITRINA: readonly Pantalla[] = [
  [`${A}/web/hero-cel.jpg`, "Portada del sitio en el celular: Peritos de parte", "qué hace el estudio, en la portada"],
  [`${A}/web/disciplinas-cel.jpg`, "Las disciplinas periciales, cada una con su página", "cada disciplina, con su página", "50% 30%"],
  [`${A}/web/turnos-cel.jpg`, "Formulario para reservar la primera consulta", "la reserva de turno"],
];

// El sistema: cada consulta avanza con el mismo número hasta el dictamen.
const RECORRIDO = ["Consulta", "Presupuesto", "En curso", "Dictamen"];

const PALETA = ["#0D1B2E", "#073053", "#31ADCB", "#AFB9C3", "#FAFAF8"];

const OFERTA = [
  ["Tu marca", "Una identidad acorde a tu trabajo, para el sitio, los informes y el celular."],
  ["Tu sitio con turnos", "Qué hacés, cómo trabajás y un formulario para recibir la primera consulta."],
  ["Tu sistema interno", "Cada caso con su número, presupuestos con tu marca y un acceso para cada profesional."],
] as const;

export default function CitepExpediente({ id }: { id?: string }) {
  return (
    <Expediente id={id} className={`ct-exp ${inter.variable} ${jetbrains.variable} ${kalam.variable} ${playfair.variable}`}>
      {/* ═════════ CARÁTULA ═════════ */}
      <header className="caratula">
        <div className="sello">
          <span className="marca-chip">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${A}/c-isologo.svg`} alt="Isologo CITEP" />
          </span>
          <span className="eyebrow">Peritos de parte · Argentina</span>
        </div>

        <div>
          <h1 className="titulo-caratula">
            CITEP
            <em>Forense.</em>
          </h1>
          <p className="pie-titular">— de la consulta al dictamen, con el mismo número —</p>
        </div>

        <p className="prosa entrada">
          Un estudio de peritos que trabaja para abogados, empresas y particulares. Les armamos la marca, un sitio para recibir consultas y turnos, y un sistema interno para seguir cada pericia hasta el dictamen.
        </p>
      </header>

      {/* ═════════ VITRINA: el sitio en el celular ═════════ */}
      <Vitrina
        eyebrow="El sitio"
        titulo="Lo esencial, en la primera pantalla"
        bajada="Quien busca un perito suele necesitar respuestas rápidas. Desde el celular ve qué hace el estudio, encuentra su disciplina y pide la primera consulta."
        pantallas={VITRINA}
      >
        <div className="postit">
          <p>La primera consulta se reserva desde el sitio, virtual o presencial.</p>
          <span className="quien">Turnos en línea</span>
        </div>
      </Vitrina>

      {/* ═════════ CÓMO SE ARMÓ ═════════ */}
      <section className="lamina">
        <span className="mano-eyebrow">Cómo se armó</span>
        <h2>
          Del caso <em>al dictamen</em>
        </h2>

        <div className="pasos">
          <Paso
            n="1"
            titulo="La marca, redibujada"
            visual={
              <div className="marca-vis">
                <div className="lienzo-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${A}/c-isologo.svg`} alt="Isologo de CITEP en color" />
                </div>
                <div className="marca-lado">
                  <div className="logo-navy">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="img-blanco" src={`${A}/c-isologo.svg`} alt="Isologo de CITEP en blanco sobre navy" />
                  </div>
                  <div className="paleta" aria-label="Paleta de la marca">
                    {PALETA.map((hex) => <span key={hex} style={{ background: hex }} />)}
                  </div>
                </div>
              </div>
            }
          >
            La marca se redibujó entera, en navy y cian. Funciona igual en el sitio, en un informe impreso o en el ícono del celular.
          </Paso>

          <Paso
            n="2"
            titulo="Un sitio que explica y agenda"
            visual={
              <div className="sitio-vis">
                <Captura src={`${A}/web/hero-escritorio.jpg`} alt="Portada del sitio en la computadora: Peritos de parte" />
                <div className="sitio-tel">
                  <Tel foco="50% 20%" src={`${A}/web/pasos-cel.jpg`} alt="Cómo trabaja el estudio, paso a paso, en el celular" />
                </div>
              </div>
            }
          >
            Una página por disciplina, los pasos de cómo se trabaja contados para quien nunca contrató
            un perito, y la reserva de turno siempre a mano.
          </Paso>

          <Paso
            n="3"
            titulo="Un sistema para el estudio"
            visual={
              <div className="recorrido-vis">
                <ol className="recorrido" aria-label="Recorrido de una pericia">
                  {RECORRIDO.map((r, i) => (
                    <li key={r}>
                      <span className="recorrido-n">{String(i + 1).padStart(2, "0")}</span>
                      {r}
                    </li>
                  ))}
                </ol>
                <p className="mano recorrido-nota">el mismo número de expediente de punta a punta</p>
              </div>
            }
          >
            Cada consulta que entra por el sitio se convierte en expediente y avanza hasta el dictamen.
            La dirección asigna cada caso y cada perito ve sólo los suyos.
          </Paso>
        </div>
      </section>

      {/* ═════════ LO QUE RECIBE EL CLIENTE ═════════ */}
      <section className="lamina">
        <span className="mano-eyebrow">Lo que recibe el abogado</span>
        <h2>
          Un presupuesto <em>con la marca</em>
        </h2>
        <p className="prosa bajada">
          Sale del sistema con el logo, los datos del perito, el detalle de honorarios y los términos
          del estudio. Listo para enviar.
        </p>
        <div className="doc">
          <Captura
            src={`${A}/doc/presupuesto.jpg`}
            alt="Presupuesto de CITEP con logo, perito interviniente, conceptos, importes y total"
            caption="Presupuesto con datos de ejemplo."
          />
        </div>
      </section>

      {/* ═════════ PARA TU ESTUDIO ═════════ */}
      <Oferta
        eyebrow="¿Y para tu estudio?"
        items={OFERTA}
        nota="Se puede hacer todo junto o por partes: empezar por la marca y el sitio, y sumar el sistema después."
        mensaje="Vi el caso de CITEP Forense y quiero algo así para mi estudio."
        boton="Contanos tu estudio"
        extra={
          <a className="enlace" href={SITIO} target="_blank" rel="noopener noreferrer">
            Ver citep-forense.com →
          </a>
        }
      />
    </Expediente>
  );
}
