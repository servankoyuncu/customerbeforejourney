import { useRef } from 'react';
import type { Lang } from '../pages/landingContent';

const CHECKLIST: Record<Lang, { title: string; items: string[] }> = {
  de: {
    title: 'Expat Financial Checklist für die Schweiz',
    items: [
      'Krankenkasse innerhalb von 3 Monaten nach Anmeldung wählen und ggf. Wechselfristen beachten.',
      'Jährliche Säule-3a-Einzahlung bis Frist tätigen, um Steuern zu sparen.',
      'Quellensteuer korrekt deklarieren und absetzbare Posten prüfen.',
      'Alte Vorsorgekonten (Freizügigkeit) aus früheren Jobs oder Ländern lokalisieren.',
      'Haftpflicht- und Hausratversicherung auf Schweizer Verhältnisse abstimmen.',
      '3. Säule mit passendem Profil wählen (Bank vs. Versicherung).',
      'Budget in CHF planen: Miete, Krankenkassenprämie, Transport, Steuern.',
      'Notfallfonds in Schweizer Franken anlegen (3–6 Monatsausgaben).',
      'Steuererklärungsfristen des Kantons im Blick behalten.',
      'Beratung durch unabhängigen Finanzplaner in Erwägung ziehen, bevor man längerfristige Verträge abschliesst.',
      'Kinder-Vorsorge (Bildung, Vorsorge 3a für Minderjährige) früh strukturieren.',
      'Hypothekarzinsen und Wohneigentums-Regeln bei Umzug vergleichen.',
    ],
  },
  en: {
    title: 'Expat Financial Checklist for Switzerland',
    items: [
      'Choose a health insurer within 3 months of registration; watch switch deadlines.',
      'Make your annual pillar 3a contribution before the deadline to save on taxes.',
      'Declare quellensteuer correctly and review deductible items.',
      'Locate old pension/vested benefits accounts from previous jobs or countries.',
      'Align liability and household insurance with Swiss requirements.',
      'Choose the right pillar 3a product for your profile (bank vs. insurance).',
      'Plan your CHF budget: rent, health premium, transport, taxes.',
      'Build an emergency fund in Swiss francs (3–6 months of expenses).',
      'Keep track of your cantonal tax-filing deadlines.',
      'Consider independent financial advice before locking into long-term contracts.',
      'Structure education savings and child provisions early.',
      'Compare mortgage rates and home-ownership rules if buying property.',
    ],
  },
};

interface ExpatChecklistProps {
  lang: Lang;
}

export function ExpatChecklist({ lang }: ExpatChecklistProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { title, items } = CHECKLIST[lang];

  function handlePrint() {
    window.print();
  }

  return (
    <div ref={ref} className="break-inside-avoid rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm print:border print:p-0 print:shadow-none sm:p-8">
      <div className="flex items-start justify-between gap-4 print:hidden">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-500">
            {lang === 'de'
              ? 'Klicken Sie „Als PDF speichern“, um die Checkliste zu drucken oder im Browser als PDF zu speichern.'
              : 'Click “Save as PDF” to print or save this checklist from your browser.'}
          </p>
        </div>
        <button
          type="button"
          onClick={handlePrint}
          className="shrink-0 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        >
          {lang === 'de' ? 'Als PDF speichern' : 'Save as PDF'}
        </button>
      </div>

      <div className="mt-6 print:mt-0">
        <h3 className="hidden text-xl font-bold text-slate-900 print:block">{title}</h3>
        <ul className="mt-4 space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-700">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 border-t border-slate-100 pt-6 print:hidden">
        <p className="text-sm text-slate-500">
          {lang === 'de'
            ? 'Tipp: Markieren Sie die Punkte ab, sobald Sie sie erledigt haben. Bei Fragen buchen Sie ein kostenloses Erstgespräch.'
            : 'Tip: Check off items as you complete them. If you have questions, book a free first call.'}
        </p>
      </div>
    </div>
  );
}
