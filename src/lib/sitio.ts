/**
 * Dirección pública del sitio y orígenes que pueden usar las APIs.
 * Un solo lugar para layout (metatags), sitemap, robots y las rutas /api.
 */

// Prioridad: variable propia → dominio de producción de Vercel → fallback.
// El día que se conecte innhovex.com como dominio de producción se actualiza solo.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://innhovex.com";

const host = (u?: string) => {
  if (!u) return null;
  try {
    return new URL(u.startsWith("http") ? u : `https://${u}`).host;
  } catch {
    return null;
  }
};

// Hosts exactos (nada de "termina en vercel.app": eso dejaba usar el bot y el
// formulario desde cualquier proyecto publicado en Vercel).
const HOSTS = new Set(
  [
    "innhovex.com",
    "www.innhovex.com",
    "porfolio-innovex.vercel.app",
    "localhost:3000",
    "localhost:3001",
    "localhost:3100",
    host(process.env.NEXT_PUBLIC_SITE_URL),
    host(process.env.VERCEL_PROJECT_PRODUCTION_URL),
    host(process.env.VERCEL_URL),
    host(process.env.VERCEL_BRANCH_URL),
  ].filter(Boolean) as string[]
);
// Vistas previas de este proyecto en Vercel (una por rama o por deploy).
const PREVIEW = /^porfolio-innovex-[a-z0-9-]+-facundoarielaramayo-7556s-projects\.vercel\.app$/;

export function origenPermitido(origin: string | null): boolean {
  // Sin Origin: no lo manda un navegador (curl, server-to-server). Lo dejamos
  // pasar como antes; el límite por IP sigue aplicando.
  if (!origin) return true;
  const h = host(origin);
  return !!h && (HOSTS.has(h) || PREVIEW.test(h));
}
