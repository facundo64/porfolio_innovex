"use client";

import { useChat } from "@ai-sdk/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { QUICK_ACTIONS, WELCOME_MESSAGE } from "@/lib/chatbot/systemPrompt";

const EASE = [0.76, 0, 0.24, 1] as const;

export default function ChatBot() {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);

  const { messages, sendMessage, status, error } = useChat();

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState("");

  // Auto-scroll al fondo cuando llegan mensajes nuevos
  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  // Focus input al abrir
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 400);
  }, [open]);

  // Cerrar con Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || status === "streaming" || status === "submitted") return;
    sendMessage({ text: trimmed });
    setInput("");
  };

  const handleQuickAction = (prompt: string) => {
    if (status === "streaming" || status === "submitted") return;
    sendMessage({ text: prompt });
  };

  const isBusy = status === "streaming" || status === "submitted";
  const showWelcome = messages.length === 0;
  const quickActions = QUICK_ACTIONS[locale];
  const welcomeText = WELCOME_MESSAGE[locale];
  const placeholder =
    locale === "es" ? "Escribí tu mensaje..." : "Write your message...";
  const labels =
    locale === "es"
      ? {
          title: "Asistente Innhovex",
          subtitle: "Online · Responde en segundos",
          whatsapp: "Hablar por WhatsApp",
          send: "Enviar",
          poweredBy: "Asistente IA",
        }
      : {
          title: "Innhovex Assistant",
          subtitle: "Online · Replies in seconds",
          whatsapp: "Chat on WhatsApp",
          send: "Send",
          poweredBy: "AI Assistant",
        };

  return (
    <>
      {/* Launcher — botón flotante esquina inferior derecha */}
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={labels.title}
        aria-expanded={open}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5, ease: EASE }}
        className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[80] flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-[#1E2A47] text-[#FAFAF7] shadow-[0_10px_40px_-10px_rgba(30,42,71,0.7)] hover:scale-105 transition-transform"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="robot"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Antena */}
              <path d="M12 2v3" />
              <circle cx="12" cy="2" r="0.6" fill="currentColor" />
              {/* Cabeza del robot */}
              <rect x="4" y="6" width="16" height="12" rx="3" />
              {/* Ojos */}
              <circle cx="9" cy="12" r="1.2" fill="currentColor" />
              <circle cx="15" cy="12" r="1.2" fill="currentColor" />
              {/* Boca */}
              <path d="M9.5 15.5h5" />
              {/* Orejas / receptores */}
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              {/* Base / cuello */}
              <path d="M10 18v3" />
              <path d="M14 18v3" />
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Indicador online (punto verde pulsante) */}
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-[#FAFAF7]" />
          </span>
        )}
      </motion.button>

      {/* Panel del chat */}
      <AnimatePresence>
        {open ? (
          <motion.aside
            key="chat-panel"
            role="dialog"
            aria-modal="true"
            aria-label={labels.title}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed bottom-24 right-4 md:bottom-28 md:right-8 z-[80] w-[calc(100vw-2rem)] sm:w-[400px] h-[70vh] max-h-[600px] flex flex-col rounded-2xl overflow-hidden shadow-[0_25px_80px_-20px_rgba(0,0,0,0.5)] border border-[#FAFAF7]/15"
            style={{
              background:
                "radial-gradient(circle at 100% 100%, #283A42 0%, #0A0A0A 80%)",
            }}
          >
            {/* Header */}
            <div className="relative px-5 pt-5 pb-4 border-b border-[#FAFAF7]/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-[#FAFAF7]/10 backdrop-blur-md border border-[#FAFAF7]/15 flex items-center justify-center">
                    <span className="font-serif text-[#FAFAF7] text-sm">IX</span>
                  </div>
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-[#0A0A0A]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-[#FAFAF7] text-base tracking-tight">
                    {labels.title}
                  </h3>
                  <p className="text-[10px] font-mono tracking-[0.18em] uppercase text-[#FAFAF7]/55">
                    {labels.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Mensajes — data-lenis-prevent excluye este div del smooth scroll global
                para que el wheel/trackpad scrollee dentro del chat sin que Lenis lo intercepte */}
            <div
              ref={scrollRef}
              data-lenis-prevent
              className="flex-1 overflow-y-auto px-5 py-5 space-y-4 overscroll-contain"
            >
              {/* Welcome message */}
              {showWelcome ? (
                <>
                  <Bubble role="assistant">{welcomeText}</Bubble>

                  {/* Quick actions */}
                  <div className="space-y-2 pt-2">
                    {quickActions.map((action) => (
                      <button
                        key={action.id}
                        type="button"
                        onClick={() => handleQuickAction(action.prompt)}
                        disabled={isBusy}
                        className="w-full text-left px-4 py-3 rounded-xl bg-[#FAFAF7]/5 hover:bg-[#FAFAF7]/10 border border-[#FAFAF7]/10 hover:border-[#FAFAF7]/25 transition-all text-sm text-[#FAFAF7] disabled:opacity-50"
                      >
                        <span className="opacity-70 mr-2">→</span>
                        {action.label}
                      </button>
                    ))}

                    <a
                      href={`https://wa.me/5491170588887?text=${encodeURIComponent(locale === "es" ? "Hola Innhovex, me gustaría conversar." : "Hi Innhovex, I'd like to chat.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-left px-4 py-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all text-sm text-[#FAFAF7]"
                    >
                      <span className="opacity-90 mr-2">💬</span>
                      {labels.whatsapp}
                    </a>
                  </div>
                </>
              ) : null}

              {/* Mensajes del chat */}
              {messages.map((m) => {
                const text = m.parts
                  .map((part) => (part.type === "text" ? part.text : ""))
                  .join("");
                return (
                  <Bubble key={m.id} role={m.role as "user" | "assistant"}>
                    <FormattedText text={text} />
                  </Bubble>
                );
              })}

              {/* Loader cuando el bot está pensando */}
              {isBusy && messages[messages.length - 1]?.role === "user" ? (
                <div className="flex gap-1 px-4 py-3 max-w-fit">
                  <span
                    className="h-2 w-2 rounded-full bg-[#FAFAF7]/60 animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="h-2 w-2 rounded-full bg-[#FAFAF7]/60 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="h-2 w-2 rounded-full bg-[#FAFAF7]/60 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              ) : null}

              {/* Error */}
              {error ? (
                <p className="text-xs font-mono text-[#F4B4A1] px-2 py-2 rounded-lg bg-[#F4B4A1]/10 border border-[#F4B4A1]/20">
                  {locale === "es"
                    ? "Algo falló. Intentá de nuevo o escribinos por WhatsApp."
                    : "Something went wrong. Try again or message us on WhatsApp."}
                </p>
              ) : null}
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="relative px-5 py-4 border-t border-[#FAFAF7]/10"
            >
              <div className="relative flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={placeholder}
                  disabled={isBusy}
                  className="flex-1 bg-[#FAFAF7]/5 border border-[#FAFAF7]/10 rounded-full px-4 py-2.5 text-sm text-[#FAFAF7] placeholder:text-[#FAFAF7]/35 focus:outline-none focus:border-[#FAFAF7]/30 disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={isBusy || !input.trim()}
                  aria-label={labels.send}
                  className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-[#FAFAF7] text-[#0A0A0A] hover:bg-[#1E2A47] hover:text-[#FAFAF7] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14m0 0-7-7m7 7-7 7" />
                  </svg>
                </button>
              </div>
              <p className="mt-2 text-center text-[9px] font-mono tracking-[0.18em] uppercase text-[#FAFAF7]/30">
                {labels.poweredBy}
              </p>
            </form>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}

/* ─── Bubble ──────────────────────────────────────────────────────────── */

function Bubble({
  role,
  children,
}: {
  role: "user" | "assistant";
  children: React.ReactNode;
}) {
  const isUser = role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: EASE }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-[#FAFAF7] text-[#0A0A0A] rounded-br-md"
            : "bg-[#FAFAF7]/8 text-[#FAFAF7] border border-[#FAFAF7]/10 rounded-bl-md"
        }`}
      >
        {children}
      </div>
    </motion.div>
  );
}

/* ─── FormattedText — mini parser para markdown básico (negritas + links) ─ */

function FormattedText({ text }: { text: string }) {
  // Parse **bold**, *italic* y links http(s) o /paths
  const tokens: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|https?:\/\/\S+|\/(?:work|services|process|contact)(?:\/\S*)?|wa\.me\/\S+)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) {
      tokens.push(<span key={key++}>{text.slice(last, match.index)}</span>);
    }
    const t = match[0];
    if (t.startsWith("**") && t.endsWith("**")) {
      tokens.push(<strong key={key++}>{t.slice(2, -2)}</strong>);
    } else if (t.startsWith("*") && t.endsWith("*")) {
      tokens.push(<em key={key++}>{t.slice(1, -1)}</em>);
    } else if (t.startsWith("http") || t.startsWith("wa.me/")) {
      const href = t.startsWith("http") ? t : `https://${t}`;
      tokens.push(
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-80"
        >
          {t}
        </a>
      );
    } else if (t.startsWith("/")) {
      tokens.push(
        <a
          key={key++}
          href={t}
          className="underline underline-offset-2 hover:opacity-80"
        >
          {t}
        </a>
      );
    }
    last = match.index + t.length;
  }
  if (last < text.length) {
    tokens.push(<span key={key++}>{text.slice(last)}</span>);
  }
  return <>{tokens}</>;
}
