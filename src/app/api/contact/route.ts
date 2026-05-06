import { NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Innhovex Portfolio <noreply@mail.citep-forense.com>";
const TO_EMAIL =
  process.env.CONTACT_TO_EMAIL ?? "innhovex@gmail.com";

/* ─── Rate limiting in-memory (max 3 envíos por IP por hora) ─────────── */
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const attempts = new Map<string, number[]>();

function getClientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_WINDOW_MS;
  const history = attempts.get(ip) ?? [];
  const recent = history.filter((t) => t > windowStart);

  if (recent.length >= RATE_LIMIT) {
    attempts.set(ip, recent);
    return true;
  }

  recent.push(now);
  attempts.set(ip, recent);
  return false;
}

/* ─── Cleanup periódico para evitar memory leak ──────────────────────── */
setInterval(() => {
  const cutoff = Date.now() - RATE_WINDOW_MS;
  for (const [ip, timestamps] of attempts.entries()) {
    const fresh = timestamps.filter((t) => t > cutoff);
    if (fresh.length === 0) {
      attempts.delete(ip);
    } else {
      attempts.set(ip, fresh);
    }
  }
}, RATE_WINDOW_MS);

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

export async function POST(req: Request) {
  if (!RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY no está configurado");
    return NextResponse.json(
      { ok: false, error: "config" },
      { status: 500 }
    );
  }

  const clientIp = getClientIp(req);
  if (isRateLimited(clientIp)) {
    console.warn("[contact] Rate limit excedido para IP:", clientIp);
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      { status: 429 }
    );
  }

  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const company = (body.company ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "missing_fields" },
      { status: 400 }
    );
  }

  if (name.length > 100 || email.length > 255 || company.length > 150 || message.length > 5000) {
    return NextResponse.json(
      { ok: false, error: "too_long" },
      { status: 400 }
    );
  }

  // Validación mínima de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { ok: false, error: "invalid_email" },
      { status: 400 }
    );
  }

  const subject = `Nuevo proyecto — ${name}`;

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#0A0A0A;max-width:560px;margin:0 auto;padding:32px 24px;">
      <div style="border-left:3px solid #1E2A47;padding-left:16px;margin-bottom:24px;">
        <h1 style="margin:0 0 4px;font-size:20px;font-weight:600;color:#0A0A0A;">Nuevo mensaje desde el portfolio</h1>
        <p style="margin:0;color:#8A8A85;font-size:13px;">INNHOVEX · Form de contacto</p>
      </div>

      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr>
          <td style="padding:8px 0;color:#8A8A85;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;width:100px;">Nombre</td>
          <td style="padding:8px 0;color:#0A0A0A;font-size:15px;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#8A8A85;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">Email</td>
          <td style="padding:8px 0;color:#0A0A0A;font-size:15px;"><a href="mailto:${escapeAttr(email)}" style="color:#1E2A47;">${escapeHtml(email)}</a></td>
        </tr>
        ${
          company
            ? `<tr>
          <td style="padding:8px 0;color:#8A8A85;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;">Empresa</td>
          <td style="padding:8px 0;color:#0A0A0A;font-size:15px;">${escapeHtml(company)}</td>
        </tr>`
            : ""
        }
      </table>

      <div style="border-top:1px solid #E8E6DF;padding-top:16px;">
        <h2 style="margin:0 0 8px;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;color:#8A8A85;">Mensaje</h2>
        <p style="margin:0;font-size:15px;line-height:1.6;color:#0A0A0A;white-space:pre-wrap;">${escapeHtml(message)}</p>
      </div>

      <div style="margin-top:32px;padding-top:16px;border-top:1px solid #E8E6DF;font-size:12px;color:#8A8A85;">
        Para responder, simplemente respondé este email — la respuesta va directo a ${escapeHtml(email)}.
      </div>
    </div>
  `;

  const text = [
    `Nuevo mensaje desde el portfolio — INNHOVEX`,
    ``,
    `Nombre: ${name}`,
    `Email: ${email}`,
    company ? `Empresa: ${company}` : null,
    ``,
    `Mensaje:`,
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const resend = new Resend(RESEND_API_KEY);
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      html,
      text,
    });

    if (result.error) {
      console.error("[contact] Resend error:", result.error);
      return NextResponse.json(
        { ok: false, error: "resend_failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "unexpected" },
      { status: 500 }
    );
  }
}

/* ─── Helpers para escapar HTML / atributos en el email ─────────────── */

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(str: string): string {
  return escapeHtml(str);
}
