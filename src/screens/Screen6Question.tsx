import { NavButtons } from '../components/NavButtons';
import { ScreenShell } from '../components/ScreenShell';

const OPTIONS = ['Meine Familie absichern', 'Sparen wo möglich', 'Einfach den Überblick behalten'];

export function Screen6Question({
  selected,
  onSelect,
  onNext,
  onBack,
}: {
  selected: string | null;
  onSelect: (option: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <ScreenShell
      screen={6}
      footer={<NavButtons onNext={onNext} onBack={onBack} nextDisabled={!selected} />}
    >
      <h2 className="text-2xl font-semibold text-neutral-900">
        Was ist Ihnen am Termin am wichtigsten?
      </h2>
      <div className="mt-5 space-y-2.5">
        {OPTIONS.map((option) => {
          const isSelected = option === selected;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              className={`w-full rounded-2xl border px-4 py-3.5 text-left text-[15px] transition-colors ${
                isSelected
                  ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/5 font-medium text-[var(--color-accent)]'
                  : 'border-neutral-200 text-neutral-700 active:bg-neutral-50'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      <p className="mt-5 text-xs text-neutral-400">
        Ihre Antwort sieht nur Ihr Berater und hilft ihm, den Termin auf Sie abzustimmen.
      </p>
    </ScreenShell>
  );
}
