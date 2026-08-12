import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import type { ResolvePrepTokenRow } from '../lib/database.types';

export const TOTAL_SCREENS = 7;
export const ANLIEGEN_QUESTION_KEY = 'wichtigstes_anliegen';

type LoadState =
  | { status: 'loading' }
  | { status: 'error'; reason: 'invalid' | 'expired' | 'unknown' }
  | { status: 'ready'; data: ResolvePrepTokenRow };

interface PrepContextValue {
  state: LoadState;
  reportScreen: (screen: number) => void;
  complete: () => void;
  saveAnswer: (answer: string) => void;
}

const PrepContext = createContext<PrepContextValue | null>(null);

function errorReasonFromRpc(error: { code?: string; message?: string } | null): 'invalid' | 'expired' | 'unknown' {
  if (!error) return 'unknown';
  if (error.message?.includes('expired_token')) return 'expired';
  if (error.message?.includes('invalid_token')) return 'invalid';
  return 'unknown';
}

export function PrepProvider({ token, children }: { token: string; children: ReactNode }) {
  const [state, setState] = useState<LoadState>({ status: 'loading' });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const { data, error } = await supabase.rpc('resolve_prep_token', { p_token: token });
      if (cancelled) return;

      if (error || !data || data.length === 0) {
        setState({ status: 'error', reason: errorReasonFromRpc(error) });
        return;
      }

      setState({ status: 'ready', data: data[0] });
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [token]);

  const value = useMemo<PrepContextValue>(
    () => ({
      state,
      reportScreen: (screen: number) => {
        // .rpc() returns a thenable query builder — the request only fires once
        // it's awaited or .then()'d, so a bare `void supabase.rpc(...)` never sends it.
        supabase.rpc('update_prep_progress', { p_token: token, p_screen: screen }).then(({ error }) => {
          if (error) console.error('update_prep_progress failed', error);
        });
      },
      complete: () => {
        supabase.rpc('complete_prep_session', { p_token: token }).then(({ error }) => {
          if (error) console.error('complete_prep_session failed', error);
        });
      },
      saveAnswer: (answer: string) => {
        supabase
          .rpc('save_prep_response', {
            p_token: token,
            p_question_key: ANLIEGEN_QUESTION_KEY,
            p_answer: answer,
          })
          .then(({ error }) => {
            if (error) console.error('save_prep_response failed', error);
          });
      },
    }),
    [state, token],
  );

  return <PrepContext.Provider value={value}>{children}</PrepContext.Provider>;
}

export function usePrep() {
  const ctx = useContext(PrepContext);
  if (!ctx) throw new Error('usePrep muss innerhalb von PrepProvider verwendet werden');
  return ctx;
}
