import { useState, type FormEvent } from 'react';
import { supabase } from '../lib/supabase';
import type { LandingContent } from '../pages/landingContent';

const GOOGLE_BOOKING_URL = 'https://calendar.app.google/CbniCLM4n93HswHdA';

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const SWISS_POSTAL_CODE_PATTERN = /^[0-9]{4}$/;

function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

type FieldErrors = Partial<Record<'firstName' | 'lastName' | 'phone' | 'email' | 'postalCode', string>>;

export function LeadForm({ t }: { t: LandingContent }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error' | 'done'>('idle');

  function validate(): FieldErrors {
    const errors: FieldErrors = {};
    const e = t.form.errors;
    if (!firstName.trim()) errors.firstName = e.required;
    if (!lastName.trim()) errors.lastName = e.required;
    if (!phone.trim()) errors.phone = e.required;
    else if (!isValidPhone(phone)) errors.phone = e.invalidPhone;
    if (!email.trim()) errors.email = e.required;
    else if (!EMAIL_PATTERN.test(email.trim())) errors.email = e.invalidEmail;
    if (!postalCode.trim()) errors.postalCode = e.required;
    else if (!SWISS_POSTAL_CODE_PATTERN.test(postalCode.trim())) errors.postalCode = e.invalidPostalCode;
    return errors;
  }

  async function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus('submitting');
    const { error } = await supabase.rpc('submit_lead', {
      p_first_name: firstName,
      p_last_name: lastName,
      p_phone: phone,
      p_email: email,
      p_postal_code: postalCode,
    });
    if (error) {
      setStatus('error');
      return;
    }
    setStatus('done');
  }

  if (status === 'done') {
    return (
      <div className="text-center">
        <p className="text-lg font-semibold text-neutral-900">
          {t.form.successTitle.replace('{firstName}', firstName)}
        </p>
        <p className="mt-2 text-[15px] text-neutral-500">{t.form.successBody}</p>
        <a
          href={GOOGLE_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-[15px] font-semibold text-white active:opacity-80"
        >
          {t.form.successCta}
        </a>
      </div>
    );
  }

  const inputClass = (hasError: boolean) =>
    `w-full rounded-xl border px-4 py-3 text-[15px] outline-none focus:border-[var(--color-accent)] ${
      hasError ? 'border-red-400' : 'border-neutral-200'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-sm space-y-3 text-left">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder={t.form.firstName}
            className={inputClass(!!fieldErrors.firstName)}
          />
          {fieldErrors.firstName && <p className="mt-1 text-xs text-red-600">{fieldErrors.firstName}</p>}
        </div>
        <div>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder={t.form.lastName}
            className={inputClass(!!fieldErrors.lastName)}
          />
          {fieldErrors.lastName && <p className="mt-1 text-xs text-red-600">{fieldErrors.lastName}</p>}
        </div>
      </div>
      <div>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={t.form.phone}
          className={inputClass(!!fieldErrors.phone)}
        />
        {fieldErrors.phone && <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>}
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.form.email}
          className={inputClass(!!fieldErrors.email)}
        />
        {fieldErrors.email && <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>}
      </div>
      <div>
        <input
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder={t.form.postalCode}
          inputMode="numeric"
          maxLength={4}
          className={inputClass(!!fieldErrors.postalCode)}
        />
        {fieldErrors.postalCode && <p className="mt-1 text-xs text-red-600">{fieldErrors.postalCode}</p>}
      </div>
      {status === 'error' && <p className="text-sm text-red-600">{t.form.error}</p>}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-full bg-[var(--color-accent)] py-3.5 text-[15px] font-semibold text-white active:opacity-80 disabled:opacity-50"
      >
        {status === 'submitting' ? t.form.submitting : t.form.submit}
      </button>
    </form>
  );
}
