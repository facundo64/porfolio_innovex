"use client";

import { Captura, Expediente } from "./expediente/Expediente";
import { inter, jetbrains, kalam, playfair } from "@/lib/fonts/expedientes";
import "./CitepExpediente.css";

const A = "/projects/citep";

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
          <span className="eyebrow">Expediente de proyecto · INNHOVEX · 2026</span>
        </div>

        <h1 className="titulo-caratula">
          CITEP
          <em>Forense.</em>
        </h1>

        <p className="prosa" style={{ fontSize: "1.06rem" }}>
          Estudio pericial independiente —Ciencia y Técnica Pericial Forense— que trabaja como perito
          de parte para abogados, empresas y particulares en causas penales, civiles y federales. El
          encargo cubrió la marca, el sitio público y el sistema interno con el que el estudio
          gestiona consultas, pericias y dictámenes.
        </p>

        <div className="rotulo" aria-label="Ficha del proyecto">
          <span className="k">Cliente</span>
          <span>CITEP-Forense</span>
          <span className="k">Rubro</span>
          <span>Pericias y criminalística</span>
          <span className="k">Alcance</span>
          <span>Marca · Sitio · Sistema interno</span>
        </div>
      </header>

      {/* ═════════ FOJA 00 ═════════ */}
      <section className="lamina">
        <div className="lamina-cab">
          <span className="folio">Foja 00</span>
          <h2>Entregables</h2>
        </div>
        <p className="prosa bajada">
          El sitio no termina en el formulario. Cada consulta que entra por la web queda registrada
          en el sistema del estudio y sigue su camino hasta el dictamen, con el mismo número de
          principio a fin.
        </p>

        <div className="pizarra solo-escritorio">
          <svg viewBox="0 0 700 250" role="img" aria-label="Recorrido de una consulta desde el sitio hasta el dictamen">
            <defs>
              <marker id="ct-pf" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                <path d="M0.5,0.8 L7.5,4.5 L0.5,8.2" fill="none" stroke="var(--tinta-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </marker>
            </defs>

            <text className="d-mono" x="16" y="24">SITIO PÚBLICO</text>
            {[
              ["Formulario", 38],
              ["Turno online", 96],
              ["WhatsApp", 154],
            ].map(([t, y]) => (
              <g key={t as string}>
                <rect className="d-caja" x="16" y={y as number} width="128" height="42" />
                <text className="d-tit" x="30" y={(y as number) + 26}>{t}</text>
                <path className="d-flecha" d={`M148,${(y as number) + 21} C176,${(y as number) + 21} 176,117 200,117`} markerEnd="url(#ct-pf)" />
              </g>
            ))}

            <line x1="186" y1="16" x2="186" y2="236" stroke="var(--borde)" strokeDasharray="3 5" />
            <text className="d-mono" x="206" y="24">SISTEMA DEL ESTUDIO</text>

            <rect className="d-caja" x="204" y="92" width="110" height="50" />
            <text className="d-tit" x="218" y="114">Solicitud</text>
            <text className="d-sub" x="218" y="130">se evalúa el caso</text>
            <path className="d-flecha" d="M318,117 L338,117" markerEnd="url(#ct-pf)" />

            <rect className="d-caja" x="342" y="92" width="110" height="50" />
            <text className="d-tit" x="356" y="114">Expediente</text>
            <text className="d-sub" x="356" y="130">número propio</text>
            <path className="d-flecha" d="M456,117 L476,117" markerEnd="url(#ct-pf)" />

            <rect className="d-caja" x="480" y="92" width="94" height="50" />
            <text className="d-tit" x="494" y="114">Pericia</text>
            <text className="d-sub" x="494" y="130">perito asignado</text>
            <path className="d-flecha-acento" d="M578,117 L598,117" markerEnd="url(#ct-pf)" />

            <rect className="d-caja-navy" x="602" y="92" width="84" height="50" />
            <text className="d-tit-inv" x="614" y="114">Dictamen</text>
            <text className="d-sub-inv" x="614" y="130">PDF final</text>

            <rect className="d-caja-alt" x="342" y="180" width="232" height="42" />
            <text className="d-tit" x="356" y="200">Presupuesto con la marca</text>
            <text className="d-sub" x="356" y="214">se genera desde la pericia</text>
            <path className="d-flecha" d="M527,146 L527,176" markerEnd="url(#ct-pf)" />

            <text className="d-mano" x="206" y="72">nada se carga dos veces</text>
          </svg>
        </div>

        <div className="cols c3" style={{ marginTop: 22 }}>
          <div className="bloque">
            <span className="num">01</span>
            <h3>Identidad</h3>
            <p>Isologo redibujado en vector, versiones de uso, paleta, tres voces tipográficas y tarjeta personal impresa.</p>
          </div>
          <div className="bloque">
            <span className="num">02</span>
            <h3>Sitio público</h3>
            <p>Portada, seis disciplinas con página propia, método de trabajo, publicaciones, contacto y reserva de turnos.</p>
          </div>
          <div className="bloque">
            <span className="num">03</span>
            <h3>Sistema interno</h3>
            <p>Solicitudes, expedientes, pericias, dictámenes y presupuestos, con acceso separado para administración y peritos.</p>
          </div>
        </div>
      </section>

      {/* ═════════ FOJA 01 ═════════ */}
      <section className="lamina">
        <div className="lamina-cab">
          <span className="folio">Foja 01</span>
          <h2>Isologo</h2>
        </div>
        <p className="prosa bajada">
          La C del estudio envuelve un sólido facetado: la evidencia examinada desde todas sus
          caras. Se redibujó en vector con colores planos, sin degradados, para que funcione igual
          impreso, bordado o como ícono de 32 píxeles.
        </p>

        <div className="tablero-logo">
          <div className="construccion">
            <svg viewBox="-70 -64 440 440" role="img" aria-label="Isologo con anotaciones">
              <defs>
                <filter id="ct-rough" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="11" result="n" />
                  <feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" />
                </filter>
                <marker id="ct-arrow" markerWidth="13" markerHeight="13" refX="8" refY="6" orient="auto">
                  <path d="M1.5,1.5 L9.5,6 L1.5,10.5" fill="none" stroke="var(--lapiz)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>

              <g filter="url(#ct-rough)">
                <rect x="-18" y="-18" width="336" height="338" fill="none" stroke="var(--tinta-3)" strokeWidth="1.3" strokeDasharray="8 7" />
              </g>

              <image href={`${A}/c-isologo.svg`} x="0" y="0" width="300" height="302" />

              {/* flecha → corte de la C */}
              <g filter="url(#ct-rough)">
                <path d="M268,-40 C262,-6 236,18 214,44" fill="none" stroke="var(--lapiz)" strokeWidth="1.7" strokeLinecap="round" markerEnd="url(#ct-arrow)" />
              </g>
              <text className="d-mano-logo" x="366" y="-44" textAnchor="end">la C se abre: no encierra</text>

              {/* flecha → sólido */}
              <g filter="url(#ct-rough)">
                <path d="M-30,352 C20,340 110,300 146,212" fill="none" stroke="var(--lapiz)" strokeWidth="1.7" strokeLinecap="round" markerEnd="url(#ct-arrow)" />
              </g>
              <text className="d-mano-logo" x="-60" y="370">cada cara, un ángulo de análisis</text>
            </svg>
          </div>

          <div className="capas">
            {[
              ["#073053", "Azul estudio", "#073053 — la C y las caras en sombra. Es el color que firma"],
              ["#31ADCB", "Cian", "#31ADCB — las caras iluminadas. El único acento de toda la marca"],
              ["#AFB9C3", "Gris perla", "#AFB9C3 — las caras laterales. Da volumen sin sumar color"],
            ].map(([hex, t, d]) => (
              <div className="capa" key={hex}>
                <span className="chip" style={{ background: hex }} />
                <div>
                  <h4>{t}</h4>
                  <span>{d}</span>
                </div>
              </div>
            ))}
            <div className="capa">
              <span className="chip" style={{ background: "#fff" }} />
              <div>
                <h4>Separación en blanco</h4>
                <span>Las caras no se tocan: el filete blanco entre ellas es el que hace legible la pieza a tamaño chico</span>
              </div>
            </div>
          </div>
        </div>

        <h3 style={{ marginTop: 34, marginBottom: 14 }}>Variantes de uso</h3>
        <div className="variantes">
          <div className="variante">
            <div className="lienzo" style={{ background: "#ffffff" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${A}/c-isologo.svg`} alt="Isologo en color sobre blanco" />
            </div>
            <div className="pie"><b>Principal</b>Color sobre fondo claro</div>
          </div>
          <div className="variante">
            <div className="lienzo" style={{ background: "#0D1B2E" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-blanco" src={`${A}/c-isologo.svg`} alt="Isologo en blanco sobre navy" />
            </div>
            <div className="pie"><b>Negativo</b>Blanco sobre navy, como en el sitio</div>
          </div>
          <div className="variante">
            <div className="lienzo" style={{ background: "#F2F0EC" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${A}/c-isotipo.svg`} alt="Sólido aislado" />
            </div>
            <div className="pie"><b>Sólido aislado</b>Ícono, marca de agua y fondos</div>
          </div>
          <div className="variante">
            <div className="lienzo" style={{ background: "#ffffff" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="img-gris" src={`${A}/c-isologo.svg`} alt="Isologo en escala de grises" />
            </div>
            <div className="pie"><b>Escala de grises</b>Fotocopia, fax y sello</div>
          </div>
        </div>

        <h3 style={{ marginTop: 34, marginBottom: 14 }}>Tarjeta personal</h3>
        <div className="tarjetas">
          <div className="tarjeta-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${A}/c-tarjeta-frente.jpg`} alt="Frente de la tarjeta: CITEP Forense sobre navy" loading="lazy" />
          </div>
          <div className="tarjeta-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${A}/c-tarjeta-dorso.jpg`} alt="Dorso de la tarjeta con los datos de contacto" loading="lazy" />
          </div>
        </div>
        <p className="chico" style={{ color: "var(--tinta-2)", marginTop: 12, maxWidth: "62ch" }}>
          Frente navy con el sólido como marca de agua; dorso claro con los datos. Se entregó
          armada en pliego A4 doble faz, lista para la imprenta.
        </p>
      </section>

      {/* ═════════ FOJA 02 ═════════ */}
      <section className="lamina">
        <div className="lamina-cab">
          <span className="folio">Foja 02</span>
          <h2>
            Color y <em>tipografía</em>
          </h2>
        </div>
        <p className="prosa bajada">
          Navy profundo y papel perla, con el cian del logo como única nota de color. La paleta
          evita el negro puro y el blanco de pantalla: se parece más a un informe impreso que a una
          aplicación.
        </p>

        <div className="paleta">
          {[
            ["Navy", "#0D1B2E", "Fondo de portada, títulos, texto"],
            ["Azul estudio", "#073053", "Isologo y detalles de marca"],
            ["Cian", "#31ADCB", "El acento: una línea, un ícono"],
            ["Pizarra", "#3B5068", "Texto secundario"],
            ["Papel perla", "#FAFAF8", "Fondo de lectura"],
            ["Hueso", "#F2F0EC", "Tarjetas y secciones alternas"],
          ].map(([nombre, hex, uso]) => (
            <div className="tono" key={hex}>
              <div className="swatch" style={{ background: hex, borderBottom: hex === "#FAFAF8" || hex === "#F2F0EC" ? "1px solid var(--borde-suave)" : undefined }} />
              <div className="info">
                <b>{nombre}</b>
                <code>{hex}</code>
                <span>{uso}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{ marginTop: 30, marginBottom: 14 }}>Tres voces, un rol cada una</h3>
        <div className="voces">
          <div className="voz-fila">
            <span className="rol">Afirmación</span>
            <div>
              <div className="v-black">Peritos</div>
              <div className="detalle">Sans en su peso más negro, en mayúsculas. Lo que el estudio hace, dicho sin adornos.</div>
            </div>
          </div>
          <div className="voz-fila">
            <span className="rol">Matiz</span>
            <div>
              <div className="v-serif">de parte.</div>
              <div className="detalle">Serif itálica. Aporta el tono de estudio profesional y suaviza el golpe del titular.</div>
            </div>
          </div>
          <div className="voz-fila">
            <span className="rol">Dato técnico</span>
            <div>
              <div className="v-mono">Exp. 2026 · Cadena de custodia</div>
              <div className="detalle">Monoespaciada para rótulos, números y términos técnicos: se lee como un registro.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════ FOJA 03 ═════════ */}
      <section className="lamina">
        <div className="lamina-cab">
          <span className="folio">Foja 03</span>
          <h2>El sitio</h2>
        </div>
        <p className="prosa bajada">
          El que llega suele ser un abogado con una causa abierta o alguien que necesita un perito de
          parte y no sabe por dónde empezar. El sitio responde en ese orden: qué disciplinas cubre el
          estudio, cómo trabaja y cómo se inicia una consulta.
        </p>

        <p style={{ marginBottom: 26 }}>
          <a className="enlace" href="https://www.citep-forense.com" target="_blank" rel="noopener noreferrer">
            citep-forense.com →
          </a>
        </p>

        <div className="lado">
          <Captura
            src={`${A}/c-hero.jpg`}
            alt="Portada: Peritos de parte, sobre navy con el sólido del logo de fondo"
            n="P.01"
            pins={[{ n: "1", style: { top: "22%", left: "33%" } }, { n: "2", style: { top: "30%", right: "12%" } }, { n: "3", style: { top: "68%", right: "4%" } }]}
            caption="Portada"
          />
          <div className="notas">
            <div className="nota-pin">
              <span className="b">1</span>
              <p><strong>Lo que es, en dos palabras.</strong> “Peritos de parte” en las dos voces de la marca: la afirmación en negro y el matiz en itálica.</p>
            </div>
            <div className="nota-pin">
              <span className="b">2</span>
              <p><strong>El logo como textura.</strong> El sólido del isologo, ampliado y en transparencia, hace de fondo. No hace falta una foto de laboratorio para decir “forense”.</p>
            </div>
            <div className="nota-pin">
              <span className="b">3</span>
              <p><strong>Una sola invitación.</strong> “Contanos el caso”. Arriba, fijo, el acceso a la evaluación; abajo, WhatsApp siempre a mano.</p>
            </div>
          </div>
        </div>

        <div className="cols c2" style={{ marginTop: 30 }}>
          <Captura
            src={`${A}/c-disciplinas.jpg`}
            alt="Listado de disciplinas periciales"
            n="P.02"
            caption="Las seis disciplinas como índice: una línea cada una, nombre completo y una bajada corta. Cada fila lleva a su página."
          />
          <Captura
            src={`${A}/c-metodo.jpg`}
            alt="Sección Método con cuatro principios"
            n="P.03"
            caption="El método en cuatro principios, sobre papel claro: la página cambia de fondo cuando pasa de mostrar a explicar."
          />
        </div>

        <div className="cols c2" style={{ marginTop: 22 }}>
          <Captura
            src={`${A}/c-pasos.jpg`}
            alt="Cómo trabajamos: del caso al juicio en cinco pasos"
            n="P.04"
            caption="Del caso al juicio en cinco pasos. Quien nunca contrató un perito sabe qué va a pasar antes de escribir."
          />
          <Captura
            src={`${A}/c-servicio.jpg`}
            alt="Página de detalle de Informática Forense"
            n="P.05"
            caption="Página de disciplina: en qué consiste, cómo se trabaja y, al costado, el acceso directo a pedir la pericia."
          />
        </div>

        <div className="lado angosto" style={{ marginTop: 22 }}>
          <Captura
            src={`${A}/c-turnos.jpg`}
            alt="Formulario de reserva de turno"
            n="P.06"
            caption="Reserva de turno: disciplina, modalidad virtual o presencial y fecha preferida. Al costado, qué pasa en la primera consulta y el aviso de confidencialidad."
          />
          <figure>
            <div className="movil">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${A}/c-mobile.jpg`} alt="Portada en el teléfono" loading="lazy" />
            </div>
            <figcaption style={{ justifyContent: "center" }}>
              <b>P.07</b>
              <span>En el teléfono el titular se acomoda al ancho sin partir palabras.</span>
            </figcaption>
          </figure>
        </div>

        <h3 style={{ marginTop: 36, marginBottom: 12 }}>Decisiones que definieron el sitio</h3>
        <div className="decisiones">
          <div className="decision">
            <span className="n">01</span>
            <div>
              <h4>Ninguna promesa que un perito no pueda cumplir</h4>
              <p>
                El texto se revisó entero con una regla: nada de “irrefutable” ni “absoluto”. El
                valor de una prueba lo decide el juez; lo que el estudio puede ofrecer es método,
                custodia y un dictamen que se defienda en audiencia.
              </p>
              <div className="lexico">
                {["irrefutable", "absoluto", "inalterable"].map((w) => (
                  <span className="palabra no" key={w}>{w}</span>
                ))}
                {["método", "trazabilidad", "sostener en juicio"].map((w) => (
                  <span className="palabra" key={w}>{w}</span>
                ))}
              </div>
              <span className="porque">un abogado desconfía de lo que suena a publicidad</span>
            </div>
          </div>
          <div className="decision">
            <span className="n">02</span>
            <div>
              <h4>Hablarle al cliente de vos</h4>
              <p>
                Tono de experto sereno, en segunda persona y sin jerga inflada. Cada título responde
                una pregunta del que llega —qué hacen, cómo trabajan, cuánto tardan— en lugar de
                describir al estudio.
              </p>
            </div>
          </div>
          <div className="decision">
            <span className="n">03</span>
            <div>
              <h4>Una intro que se ve una sola vez</h4>
              <p>
                La apertura animada aparece en la primera visita y no vuelve a interrumpir: ni al
                recargar ni al volver otro día desde el mismo dispositivo.
              </p>
              <span className="porque">el que vuelve, vuelve a trabajar</span>
            </div>
          </div>
          <div className="decision">
            <span className="n">04</span>
            <div>
              <h4>Preparado para aparecer en búsquedas por especialidad</h4>
              <p>
                El estudio está declarado como servicio profesional con sus sedes, y cada disciplina
                tiene su propia dirección e índice para que la encuentre quien busca, por ejemplo,
                un perito documentólogo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════ FOJA 04 ═════════ */}
      <section className="lamina">
        <div className="lamina-cab">
          <span className="folio">Foja 04</span>
          <h2>El sistema del estudio</h2>
        </div>
        <p className="prosa bajada">
          Detrás del sitio, un panel privado donde el estudio ordena su trabajo. Cada pericia tiene un
          estado visible para todo el equipo, así nadie tiene que preguntar en qué quedó un caso.
        </p>

        <div className="estados">
          {[
            ["01", "Consulta", "Entra por el sitio y se evalúa"],
            ["02", "Presupuesto enviado", "Con monto, plazo y términos"],
            ["03", "En curso", "El perito asignado trabaja"],
            ["04", "Informe entregado", "Se sube el dictamen en PDF"],
            ["05", "Cerrada", "Queda en el historial"],
          ].map(([n, t, d], i) => (
            <div className={`estado${i === 2 ? " activo" : ""}`} key={n}>
              <span className="n">{n}</span>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>

        <div className="roles" style={{ marginTop: 22 }}>
          <div className="bloque">
            <span className="num">ACCESO · ADMINISTRACIÓN</span>
            <h3>La dirección del estudio</h3>
            <ul className="check">
              <li>Recibe las solicitudes y las convierte en expediente</li>
              <li>Asigna cada pericia a un perito</li>
              <li>Arma el presupuesto con la marca del estudio, listo para enviar</li>
              <li>Publica los artículos del blog</li>
            </ul>
          </div>
          <div className="bloque">
            <span className="num">ACCESO · PERITO</span>
            <h3>Cada perito asociado</h3>
            <ul className="check">
              <li>Ve sólo las pericias que tiene asignadas</li>
              <li>Avanza el estado a medida que trabaja</li>
              <li>Sube el dictamen final desde la misma ficha</li>
              <li>Escribe artículos que quedan en borrador hasta su aprobación</li>
            </ul>
          </div>
        </div>

        <div className="cols c2" style={{ marginTop: 22 }}>
          <div className="postit">
            <p>
              De este panel no se muestran pantallas: trabaja con causas reales. Cada perito entra
              con su propia cuenta y sólo ve lo que le corresponde.
            </p>
            <span className="quien">Nota de reserva</span>
          </div>
          <div className="bloque">
            <h3>Datos sensibles, tratados como tales</h3>
            <p>
              Formularios con aviso de confidencialidad y adecuados a la ley de protección de datos
              personales, acceso con contraseña propia y cambio obligatorio en el primer ingreso.
            </p>
          </div>
        </div>
      </section>

      {/* ═════════ CIERRE ═════════ */}
      <section className="lamina cierre">
        <p className="cierre-eyebrow">El sitio está publicado</p>
        <h2>
          Míralo <em>funcionando</em>
        </h2>
        <a className="cta-ver" href="https://www.citep-forense.com" target="_blank" rel="noopener noreferrer">
          Entrar a citep-forense.com <span aria-hidden>→</span>
        </a>
      </section>
    </Expediente>
  );
}
