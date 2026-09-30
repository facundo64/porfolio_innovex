"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import { legalDocuments, type LegalSlug } from "@/lib/legal/documents";
import TransitionLink from "./TransitionLink";
import Cabecera from "./lapiz/Cabecera";

export default function LegalDocument({ slug }: { slug: LegalSlug }) {
  const { locale } = useLocale();
  const doc = legalDocuments[slug][locale];

  return (
    <div className="hl hl-pagina hl-lienzo" data-theme="light">
      <main className="hl-legal" style={{ paddingInline: "var(--gutter)" }}>
        <Cabecera
          meta={[
            doc.index,
            <TransitionLink key="v" href="/" className="hl-volver">
              <span aria-hidden>←</span>
              {doc.backLabel}
            </TransitionLink>,
          ]}
          kicker={`✎ ${doc.updatedLabel.toLowerCase()} · ${doc.updated}`}
          lineas={[
            <>
              {doc.title}
              <span className="hl-punto">.</span>
            </>,
          ]}
          sub={doc.intro}
        />

        <div style={{ paddingBottom: "clamp(90px, 11vw, 150px)" }}>
          {doc.sections.map((section, i) => (
            <section key={section.heading} className="hl-legal-sec">
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div style={{ marginTop: 0 }}>
                <h2>{section.heading}</h2>
                <div>
                  {section.body.map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>
          ))}
          <p className="hl-legal-nota">{doc.disclaimer}</p>
        </div>
      </main>
    </div>
  );
}
