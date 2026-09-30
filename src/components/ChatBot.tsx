"use client";

import { useChat } from "@ai-sdk/react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { QUICK_ACTIONS, WELCOME_MESSAGE } from "@/lib/chatbot/systemPrompt";

/**
 * Asistente IA del sitio, en el lenguaje "a lápiz": el lanzador es un post-it,
 * el panel una hoja dibujada que se despliega desde él. Es además una muestra
 * en vivo del servicio de integraciones con IA, por eso cierra invitando a
 * pedir uno propio.
 */

const WHATSAPP = "5491170588887";

const TEXTOS = {
  es: {
    launcher: "Contanos tu idea",
    launcherCorto: "Tu idea",
    live: "IA en vivo",
    title: "Contanos tu idea",
    kicker: "asistente IA · hecho por Innhovex",
    demo: "Esto es una demo en vivo de lo que armamos",
    placeholder: "Escribí tu idea…",
    send: "Enviar",
    close: "Cerrar",
    typing: "pensando…",
    whatsapp: "Hablar por WhatsApp",
    errorTitle: "El asistente se tomó un recreo.",
    errorBody: "Mientras tanto, escribinos directo y te respondemos nosotros.",
    errorForm: "Ir al formulario",
    pie: "¿Querés un asistente así para tu negocio?",
    pieMsg: "Hola, quiero un asistente con IA como el de su web para mi negocio.",
  },
  en: {
    launcher: "Tell us your idea",
    launcherCorto: "Your idea",
    live: "Live AI",
    title: "Tell us your idea",
    kicker: "AI assistant · made by Innhovex",
    demo: "This is a live demo of what we build",
    placeholder: "Write your idea…",
    send: "Send",
    close: "Close",
    typing: "thinking…",
    whatsapp: "Chat on WhatsApp",
    errorTitle: "The assistant is taking a break.",
    errorBody: "In the meantime, write to us directly and a human will answer.",
    errorForm: "Go to the form",
    pie: "Want an assistant like this for your business?",
    pieMsg: "Hi, I'd like an AI assistant like the one on your site for my business.",
  },
} as const;

export default function ChatBot() {
  const { locale } = useLocale();
  const tx = TEXTOS[locale];
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // El post-it aparece recién después del hero (en el Home) o del primer
  // scroll (resto de páginas): al entrar no tapa la vista ni distrae.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const check = () => {
      const hero = document.querySelector<HTMLElement>(".hl-hero");
      const vh = window.innerHeight;
      const pasado = hero ? hero.getBoundingClientRect().bottom < vh * 0.35 : window.scrollY > vh * 0.6;
      setVisible(pasado);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [pathname]);
  const { messages, sendMessage, status, error } = useChat();

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, status, error]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 450);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isBusy = status === "streaming" || status === "submitted";

  const enviar = (texto: string) => {
    const t = texto.trim();
    if (!t || isBusy) return;
    sendMessage({ text: t });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    enviar(input);
    setInput("");
  };

  const whatsappHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    locale === "es" ? "Hola Innhovex, me gustaría conversar sobre una idea." : "Hi Innhovex, I'd like to talk about an idea."
  )}`;
  const esperandoRespuesta = isBusy && messages[messages.length - 1]?.role === "user";

  return (
    <div className="hl">
      {/* Lanzador: un post-it pegado en la esquina */}
      <AnimatePresence>
        {!open && visible && (
          <motion.button
            key="launcher"
            type="button"
            onClick={() => setOpen(true)}
            aria-label={tx.launcher}
            aria-expanded={false}
            className="hl-bot-launcher"
            initial={{ opacity: 0, scale: 1.35, rotate: 10, y: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: -3, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, rotate: 8, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
          >
            <span className="hl-bot-launcher-live">
              <i aria-hidden />
              {tx.live}
            </span>
            <span className="hl-bot-launcher-txt">
              <span className="hl-bot-largo">{tx.launcher}</span>
              <span className="hl-bot-corto">{tx.launcherCorto}</span> ✎
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Panel: hoja dibujada que se despliega desde el post-it */}
      <AnimatePresence>
        {open && (
          <motion.aside
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label={tx.title}
            className="hl-bot"
            style={{ transformOrigin: "100% 100%" }}
            initial={{ opacity: 0, scale: 0.55, rotate: 5, y: 40 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 4, y: 30 }}
            transition={{ type: "spring", stiffness: 240, damping: 24 }}
          >
            <header className="hl-bot-head">
              <div className="hl-bot-barra">
                <span className="hl-bot-pts" aria-hidden>
                  <i />
                  <i />
                  <i />
                </span>
                <span className="hl-bot-kicker">✎ {tx.kicker}</span>
                <button type="button" className="hl-bot-cerrar" onClick={() => setOpen(false)} aria-label={tx.close}>
                  <svg viewBox="0 0 24 24" aria-hidden>
                    <path d="M5 5.5 C 9 9.5, 14 14, 19 18.5" />
                    <path d="M18.5 5 C 14 9.5, 10 14, 5.5 19" />
                  </svg>
                </button>
              </div>
              <div className="hl-bot-tit">
                <h3>{tx.title}</h3>
                <motion.div
                  className="hl-postit hl-bot-demo"
                  initial={{ opacity: 0, scale: 0.6, rotate: 12 }}
                  animate={{ opacity: 1, scale: 1, rotate: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 14, delay: 0.35 }}
                >
                  {tx.demo}
                </motion.div>
              </div>
            </header>

            {/* data-lenis-prevent: el scroll del chat no lo intercepta Lenis */}
            <div ref={scrollRef} data-lenis-prevent className="hl-bot-msgs">
              {messages.length === 0 && (
                <>
                  <Burbuja role="assistant">{WELCOME_MESSAGE[locale]}</Burbuja>
                  <div className="hl-bot-chips">
                    {QUICK_ACTIONS[locale].map((a, i) => (
                      <motion.button
                        key={a.id}
                        type="button"
                        className="hl-bot-chip"
                        onClick={() => enviar(a.prompt)}
                        disabled={isBusy}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 + i * 0.07, duration: 0.35 }}
                      >
                        {a.label} →
                      </motion.button>
                    ))}
                    <motion.a
                      className="hl-bot-chip hl-bot-chip-wa"
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 + QUICK_ACTIONS[locale].length * 0.07, duration: 0.35 }}
                    >
                      {tx.whatsapp} ↗
                    </motion.a>
                  </div>
                </>
              )}

              {messages.map((m) => {
                const text = m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
                if (!text) return null;
                return (
                  <Burbuja key={m.id} role={m.role === "user" ? "user" : "assistant"}>
                    <FormattedText text={text} />
                  </Burbuja>
                );
              })}

              {esperandoRespuesta && !error && <Garabato label={tx.typing} />}

              {error && (
                <motion.div
                  className="hl-bot-error"
                  initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                  animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
                  transition={{ type: "spring", stiffness: 280, damping: 16 }}
                >
                  <strong>{tx.errorTitle}</strong>
                  <span>{tx.errorBody}</span>
                  <span className="hl-bot-error-links">
                    <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                      {tx.whatsapp} ↗
                    </a>
                    <a href="/contact">{tx.errorForm} →</a>
                  </span>
                </motion.div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="hl-bot-form">
              <input
                ref={inputRef}
                id="hl-bot-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={tx.placeholder}
                disabled={isBusy}
                aria-label={tx.placeholder}
                autoComplete="off"
              />
              <button type="submit" disabled={isBusy || !input.trim()} className="hl-bot-enviar">
                {tx.send} →
              </button>
            </form>
            <a className="hl-bot-pie" href={`/contact?msg=${encodeURIComponent(tx.pieMsg)}`}>
              {tx.pie} <span aria-hidden>→</span>
            </a>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Burbuja: el bot escribe en papel, el visitante en post-it ─── */

function Burbuja({ role, children }: { role: "user" | "assistant"; children: React.ReactNode }) {
  const esUsuario = role === "user";
  return (
    <motion.div
      className={`hl-bot-fila ${esUsuario ? "hl-bot-fila-yo" : ""}`}
      initial={esUsuario ? { opacity: 0, scale: 1.15, rotate: 6 } : { opacity: 0, x: -14, rotate: -2 }}
      animate={esUsuario ? { opacity: 1, scale: 1, rotate: 1.2 } : { opacity: 1, x: 0, rotate: 0 }}
      transition={esUsuario ? { type: "spring", stiffness: 320, damping: 17 } : { duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={esUsuario ? "hl-bot-yo" : "hl-bot-ella"}>{children}</div>
    </motion.div>
  );
}

/* ─── Garabato: un lápiz que dibuja mientras el bot piensa ─── */

function Garabato({ label }: { label: string }) {
  return (
    <div className="hl-bot-garabato" role="status">
      <svg viewBox="0 0 96 22" aria-hidden>
        <path pathLength={1} d="M2 12 C 8 2, 14 20, 20 11 S 32 3, 38 12 S 50 20, 56 10 S 68 2, 74 12 S 86 19, 94 9" />
      </svg>
      <span>{label}</span>
    </div>
  );
}

/* ─── FormattedText — mini parser para markdown básico (negritas + links) ─ */

function FormattedText({ text }: { text: string }) {
  const tokens: React.ReactNode[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|https?:\/\/\S+|\/(?:work|services|process|contact)(?:\/\S*)?|wa\.me\/\S+)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) tokens.push(<span key={key++}>{text.slice(last, match.index)}</span>);
    const t = match[0];
    if (t.startsWith("**") && t.endsWith("**")) {
      tokens.push(<strong key={key++}>{t.slice(2, -2)}</strong>);
    } else if (t.startsWith("*") && t.endsWith("*")) {
      tokens.push(<em key={key++}>{t.slice(1, -1)}</em>);
    } else if (t.startsWith("http") || t.startsWith("wa.me/")) {
      const href = t.startsWith("http") ? t : `https://${t}`;
      tokens.push(
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer">
          {t}
        </a>
      );
    } else if (t.startsWith("/")) {
      tokens.push(
        <a key={key++} href={t}>
          {t}
        </a>
      );
    }
    last = match.index + t.length;
  }
  if (last < text.length) tokens.push(<span key={key++}>{text.slice(last)}</span>);
  return <>{tokens}</>;
}
