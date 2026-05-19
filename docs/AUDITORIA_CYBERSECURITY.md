# Auditoría de Ciberseguridad — INNHOVEX Portfolio

**Fecha:** 18 de Mayo 2026  
**Node:** v20.20.0 | **Next.js:** 16.2.6 | **React:** 19.2.4 | **npm audit:** 0 vulnerabilidades

---

## 🔴 Vulnerabilidades npm — RESUELTAS

| Paquete | Severidad | Descripción | Resolución |
|---------|-----------|-------------|------------|
| **next** (16.2.4 → **16.2.6**) | **HIGH** | Múltiples CVEs: DoS en Server Components, bypass de Middleware/Proxy, cache poisoning en RSC, XSS en App Router, SSRF en WS upgrades, bypass en Pages Router (i18n) | `npm audit fix` |
| **postcss** (8.4.31 → **8.5.14**) | Moderate | XSS via `</style>` sin escapar en CSS Stringify | `overrides` en package.json |
| **brace-expansion** (5.0.x → **5.0.6**) | Moderate | DoS por rangos numéricos grandes sin límite de protección | `npm audit fix` |

> **0 vulnerabilidades restantes.** Next.js 16.2.6 + postcss 8.5.14 forzado vía `overrides` en package.json.

---

## 🟡 Paquetes Actualizados

| Paquete | Anterior | Actual | Estado |
|---------|----------|--------|--------|
| `next` | 16.2.4 | **16.2.6** | ✅ Actualizado |
| `@ai-sdk/react` | 3.0.176 | **3.0.187** | ✅ Actualizado |
| `ai` | 6.0.174 | **6.0.185** | ✅ Actualizado |
| `framer-motion` | 12.38.0 | **12.39.0** | ✅ Actualizado |
| `resend` | 6.12.2 | **6.12.3** | ✅ Actualizado |
| `@tailwindcss/postcss` | 4.2.2 | **4.3.0** | ✅ Actualizado |
| `tailwindcss` | 4.2.2 | **4.3.0** | ✅ Actualizado |
| `postcss` | 8.4.31 | **8.5.14** | ✅ Override forzado |
| `eslint-config-next` | 16.2.1 | 16.2.1 | Mantenido |
| `react` | 19.2.4 | 19.2.4 | Mantenido (pin exacto) |
| `react-dom` | 19.2.4 | 19.2.4 | Mantenido (pin exacto) |
| `@types/node` | 20.19.37 | 20.19.37 | ⚠️ Latest 25.9.0 (major) |
| `eslint` | 9.39.4 | 9.39.4 | ⚠️ Latest 10.4.0 (major) |
| `typescript` | 5.9.3 | 5.9.3 | ⚠️ Latest 6.0.3 (major) |

---

## 🟢 Puntos Fuertes de Seguridad

| Control | Estado | Detalle |
|---------|--------|---------|
| **CSP con nonce** | ✅ Excelente | Nonce criptográfico por request en `src/proxy.ts`, sin `unsafe-inline` en producción |
| **Security Headers** | ✅ Excelente | 12 headers: HSTS (2 años + preload), X-Frame-Options: DENY, Permissions-Policy restrictivo, COOP, CORP |
| **Rate Limiting** | ✅ Bueno | Contact form: 3 req/hora/IP en `src/app/api/contact/route.ts:10-50` |
| **Input Validation** | ✅ Bueno | Servidor-side: name ≤100, email ≤255, company ≤150, message ≤5000. Regex email. |
| **HTML Escaping** | ✅ Bueno | `escapeHtml()` / `escapeAttr()` en el body del email de contacto |
| **CORS/Frame Protection** | ✅ Bueno | `frame-ancestors: none`, `X-Frame-Options: DENY`, `connect-src: self` |
| **Info Disclosure** | ✅ Bueno | `poweredByHeader: false` oculta `X-Powered-By` |
| **security.txt** | ✅ Bueno | `public/.well-known/security.txt` con contacto y expiración |
| **API Keys en .gitignore** | ✅ Bueno | `.env*` correctamente excluido del repo |

---

## 🟠 Debilidades Detectadas

| Issue | Riesgo | Ubicación | Recomendación |
|-------|--------|-----------|---------------|
| **Sin CSRF protection** | Medio | POST a `/api/contact`, `/api/chat` | Agregar token CSRF o header `Origin`/`Referer` validation |
| **Sin rate limiting en chat** | Alto | `/api/chat` | Replicar el rate limiter del contact form (3 req/hora) |
| **Rate limiting en memoria** | Bajo | `src/app/api/contact/route.ts` | Migrar a Redis/Upstash para producción seria |
| **`proxy.ts` posiblemente no activo** | Medio | `src/proxy.ts` | Verificar si Next.js lo está ejecutando como middleware (debería llamarse `middleware.ts`) |
| **`.env.local` con keys vivas** | Medio | Raíz del proyecto | Rotar keys periódicamente; nunca compartir la máquina sin limpiar |
| **Sin `engines` / `.nvmrc`** | Bajo | package.json | Agregar `"engines": { "node": ">=20" }` |
| **`zod` como dependencia implícita** | Bajo | Requerido por `@ai-sdk/react` | Declarar explícitamente en package.json |
| **`dangerouslySetInnerHTML` en layout** | Bajo | `src/app/layout.tsx:104-169` | Ambos son datos hardcodeados (locale script + JSON-LD), riesgo bajo |

---

## 📋 Plan de Acción

### Prioridad Crítica — COMPLETADO
- [x] `npm audit fix` + clean install — 0 vulnerabilidades
- [x] `overrides` en package.json — postcss forzado a 8.5.14
- [x] Todas las dependencias actualizadas a latest semver-compatible
- [x] Linter pasa sin errores (0 errors, 1 warning preexistente)

### Prioridad Alta
- [ ] Verificar que `src/proxy.ts` esté activo como middleware
- [ ] Agregar rate limiting a `/api/chat`
- [ ] Agregar CSRF tokens a endpoints POST

### Prioridad Media
- [ ] Crear `.nvmrc` o agregar `engines` a package.json
- [ ] Rotar API keys de `.env.local`
- [ ] Declarar `zod` como dependencia explícita

---

*Reporte generado automáticamente por auditoría de código, dependencias y configuración.*
