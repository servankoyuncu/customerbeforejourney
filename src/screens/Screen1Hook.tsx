import { ProgressDots } from '../components/ProgressDots';

export function Screen1Hook({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex h-full min-h-svh flex-col justify-between bg-white px-6 pb-[max(env(safe-area-inset-bottom),1.5rem)]">
      <ProgressDots current={1} />
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-sm font-medium text-neutral-400">Ihre Terminvorbereitung</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-neutral-900">
          3 Minuten. Dann sind Sie bereit.
        </h1>
      </div>
      <div className="space-y-4">
        <p className="text-xs leading-relaxed text-neutral-400">
          Mit dem Start stimmen Sie zu, dass Ihre Angaben ausschliesslich zur Vorbereitung Ihres
          Termins verwendet werden.
        </p>
        <button
          type="button"
          onClick={onNext}
          className="w-full rounded-full bg-[var(--color-accent)] py-3.5 text-[15px] font-semibold text-white active:opacity-80"
        >
          Los geht's
        </button>
      </div>
    </div>
  );
}
