import { NavButtons } from '../components/NavButtons';
import { ScreenShell } from '../components/ScreenShell';

const AGENDA_ITEMS = [
  'Ihre heutige Situation',
  'Veränderungen im Leben',
  'Ob sich eine Anpassung für Sie lohnt',
  'Ihre Fragen',
];

export function Screen5Agenda({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <ScreenShell screen={5} footer={<NavButtons onNext={onNext} onBack={onBack} />}>
      <h2 className="text-2xl font-semibold text-neutral-900">Darüber sprechen wir</h2>
      <ul className="mt-5 space-y-3">
        {AGENDA_ITEMS.map((item, i) => (
          <li key={item} className="flex items-center gap-3 text-[15px] text-neutral-700">
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-xs font-semibold text-[var(--color-accent)]">
              {i + 1}
            </span>
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-5 text-xs text-neutral-400">Kein Verkaufsgespräch. Ein Überblick.</p>
    </ScreenShell>
  );
}
