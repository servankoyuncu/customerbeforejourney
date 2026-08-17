export type Lang = 'de' | 'en';

export interface LandingContent {
  navServices: string;
  navAbout: string;
  navFaq: string;
  eyebrow: string;
  headlineLead: string;
  headlineEmphasis: string;
  subheadline: string;
  ctaLabel: string;
  secondaryCtaLabel: string;
  heroMicro: string;
  painTitle: string;
  painBody: string;
  howTitle: string;
  howSubtitle: string;
  howSteps: { title: string; body: string }[];
  servicesTitle: string;
  servicesSubtitle: string;
  services: { title: string; desc: string }[];
  credentialsTitle: string;
  credentialsSubtitle: string;
  credentialsPoints: string[];
  stats: { value: string; label: string }[];
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  testimonials: { quote: string; name: string; role: string }[];
  faqTitle: string;
  faqSubtitle: string;
  faq: { q: string; a: string }[];
  bookingTitle: string;
  bookingSubtitle: string;
  footerNote: string;
  footerCopyright: string;
  footerImpressum: string;
  footerPrivacy: string;
  footerContact: string;
  form: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    postalCode: string;
    privacyNote: string;
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
    navServices: 'Leistungen',
    navAbout: 'Über David',
    navFaq: 'FAQ',
    eyebrow: 'Für Expats in der Schweiz',
    headlineLead: 'Das Schweizer Finanzsystem ist kompliziert.',
    headlineEmphasis: 'Sie müssen es nicht allein durchschauen.',
    subheadline:
      'Krankenkasse, Vorsorge, Steuern, Säule 3a — alles neu, alles auf einmal. Kostenloses Erstgespräch mit einem unabhängigen Finanzplaner, der auf Expats spezialisiert ist.',
    ctaLabel: 'Kostenloses Gespräch buchen',
    secondaryCtaLabel: 'So läuft es ab',
    heroMicro: 'Kostenloses 15-Minuten-Gespräch · Unverbindlich · Deutsch & Englisch',
    painTitle:
      'Die meisten Fehler passieren nicht aus Unwissen. Sondern weil niemand sie einmal in Ruhe erklärt hat.',
    painBody:
      'Wer in die Schweiz zieht, verliert schnell den Überblick: die falsche Krankenkasse, verpasste Fristen, liegen gelassenes Geld in der Vorsorge. Ein kurzes Gespräch jetzt kann Ihnen später tausende Franken — und viel Frust — sparen.',
    howTitle: 'So läuft es ab',
    howSubtitle: 'Drei einfache Schritte — kein Papierkrieg, kein Fachchinesisch.',
    howSteps: [
      {
        title: '15 Minuten buchen',
        body: 'Wählen Sie einen passenden Zeitpunkt. Das erste Gespräch ist kostenlos, auf Deutsch oder Englisch, ganz unverbindlich.',
      },
      {
        title: 'Ihr persönlicher Fahrplan',
        body: 'Wir schauen gemeinsam, wo Sie heute stehen — Versicherung, Steuern, Vorsorge — und was sich wirklich lohnt.',
      },
      {
        title: 'Wir übernehmen den Papierkram',
        body: 'Vom Vergleich der über 60 Anbieter bis zum Ausfüllen der Formulare — wir erledigen die Arbeit, Sie behalten den Überblick.',
      },
    ],
    servicesTitle: 'Womit wir Ihnen helfen',
    servicesSubtitle: 'Alle Themen, die beim Umzug in die Schweiz auf Sie zukommen — an einem Ort.',
    services: [
      { title: 'Krankenversicherung', desc: 'Das passende KVG-Modell und die richtige Franchise finden — und aufhören, zu viel Prämie zu zahlen.' },
      { title: 'Steuererklärung', desc: 'Von Anfang an korrekt deklarieren, inklusive Quellensteuer-Korrekturen, die Expats oft verpassen.' },
      { title: 'Vorsorge (Säule 3a/3b)', desc: 'Die dritte Säule nutzen, um Steuern zu sparen und clever fürs Alter vorzusorgen.' },
      { title: 'Freizügigkeitskonto', desc: 'Vergessenes Vorsorgegeld von früheren Arbeitgebern oder Auslandsaufenthalten aufspüren und zurückholen.' },
      { title: 'Anlagen', desc: 'Einfache, kostengünstige Portfolios, die zu Ihren Zielen und Ihrer Zeit in der Schweiz passen.' },
      { title: 'Wohneigentumsfinanzierung', desc: 'Schweizer Hypotheken und Tragbarkeitsregeln verstehen — inklusive dem, was Banken nicht von sich aus erzählen.' },
      { title: 'Vorsorge für Kinder', desc: 'Steuereffizientes Sparen für die Ausbildung Ihrer Kinder von Tag eins an.' },
      { title: 'Versicherungs-Check', desc: 'Eine vollständige Prüfung Ihrer bestehenden Policen — behalten, was gut ist, kündigen, was es nicht ist.' },
    ],
    credentialsTitle: 'Ihr Berater: David Frenkel',
    credentialsSubtitle: 'Unabhängiger Finanzplaner · Zürich',
    credentialsPoints: [
      'Finanzplaner mit eidg. Fachausweis (FA)',
      '5 Jahre internationale Ausbildung in Israel sowie mehrere Abschlüsse und Zertifizierungen in Versicherung, Vorsorge und Finanzberatung',
      'Einer der wenigen wirklich unabhängigen Berater der Schweiz — Zugang zu über 60 Partnergesellschaften',
      'Berät im Interesse seiner Kundschaft, nicht im Interesse einer einzelnen Versicherung',
    ],
    stats: [
      { value: '2\'000+', label: 'beratene Kundinnen und Kunden' },
      { value: '60+', label: 'verglichene Partnergesellschaften' },
      { value: '100%', label: 'unabhängig — keine Bindung an einen Versicherer' },
    ],
    testimonialsTitle: 'Was Kundinnen und Kunden sagen',
    testimonialsSubtitle: 'Echtes Feedback von Expats, denen wir geholfen haben, ihre Finanzen in der Schweiz zu ordnen.',
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
    faqTitle: 'Häufige Fragen',
    faqSubtitle: 'Das, was Expats uns am häufigsten fragen — direkt beantwortet.',
    faq: [
      {
        q: 'Was kostet das Erstgespräch?',
        a: 'Nichts. Das erste 15-minütige Gespräch ist kostenlos und unverbindlich. Wir schauen gemeinsam, wo Sie stehen und was — wenn überhaupt — sich lohnt.',
      },
      {
        q: 'Sind Sie wirklich unabhängig?',
        a: 'Ja. Wir sind an keinen einzelnen Versicherer oder keine Bank gebunden und vergleichen Angebote von über 60 Partnergesellschaften — Empfehlungen basieren auf Ihrer Situation, nicht auf den Produkten eines einzelnen Anbieters.',
      },
      {
        q: 'Beraten Sie auch auf Englisch?',
        a: 'Ja — Beratungen sind auf Deutsch und Englisch möglich, und wir erklären Schweizer Fachbegriffe (KVG, Säule 3a, Quellensteuer) in einfacher Sprache.',
      },
      {
        q: 'Welche Kantone decken Sie ab?',
        a: 'Die ganze Schweiz. Die Beratung findet per Telefon oder Videoanruf statt, Ihr Kanton spielt also keine Rolle.',
      },
      {
        q: 'Was sollte ich für das Gespräch vorbereiten?',
        a: 'Nichts ist zwingend nötig. Falls zur Hand: Ihre aktuelle Krankenversicherungspolice und Vorsorgeausweise helfen uns, schneller konkrete Antworten zu geben.',
      },
    ],
    bookingTitle: 'Jetzt kostenloses Gespräch buchen',
    bookingSubtitle:
      '15 Minuten, unverbindlich. Wir schauen gemeinsam, wo Sie heute stehen und was sich für Sie lohnt.',
    footerNote: 'Ihre Angaben werden ausschliesslich zur Vorbereitung Ihres Gesprächs verwendet.',
    footerCopyright: '© 2026 InsuFinance, Zürich. Alle Rechte vorbehalten.',
    footerImpressum: 'Impressum',
    footerPrivacy: 'Datenschutz',
    footerContact: 'Kontakt',
    form: {
      firstName: 'Vorname',
      lastName: 'Nachname',
      phone: 'Telefonnummer',
      email: 'E-Mail-Adresse',
      postalCode: 'Postleitzahl',
      privacyNote:
        'Ihre Angaben werden ausschliesslich zur Vereinbarung und Vorbereitung Ihres Termins verwendet und nicht an Dritte weitergegeben.',
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
    navServices: 'Services',
    navAbout: 'About David',
    navFaq: 'FAQ',
    eyebrow: 'For expats in Switzerland',
    headlineLead: "Switzerland's financial system is complicated.",
    headlineEmphasis: "You don't have to figure it out alone.",
    subheadline:
      'Health insurance, pensions, taxes, pillar funds — all new, all at once. Get a free first conversation with an independent financial planner who specializes in expats.',
    ctaLabel: 'Book a free consultation',
    secondaryCtaLabel: 'See how it works',
    heroMicro: 'Free 15-minute intro call · No obligation · English & German',
    painTitle: "Most mistakes don't come from not knowing. They come from nobody taking the time to walk you through it.",
    painBody:
      "Most people who move to Switzerland lose track fast: the wrong health insurance plan, missed deadlines, money sitting in a pension account nobody explained. A short conversation now can save you thousands of francs — and a lot of frustration — later.",
    howTitle: 'How it works',
    howSubtitle: 'Three simple steps — no paperwork marathons, no jargon.',
    howSteps: [
      {
        title: 'Book 15 minutes',
        body: 'Pick a time that suits you. The first call is free, in English or German, with zero obligation.',
      },
      {
        title: 'Get your personal roadmap',
        body: "We map out where you stand today — insurance, taxes, pensions — and what's actually worth doing next.",
      },
      {
        title: 'We handle the paperwork',
        body: "From comparing 60+ providers to filing the forms — we do the heavy lifting, you keep the overview.",
      },
    ],
    servicesTitle: 'What we help with',
    servicesSubtitle: 'Every topic that hits you when you move to Switzerland — handled in one place.',
    services: [
      { title: 'Health insurance', desc: 'Pick the right KVG model and deductible — and stop overpaying premiums.' },
      { title: 'Tax declarations', desc: 'File correctly from year one, including quellensteuer adjustments expats often miss.' },
      { title: 'Retirement planning (3a/3b)', desc: 'Use the 3rd pillar to cut taxes and build retirement savings the smart way.' },
      { title: 'Vested benefits recovery', desc: 'Track down and reclaim pension money from previous employers or stays abroad.' },
      { title: 'Investments', desc: 'Simple, low-cost portfolios that match your goals and your time in Switzerland.' },
      { title: 'Home financing', desc: "Understand Swiss mortgages, affordability rules, and what banks won't tell you." },
      { title: "Children's investment plans", desc: "Start tax-efficient savings for your kids' education from day one." },
      { title: 'Insurance checkups', desc: "A full review of your existing policies — keep what's good, cancel what isn't." },
    ],
    credentialsTitle: 'Your advisor: David Frenkel',
    credentialsSubtitle: 'Independent Financial Planner · Zurich',
    credentialsPoints: [
      'Financial Planner with a Federal Diploma (eidg. Fachausweis)',
      '5 years of international training in Israel, plus multiple degrees and certifications in insurance, pensions, and financial advisory',
      'One of the few truly independent advisors in Switzerland — access to 60+ partner companies',
      "Works in your interest, not any single insurer's",
    ],
    stats: [
      { value: '2,000+', label: 'clients advised' },
      { value: '60+', label: 'partner companies compared' },
      { value: '100%', label: 'independent — no ties to any insurer' },
    ],
    testimonialsTitle: 'What clients say',
    testimonialsSubtitle: "Real feedback from expats we've helped settle their finances in Switzerland.",
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
    faqTitle: 'Frequently asked questions',
    faqSubtitle: 'The things expats ask us most — answered up front.',
    faq: [
      {
        q: 'What does the first consultation cost?',
        a: "Nothing. The first 15-minute conversation is free and without obligation. We'll map out where you stand and what — if anything — is worth doing next.",
      },
      {
        q: 'Are you really independent?',
        a: "Yes. We are not tied to any single insurer or bank and compare offers from 60+ partner companies, so recommendations are based on your situation, not on one provider's products.",
      },
      {
        q: 'Do you advise in English?',
        a: 'Yes — consultations are available in English and German, and we explain Swiss-specific terms (KVG, pillar 3a, quellensteuer) in plain language.',
      },
      {
        q: 'Which cantons do you cover?',
        a: "All of Switzerland. Consultations take place by phone or video call, so your canton doesn't matter.",
      },
      {
        q: 'What should I prepare for the call?',
        a: 'Nothing is required. If you have them handy, your current health insurance policy and any pension fund statements help us give more specific answers faster.',
      },
    ],
    bookingTitle: 'Book your free consultation',
    bookingSubtitle:
      "15 minutes, no obligation. We'll map out where you stand today and what's worth doing next.",
    footerNote: 'Your details are used exclusively to prepare for your conversation.',
    footerCopyright: '© 2026 InsuFinance, Zurich. All rights reserved.',
    footerImpressum: 'Impressum',
    footerPrivacy: 'Privacy Policy',
    footerContact: 'Contact',
    form: {
      firstName: 'First name',
      lastName: 'Last name',
      phone: 'Phone number',
      email: 'Email address',
      postalCode: 'Postal code',
      privacyNote:
        'Your details are used exclusively to arrange and prepare your appointment and are not shared with third parties.',
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
