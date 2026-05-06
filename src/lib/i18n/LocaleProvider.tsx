"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import { dictionaries, type Dictionary, type Locale } from "./dictionaries";

export const LOCALE_STORAGE_KEY = "innhovex:locale";
const DEFAULT_LOCALE: Locale = "es";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
};

const LocaleCtx = createContext<Ctx | null>(null);

/**
 * Lee el locale guardado en localStorage de forma SSR-safe.
 * Server: devuelve siempre el default. Client: lee localStorage.
 */
function getStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return saved === "es" || saved === "en" ? saved : DEFAULT_LOCALE;
}

const subscribers = new Set<() => void>();
function subscribe(callback: () => void) {
  subscribers.add(callback);
  return () => {
    subscribers.delete(callback);
  };
}
function emit() {
  // Copy before iterating to avoid mutation during iteration
  // (e.g., if a subscriber unsubscribes while emitting)
  for (const cb of [...subscribers]) {
    cb();
  }
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  /**
   * useSyncExternalStore garantiza que el primer render del cliente lea
   * directamente de localStorage (sin pasar por un re-render que rompa animaciones).
   * El server render siempre devuelve DEFAULT_LOCALE para no causar hydration mismatch.
   */
  const locale = useSyncExternalStore(
    subscribe,
    getStoredLocale,
    () => DEFAULT_LOCALE
  );

  const setLocale = useCallback((l: Locale) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(LOCALE_STORAGE_KEY, l);
    document.documentElement.lang = l;
    emit();
  }, []);

  const value = useMemo<Ctx>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale]
  );

  return <LocaleCtx.Provider value={value}>{children}</LocaleCtx.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleCtx);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}

export function useT(): Dictionary {
  return useLocale().t;
}
