import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { SYSTEM_PROMPT } from "@/lib/chatbot/systemPrompt";

export const runtime = "edge";
export const maxDuration = 30;

const ALLOWED_ORIGIN_SUFFIXES = ["innhovex.com", "vercel.app", "localhost:3000", "localhost:3001"];

const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const MAX_MESSAGES = 30;
const MAX_PAYLOAD_CHARS = 12_000;

const attempts = new Map<string, number[]>();

function getClientIp(req: Request): string {
  return (
    req.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function hashIp(ip: string): string {
  let h = 0;
  for (let i = 0; i < ip.length; i++) h = (h * 31 + ip.charCodeAt(i)) | 0;
  return `ip_${(h >>> 0).toString(36)}`;
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

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return true;
  try {
    const host = new URL(origin).host;
    return ALLOWED_ORIGIN_SUFFIXES.some((s) => host === s || host.endsWith(`.${s}`) || host.endsWith(s));
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  if (!isAllowedOrigin(req.headers.get("origin"))) {
    return new Response(JSON.stringify({ error: "forbidden_origin" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  const clientIp = getClientIp(req);
  if (isRateLimited(clientIp)) {
    console.warn("[chat] Rate limit excedido:", hashIp(clientIp));
    return new Response(JSON.stringify({ error: "rate_limited" }), {
      status: 429,
      headers: { "Content-Type": "application/json", "Retry-After": "3600" },
    });
  }

  try {
    const { messages }: { messages: UIMessage[] } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "missing_messages" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (messages.length > MAX_MESSAGES) {
      return new Response(
        JSON.stringify({ error: "too_many_messages" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const payloadSize = JSON.stringify(messages).length;
    if (payloadSize > MAX_PAYLOAD_CHARS) {
      return new Response(
        JSON.stringify({ error: "payload_too_large" }),
        { status: 413, headers: { "Content-Type": "application/json" } }
      );
    }

    const modelMessages = await convertToModelMessages(messages);
    const result = streamText({
      model: "anthropic/claude-haiku-4.5",
      system: SYSTEM_PROMPT,
      messages: modelMessages,
      temperature: 0.7,
      providerOptions: {
        gateway: {
          tags: ["feature:chatbot", "site:innhovex-portfolio"],
        },
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (err) {
    console.error("[chat] error:", err);
    return new Response(
      JSON.stringify({ error: "stream_failed" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
