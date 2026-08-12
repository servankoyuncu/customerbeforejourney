import { useState, type CSSProperties } from 'react';
import { PrepProvider, usePrep } from '../context/PrepContext';
import { ScreenLoading } from '../screens/ScreenLoading';
import { ScreenError } from '../screens/ScreenError';
import { Screen1Hook } from '../screens/Screen1Hook';
import { Screen2Advisor } from '../screens/Screen2Advisor';
import { Screen3Human } from '../screens/Screen3Human';
import { Screen4WhyProtect } from '../screens/Screen4WhyProtect';
import { Screen5Agenda } from '../screens/Screen5Agenda';
import { Screen6Question } from '../screens/Screen6Question';
import { Screen7Goodbye } from '../screens/Screen7Goodbye';
import { ScreenDone } from '../screens/ScreenDone';

const DEFAULT_ACCENT = '#0f766e';

export function PrepFlow({ token }: { token: string }) {
  return (
    <PrepProvider token={token}>
      <PrepFlowContent />
    </PrepProvider>
  );
}

function PrepFlowContent() {
  const { state } = usePrep();

  if (state.status === 'loading') return <ScreenLoading />;
  if (state.status === 'error') return <ScreenError reason={state.reason} />;

  const brandStyle = {
    '--color-accent': state.data.advisor_brand_color || DEFAULT_ACCENT,
  } as CSSProperties;

  return (
    <div style={brandStyle} className="relative">
      {state.data.advisor_logo_url && (
        <img
          src={state.data.advisor_logo_url}
          alt=""
          className="absolute left-6 top-[max(env(safe-area-inset-top),1rem)] z-10 h-6 w-auto object-contain"
        />
      )}
      <PrepSequence
        advisorName={state.data.advisor_name}
        advisorInitials={state.data.advisor_initials}
        advisorPhotoUrl={state.data.advisor_photo_url}
        advisorRoleLabel={state.data.advisor_role_label}
        advisorExperience={state.data.advisor_experience}
        advisorBio={state.data.advisor_bio}
        startsAt={state.data.starts_at}
        location={state.data.location}
      />
    </div>
  );
}

function PrepSequence(props: {
  advisorName: string;
  advisorInitials: string;
  advisorPhotoUrl: string | null;
  advisorRoleLabel: string;
  advisorExperience: string;
  advisorBio: string;
  startsAt: string;
  location: string;
}) {
  const { reportScreen, complete, saveAnswer } = usePrep();
  const [screen, setScreen] = useState(1);
  const [done, setDone] = useState(false);
  const [answer, setAnswer] = useState<string | null>(null);

  function goTo(next: number) {
    setScreen(next);
    reportScreen(next);
    if (next === 7) complete();
  }

  function handleFinish() {
    complete();
    setDone(true);
  }

  if (done) return <ScreenDone />;

  switch (screen) {
    case 1:
      return <Screen1Hook onNext={() => goTo(2)} />;
    case 2:
      return (
        <Screen2Advisor
          name={props.advisorName}
          initials={props.advisorInitials}
          photoUrl={props.advisorPhotoUrl}
          roleLabel={props.advisorRoleLabel}
          experience={props.advisorExperience}
          onNext={() => goTo(3)}
          onBack={() => goTo(1)}
        />
      );
    case 3:
      return <Screen3Human bio={props.advisorBio} onNext={() => goTo(4)} onBack={() => goTo(2)} />;
    case 4:
      return <Screen4WhyProtect onNext={() => goTo(5)} onBack={() => goTo(3)} />;
    case 5:
      return <Screen5Agenda onNext={() => goTo(6)} onBack={() => goTo(4)} />;
    case 6:
      return (
        <Screen6Question
          selected={answer}
          onSelect={(option) => {
            setAnswer(option);
            saveAnswer(option);
          }}
          onNext={() => goTo(7)}
          onBack={() => goTo(5)}
        />
      );
    case 7:
      return <Screen7Goodbye startsAt={props.startsAt} location={props.location} onFinish={handleFinish} />;
    default:
      return null;
  }
}
