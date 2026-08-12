export function ScreenError({ reason }: { reason: 'invalid' | 'expired' | 'unknown' }) {
  const message =
    reason === 'expired'
      ? 'Dieser Link ist abgelaufen.'
      : 'Dieser Link ist nicht mehr gültig.';

  return (
    <div className="flex h-full min-h-svh flex-col items-center justify-center gap-2 bg-white px-6 text-center">
      <p className="text-lg font-medium text-neutral-900">{message}</p>
      <p className="text-[15px] text-neutral-500">
        Bitte wenden Sie sich an Ihren Berater, um einen neuen Link zu erhalten.
      </p>
    </div>
  );
}
