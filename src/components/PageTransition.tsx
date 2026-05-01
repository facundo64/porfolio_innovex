"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Phase = "idle" | "covering" | "uncovering";

type TransitionCtx = {
  navigate: (href: string) => void;
};

const Ctx = createContext<TransitionCtx>({ navigate: () => {} });
export function useTransitionRouter() {
  return useContext(Ctx);
}

const EASE = [0.76, 0, 0.24, 1] as const;
const COVER_DURATION = 0.55;
const UNCOVER_DURATION = 0.65;
const COVER_HOLD_MS = 60;

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>("idle");
  const pendingHref = useRef<string | null>(null);

  useEffect(() => {
    if (pendingHref.current && pathname === pendingHref.current) {
      pendingHref.current = null;
      setPhase("uncovering");
      const t = window.setTimeout(
        () => setPhase("idle"),
        UNCOVER_DURATION * 1000
      );
      return () => window.clearTimeout(t);
    }
  }, [pathname]);

  const navigate = useCallback(
    (href: string) => {
      if (href === pathname || phase !== "idle") return;
      pendingHref.current = href;
      setPhase("covering");
      window.setTimeout(() => {
        router.push(href);
      }, COVER_DURATION * 1000 + COVER_HOLD_MS);
    },
    [router, pathname, phase]
  );

  return (
    <Ctx.Provider value={{ navigate }}>
      {children}
      <RouteOverlay phase={phase} />
    </Ctx.Provider>
  );
}

function RouteOverlay({ phase }: { phase: Phase }) {
  const targetX =
    phase === "covering" ? "0%" : phase === "uncovering" ? "100%" : "-100%";
  const duration =
    phase === "covering"
      ? COVER_DURATION
      : phase === "uncovering"
        ? UNCOVER_DURATION
        : 0;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[110]"
      style={{
        top: "calc(50% - 75vmax)",
        left: "calc(50% - 75vmax)",
        width: "150vmax",
        height: "150vmax",
        transform: "rotate(45deg)",
      }}
    >
      <motion.div
        className="h-full w-full bg-[#0A0A0A]"
        initial={{ x: "-100%" }}
        animate={{ x: targetX }}
        transition={{ duration, ease: EASE }}
      />
    </div>
  );
}

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex-1 flex flex-col">{children}</div>;
}
