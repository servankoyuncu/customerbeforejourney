export type Lang = 'de' | 'en';

export interface LandingContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  painTitle: string;
  painBody: string;
  credentialsTitle: string;
  credentialsPoints: string[];
  stats: { value: string; label: string }[];
  servicesTitle: string;
  services: string[];
  testimonialsTitle: string;
  testimonials: { quote: string; name: string; role: string }[];
  bookingTitle: string;
  bookingSubtitle: string;
  footerNote: string;
  form: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    postalCode: string;
    submit: string;
    submitting: string;
    error: string;
    successTitle: string;
    successBody: string;
    successCta: string;
    errors: {
      required: string;
      invalidEmail: string;
      invalidPhone: string;
      invalidPostalCode: string;
    };
  };
}

export const LANDING_CONTENT: Record<Lang, LandingContent> = {
  de: {
    eyebrow: 'Für Expats in der Schweiz',
    headline: 'Das Schweizer Finanzsystem ist kompliziert. Sie müssen es nicht allein durchschauen.',
    subheadline:
      'Kostenloses Erstgespräch mit einem unabhängigen Finanzplaner, der auf Expats spezialisiert ist.',
    ctaLabel: 'Kostenloses Gespräch buchen',
    painTitle: 'Krankenkasse, Vorsorge, Steuern, Pensionskasse — alles neu, alles auf einmal.',
    painBody:
      'Wer in die Schweiz zieht, verliert schnell den Überblick: die falsche Krankenkasse, verpasste Fristen, liegen gelassenes Geld in der Vorsorge. Die meisten Fehler passieren nicht aus Unwissen, sondern weil niemand sie einmal in Ruhe erklärt hat.',
    credentialsTitle: 'Ihr Berater: David Frenkel',
    credentialsPoints: [
      '5 Jahre internationale Ausbildung in Israel sowie mehrere Abschlüsse und Zertifizierungen in Versicherung, Vorsorge und Finanzberatung',
      'Einer der wenigen wirklich unabhängigen Berater der Schweiz — Zugang zu über 60 Partnergesellschaften',
      'Berät im Interesse seiner Kundschaft, nicht im Interesse einer einzelnen Versicherung',
    ],
    stats: [
      { value: '2\'000+', label: 'zufriedene Kundinnen und Kunden' },
      { value: '100%', label: 'Kundenzufriedenheit' },
      { value: '60+', label: 'Partnergesellschaften' },
    ],
    servicesTitle: 'Womit wir Ihnen helfen',
    services: [
      'Krankenversicherung',
      'Steuererklärung',
      'Vorsorge (Säule 3a/3b)',
      'Freizügigkeitskonto',
      'Anlagen',
      'Wohneigentumsfinanzierung',
      'Vorsorge für Kinder',
      'Versicherungs-Check',
    ],
    testimonialsTitle: 'Was Kundinnen und Kunden sagen',
    testimonials: [
      {
        quote: 'David ist ein fantastischer Profi — kompetent und sorgfältig.',
        name: 'César Nombela',
        role: 'Associate Professor',
      },
      {
        quote: 'Tiefes Fachwissen und ein transparenter Kommunikationsstil.',
        name: 'Aya Gosh',
        role: 'Unternehmerin',
      },
      {
        quote: 'Kompetenz, Leidenschaft und Geduld.',
        name: 'Sarah Robins',
        role: 'Sprecherin',
      },
    ],
    bookingTitle: 'Jetzt kostenloses Gespräch buchen',
    bookingSubtitle:
      '15 Minuten, unverbindlich. Wir schauen gemeinsam, wo Sie heute stehen und was sich für Sie lohnt.',
    footerNote: 'Ihre Angaben werden ausschliesslich zur Vorbereitung Ihres Gesprächs verwendet.',
    form: {
      firstName: 'Vorname',
      lastName: 'Nachname',
      phone: 'Telefonnummer',
      email: 'E-Mail-Adresse',
      postalCode: 'Postleitzahl',
      submit: 'Weiter zur Terminwahl',
      submitting: 'Wird gesendet …',
      error: 'Bitte alle Felder korrekt ausfüllen.',
      successTitle: 'Danke, {firstName}!',
      successBody: 'Wählen Sie jetzt einen passenden Termin für Ihr kostenloses Gespräch mit David.',
      successCta: 'Termin auswählen',
      errors: {
        required: 'Pflichtfeld',
        invalidEmail: 'Bitte eine gültige E-Mail-Adresse eingeben',
        invalidPhone: 'Bitte eine gültige Telefonnummer eingeben',
        invalidPostalCode: 'Bitte eine gültige 4-stellige Postleitzahl eingeben',
      },
    },
  },
  en: {
    eyebrow: 'For expats in Switzerland',
    headline: "Switzerland's financial system is complicated. You don't have to figure it out alone.",
    subheadline:
      'A free first conversation with an independent financial planner who specializes in expats.',
    ctaLabel: 'Book a free consultation',
    painTitle: 'Health insurance, pensions, taxes, pillar funds — all new, all at once.',
    painBody:
      "Most people who move to Switzerland lose track fast: the wrong health insurance plan, missed deadlines, money sitting in a pension account nobody explained. Most mistakes don't come from not knowing — they come from nobody taking the time to walk you through it.",
    credentialsTitle: 'Your advisor: David Frenkel',
    credentialsPoints: [
      '5 years of international training in Israel, plus multiple degrees and certifications in insurance, pensions, and financial advisory',
      'One of the few truly independent advisors in Switzerland — access to 60+ partner companies',
      "Works in your interest, not any single insurer's",
    ],
    stats: [
      { value: '2,000+', label: 'happy clients' },
      { value: '100%', label: 'client satisfaction' },
      { value: '60+', label: 'partner companies' },
    ],
    servicesTitle: 'What we help with',
    services: [
      'Health insurance',
      'Tax declarations',
      'Retirement planning (pillar 3a/3b)',
      'Vested benefits recovery',
      'Investments',
      'Home financing',
      "Children's investment plans",
      'Insurance checkups',
    ],
    testimonialsTitle: 'What clients say',
    testimonials: [
      {
        quote: 'David is a fantastic professional, knowledgeable, diligent.',
        name: 'César Nombela',
        role: 'Associate Professor',
      },
      {
        quote: 'Deep knowledge about the industry, with a transparent communication style.',
        name: 'Aya Gosh',
        role: 'Entrepreneur',
      },
      {
        quote: 'Competence, passion, and patience.',
        name: 'Sarah Robins',
        role: 'Voice Actor',
      },
    ],
    bookingTitle: 'Book your free consultation',
    bookingSubtitle:
      "15 minutes, no obligation. We'll map out where you stand today and what's worth doing next.",
    footerNote: 'Your details are used exclusively to prepare for your conversation.',
    form: {
      firstName: 'First name',
      lastName: 'Last name',
      phone: 'Phone number',
      email: 'Email address',
      postalCode: 'Postal code',
      submit: 'Continue to pick a time',
      submitting: 'Sending …',
      error: 'Please fill in all fields correctly.',
      successTitle: 'Thanks, {firstName}!',
      successBody: 'Now pick a time that works for your free consultation with David.',
      successCta: 'Choose a time',
      errors: {
        required: 'Required',
        invalidEmail: 'Please enter a valid email address',
        invalidPhone: 'Please enter a valid phone number',
        invalidPostalCode: 'Please enter a valid 4-digit postal code',
      },
    },
  },
};
