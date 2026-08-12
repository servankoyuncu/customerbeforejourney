import { NavButtons } from '../components/NavButtons';
import { ScreenShell } from '../components/ScreenShell';

export function Screen3Human({
  bio,
  onNext,
  onBack,
}: {
  bio: string;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <ScreenShell screen={3} footer={<NavButtons onNext={onNext} onBack={onBack} />}>
      <h2 className="text-2xl font-semibold text-neutral-900">Kein Verkäufer. Ein Mensch.</h2>
      <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">{bio}</p>
    </ScreenShell>
  );
}
