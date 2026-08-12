import { TOTAL_SCREENS } from '../context/PrepContext';

export function ProgressDots({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-1.5 pt-[max(env(safe-area-inset-top),1rem)] pb-3">
      {Array.from({ length: TOTAL_SCREENS }, (_, i) => i + 1).map((step) => (
        <span
          key={step}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            step === current ? 'w-6 bg-[var(--color-accent)]' : 'w-1.5 bg-neutral-200'
          }`}
        />
      ))}
    </div>
  );
}
