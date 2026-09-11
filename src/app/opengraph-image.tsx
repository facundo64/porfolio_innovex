import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Metadata del asset — Next lo expone como og:image / twitter:image automáticamente.
export const alt = "INNHOVEX — Desarrollo Web & Software a medida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// El oso vive en /public en negro; lo recoloreamos blanco
// y lo embebemos como data URI para que resvg lo rasterice nítido a cualquier escala.
async function loadBear(): Promise<string> {
  const svg = await readFile(
    join(process.cwd(), "public", "logo-innhovex.svg"),
    "utf8",
  );
  const white = svg.replace(/#000000/gi, "#FFFFFF");
  return `data:image/svg+xml;base64,${Buffer.from(white).toString("base64")}`;
}

// Geist (la tipografía del sitio). Se intenta bajar de Google Fonts;
// si falla, se cae a la copia que Next ya trae bundleada.
async function loadFont(weight: 400 | 600 | 700): Promise<ArrayBuffer> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Geist:wght@${weight}`,
    ).then((r) => r.text());
    const url = css.match(/src:\s*url\((https:[^)]+)\)/)?.[1];
    if (url) return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    // sin red → fallback bundleado
  }
  const buf = await readFile(
    join(
      process.cwd(),
      "node_modules",
      "next",
      "dist",
      "compiled",
      "@vercel",
      "og",
      "Geist-Regular.ttf",
    ),
  );
  return buf.buffer.slice(
    buf.byteOffset,
    buf.byteOffset + buf.byteLength,
  ) as ArrayBuffer;
}

export default async function OpengraphImage() {
  const [bear, geist, geistBold] = await Promise.all([
    loadBear(),
    loadFont(400),
    loadFont(700),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Geist",
          color: "#FFFFFF",
          // Mismo degradé que la página de contacto: azul-slate oscuro arriba
          // que se difumina hacia un teal-gris claro abajo.
          backgroundImage:
            "linear-gradient(180deg," +
            " #29363A 0%," +
            " #495D62 12%," +
            " #6F898E 25%," +
            " #779094 37%," +
            " #7D9598 49%," +
            " #859D9F 62%," +
            " #8CA3A4 74%," +
            " #98ACAB 100%)",
        }}
      >
        {/* Oso arriba a la derecha, un poco más abajo y a la izquierda */}
        <img
          src={bear}
          width={589}
          height={480}
          style={{ position: "absolute", top: 18, right: 24 }}
        />

        {/* Bloque de texto a la izquierda, en la zona oscura de arriba */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "100%",
            width: "72%",
            padding: "150px 90px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 18,
            }}
          >
            <div style={{ width: 46, height: 3, background: "rgba(255,255,255,0.55)", display: "flex" }} />
            <span
              style={{
                fontSize: 21,
                letterSpacing: 5,
                color: "rgba(255,255,255,0.82)",
                fontFamily: "Geist Bold",
              }}
            >
              ESTUDIO DE DESARROLLO
            </span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 96,
              lineHeight: 1,
              letterSpacing: 2,
              fontFamily: "Geist Bold",
            }}
          >
            INNHOVEX
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 36,
              marginTop: 20,
              color: "rgba(255,255,255,0.9)",
              whiteSpace: "nowrap",
            }}
          >
            Desarrollo Web &amp; Software a medida
          </div>
        </div>

        {/* URL abajo a la izquierda */}
        <div
          style={{
            position: "absolute",
            left: 90,
            bottom: 52,
            display: "flex",
            fontSize: 26,
            letterSpacing: 1,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          innhovex.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geist, weight: 400, style: "normal" },
        { name: "Geist Bold", data: geistBold, weight: 700, style: "normal" },
      ],
    },
  );
}
