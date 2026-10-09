"use client";

import { Captura, Expediente } from "./expediente/Expediente";
import { Oferta, Paso, Tel, Vitrina, type Pantalla } from "./expediente/Venta";
import { kalam } from "@/lib/fonts/expedientes";
import "./ObraAzulExpediente.css";

/* ── Paths del isotipo (7 trazos) ── */
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

function Iso() {
  return (
    <g>
      <path d={D.olaSup} fill="#7fcbd8" />
      <path d={D.olaMed} fill="#319eca" />
      <path d={D.escalera} fill="#29235c" />
      <path d={D.olaInf} fill="#299cc8" />
      <path d={D.destA} fill="#349dc8" />
      <path d={D.destB} fill="#7fcbd8" />
      <path d={D.destC} fill="#7fcbd8" />
    </g>
  );
}

const CAP = "/projects/obra-azul";
const SITIO = "https://www.obraazulpiscinas.com";

// Vitrina: pantallas del sistema en el celular (datos de ejemplo), con su nota a mano.
const VITRINA: readonly Pantalla[] = [
  [`${CAP}/app/tecnico.jpg`, "App del técnico: los trabajos del día con cliente y dirección", "el técnico ve su día"],
  [`${CAP}/app/presupuesto.jpg`, "Presupuesto con la marca de Obra Azul, listo para descargar o enviar", "presupuestos con su marca, listos para mandar", "50% 22%"],
  [`${CAP}/app/portal-servicios.jpg`, "Portal del cliente: el historial de servicios de su pileta", "el cliente sigue su obra"],
];

const PALETA = ["#29235C", "#319ECA", "#7FCBD8", "#F8FAFC"];

const OFERTA = [
  ["Tu marca", "Un logo claro, con sus colores y versiones para cada uso."],
  ["Tu sitio", "Tus obras, tus servicios y un botón que lleva directo a WhatsApp."],
  ["Tu sistema de gestión", "Presupuestos, agenda y técnicos en el celular, a la medida de cómo trabajás."],
] as const;

export default function ObraAzulExpediente({ id }: { id?: string }) {
  return (
    <Expediente id={id} className={`oa-exp ${kalam.variable}`}>
      {/* ═════════ CARÁTULA ═════════ */}
      <header className="caratula">
        <div className="sello">
          <span className="marca-chip">
            <svg viewBox="0 0 310 277.98" aria-label="Isotipo Obra Azul">
              <Iso />
            </svg>
          </span>
          <span className="eyebrow">Piletas · Villa Martelli, Buenos Aires</span>
        </div>

        <div>
          <h1 className="titulo-caratula">Obra Azul.</h1>
          <p className="pie-titular">— de la libreta a un sistema con su marca —</p>
        </div>

        <p className="prosa entrada">
          Construyen y reparan piletas en el conurbano. Llegaron sin logo, sin sitio y con el trabajo
          anotado en papel. Les armamos la marca, el sitio y un sistema para cotizar, organizar a los
          técnicos y que cada cliente siga su obra.
        </p>
      </header>

      {/* ═════════ VITRINA: el sistema en el celular ═════════ */}
      <Vitrina
        eyebrow="El sistema"
        titulo="El trabajo diario, en un solo sistema"
        bajada="Del presupuesto a la obra terminada en un solo lugar. El dueño cotiza y organiza, el técnico sale con su día armado y el cliente ve en qué está su pileta, sin llamar."
        pantallas={VITRINA}
      >
        <div className="postit">
          <p>El dueño sabe cuándo empezó y terminó cada trabajo, sin tener que preguntar.</p>
          <span className="quien">Para el dueño</span>
        </div>
      </Vitrina>

      {/* ═════════ CÓMO SE ARMÓ ═════════ */}
      <section className="lamina">
        <span className="mano-eyebrow">Cómo se armó</span>
        <h2>De cero, en tres pasos</h2>

        <div className="pasos">
          <Paso
            n="1"
            titulo="Primero, la marca"
            visual={
              <div className="marca-vis">
                <div className="lienzo-logo">
                  <svg viewBox="0 0 310 277.98" role="img" aria-label="Isotipo de Obra Azul: una escalera de pileta y tres olas">
                    <Iso />
                  </svg>
                </div>
                <div className="marca-lado">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="logo-h" src={`${CAP}/logo-horizontal.svg`} alt="Logo horizontal de Obra Azul" />
                  <div className="paleta" aria-label="Paleta de la marca">
                    {PALETA.map((hex) => <span key={hex} style={{ background: hex }} />)}
                  </div>
                  <p className="mano nota-logo">una escalera que baja al agua y tres olas</p>
                </div>
              </div>
            }
          >
            Una escalera de pileta y tres olas, en los azules del agua. Se lee igual en un cartel, en
            un presupuesto o en el ícono del celular.
          </Paso>

          <Paso
            n="2"
            titulo="Un sitio que lleva a WhatsApp"
            visual={
              <div className="sitio-vis">
                <Captura
                  src={`${CAP}/web/hero-escritorio.jpg`}
                  alt="Portada del sitio: video aéreo de una pileta a pantalla completa"
                />
                <div className="sitio-tel">
                  <Tel foco="50% 45%" src={`${CAP}/web/expertos-cel.jpg`} alt="El sitio en el celular, con foto propia de una obra" />
                </div>
              </div>
            }
          >
            Video aéreo de una pileta terminada, fotos propias de obra y un solo camino: escribir por
            WhatsApp con el mensaje ya armado.
          </Paso>

          <Paso
            n="3"
            titulo="Un sistema con la misma cara"
            visual={
              <div className="dos-tel">
                <Tel src={`${CAP}/app/tecnico-detalle.jpg`} alt="Detalle de un trabajo en la app del técnico, con check-out y marcar como completado" />
                <Tel src={`${CAP}/app/portal-inicio.jpg`} alt="Inicio del portal del cliente: cotizaciones, servicios y pagos pendientes" />
              </div>
            }
          >
            Cotizaciones, órdenes, agenda y cobros en un solo lugar, con el logo y los colores de la
            marca en cada pantalla y en cada presupuesto que sale.
          </Paso>
        </div>
      </section>

      {/* ═════════ PARA EL DUEÑO ═════════ */}
      <section className="lamina">
        <span className="mano-eyebrow">Para el dueño</span>
        <h2>El negocio, de un vistazo</h2>
        <p className="prosa bajada">
          Clientes, presupuestos pendientes, trabajos en curso y lo que falta reponer, apenas abre el
          sistema. Desde ahí también arma un presupuesto o carga un cliente nuevo.
        </p>
        {/* En el celular, la captura de escritorio no se lee: va el panel en su versión de teléfono. */}
        <div className="solo-esc">
          <Captura
            src={`${CAP}/app/panel.jpg`}
            alt="Panel de control: clientes, cotizaciones pendientes, servicios activos y últimas órdenes"
            caption="El panel de control. Captura con datos de ejemplo."
          />
        </div>
        <div className="solo-cel">
          <Tel src={`${CAP}/app/panel-cel.jpg`} alt="Panel de control en el celular" />
          <p className="pie-cel">El panel en el celular. Captura con datos de ejemplo.</p>
        </div>
      </section>

      {/* ═════════ PARA TU EMPRESA ═════════ */}
      <Oferta
        eyebrow="¿Y para tu empresa?"
        items={OFERTA}
        nota="Se puede hacer todo junto o por partes: empezar por la marca y el sitio, y sumar el sistema después."
        mensaje="Vi el caso de Obra Azul y quiero algo así para mi empresa."
        boton="Contanos tu proyecto"
        extra={
          <a className="enlace" href={SITIO} target="_blank" rel="noopener noreferrer">
            Ver obraazulpiscinas.com →
          </a>
        }
      />
    </Expediente>
  );
}
