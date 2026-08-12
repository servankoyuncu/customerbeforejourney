import { NavButtons } from '../components/NavButtons';
import { ScreenShell } from '../components/ScreenShell';

export function Screen4WhyProtect({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <ScreenShell screen={4} footer={<NavButtons onNext={onNext} onBack={onBack} />}>
      <h2 className="text-2xl font-semibold text-neutral-900">Warum sich Absichern lohnt</h2>
      <p className="mt-4 text-[15px] leading-relaxed text-neutral-500">
        Gewisse Risiken sind besser abgesichert als selbst getragen. Dann entscheidet im Ernstfall
        nicht der Zufall, sondern Ihr Plan.
      </p>
    </ScreenShell>
  );
}
