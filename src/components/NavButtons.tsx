interface NavButtonsProps {
  onNext: () => void;
  onBack?: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
}

export function NavButtons({ onNext, onBack, nextLabel = 'Weiter', nextDisabled }: NavButtonsProps) {
  return (
    <div className="flex items-center gap-3 pb-[max(env(safe-area-inset-bottom),1.25rem)]">
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="rounded-full px-5 py-3.5 text-[15px] font-medium text-neutral-500 active:bg-neutral-100"
        >
          Zurück
        </button>
      )}
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        className="flex-1 rounded-full bg-[var(--color-accent)] py-3.5 text-[15px] font-semibold text-white transition-opacity active:opacity-80 disabled:opacity-40"
      >
        {nextLabel}
      </button>
    </div>
  );
}
