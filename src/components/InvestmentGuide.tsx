import { useRef } from 'react';
import type { Lang } from '../pages/landingContent';

const GUIDE: Record<Lang, { title: string; items: string[] }> = {
  de: {
    title: 'Anlage-Guide: Erste Schritte beim Investieren in der Schweiz',
    items: [
      'Notfallfonds aufbauen: 3–6 Monatsausgaben auf einem separaten Konto bereithalten, bevor du anlegst.',
      'Broker- oder Bankdepot eröffnen — auf Depot- und Transaktionskosten achten.',
      'ETFs verstehen: breite Streuung statt Einzelwetten, tiefe Kosten statt teurer aktiver Fonds.',
      'Einmalbetrag oder Sparplan: regelmässige monatliche Beträge nutzen den Cost-Average-Effekt.',
      'Risiko-Profil bestimmen: Wie viel Schwankung verträgst du, ohne nervös zu werden?',
      'Säule 3a als Anlage nutzen: Steuern sparen und gleichzeitig renditestark investieren.',
      'Obligationen für Stabilität: festverzinsliche Anlagen glätten dein Depot.',
      'Die Inflation im Blick behalten: Sparkonto-Geld verliert jedes Jahr an Kaufkraft.',
      'Emotionen ausschalten: nicht in Panik verkaufen, nicht in Euphorie kaufen — Strategie halten.',
      'Kosten im Griff behalten: Gebühren, Ausgabeaufschläge und Steuern minimieren.',
      'Langfristig denken: Zinseszins braucht Zeit — früh anfangen zahlt sich aus.',
      'Unabhängige Beratung in Erwägung ziehen, bevor du grössere Beträge anlegst.',
    ],
  },
  en: {
    title: 'Investment Guide: Getting Started with Investing in Switzerland',
    items: [
      'Build an emergency fund first: keep 3–6 months of expenses in a separate account before you invest.',
      'Open a broker or bank account — watch out for account and transaction fees.',
      'Understand ETFs: broad diversification instead of single bets, low costs instead of expensive active funds.',
      'Lump sum or savings plan: regular monthly contributions benefit from cost averaging.',
      'Determine your risk profile: how much fluctuation can you tolerate without getting nervous?',
      'Use pillar 3a as an investment: save on taxes while investing for returns at the same time.',
      'Bonds for stability: fixed-income investments smooth out your portfolio.',
      'Keep inflation in mind: savings-account money loses purchasing power every year.',
      'Take emotions out of it: don\'t sell in panic, don\'t buy in euphoria — stick to the strategy.',
      'Keep costs under control: minimize fees, front-end loads and taxes.',
      'Think long-term: compound interest needs time — starting early pays off.',
      'Consider independent advice before investing larger amounts.',
    ],
  },
};

interface InvestmentGuideProps {
  lang: Lang;
}

export function InvestmentGuide({ lang }: InvestmentGuideProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { title, items } = GUIDE[lang];

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
              ? 'Klicke „Als PDF speichern“, um den Guide zu drucken oder im Browser als PDF zu speichern.'
              : 'Click “Save as PDF” to print or save this guide from your browser.'}
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
            ? 'Tipp: Hake die Punkte ab, sobald du sie erledigt hast. Bei Fragen buche ein kostenloses Erstgespräch.'
            : 'Tip: Check off items as you complete them. If you have questions, book a free first call.'}
        </p>
      </div>
    </div>
  );
}
