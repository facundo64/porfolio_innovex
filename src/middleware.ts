import { NextResponse } from "next/server";

const isProd = process.env.NODE_ENV === "production";

const cspBase = [
  "default-src 'self'",
  `script-src 'self' 'nonce-{{NONCE}}'${isProd ? "" : " 'unsafe-eval'"}`,
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data:",
  "img-src 'self' data: blob: https:",
  "connect-src 'self'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  ...(isProd ? ["upgrade-insecure-requests"] : []),
].join("; ");

export function middleware() {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const csp = cspBase.replace("{{NONCE}}", nonce);

  const response = NextResponse.next();

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("x-nonce", nonce);

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|avif|ico|woff|woff2)).*)"],
};
