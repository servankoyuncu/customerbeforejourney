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
  heroTrustBadges: string[];
  painTitle: string;
  painBody: string;
  urgencyTitle: string;
  urgencySubtitle: string;
  urgencyPoints: { title: string; body: string }[];
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
  trustTitle: string;
  trustSubtitle: string;
  trustBadges: { title: string; desc: string }[];
  faqTitle: string;
  faqSubtitle: string;
  faq: { q: string; a: string }[];
  bookingTitle: string;
  bookingSubtitle: string;
  repeatedCtaTitle: string;
  repeatedCtaSubtitle: string;
  leadMagnetTitle: string;
  leadMagnetSubtitle: string;
  leadMagnetCta: string;
  leadMagnetInputLabel: string;
  leadMagnetPrivacy: string;
  leadMagnetSuccessTitle: string;
  leadMagnetSuccessBody: string;
  leadMagnetSuccessCta: string;
  footerCopyright: string;
  footerImpressum: string;
  footerPrivacy: string;
  footerContact: string;
  form: {
    firstName: string;
    lastName: string;
    appointmentTypeQuestion: string;
    appointmentTypeOnSite: string;
    appointmentTypeOnline: string;
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
    ctaLabel: 'Kostenlosen 30-Minuten-Call buchen',
    secondaryCtaLabel: 'So läuft es ab',
    heroMicro: 'Kostenloses 30-Minuten-Gespräch · Unverbindlich · Deutsch & Englisch',
    heroTrustBadges: [
      'Unabhängig · 60+ Partner',
      'Eidg. Fachausweis',
      'Schweizer Datenschutz',
    ],
    painTitle:
      'Die meisten Fehler passieren nicht aus Unwissen. Sondern weil niemand sie einmal in Ruhe erklärt hat.',
    painBody:
      'Wer in die Schweiz zieht, verliert schnell den Überblick: die falsche Krankenkasse, verpasste Fristen, liegen gelassenes Geld in der Vorsorge. Ein kurzes Gespräch jetzt kann Ihnen später tausende Franken — und viel Frust — sparen.',
    urgencyTitle: 'Was passiert, wenn Sie nicht handeln?',
    urgencySubtitle: 'Jedes Quartal, in dem Sie warten, kosten Sie wahrscheinlich Geld.',
    urgencyPoints: [
      {
        title: 'Säule 3a verpassen',
        body: 'Wer die Einzahlungsfrist verpasst, lässt jedes Jahr Steuerersparnisse liegen — bei mittleren Einkommen schnell ein vierstelliger Betrag.',
      },
      {
        title: 'Falsche Krankenkasse behalten',
        body: 'Mit dem falschen Modell und der falschen Franchise zahlen viele Expats jährlich Hunderte bis Tausende Franken zu viel an Prämien.',
      },
      {
        title: 'Quellensteuer nicht korrigieren',
        body: 'Expats verlieren oft Rückzahlungen aus der Quellensteuer, weil niemand sie darauf hinweist, was abgesetzt werden kann.',
      },
    ],
    howTitle: 'So läuft es ab',
    howSubtitle: 'Drei einfache Schritte — kein Papierkrieg, kein Fachchinesisch.',
    howSteps: [
      {
        title: '30 Minuten buchen',
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
        quote: 'David hat uns bei der Krankenkasse, Steuererklärung und Säule 3a für unser erstes Jahr in Zürich kompetent und unabhängig beraten.',
        name: 'César Nombela',
        role: 'Associate Professor',
      },
      {
        quote: 'Als Expat brauchte ich jemanden, der mir KVG, Quellensteuer und Säule 3a auf Englisch verständlich erklärt. David macht das Komplexe einfach.',
        name: 'Aya Gosh',
        role: 'Unternehmerin',
      },
      {
        quote: 'David hat uns stundenlange Recherche erspart und dabei geholfen, teure Fehler in unserem ersten Jahr in der Schweiz zu vermeiden.',
        name: 'Sarah Robins',
        role: 'Sprecherin',
      },
    ],
    trustTitle: 'Warum Sie uns vertrauen können',
    trustSubtitle: 'Finanzberatung ist Vertrauenssache — besonders für Menschen, die neu in der Schweiz sind.',
    trustBadges: [
      { title: 'Eidg. Fachausweis', desc: 'David ist Finanzplaner mit eidgenössischem Fachausweis — geprüfte Qualifikation in der Schweiz.' },
      { title: 'Ansässig in Zürich', desc: 'Persönliche Beratung aus Zürich — online in der ganzen Schweiz, vor Ort nach Absprache.' },
      { title: 'Swiss Privacy', desc: 'Ihre Daten unterliegen Schweizer Datenschutzrecht und werden nicht an Dritte weitergegeben.' },
      { title: 'Wirklich unabhängig', desc: 'Keine Bindung an einen einzelnen Versicherer. Vergleiche über 60 Partnergesellschaften.' },
    ],
    faqTitle: 'Häufige Fragen',
    faqSubtitle: 'Das, was Expats uns am häufigsten fragen — direkt beantwortet.',
    faq: [
      {
        q: 'Was kostet das Erstgespräch?',
        a: 'Nichts. Das erste 30-minütige Gespräch ist kostenlos und unverbindlich. Wir schauen gemeinsam, wo Sie stehen und was — wenn überhaupt — sich lohnt.',
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
        a: 'Für Online-Beratungen die ganze Schweiz — Video- oder Telefongespräche funktionieren unabhängig von Ihrem Kanton. Vor-Ort-Termine sind ebenfalls möglich; die Details dazu stimmen wir individuell mit Ihnen ab, je nach Standort und Verfügbarkeit.',
      },
      {
        q: 'Was sollte ich für das Gespräch vorbereiten?',
        a: 'Nichts ist zwingend nötig. Falls zur Hand: Ihre aktuelle Krankenversicherungspolice und Vorsorgeausweise helfen uns, schneller konkrete Antworten zu geben.',
      },
    ],
    bookingTitle: 'Jetzt kostenloses Gespräch buchen',
    bookingSubtitle:
      '30 Minuten, unverbindlich. Wir schauen gemeinsam, wo Sie heute stehen und was sich für Sie lohnt.',
    repeatedCtaTitle: 'Bereit, Ihre Schweizer Finanzen auf den richtigen Weg zu bringen?',
    repeatedCtaSubtitle: 'Buchen Sie ein kostenloses, unverbindliches Erstgespräch — auf Deutsch oder Englisch.',
    leadMagnetTitle: 'Noch nicht bereit für ein Gespräch?',
    leadMagnetSubtitle:
      'Laden Sie unsere kostenlose Checkliste herunter: „Expat Financial Checklist for Switzerland“ — Ihre wichtigsten To-dos für die ersten 12 Monate.',
    leadMagnetCta: 'Checkliste gratis herunterladen',
    leadMagnetInputLabel: 'E-Mail-Adresse',
    leadMagnetPrivacy:
      'Ihre E-Mail-Adresse wird ausschliesslich zum Versand der Checkliste verwendet und nicht an Dritte weitergegeben.',
    leadMagnetSuccessTitle: 'Danke!',
    leadMagnetSuccessBody:
      'Wir haben Ihre E-Mail-Adresse erhalten. Sie können die Checkliste jetzt direkt hier ansehen und als PDF speichern.',
    leadMagnetSuccessCta: 'Checkliste öffnen',
    footerCopyright: '© 2026 InsuFinance, Zürich. Alle Rechte vorbehalten.',
    footerImpressum: 'Impressum',
    footerPrivacy: 'Datenschutz',
    footerContact: 'Kontakt',
    form: {
      firstName: 'Vorname',
      lastName: 'Nachname',
      appointmentTypeQuestion: 'Wie möchten Sie das Gespräch führen?',
      appointmentTypeOnSite: 'Vor Ort',
      appointmentTypeOnline: 'Online',
      phone: 'Telefonnummer',
      email: 'E-Mail-Adresse',
      postalCode: 'Postleitzahl',
      privacyNote:
        'Ihre Angaben werden ausschliesslich zur Vereinbarung und Vorbereitung Ihres Termins verwendet und nicht an Dritte weitergegeben. Zur Optimierung erfassen wir pseudonymisiert, wie Sie mit diesem Formular interagieren.',
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
    ctaLabel: 'Book My Free 30-Min Call',
    secondaryCtaLabel: 'See how it works',
    heroMicro: 'Free 30-minute intro call · No obligation · English & German',
    heroTrustBadges: [
      'Independent · 60+ partners',
      'Swiss Federal Diploma',
      'Swiss privacy law',
    ],
    painTitle: "Most mistakes don't come from not knowing. They come from nobody taking the time to walk you through it.",
    painBody:
      "Most people who move to Switzerland lose track fast: the wrong health insurance plan, missed deadlines, money sitting in a pension account nobody explained. A short conversation now can save you thousands of francs — and a lot of frustration — later.",
    urgencyTitle: 'What happens if you do nothing?',
    urgencySubtitle: 'Every quarter you wait is likely costing you money.',
    urgencyPoints: [
      {
        title: 'Miss the pillar 3a deadline',
        body: 'If you miss the annual contribution deadline, you leave tax savings on the table — often a four-figure amount for middle incomes.',
      },
      {
        title: 'Keep the wrong health insurance',
        body: 'The wrong model and deductible can cost expats hundreds to thousands of francs in extra premiums every year.',
      },
      {
        title: 'Skip quellensteuer corrections',
        body: 'Many expats miss quellensteuer refunds simply because no one tells them what can be deducted.',
      },
    ],
    howTitle: 'How it works',
    howSubtitle: 'Three simple steps — no paperwork marathons, no jargon.',
    howSteps: [
      {
        title: 'Book 30 minutes',
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
        quote: 'David helped us sort out health insurance, tax filing, and pillar 3a for our first year in Zurich — competent and independent advice.',
        name: 'César Nombela',
        role: 'Associate Professor',
      },
      {
        quote: 'As an expat, I needed someone who could explain KVG, quellensteuer, and pillar 3a to me in English. David makes the complex simple.',
        name: 'Aya Gosh',
        role: 'Entrepreneur',
      },
      {
        quote: 'David saved us hours of research and helped us avoid expensive mistakes in our first year in Switzerland.',
        name: 'Sarah Robins',
        role: 'Voice Actor',
      },
    ],
    trustTitle: 'Why you can trust us',
    trustSubtitle: 'Financial advice is a matter of trust — especially for people new to Switzerland.',
    trustBadges: [
      { title: 'Swiss Federal Diploma', desc: 'David is a financial planner with the Swiss Federal Diploma — certified expertise in Switzerland.' },
      { title: 'Based in Zurich', desc: 'Personal advice from Zurich — online across Switzerland, in-person by arrangement.' },
      { title: 'Swiss Privacy', desc: 'Your data is protected under Swiss privacy law and is not shared with third parties.' },
      { title: 'Truly independent', desc: 'No ties to a single insurer. Comparisons across 60+ partner companies.' },
    ],
    faqTitle: 'Frequently asked questions',
    faqSubtitle: 'The things expats ask us most — answered up front.',
    faq: [
      {
        q: 'What does the first consultation cost?',
        a: "Nothing. The first 30-minute conversation is free and without obligation. We'll map out where you stand and what — if anything — is worth doing next.",
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
        a: "All of Switzerland for online consultations — video or phone calls work regardless of your canton. In-person meetings are also possible; we'll coordinate the details with you individually depending on location and availability.",
      },
      {
        q: 'What should I prepare for the call?',
        a: 'Nothing is required. If you have them handy, your current health insurance policy and any pension fund statements help us give more specific answers faster.',
      },
    ],
    bookingTitle: 'Book your free consultation',
    bookingSubtitle:
      "30 minutes, no obligation. We'll map out where you stand today and what's worth doing next.",
    repeatedCtaTitle: 'Ready to get your Swiss finances on track?',
    repeatedCtaSubtitle: 'Book a free, no-obligation first consultation — in English or German.',
    leadMagnetTitle: 'Not ready to book a call?',
    leadMagnetSubtitle:
      "Download our free 'Expat Financial Checklist for Switzerland' — your most important to-dos for the first 12 months.",
    leadMagnetCta: 'Get the free checklist',
    leadMagnetInputLabel: 'Email address',
    leadMagnetPrivacy:
      'Your email address will only be used to send the checklist and is not shared with third parties.',
    leadMagnetSuccessTitle: 'Thanks!',
    leadMagnetSuccessBody:
      'We have received your email address. You can view the checklist right here and save it as a PDF.',
    leadMagnetSuccessCta: 'Open checklist',
    footerCopyright: '© 2026 InsuFinance, Zurich. All rights reserved.',
    footerImpressum: 'Impressum',
    footerPrivacy: 'Privacy Policy',
    footerContact: 'Contact',
    form: {
      firstName: 'First name',
      lastName: 'Last name',
      appointmentTypeQuestion: 'How would you like to meet?',
      appointmentTypeOnSite: 'In-person',
      appointmentTypeOnline: 'Online',
      phone: 'Phone number',
      email: 'Email address',
      postalCode: 'Postal code',
      privacyNote:
        'Your details are used exclusively to arrange and prepare your appointment and are not shared with third parties. To optimize this form, we collect pseudonymized interaction data.',
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
