import { useState, type FormEvent } from 'react';
import { supabase } from '../lib/supabase';
import { useLandingTracking } from '../context/LandingTrackingContext';
import type { LandingContent } from '../pages/landingContent';

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

interface LeadMagnetFormProps {
  t: LandingContent;
  onOpenChecklist: () => void;
}

export function LeadMagnetForm({ t, onOpenChecklist }: LeadMagnetFormProps) {
  const { track } = useLandingTracking();
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done' | 'error'>('idle');

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    track('lead_magnet_submit');

    const trimmed = email.trim();
    if (!trimmed || !EMAIL_PATTERN.test(trimmed)) {
      setError(t.form.errors.invalidEmail);
      track('lead_magnet_error', { reason: 'invalid_email' });
      return;
    }

    setError(null);
    setStatus('submitting');

    try {
      const { error: rpcError } = await supabase.rpc('submit_lead_magnet', { p_email: trimmed });
      if (rpcError) {
        setStatus('error');
        track('lead_magnet_error', { reason: 'rpc', code: rpcError.code });
        return;
      }
      setStatus('done');
      track('lead_magnet_success');
    } catch {
      setStatus('error');
      track('lead_magnet_error', { reason: 'exception' });
    }
  }

  if (status === 'done') {
    return (
      <div className="text-center">
        <p className="text-lg font-semibold text-slate-900">{t.leadMagnetSuccessTitle}</p>
        <p className="mt-2 text-[15px] leading-relaxed text-slate-500">{t.leadMagnetSuccessBody}</p>
        <button
          type="button"
          onClick={() => {
            track('lead_magnet_open_checklist');
            onOpenChecklist();
          }}
          className="mt-5 inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-8 py-3 text-[15px] font-semibold text-white transition-transform hover:-translate-y-px active:opacity-80"
        >
          {t.leadMagnetSuccessCta}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-md text-left">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            placeholder={t.leadMagnetInputLabel}
            className={`w-full rounded-xl border px-4 py-3 text-[15px] outline-none focus:border-[var(--color-accent)] ${
              error ? 'border-red-400' : 'border-neutral-200'
            }`}
          />
          {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-[15px] font-semibold text-white transition-transform hover:-translate-y-px active:opacity-80 disabled:opacity-50"
        >
          {status === 'submitting' ? '…' : t.leadMagnetCta}
        </button>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-slate-400">{t.leadMagnetPrivacy}</p>
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-600">{t.form.error}</p>
      )}
    </form>
  );
}
