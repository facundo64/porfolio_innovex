# 💰 Costeo de Proyectos — Innhovex Studio

> Referencia interna para presupuestar proyectos web premium con animaciones,
> i18n, formulario de contacto y opcional chatbot IA.
>
> Última actualización: **Mayo 2026**
> Stack base: Next.js 16 + React 19 + Tailwind v4 + framer-motion

---

## 📊 Resumen ejecutivo

| Tipo de proyecto | Setup (one-time) | Mensual | Margen mensual |
|---|---|---|---|
| **Landing simple** | USD 1,200 | USD 60 | ~85% |
| **Web corporativa** (como Innhovex) | USD 2,800 | USD 120 | ~85% |
| **Web + Chatbot IA** | USD 3,800 | USD 180 | ~80% |
| **SaaS multi-tenant** | USD 8,000+ | USD 400+ | ~70% |

> **Setup** se paga 50% al inicio, 50% al entregar.
> **Mensual** se firma a 12 meses con 1 mes gratis si pagan el año adelantado.

---

## 🏗 Estructura de costos: lo que vos pagás vs lo que cobrás

### Lo que VOS (Innhovex) tenés que pagar

Estos son los **costos fijos** de tu estudio para mantener el sitio del cliente vivo:

| Servicio | Plan recomendado | Costo mensual | Cubre |
|---|---|---|---|
| **Vercel Hosting** | Hobby (free) | **$0** | Sitios <100GB bandwidth/mes |
| **Vercel Pro** (si crece) | Pro | **$20/mes** | Team, analytics, web vitals, mejor soporte |
| **Resend** (email) | Free | **$0** | 3,000 emails/mes (alcanza para portfolio) |
| **Resend Pro** (si SaaS) | Pro | **$20/mes** | 50,000 emails/mes |
| **AI Gateway** (chatbot) | Pay-as-you-go | **$0.50 – $5/mes** | 100-2000 conversaciones/mes |
| **Dominio** | Vercel/Cloudflare | **~$1/mes** ($12/año) | `.com` estándar |

**Costo total mensual real para mantener UN cliente con web + chatbot:**
- Sin Vercel Pro: **~$2 – $7 USD/mes**
- Con Vercel Pro (recomendado a partir del 3er cliente): **~$22 – $27 USD/mes**

### Lo que el CLIENTE paga

| Concepto | Frecuencia | Precio sugerido |
|---|---|---|
| **Setup / desarrollo inicial** | Una sola vez | $1,200 – $8,000 (según tipo) |
| **Mantenimiento mensual** | Recurrente | $60 – $400 (según tipo) |
| **Dominio** | Anual | $20 – $50 (lo carga en su factura, lo pagás vos) |

> El cliente NO paga directo a Vercel/Resend/Cloudflare. Vos cargás esos servicios
> a tu cuenta y los facturás dentro del mensual.

---

## 🎨 Tabla detallada — Web corporativa (caso Innhovex)

### Setup inicial: USD 2,800

| Item | Horas | Precio |
|---|---|---|
| Diseño UI/UX en Figma | 12 hs | $480 |
| Hero con parallax + tipografía cinemática | 6 hs | $240 |
| Sección Work (carrusel/salón visual con animaciones) | 10 hs | $400 |
| Sección Services con interacciones | 6 hs | $240 |
| Sección Process | 4 hs | $160 |
| Sección Contact + Form Resend | 4 hs | $160 |
| i18n bilingüe ES/EN | 4 hs | $160 |
| Optimización mobile + responsive | 5 hs | $200 |
| SEO técnico + meta tags + OG images | 3 hs | $120 |
| Animaciones premium (framer-motion) | 5 hs | $200 |
| Testing + deploy + dominio | 2 hs | $80 |
| Capacitación cliente (1 sesión) | 2 hs | $80 |
| Buffer / iteraciones | — | $280 |
| **TOTAL SETUP** | **63 hs** | **$2,800** |

> Tarifa interna: **$40 USD/hora** (tarifa mid-level Argentina 2026 para stack premium).

### Mensual: USD 120

| Item | Costo real | Markup |
|---|---|---|
| Hosting Vercel Hobby | $0 | — |
| Resend Free (form de contacto) | $0 | — |
| Dominio prorrateado (~$2/mes) | $2 | $0 |
| Mantenimiento, updates de copy, soporte (4 hs/mes) | $160 | $0 |
| **Tu costo real:** | **$2** | — |
| **Cobrás al cliente:** | — | **$120** |
| **Margen mensual:** | — | **$118** (~98%) |

> Las 4 horas de mantenimiento incluyen: cambios de copy, agregar 1-2 proyectos al portfolio, ajustes visuales chicos, soporte por email.

---

## 🤖 Tabla detallada — Web + Chatbot IA

### Setup inicial: USD 3,800

Suma todo lo anterior **+ los siguientes ítems del chatbot:**

| Item adicional | Horas | Precio |
|---|---|---|
| Configuración Vercel AI Gateway | 2 hs | $80 |
| Diseño widget chatbot (UI custom) | 4 hs | $160 |
| Integración con datos del cliente (proyectos, servicios, FAQ) | 5 hs | $200 |
| System prompt + tono + safety guards | 3 hs | $120 |
| Testing exhaustivo (jailbreaks, edge cases) | 3 hs | $120 |
| Documentación + capacitación cliente para editar prompts | 2 hs | $80 |
| Buffer adicional | — | $240 |
| **EXTRA por chatbot** | **19 hs** | **$1,000** |

**Total Setup web + chatbot: $2,800 + $1,000 = USD 3,800**

### Mensual: USD 180

| Item | Costo real | Notas |
|---|---|---|
| Web (mantenimiento básico) | $2 | igual al plan anterior |
| **AI Gateway** (1,000 conversaciones/mes) | $0.50 | con GPT-5 mini |
| **AI Gateway** (5,000 conversaciones/mes) | $2.50 | escala lineal |
| Updates trimestrales del system prompt | $0 | incluido |
| Monitoreo y logs del chatbot | $0 | incluido |
| **Tu costo real (1k convos):** | **~$3** | — |
| **Cobrás al cliente:** | — | **$180** |
| **Margen mensual:** | — | **$177** (~98%) |

> Si el cliente supera 2,000 conversaciones/mes, agregar $30/mes por cada
> 1,000 adicionales.

---

## 📈 Proyección de ingresos — escenarios reales

### Escenario A: 5 clientes web corporativa (sin chatbot)

| Item | Cantidad | Total |
|---|---|---|
| Setups (año 1) | 5 × $2,800 | **$14,000** |
| Mensual recurrente | 5 × $120 × 12 | **$7,200** |
| Costos operativos | -5 × $2 × 12 | -$120 |
| **Ingreso neto año 1** | | **$21,080 USD** |

### Escenario B: 5 web + chatbot

| Item | Cantidad | Total |
|---|---|---|
| Setups (año 1) | 5 × $3,800 | **$19,000** |
| Mensual recurrente | 5 × $180 × 12 | **$10,800** |
| Costos operativos | -5 × $3 × 12 | -$180 |
| **Ingreso neto año 1** | | **$29,620 USD** |

### Escenario C: Mix realista (3 web + 2 web+chatbot + 1 SaaS)

| Item | Total |
|---|---|
| Setups | $20,400 |
| Mensual año 1 | $11,520 |
| Costos operativos | -$240 |
| **Ingreso neto año 1** | **$31,680 USD** |

> En el año 2+ el mensual se acumula → ingreso pasivo creciente.
> Año 2 con la misma cartera: **+$11,520 USD adicionales** sin nuevos setups.

---

## 🎯 Modelo de pricing recomendado para Innhovex

### Plan **Essential** — USD 1,500 setup / USD 80 mensual
- Landing 1 página
- Animaciones básicas
- Form de contacto (mailto o Resend)
- Bilingüe ES/EN
- 2 hs/mes de mantenimiento
- **Para:** profesionales independientes, emprendedores, servicios locales

### Plan **Studio** — USD 3,200 setup / USD 150 mensual ⭐ recomendado
- Sitio multi-página (Home, Work, Services, Process, Contact)
- Animaciones premium tipo Innhovex
- Form con Resend + WhatsApp
- Bilingüe ES/EN
- 4 hs/mes de mantenimiento
- **Para:** estudios, agencias chicas, productoras, restaurantes premium

### Plan **AI Studio** — USD 4,500 setup / USD 220 mensual
- Todo lo del plan Studio
- **+ Chatbot IA con personalidad custom**
- 1,000 conversaciones/mes incluidas
- Updates trimestrales del prompt
- 6 hs/mes de mantenimiento
- **Para:** clínicas, consultoras, e-commerce, B2B

### Plan **Enterprise** — USD 8,000+ / USD 400+ mensual
- Multi-idioma (3+)
- Integraciones custom (CRM, calendar, payments)
- SaaS multi-tenant si aplica
- Chatbot con tools (consultar inventario, agendar turnos, etc.)
- 12 hs/mes de mantenimiento
- SLA mensual
- **Para:** empresas con +50 empleados, grupos industriales

---

## 💡 Tips para cerrar ventas

### Posicionamiento de precio
1. **Nunca cobres por debajo de $1,000** un setup web — devalúa tu trabajo
2. **Mostrá calidad antes del precio** — el portfolio es el mejor argumento
3. **Anclá con el plan caro** — mostrá el Enterprise primero, después el Studio se ve barato
4. **Cobrá 50% al inicio** para filtrar leads no comprometidos

### Justificación de precio (para el cliente)
- "Diseño + desarrollo de un sitio así en agencia tradicional cuesta $8,000-15,000 USD"
- "Un freelancer mediocre te cobra $1,500 pero te entrega Wordpress lento sin animaciones"
- "Nosotros usamos el mismo stack que Vercel, Linear, Notion — performance Lighthouse 95+"
- "Tu sitio es un activo, no un gasto. En 1 mes recuperás la inversión con un cliente nuevo"

### Argumentos para el chatbot (extra $1,000 setup)
- "Atendés 24/7 sin contratar a nadie"
- "Calificás leads automáticamente — solo te llegan los serios"
- "Convierte 5x más que un form tradicional en LATAM"
- "Te ahorra 10 hs/mes respondiendo las mismas preguntas"

---

## 🔢 Calculadora rápida

**Fórmula para cualquier proyecto:**

```
Setup = (Horas estimadas × $40) + 15% buffer
Mensual = Costo IA + Costo hosting + (Horas mantenimiento × $40) + 50% margen
```

**Ejemplo: cliente con 8,000 conversaciones IA mensuales:**
- Costo IA real: $4
- Vercel Pro: $20
- Mantenimiento (4 hs): $160
- Subtotal: $184
- Margen 50%: $92
- **Cobrás $276/mes**

---

## 📌 Notas finales

- **Estos precios son sugeridos.** Subilos un 30-50% si el cliente es grande,
  bajalos un 20% solo si vas a usar el caso para portfolio (declarálo).
- **El chatbot es una venta complementaria.** Un cliente que ya tiene web
  contigo es 10x más fácil de convencer de agregar chatbot ($1,000 extra).
- **Refacturá si el cliente excede límites:** más conversaciones IA, más bandwidth,
  más horas de soporte. No regales tu margen por bondad.
- **Revisá precios cada 6 meses.** El stack y los costos de IA bajan rápido,
  tu pricing tiene que reflejarlo (sin perder margen).
