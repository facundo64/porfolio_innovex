# Portfolio INNHOVEX

> Cara pública de **INNHOVEX** (estudio de desarrollo web y software a medida). Sitio de portfolio con chatbot, form de contacto y galerías de trabajo/proceso/servicios.

- **Repo:** https://github.com/facundo64/porfolio_innovex (`origin`, rama `main`)
- **Deploy:** Vercel — https://vercel.com/facundoarielaramayo-7556s-projects/porfolio-innovex
- **Dominio objetivo:** innhovex.com
- **Nota en el vault:** `10-Proyectos/Portfolio INNHOVEX.md`
- **Estado:** en desarrollo, publicable. La prioridad depende del empuje que se le dé a la empresa.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript 5**
- **Tailwind CSS 4** (vía `@tailwindcss/postcss`)
- **Framer Motion 12** + **Lenis** (smooth scroll) para animaciones/transiciones
- **AI SDK 6** (`ai`, `@ai-sdk/react`) sobre **Vercel AI Gateway** — chatbot con `anthropic/claude-haiku-4.5`
- **Resend 6** para el form de contacto
- i18n propio (ES/EN) sin librería, con provider de locale

## Estructura (`src/`)

```
src/
├── app/
│   ├── api/chat/route.ts        # chatbot (edge runtime, streamText, rate limit)
│   ├── api/contact/route.ts     # form de contacto vía Resend
│   ├── contact|process|services|work/page.tsx
│   ├── layout.tsx               # metadata SEO, OpenGraph, metadataBase
│   ├── sitemap.ts / manifest.json / iconos y favicons
│   └── page.tsx                 # home
├── components/                  # Hero, ChatBot, *Gallery, Footer, navegación, transiciones
├── data/                        # projects.ts, skills.ts
├── lib/
│   ├── chatbot/systemPrompt.ts
│   └── i18n/                    # dictionaries, LocaleProvider, useLocalizedProject
└── types/index.ts
```

## Variables de entorno

Ver `.env.example`. Claves:
- `RESEND_API_KEY` — obligatoria para el form de contacto
- `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL` — opcionales (defaults hardcodeados)
- `AI_GATEWAY_API_KEY` — obligatoria para el chatbot (Vercel AI Gateway)
- `NEXT_PUBLIC_SITE_URL` — base para `metadataBase`/canonicals (default `https://innhovex.com`)

## Comandos

```bash
npm run dev      # desarrollo
npm run build    # build de producción
npm run start    # servir build
npm run lint     # eslint
```

## Seguridad / hardening

- Headers estrictos en `next.config.ts` (HSTS, X-Frame-Options DENY, CSP-adyacentes, Permissions-Policy, COOP/CORP).
- El chat valida origen (`ALLOWED_ORIGIN_SUFFIXES`), limita payload (`MAX_PAYLOAD_CHARS`) y cantidad de mensajes (`MAX_MESSAGES`).
- Documentos relacionados en `docs/`: `AUDITORIA_CYBERSECURITY.md`, `SECURITY_BUGFIXES.md`, `SEO_GUIDE.md`, `APPLE_UI_UX_ARCHITECTURE.md`, `COSTEO_PROYECTOS.md`.

## Trampas conocidas

- **Rate limit del chat es in-memory (`Map`) y por instancia.** En `api/chat/route.ts` el contador vive en memoria del runtime; con Fluid Compute / múltiples instancias o cold starts se reinicia, así que el límite de 20/h **no es global** y se puede saltear. Si hace falta límite real, mover a un store compartido (Upstash Redis). Ver `70-Errores/El rate limiting que se puede saltear`.
- **Defaults de email hardcodeados** (`noreply@mail.citep-forense.com`, `innhovex@gmail.com`): el dominio `from` debe estar verificado en Resend o el envío falla en silencio.
- **Nombres desalineados:** carpeta local `innhovex-portfolio` (macOS) / `porfolio_facundo` (Windows viejo) vs repo `porfolio_innovex`. Ojo al clonar en otra máquina.
- **`allowedDevOrigins: ["192.168.0.6"]`** en `next.config.ts` está atado a una IP de LAN puntual; ajustar según red.
- **Imagen de compartir (OG/Twitter) generada dinámicamente:** vive en `src/app/opengraph-image.tsx` (y `twitter-image.tsx` la reexporta), NO en un `.jpg` estático. Usa `next/og` (`ImageResponse` = satori + resvg). El oso sale de `public/logo-innhovex.svg` (un único path negro que se recolorea a blanco y se embebe como data URI). El degradé copia el de la página de contacto (azul-slate `rgb(41,54,58)` arriba → teal-gris `rgb(152,172,171)` abajo). El `public/og-image.jpg` viejo (monograma "IEX") quedó sin usar. Dos ojos: (1) el hook `posttooluse-validate` marca "usá next/font" como recomendación en ese archivo — es **falso positivo**, satori necesita el binario de la fuente (ArrayBuffer), no CSS; (2) las fuentes se bajan de Google Fonts en runtime con fallback a la Geist bundleada en `node_modules/next/dist/compiled/@vercel/og/`.
