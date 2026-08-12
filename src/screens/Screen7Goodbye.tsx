import { ScreenShell } from '../components/ScreenShell';

export function Screen7Goodbye({
  startsAt,
  location,
  onFinish,
}: {
  startsAt: string;
  location: string;
  onFinish: () => void;
}) {
  const date = new Date(startsAt);
  const dateLabel = date.toLocaleDateString('de-CH', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
  const timeLabel = date.toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit' });

  return (
    <ScreenShell
      screen={7}
      footer={
        <button
          type="button"
          onClick={onFinish}
          className="w-full rounded-full bg-[var(--color-accent)] py-3.5 text-[15px] font-semibold text-white active:opacity-80"
        >
          Beenden
        </button>
      }
    >
      <h2 className="text-2xl font-semibold text-neutral-900">Wir sehen uns</h2>
      <div className="mt-5 space-y-1.5 text-[15px] text-neutral-700">
        <p className="capitalize">{dateLabel}</p>
        <p>{timeLabel} Uhr</p>
        <p>{location}</p>
      </div>
      <p className="mt-5 text-[15px] leading-relaxed text-neutral-500">
        Wir freuen uns auf Sie und nehmen uns Zeit für Ihre Fragen.
      </p>
    </ScreenShell>
  );
}
