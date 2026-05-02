"use client";

import { useMemo } from "react";
import { useLocale } from "./LocaleProvider";
import type { Project } from "@/types";

/**
 * Devuelve el proyecto con sus campos de texto traducidos al locale activo.
 * Si no hay traducción disponible, fallback al original (español).
 */
export function useLocalizedProject(project: Project): Project {
  const { locale } = useLocale();

  return useMemo(() => {
    if (locale === "es" || !project.i18n?.en) return project;

    const en = project.i18n.en;
    return {
      ...project,
      subtitle: en.subtitle ?? project.subtitle,
      tagline: en.tagline ?? project.tagline,
      role: en.role ?? project.role,
      problem: en.problem ?? project.problem,
      solution: en.solution ?? project.solution,
      value: en.value ?? project.value,
      highlights: en.highlights ?? project.highlights,
    };
  }, [project, locale]);
}
