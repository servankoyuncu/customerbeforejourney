import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react';
import { supabase } from '../lib/supabase';

const SESSION_KEY = 'landing_session_token';

function getOrCreateSessionToken(): string {
  let token = window.localStorage.getItem(SESSION_KEY);
  if (!token) {
    token = crypto.randomUUID();
    window.localStorage.setItem(SESSION_KEY, token);
  }
  return token;
}

export interface LandingTrackingContextValue {
  track: (eventType: string, payload?: Record<string, unknown>) => void;
}

const LandingTrackingContext = createContext<LandingTrackingContextValue | null>(null);

export function LandingTrackingProvider({
  children,
  language,
}: {
  children: ReactNode;
  language: string;
}) {
  const sessionToken = useMemo(() => getOrCreateSessionToken(), []);

  useEffect(() => {
    // Initialisiert die Session beim ersten Laden und aktualisiert die Sprache,
    // falls der Nutzer sie wechselt.
    supabase
      .rpc('init_landing_session', {
        p_session_token: sessionToken,
        p_referrer: document.referrer || '',
        p_language: language,
      })
      .then(({ error }) => {
        if (error) console.error('init_landing_session failed', error);
      });
  }, [sessionToken, language]);

  const value = useMemo<LandingTrackingContextValue>(
    () => ({
      track: (eventType: string, payload?: Record<string, unknown>) => {
        supabase
          .rpc('track_landing_event', {
            p_session_token: sessionToken,
            p_event_type: eventType,
            p_payload: payload ?? {},
          })
          .then(({ error }) => {
            if (error) console.error('track_landing_event failed', error);
          });
      },
    }),
    [sessionToken],
  );

  return <LandingTrackingContext.Provider value={value}>{children}</LandingTrackingContext.Provider>;
}

export function useLandingTracking(): LandingTrackingContextValue {
  const ctx = useContext(LandingTrackingContext);
  if (!ctx) {
    throw new Error('useLandingTracking muss innerhalb von LandingTrackingProvider verwendet werden');
  }
  return ctx;
}
