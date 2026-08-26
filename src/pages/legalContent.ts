import type { Lang } from './landingContent';

export interface ImpressumContent {
  title: string;
  back: string;
  providerHeading: string;
  providerDetails: string;
  contactHeading: string;
  contactDetails: string;
  registerHeading: string;
  registerDetails: string;
  liabilityHeading: string;
  liabilityBody: string;
  copyrightHeading: string;
  copyrightBody: string;
}

export interface PrivacyContent {
  title: string;
  back: string;
  intro: string;
  collectHeading: string;
  collectBody: string;
  purposeHeading: string;
  purposeBody: string;
  sharingHeading: string;
  sharingBody: string;
  storageHeading: string;
  storageBody: string;
  rightsHeading: string;
  rightsBody: string;
  contactHeading: string;
  contactBody: string;
}

export const IMPRESSUM_CONTENT: Record<Lang, ImpressumContent> = {
  de: {
    title: 'Impressum',
    back: 'Zurück zur Startseite',
    providerHeading: 'Anbieter dieser Website',
    providerDetails: 'Social Media Koyuncu (MarkenDing)\nEinzelfirma\nRiedhofstrasse 92A\n8408 Winterthur\nSchweiz',
    contactHeading: 'Kontakt',
    contactDetails: 'shero@marken-ding.com\n+41 76 786 15 75',
    registerHeading: 'Handelsregister',
    registerDetails: 'UID: CHE-160.366.764',
    liabilityHeading: 'Haftungsausschluss',
    liabilityBody:
      'Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine Gewähr übernommen. Verweise und Links auf Websites Dritter liegen ausserhalb unseres Verantwortungsbereichs; für deren Inhalte wird keine Haftung übernommen.',
    copyrightHeading: 'Urheberrecht',
    copyrightBody:
      'Die auf dieser Website veröffentlichten Inhalte unterliegen dem Schweizer Urheberrecht. Jede Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Verwertung ausserhalb der Grenzen des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung.',
  },
  en: {
    title: 'Impressum',
    back: 'Back to homepage',
    providerHeading: 'Website operator',
    providerDetails: 'Social Media Koyuncu (MarkenDing)\nSole proprietorship\nRiedhofstrasse 92A\n8408 Winterthur\nSwitzerland',
    contactHeading: 'Contact',
    contactDetails: 'shero@marken-ding.com\n+41 76 786 15 75',
    registerHeading: 'Commercial register',
    registerDetails: 'UID: CHE-160.366.764',
    liabilityHeading: 'Disclaimer',
    liabilityBody:
      'The content of this website has been prepared with the greatest care. However, no guarantee is made as to its accuracy, completeness, or timeliness. References and links to third-party websites are outside our area of responsibility; no liability is accepted for their content.',
    copyrightHeading: 'Copyright',
    copyrightBody:
      'The content published on this website is subject to Swiss copyright law. Any reproduction, editing, distribution, or other use beyond the scope of copyright law requires prior written consent.',
  },
};

export const PRIVACY_CONTENT: Record<Lang, PrivacyContent> = {
  de: {
    title: 'Datenschutzerklärung',
    back: 'Zurück zur Startseite',
    intro:
      'Diese Datenschutzerklärung beschreibt, welche Daten wir über diese Website erheben und wie wir damit umgehen, wenn Sie ein kostenloses Beratungsgespräch anfragen.',
    collectHeading: 'Welche Daten wir erheben',
    collectBody:
      'Wenn Sie das Formular auf dieser Website ausfüllen, erheben wir: Vorname, Nachname, Telefonnummer, E-Mail-Adresse, Postleitzahl sowie Ihre Angabe, ob Sie das Gespräch vor Ort oder online führen möchten. Wenn Sie einen Termin über unsere Terminvorbereitungs-App vorbereiten, erheben wir zusätzlich den Zeitpunkt Ihres Zugriffs, Ihren Fortschritt durch die Vorbereitung und Ihre Antwort auf die dort gestellte Frage. Ausserdem erfassen wir auf dieser Landingpage pseudonymisiert, welche Bereiche Sie ansehen, auf welche Buttons Sie klicken und wie Sie das Formular ausfüllen (zum Beispiel ob Felder ausgefüllt oder abgeschickt werden). Dabei speichern wir keine Namen, E-Mail-Adressen oder andere personenbezogene Daten in den Tracking-Ereignissen.',
    purposeHeading: 'Wozu wir die Daten verwenden',
    purposeBody:
      'Wir verwenden Ihre Angaben ausschliesslich dazu, Sie zu kontaktieren, Ihren Beratungstermin zu vereinbaren und den Termin für Sie und Ihren Berater vorzubereiten. Die pseudonymisierten Nutzungsdaten der Landingpage verwenden wir, um die Website zu verbessern und herauszufinden, wo Interessenten im Anfrageprozess abbrechen. Wir nutzen Ihre Daten nicht für Werbezwecke und betreiben kein Tracking Dritter.',
    sharingHeading: 'Weitergabe an Dritte',
    sharingBody:
      'Ihre Daten werden nicht an Dritte verkauft oder für andere Zwecke als die Terminvereinbarung und -vorbereitung weitergegeben. Zur technischen Abwicklung nutzen wir sorgfältig ausgewählte Dienstleister: Supabase (Datenbank/Hosting, EU-Region) und Resend (E-Mail-Versand). Diese verarbeiten Daten ausschliesslich in unserem Auftrag.',
    storageHeading: 'Speicherung',
    storageBody:
      'Ihre Daten werden so lange gespeichert, wie es für die Terminvereinbarung und -vorbereitung erforderlich ist. Auf Wunsch löschen wir Ihre Daten vorzeitig — siehe Kontakt unten.',
    rightsHeading: 'Ihre Rechte',
    rightsBody:
      'Sie haben jederzeit das Recht, Auskunft über die zu Ihrer Person gespeicherten Daten zu verlangen sowie deren Berichtigung oder Löschung zu beantragen. Wenden Sie sich dazu an die untenstehende Kontaktadresse.',
    contactHeading: 'Kontakt für Datenschutzanfragen',
    contactBody: 'david@frenkelconsulting.com',
  },
  en: {
    title: 'Privacy Policy',
    back: 'Back to homepage',
    intro:
      'This privacy policy describes what data we collect through this website and how we handle it when you request a free consultation.',
    collectHeading: 'What data we collect',
    collectBody:
      "When you fill in the form on this website, we collect: first name, last name, phone number, email address, postal code, and your choice of whether you'd like to meet in person or online. If you prepare for an appointment through our appointment-prep app, we additionally collect the time you accessed it, your progress through the preparation, and your answer to the question asked there. On this landing page, we also collect pseudonymized data about which sections you view, which buttons you click, and how you interact with the form (for example, whether fields are filled in or the form is submitted). We do not store names, email addresses, or other personal data in these tracking events.",
    purposeHeading: 'What we use it for',
    purposeBody:
      "We use your details exclusively to contact you, arrange your consultation, and prepare the appointment for you and your advisor. We use the pseudonymized landing-page usage data to improve the website and understand where potential clients drop off in the inquiry process. We do not use your data for advertising purposes and do not run any third-party tracking.",
    sharingHeading: 'Sharing with third parties',
    sharingBody:
      'Your data is not sold to third parties or used for any purpose beyond arranging and preparing your appointment. For technical operation, we use carefully selected service providers: Supabase (database/hosting, EU region) and Resend (email delivery). These providers process data solely on our behalf.',
    storageHeading: 'Storage',
    storageBody:
      'Your data is retained for as long as necessary to arrange and prepare your appointment. On request, we will delete your data earlier — see contact details below.',
    rightsHeading: 'Your rights',
    rightsBody:
      'You have the right, at any time, to request information about the data we hold about you, as well as to request its correction or deletion. Please use the contact address below.',
    contactHeading: 'Contact for privacy requests',
    contactBody: 'david@frenkelconsulting.com',
  },
};
