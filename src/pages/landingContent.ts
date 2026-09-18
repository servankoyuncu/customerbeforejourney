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
    navServices: 'Themen',
    navAbout: 'Über David',
    navFaq: 'FAQ',
    eyebrow: 'Investieren in der Schweiz — einfach erklärt',
    headlineLead: 'Du arbeitest für dein Geld.',
    headlineEmphasis: 'Ist es nicht Zeit, dass es umgekehrt ist?',
    subheadline:
      'Aktien, ETFs, Obligationen & Co. — so schwierig ist das Ganze gar nicht. Ich zeige dir bei einem unverbindlichen Gespräch, wie dein Geld monatlich eine gute Rendite für dich erzielt.',
    ctaLabel: 'Kostenloses Erstgespräch buchen',
    secondaryCtaLabel: 'So funktioniert es',
    heroMicro: 'Kostenloses 30-Minuten-Gespräch · Unverbindlich · Deutsch & Englisch',
    heroTrustBadges: [
      'Unabhängig · 60+ Partner',
      'Eidg. Fachausweis',
      'Schweizer Datenschutz',
    ],
    painTitle:
      'Dein Geld auf dem Sparkonto verliert jedes Jahr an Wert — und du merkst es kaum.',
    painBody:
      'Bei Nullzinsen frisst die Inflation dein Erspartes Stück für Stück. Wer sein Geld clever anlegt, schafft genau das Gegenteil: ein Vermögen, das jeden Monat wächst und für dich arbeitet. Der Einstieg ist einfacher, als du denkst.',
    urgencyTitle: 'Was dich Zuwarten kostet',
    urgencySubtitle: 'Jedes Jahr, das dein Geld unverzinst rumliegt, fehlt es später.',
    urgencyPoints: [
      {
        title: 'Die Inflation frisst dein Erspartes',
        body: 'Mit 2% Inflation verliert dein Sparkonto-Geld jedes Jahr etwa 2% an Kaufkraft — über zehn Jahre ein ganzer Batzen.',
      },
      {
        title: 'Zinseszins fängt früher an',
        body: 'Wer mit 30 anfängt, muss monatlich viel weniger zurücklegen als jemand, der mit 40 einsteigt — um aufs gleiche Ergebnis zu kommen.',
      },
      {
        title: 'Die Märkte warten nicht auf dich',
        body: 'Gute Renditen entstehen durch regelmässiges, geduldiges Investieren. Je früher du startest, desto mehr profitierst du langfristig.',
      },
    ],
    howTitle: 'So funktioniert es',
    howSubtitle: 'Drei einfache Schritte — ohne Fachchinesisch, ohne Papierkram.',
    howSteps: [
      {
        title: '30 Minuten buchen',
        body: 'Wähle einen passenden Zeitpunkt. Das erste Gespräch ist kostenlos und völlig unverbindlich — auf Deutsch oder Englisch.',
      },
      {
        title: 'Deine persönliche Strategie',
        body: 'Wir schauen gemeinsam, wo du heute stehst, wie viel du anlegen kannst und welche Anlagen zu deinen Zielen passen.',
      },
      {
        title: 'Gemeinsam umsetzen',
        body: 'Vom Vergleich über 60 Partnergesellschaften bis zum Aufbau deines Depots — ich übernehme die Arbeit, du behältst den Überblick.',
      },
    ],
    servicesTitle: 'Womit ich dir helfe',
    servicesSubtitle: 'Alle wichtigen Anlagethemen — verständlich erklärt und unabhängig beraten.',
    services: [
      { title: 'ETF-Anlagen', desc: 'Breit gestreute, kostengünstige ETFs, die zu deinen Zielen und deinem Risiko passen.' },
      { title: 'Aktien', desc: 'Verstehen, was hinter einzelnen Aktien steckt — und ob sie in dein Portfolio gehören.' },
      { title: 'Obligationen', desc: 'Festverzinsliche Anlagen für Stabilität und planbare Erträge in deinem Depot.' },
      { title: 'Säule 3a als Anlage', desc: 'Die dritte Säule clever nutzen: Steuern sparen und gleichzeitig renditestark anlegen.' },
      { title: 'Vermögensaufbau-Plan', desc: 'Eine klare Strategie, mit der dein Geld monatlich für dich arbeitet — Schritt für Schritt.' },
      { title: 'Vorsorge & Freizügigkeit', desc: 'Vergessenes Vorsorgegeld aufspüren und in passende Anlagen überführen.' },
      { title: 'Anlegen für Kinder', desc: 'Steuereffizient früh für die Ausbildung deiner Kinder anlegen — vom ersten Franken an.' },
      { title: 'Portfolio-Check', desc: 'Bewertung deiner bestehenden Anlagen: behalten, was gut ist, verbessern, was es nicht ist.' },
    ],
    credentialsTitle: 'Dein Berater: David Frenkel',
    credentialsSubtitle: 'Unabhängiger Finanzplaner · Zürich',
    credentialsPoints: [
      'Finanzplaner mit eidg. Fachausweis (FA)',
      '5 Jahre internationale Ausbildung in Israel sowie mehrere Abschlüsse und Zertifizierungen in Versicherung, Vorsorge und Finanzberatung',
      'Einer der wenigen wirklich unabhängigen Berater der Schweiz — Zugang zu über 60 Partnergesellschaften',
      'Berät in deinem Interesse, nicht im Interesse einer einzelnen Bank oder Versicherung',
    ],
    stats: [
      { value: '2\'000+', label: 'beratene Kundinnen und Kunden' },
      { value: '60+', label: 'verglichene Partnergesellschaften' },
      { value: '100%', label: 'unabhängig — keine Bindung an einen Anbieter' },
    ],
    testimonialsTitle: 'Was Kundinnen und Kunden sagen',
    testimonialsSubtitle: 'Echtes Feedback von Menschen, die ihre Finanzen auf Kurs gebracht haben.',
    testimonials: [
      {
        quote: 'David hat mir ETFs und die Säule 3a endlich verständlich erklärt. Heute arbeitet mein Geld zum ersten Mal wirklich für mich.',
        name: 'César Nombela',
        role: 'Associate Professor',
      },
      {
        quote: 'Ich dachte, Investieren ist nur etwas für Reiche. David hat mir gezeigt, wie ich mit kleinen Beträgen anfange — unabhängig und ohne Fachchinesisch.',
        name: 'Aya Gosh',
        role: 'Unternehmerin',
      },
      {
        quote: 'Endlich jemand, der mir eine klare Anlagestrategie aufgezeigt hat, statt mir ein Produkt zu verkaufen. Mein Depot wächst seither konstant.',
        name: 'Sarah Robins',
        role: 'Sprecherin',
      },
    ],
    trustTitle: 'Warum du mir vertrauen kannst',
    trustSubtitle: 'Beim Thema Geld zählt Vertrauen — deshalb ist unabhängige Beratung so wichtig.',
    trustBadges: [
      { title: 'Eidg. Fachausweis', desc: 'David ist Finanzplaner mit eidgenössischem Fachausweis — geprüfte Qualifikation in der Schweiz.' },
      { title: 'Ansässig in Zürich', desc: 'Persönliche Beratung aus Zürich — online in der ganzen Schweiz, vor Ort nach Absprache.' },
      { title: 'Swiss Privacy', desc: 'Deine Daten unterliegen Schweizer Datenschutzrecht und werden nicht an Dritte weitergegeben.' },
      { title: 'Wirklich unabhängig', desc: 'Keine Bindung an eine einzelne Bank oder Versicherung. Vergleiche über 60 Partnergesellschaften.' },
    ],
    faqTitle: 'Häufige Fragen',
    faqSubtitle: 'Das, was Investoren-Anfänger am häufigsten fragen — direkt beantwortet.',
    faq: [
      {
        q: 'Was kostet das Erstgespräch?',
        a: 'Nichts. Das erste 30-minütige Gespräch ist kostenlos und unverbindlich. Wir schauen gemeinsam, wo du stehst und welche Anlagen zu dir passen.',
      },
      {
        q: 'Wie viel Geld brauche ich, um anzufangen?',
        a: 'Weniger als du denkst. Mit kleinen, regelmässigen Beträgen kannst du schon starten — wichtig ist die Strategie, nicht der Startbetrag.',
      },
      {
        q: 'Ist mein Geld da nicht in Gefahr?',
        a: 'Anlagen schwanken, das gehört dazu. Deshalb bauen wir ein Portfolio, das zu deinem Risiko und deinen Zielen passt — von sicher bis renditestark. Du weisst vorher genau, worauf du dich einlässt.',
      },
      {
        q: 'Bist du wirklich unabhängig?',
        a: 'Ja. Ich bin an keine einzelne Bank oder Versicherung gebunden und vergleiche Angebote von über 60 Partnergesellschaften — Empfehlungen basieren auf deiner Situation, nicht auf den Produkten eines Anbieters.',
      },
      {
        q: 'Kannst du mein Geld direkt verwalten?',
        a: 'Ich berate und begleite dich beim Aufbau deiner Anlagen. Dein Geld bleibt jederzeit bei dir — du behältst jederzeit die volle Kontrolle über dein Depot.',
      },
      {
        q: 'Berätst du auch auf Englisch?',
        a: 'Ja — Beratungen sind auf Deutsch und Englisch möglich, und ich erkläre Fachbegriffe (ETF, Obligation, Säule 3a) in einfacher Sprache.',
      },
    ],
    bookingTitle: 'Buch dir dein kostenloses Erstgespräch',
    bookingSubtitle:
      '30 Minuten, unverbindlich. Wir schauen gemeinsam, wie dein Geld für dich arbeiten kann — mit Aktien, ETFs, Obligationen und mehr.',
    repeatedCtaTitle: 'Bereit, dein Geld für dich arbeiten zu lassen?',
    repeatedCtaSubtitle: 'Buch ein kostenloses, unverbindliches Erstgespräch — auf Deutsch oder Englisch.',
    leadMagnetTitle: 'Noch nicht bereit für ein Gespräch?',
    leadMagnetSubtitle:
      'Hol dir den kostenlosen Anlage-Guide: „Erste Schritte beim Investieren in der Schweiz“ — wie du mit ETFs, Aktien und Obligationen eine gute Rendite erzielst.',
    leadMagnetCta: 'Guide gratis herunterladen',
    leadMagnetInputLabel: 'E-Mail-Adresse',
    leadMagnetPrivacy:
      'Deine E-Mail-Adresse wird ausschliesslich zum Versand des Guides verwendet und nicht an Dritte weitergegeben.',
    leadMagnetSuccessTitle: 'Danke!',
    leadMagnetSuccessBody:
      'Wir haben deine E-Mail-Adresse erhalten. Du kannst den Guide jetzt direkt hier ansehen und als PDF speichern.',
    leadMagnetSuccessCta: 'Guide öffnen',
    footerCopyright: '© 2026 InsuFinance, Zürich. Alle Rechte vorbehalten.',
    footerImpressum: 'Impressum',
    footerPrivacy: 'Datenschutz',
    footerContact: 'Kontakt',
    form: {
      firstName: 'Vorname',
      lastName: 'Nachname',
      appointmentTypeQuestion: 'Wie möchtest du das Gespräch führen?',
      appointmentTypeOnSite: 'Vor Ort',
      appointmentTypeOnline: 'Online',
      phone: 'Telefonnummer',
      email: 'E-Mail-Adresse',
      postalCode: 'Postleitzahl',
      privacyNote:
        'Deine Angaben werden ausschliesslich zur Vereinbarung und Vorbereitung deines Termins verwendet und nicht an Dritte weitergegeben. Zur Optimierung erfassen wir pseudonymisiert, wie du mit diesem Formular interagierst.',
      submit: 'Weiter zur Terminwahl',
      submitting: 'Wird gesendet …',
      error: 'Bitte alle Felder korrekt ausfüllen.',
      successTitle: 'Danke, {firstName}!',
      successBody: 'Wähle jetzt einen passenden Termin für dein kostenloses Gespräch mit David.',
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
    navServices: 'Topics',
    navAbout: 'About David',
    navFaq: 'FAQ',
    eyebrow: 'Investing in Switzerland — explained simply',
    headlineLead: 'You work for your money.',
    headlineEmphasis: "Isn't it time that flipped around?",
    subheadline:
      'Stocks, ETFs, bonds & more — it really isn\'t that hard. In a free, no-obligation conversation I\'ll show you how to make your money earn a solid return every month.',
    ctaLabel: 'Book a free first consultation',
    secondaryCtaLabel: 'See how it works',
    heroMicro: 'Free 30-minute intro call · No obligation · English & German',
    heroTrustBadges: [
      'Independent · 60+ partners',
      'Swiss Federal Diploma',
      'Swiss privacy law',
    ],
    painTitle: "Money sitting in a savings account loses value every year — and you barely notice.",
    painBody:
      'With zero interest rates, inflation quietly eats away at your savings. People who invest smartly get the opposite: wealth that grows every month and works for them. Getting started is easier than you think.',
    urgencyTitle: 'What waiting costs you',
    urgencySubtitle: 'Every year your money sits uninvested, you have less later.',
    urgencyPoints: [
      {
        title: 'Inflation eats your savings',
        body: 'At 2% inflation, money in a savings account loses about 2% of purchasing power each year — over a decade, that adds up to a lot.',
      },
      {
        title: 'Compound interest starts earlier',
        body: 'Someone who starts at 30 needs to set aside far less per month than someone starting at 40 — to reach the same goal.',
      },
      {
        title: "The markets don't wait for you",
        body: 'Good returns come from steady, patient investing. The earlier you start, the more you benefit in the long run.',
      },
    ],
    howTitle: 'How it works',
    howSubtitle: 'Three simple steps — no jargon, no paperwork marathons.',
    howSteps: [
      {
        title: 'Book 30 minutes',
        body: 'Pick a time that suits you. The first call is free and completely without obligation — in English or German.',
      },
      {
        title: 'Your personal strategy',
        body: "We'll look at where you stand today, how much you can invest, and which investments match your goals.",
      },
      {
        title: 'Implement it together',
        body: "From comparing 60+ partner companies to setting up your portfolio — I do the heavy lifting, you keep full control.",
      },
    ],
    servicesTitle: 'What I can help you with',
    servicesSubtitle: 'All the key investing topics — explained clearly and advised independently.',
    services: [
      { title: 'ETF investing', desc: 'Broadly diversified, low-cost ETFs that match your goals and your risk tolerance.' },
      { title: 'Stocks', desc: 'Understand what actually drives individual stocks — and whether they belong in your portfolio.' },
      { title: 'Bonds', desc: 'Fixed-income investments for stability and predictable returns in your portfolio.' },
      { title: 'Pillar 3a as an investment', desc: 'Use pillar 3a cleverly: save on taxes while investing for solid returns at the same time.' },
      { title: 'Wealth-building plan', desc: 'A clear strategy that makes your money work for you month after month — step by step.' },
      { title: 'Pensions & vested benefits', desc: 'Track down forgotten pension assets and move them into suitable investments.' },
      { title: "Investing for children", desc: "Start investing tax-efficiently for your kids' education — from the first franc." },
      { title: 'Portfolio checkup', desc: 'A review of your existing investments: keep what works, improve what doesn\'t.' },
    ],
    credentialsTitle: 'Your advisor: David Frenkel',
    credentialsSubtitle: 'Independent Financial Planner · Zurich',
    credentialsPoints: [
      'Financial Planner with a Federal Diploma (eidg. Fachausweis)',
      '5 years of international training in Israel, plus multiple degrees and certifications in insurance, pensions, and financial advisory',
      'One of the few truly independent advisors in Switzerland — access to 60+ partner companies',
      'Works in your interest, not in the interest of any single bank or insurer',
    ],
    stats: [
      { value: '2,000+', label: 'clients advised' },
      { value: '60+', label: 'partner companies compared' },
      { value: '100%', label: 'independent — no ties to any provider' },
    ],
    testimonialsTitle: 'What clients say',
    testimonialsSubtitle: 'Real feedback from people who got their finances on track.',
    testimonials: [
      {
        quote: 'David finally explained ETFs and pillar 3a in a way I understand. For the first time, my money is actually working for me.',
        name: 'César Nombela',
        role: 'Associate Professor',
      },
      {
        quote: "I thought investing was only for rich people. David showed me how to start with small amounts — independent and without jargon.",
        name: 'Aya Gosh',
        role: 'Entrepreneur',
      },
      {
        quote: 'Finally someone who laid out a clear investment strategy instead of selling me a product. My portfolio has been growing steadily ever since.',
        name: 'Sarah Robins',
        role: 'Voice Actor',
      },
    ],
    trustTitle: 'Why you can trust me',
    trustSubtitle: 'Money is about trust — which is why independent advice matters so much.',
    trustBadges: [
      { title: 'Swiss Federal Diploma', desc: 'David is a financial planner with the Swiss Federal Diploma — certified expertise in Switzerland.' },
      { title: 'Based in Zurich', desc: 'Personal advice from Zurich — online across Switzerland, in-person by arrangement.' },
      { title: 'Swiss Privacy', desc: 'Your data is protected under Swiss privacy law and is not shared with third parties.' },
      { title: 'Truly independent', desc: 'No ties to a single bank or insurer. Comparisons across 60+ partner companies.' },
    ],
    faqTitle: 'Frequently asked questions',
    faqSubtitle: 'What first-time investors ask most — answered up front.',
    faq: [
      {
        q: 'What does the first consultation cost?',
        a: "Nothing. The first 30-minute conversation is free and without obligation. We'll look at where you stand and which investments could fit you.",
      },
      {
        q: 'How much money do I need to start?',
        a: 'Less than you think. You can start with small, regular amounts — the strategy matters more than the starting sum.',
      },
      {
        q: "Isn't my money at risk?",
        a: 'Investments fluctuate — that\'s normal. That\'s why we build a portfolio that matches your risk tolerance and goals, from safe to growth-oriented. You\'ll know exactly what you\'re getting into.',
      },
      {
        q: 'Are you really independent?',
        a: "Yes. I'm not tied to any single bank or insurer and compare offers from 60+ partner companies — recommendations are based on your situation, not on one provider's products.",
      },
      {
        q: 'Can you manage my money directly?',
        a: 'I advise and guide you as you build your investments. Your money always stays with you — you keep full control of your portfolio at all times.',
      },
      {
        q: 'Do you advise in English?',
        a: 'Yes — consultations are available in English and German, and I explain technical terms (ETF, bond, pillar 3a) in plain language.',
      },
    ],
    bookingTitle: 'Book your free first consultation',
    bookingSubtitle:
      '30 minutes, no obligation. We\'ll look at how your money can work for you — with stocks, ETFs, bonds and more.',
    repeatedCtaTitle: 'Ready to put your money to work?',
    repeatedCtaSubtitle: 'Book a free, no-obligation first consultation — in English or German.',
    leadMagnetTitle: 'Not ready to book a call?',
    leadMagnetSubtitle:
      "Get the free investment guide: 'Getting Started with Investing in Switzerland' — how to earn solid returns with ETFs, stocks and bonds.",
    leadMagnetCta: 'Get the free guide',
    leadMagnetInputLabel: 'Email address',
    leadMagnetPrivacy:
      'Your email address will only be used to send the guide and is not shared with third parties.',
    leadMagnetSuccessTitle: 'Thanks!',
    leadMagnetSuccessBody:
      'We have received your email address. You can view the guide right here and save it as a PDF.',
    leadMagnetSuccessCta: 'Open guide',
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
