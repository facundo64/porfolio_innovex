"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useMemo } from "react";

type TransitionCtx = {
  navigate: (href: string) => void;
};

const Ctx = createContext<TransitionCtx>({ navigate: () => {} });

export function useTransitionRouter() {
  return useContext(Ctx);
}

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const value = useMemo<TransitionCtx>(
    () => ({
      navigate: (href: string) => {
        if (href !== pathname) router.push(href);
      },
    }),
    [router, pathname]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

const EASE = [0.76, 0, 0.24, 1] as const;
const DURATION = 0.85;

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={pathname}
        initial={{ x: "100%", y: "100%" }}
        animate={{ x: 0, y: 0 }}
        exit={{ x: "-100%", y: "-100%" }}
        transition={{ duration: DURATION, ease: EASE }}
        className="flex-1 flex flex-col will-change-transform"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
