import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Seguridad: headers HTTP en todas las rutas
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Evita que el sitio sea embebido en iframes (clickjacking)
          { key: "X-Frame-Options", value: "DENY" },
          // Evita que el navegador adivine el tipo de contenido
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Controla qué info se envía al hacer referencia a otra página
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Fuerza HTTPS en el navegador
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // Permisos de APIs del navegador (cámara, micrófono, etc.)
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // Content Security Policy: solo carga recursos de orígenes confiables
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https://avatars.githubusercontent.com https://opengraph.githubassets.com",
              "connect-src 'self'",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },

  // Seguridad: deshabilita el header que revela que usás Next.js
  poweredByHeader: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
