import type { ReactNode } from 'react';
import { ProgressDots } from './ProgressDots';

export function ScreenShell({
  screen,
  children,
  footer,
}: {
  screen: number;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="flex h-full min-h-svh flex-col bg-white px-6">
      <ProgressDots current={screen} />
      <div className="flex flex-1 flex-col justify-center">{children}</div>
      {footer && <div className="pt-6">{footer}</div>}
    </div>
  );
}
