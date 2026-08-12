import { Avatar } from '../components/Avatar';
import { NavButtons } from '../components/NavButtons';
import { ScreenShell } from '../components/ScreenShell';

export function Screen2Advisor({
  name,
  initials,
  photoUrl,
  roleLabel,
  experience,
  onNext,
  onBack,
}: {
  name: string;
  initials: string;
  photoUrl: string | null;
  roleLabel: string;
  experience: string;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <ScreenShell screen={2} footer={<NavButtons onNext={onNext} onBack={onBack} />}>
      <div className="flex flex-col items-center text-center">
        <Avatar photoUrl={photoUrl} initials={initials} />
        <h2 className="mt-5 text-2xl font-semibold text-neutral-900">{name}</h2>
        <p className="mt-1 text-[15px] text-[var(--color-accent)]">{roleLabel}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">{experience}</p>
      </div>
    </ScreenShell>
  );
}
