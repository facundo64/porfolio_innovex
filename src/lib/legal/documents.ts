import type { Locale } from "@/lib/i18n/dictionaries";

/**
 * Contenido de las páginas legales (bilingüe ES/EN).
 *
 * ⚠️ BORRADOR: este texto es una base de trabajo generada como punto de
 * partida para INNHOVEX. Antes de considerarlo definitivo debe ser revisado
 * por un asesor legal, especialmente en lo referido a la Ley 25.326 de
 * Protección de Datos Personales (Argentina) y a la relación con clientes.
 */

export type LegalSection = { heading: string; body: string[] };

export type LegalDoc = {
  /** Slug de la ruta (/privacidad, /consentimiento, /terminos). */
  slug: string;
  /** Índice mostrado arriba a la izquierda, estilo del sitio. */
  index: string;
  title: string;
  updatedLabel: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  disclaimer: string;
  backLabel: string;
};

export type LegalSlug = "privacidad" | "consentimiento" | "terminos";

const UPDATED_ES = "10 de septiembre de 2026";
const UPDATED_EN = "September 10, 2026";
const CONTACT_EMAIL = "innhovex@gmail.com";

const privacy: Record<Locale, LegalDoc> = {
  es: {
    slug: "privacidad",
    index: "L / 01",
    title: "Política de privacidad",
    updatedLabel: "Última actualización",
    updated: UPDATED_ES,
    backLabel: "Volver al inicio",
    intro:
      "En INNHOVEX (“nosotros”), estudio de desarrollo web y software con base en Buenos Aires, Argentina, respetamos tu privacidad. Esta política explica qué datos personales recopilamos, con qué finalidad y qué derechos te asisten.",
    sections: [
      {
        heading: "Responsable del tratamiento",
        body: [
          "El responsable de los datos personales que nos facilitás es INNHOVEX. Podés contactarnos por cualquier consulta relativa a esta política escribiendo a " +
            CONTACT_EMAIL +
            ".",
        ],
      },
      {
        heading: "Qué datos recopilamos",
        body: [
          "Datos de contacto que nos brindás voluntariamente a través del formulario de contacto o por correo: nombre, dirección de email, teléfono y el contenido del mensaje.",
          "Datos técnicos de navegación generados automáticamente, como dirección IP aproximada, tipo de dispositivo y navegador, y páginas visitadas, con fines estadísticos y de seguridad.",
        ],
      },
      {
        heading: "Finalidad y base legal",
        body: [
          "Utilizamos tus datos para responder consultas, elaborar presupuestos, gestionar la relación comercial y mejorar el sitio. La base legal es tu consentimiento y, en su caso, la ejecución de un contrato o el interés legítimo en operar y proteger el sitio.",
        ],
      },
      {
        heading: "Conservación",
        body: [
          "Conservamos los datos únicamente durante el tiempo necesario para cumplir las finalidades descriptas y las obligaciones legales aplicables. Luego se eliminan o anonimizan.",
        ],
      },
      {
        heading: "Terceros y encargados",
        body: [
          "Para operar el sitio y responder mensajes utilizamos proveedores de infraestructura y servicios (por ejemplo, alojamiento y envío de correo). Estos actúan como encargados del tratamiento y solo acceden a los datos para prestarnos el servicio. No vendemos ni cedemos tus datos a terceros con fines publicitarios.",
        ],
      },
      {
        heading: "Tus derechos",
        body: [
          "Podés ejercer los derechos de acceso, rectificación, actualización y supresión de tus datos, conforme a la Ley 25.326 de Protección de Datos Personales de la República Argentina. Para hacerlo, escribinos a " +
            CONTACT_EMAIL +
            ".",
          "La Agencia de Acceso a la Información Pública, órgano de control de la Ley 25.326, atiende denuncias y reclamos ante incumplimientos.",
        ],
      },
    ],
    disclaimer:
      "Este documento es un borrador de referencia y no constituye asesoramiento legal. Su contenido debe ser revisado y validado por un profesional antes de su publicación definitiva.",
  },
  en: {
    slug: "privacidad",
    index: "L / 01",
    title: "Privacy Policy",
    updatedLabel: "Last updated",
    updated: UPDATED_EN,
    backLabel: "Back to home",
    intro:
      "At INNHOVEX (“we”), a web and software development studio based in Buenos Aires, Argentina, we respect your privacy. This policy explains which personal data we collect, for what purpose, and the rights available to you.",
    sections: [
      {
        heading: "Data controller",
        body: [
          "The controller of the personal data you provide is INNHOVEX. For any question regarding this policy you can reach us at " +
            CONTACT_EMAIL +
            ".",
        ],
      },
      {
        heading: "What data we collect",
        body: [
          "Contact data you voluntarily provide through the contact form or by email: name, email address, phone number and the content of your message.",
          "Technical browsing data generated automatically, such as approximate IP address, device and browser type, and pages visited, for statistical and security purposes.",
        ],
      },
      {
        heading: "Purpose and legal basis",
        body: [
          "We use your data to answer inquiries, prepare quotes, manage the business relationship and improve the site. The legal basis is your consent and, where applicable, the performance of a contract or our legitimate interest in operating and protecting the site.",
        ],
      },
      {
        heading: "Retention",
        body: [
          "We keep data only for as long as necessary to fulfil the described purposes and applicable legal obligations. It is then deleted or anonymised.",
        ],
      },
      {
        heading: "Third parties and processors",
        body: [
          "To run the site and answer messages we use infrastructure and service providers (for example, hosting and email delivery). They act as processors and only access data to provide us the service. We do not sell or transfer your data to third parties for advertising purposes.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You may exercise the rights of access, rectification, update and deletion of your data, in accordance with Argentina’s Personal Data Protection Act (Law 25.326). To do so, write to us at " +
            CONTACT_EMAIL +
            ".",
          "The Agency for Access to Public Information, the supervisory body for Law 25.326, handles complaints regarding non-compliance.",
        ],
      },
    ],
    disclaimer:
      "This document is a reference draft and does not constitute legal advice. Its content should be reviewed and validated by a professional before final publication.",
  },
};

const consent: Record<Locale, LegalDoc> = {
  es: {
    slug: "consentimiento",
    index: "L / 02",
    title: "Consentimiento para el procesamiento de datos personales",
    updatedLabel: "Última actualización",
    updated: UPDATED_ES,
    backLabel: "Volver al inicio",
    intro:
      "Al enviarnos tus datos a través del formulario de contacto o por correo electrónico, prestás tu consentimiento libre, expreso e informado para que INNHOVEX los trate según los términos que se describen a continuación.",
    sections: [
      {
        heading: "Alcance del consentimiento",
        body: [
          "Autorizás a INNHOVEX a recopilar y tratar los datos personales que nos facilites (nombre, email, teléfono y el contenido de tu mensaje) con el fin de responder tu consulta y gestionar una eventual relación comercial.",
        ],
      },
      {
        heading: "Carácter voluntario",
        body: [
          "La entrega de tus datos es voluntaria. Sin los datos mínimos necesarios (por ejemplo, un medio de contacto) no podremos responder tu consulta.",
        ],
      },
      {
        heading: "Finalidades autorizadas",
        body: [
          "Responder consultas y solicitudes de presupuesto.",
          "Gestionar la relación comercial y contractual que pudiera surgir.",
          "Enviarte información relacionada con el servicio solicitado. No usamos tus datos para publicidad de terceros.",
        ],
      },
      {
        heading: "Revocación",
        body: [
          "Podés revocar este consentimiento en cualquier momento, así como ejercer tus derechos de acceso, rectificación y supresión, escribiéndonos a " +
            CONTACT_EMAIL +
            ". La revocación no afecta la licitud del tratamiento previo.",
        ],
      },
      {
        heading: "Marco normativo",
        body: [
          "Este consentimiento se otorga en el marco de la Ley 25.326 de Protección de Datos Personales de la República Argentina y sus normas complementarias.",
        ],
      },
    ],
    disclaimer:
      "Este documento es un borrador de referencia y no constituye asesoramiento legal. Su contenido debe ser revisado y validado por un profesional antes de su publicación definitiva.",
  },
  en: {
    slug: "consentimiento",
    index: "L / 02",
    title: "Consent to the processing of personal data",
    updatedLabel: "Last updated",
    updated: UPDATED_EN,
    backLabel: "Back to home",
    intro:
      "By sending us your data through the contact form or by email, you give your free, express and informed consent for INNHOVEX to process it under the terms described below.",
    sections: [
      {
        heading: "Scope of consent",
        body: [
          "You authorise INNHOVEX to collect and process the personal data you provide (name, email, phone and the content of your message) in order to answer your inquiry and manage a potential business relationship.",
        ],
      },
      {
        heading: "Voluntary nature",
        body: [
          "Providing your data is voluntary. Without the minimum required data (for example, a means of contact) we will not be able to respond to your inquiry.",
        ],
      },
      {
        heading: "Authorised purposes",
        body: [
          "Answering inquiries and quote requests.",
          "Managing any business and contractual relationship that may arise.",
          "Sending you information related to the requested service. We do not use your data for third-party advertising.",
        ],
      },
      {
        heading: "Withdrawal",
        body: [
          "You may withdraw this consent at any time, and exercise your rights of access, rectification and deletion, by writing to us at " +
            CONTACT_EMAIL +
            ". Withdrawal does not affect the lawfulness of prior processing.",
        ],
      },
      {
        heading: "Legal framework",
        body: [
          "This consent is given under Argentina’s Personal Data Protection Act (Law 25.326) and its complementary regulations.",
        ],
      },
    ],
    disclaimer:
      "This document is a reference draft and does not constitute legal advice. Its content should be reviewed and validated by a professional before final publication.",
  },
};

const terms: Record<Locale, LegalDoc> = {
  es: {
    slug: "terminos",
    index: "L / 03",
    title: "Términos y condiciones",
    updatedLabel: "Última actualización",
    updated: UPDATED_ES,
    backLabel: "Volver al inicio",
    intro:
      "Estos términos regulan el acceso y uso del sitio de INNHOVEX. Al navegarlo, aceptás las condiciones que se detallan a continuación.",
    sections: [
      {
        heading: "Objeto del sitio",
        body: [
          "Este sitio tiene fines informativos y de contacto: presenta los servicios de desarrollo web y software de INNHOVEX y su portfolio de proyectos. No constituye una oferta comercial vinculante.",
        ],
      },
      {
        heading: "Propiedad intelectual",
        body: [
          "Los contenidos del sitio (textos, diseño, código, marcas y logotipos) pertenecen a INNHOVEX o a sus respectivos titulares y están protegidos por la normativa de propiedad intelectual. No está permitida su reproducción sin autorización previa.",
          "Los proyectos de clientes mostrados en el portfolio se publican con su conocimiento; sus marcas pertenecen a sus respectivos titulares.",
        ],
      },
      {
        heading: "Uso aceptable",
        body: [
          "Te comprometés a utilizar el sitio conforme a la ley y a no realizar acciones que puedan dañarlo, sobrecargarlo o afectar su normal funcionamiento.",
        ],
      },
      {
        heading: "Enlaces a terceros",
        body: [
          "El sitio puede contener enlaces a sitios de terceros (por ejemplo, proyectos publicados). No somos responsables del contenido ni de las prácticas de privacidad de esos sitios.",
        ],
      },
      {
        heading: "Limitación de responsabilidad",
        body: [
          "El sitio se ofrece “tal como está”. En la medida permitida por la ley, INNHOVEX no será responsable por daños derivados del uso o de la imposibilidad de uso del sitio.",
        ],
      },
      {
        heading: "Ley aplicable",
        body: [
          "Estos términos se rigen por las leyes de la República Argentina. Ante cualquier controversia, las partes se someten a los tribunales ordinarios de la Ciudad de Buenos Aires.",
        ],
      },
    ],
    disclaimer:
      "Este documento es un borrador de referencia y no constituye asesoramiento legal. Su contenido debe ser revisado y validado por un profesional antes de su publicación definitiva.",
  },
  en: {
    slug: "terminos",
    index: "L / 03",
    title: "Terms & Conditions",
    updatedLabel: "Last updated",
    updated: UPDATED_EN,
    backLabel: "Back to home",
    intro:
      "These terms govern access to and use of the INNHOVEX website. By browsing it, you accept the conditions detailed below.",
    sections: [
      {
        heading: "Purpose of the site",
        body: [
          "This site is for informational and contact purposes: it presents INNHOVEX’s web and software development services and its project portfolio. It does not constitute a binding commercial offer.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          "The site’s content (text, design, code, brands and logos) belongs to INNHOVEX or its respective owners and is protected by intellectual property law. Reproduction without prior authorisation is not permitted.",
          "Client projects shown in the portfolio are published with their knowledge; their brands belong to their respective owners.",
        ],
      },
      {
        heading: "Acceptable use",
        body: [
          "You agree to use the site in accordance with the law and not to carry out actions that may damage it, overload it or affect its normal operation.",
        ],
      },
      {
        heading: "Third-party links",
        body: [
          "The site may contain links to third-party sites (for example, published projects). We are not responsible for the content or privacy practices of those sites.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "The site is provided “as is”. To the extent permitted by law, INNHOVEX shall not be liable for damages arising from the use of, or inability to use, the site.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "These terms are governed by the laws of the Republic of Argentina. In the event of any dispute, the parties submit to the ordinary courts of the City of Buenos Aires.",
        ],
      },
    ],
    disclaimer:
      "This document is a reference draft and does not constitute legal advice. Its content should be reviewed and validated by a professional before final publication.",
  },
};

export const legalDocuments: Record<LegalSlug, Record<Locale, LegalDoc>> = {
  privacidad: privacy,
  consentimiento: consent,
  terminos: terms,
};
