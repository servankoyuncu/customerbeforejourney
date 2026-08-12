import { useEffect } from 'react';

export function ScreenDone() {
  useEffect(() => {
    // Funktioniert zuverlässig nur in installierten PWAs; sonst bleibt dieser Screen sichtbar.
    window.close();
  }, []);

  return (
    <div className="flex h-full min-h-svh flex-col items-center justify-center gap-2 bg-white px-6 text-center">
      <p className="text-lg font-medium text-neutral-900">Alles bereit.</p>
      <p className="text-[15px] text-neutral-500">Sie können dieses Fenster nun schliessen.</p>
    </div>
  );
}
