import { useState } from 'react';
import { LeadForm } from '../components/LeadForm';
import { LANDING_CONTENT, type Lang } from './landingContent';
import davidFrenkelPhoto from '../assets/david-frenkel.png';

function scrollToBooking() {
  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
}

export function LandingPage() {
  const [lang, setLang] = useState<Lang>('en');
  const t = LANDING_CONTENT[lang];

  return (
    <div className="bg-white text-neutral-900">
      <header className="flex items-center justify-between px-6 py-4">
        <span className="text-sm font-semibold tracking-tight text-neutral-900">Frenkel Consulting</span>
        <div className="flex gap-1 rounded-full bg-neutral-100 p-1 text-xs font-medium">
          {(['de', 'en'] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
                lang === l ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-400'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pb-12 pt-6 text-center sm:pt-12">
        <p className="text-sm font-medium text-[var(--color-accent)]">{t.eyebrow}</p>
        <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
          {t.headline}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-neutral-500 sm:text-lg">
          {t.subheadline}
        </p>
        <button
          type="button"
          onClick={scrollToBooking}
          className="mt-8 rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-[15px] font-semibold text-white active:opacity-80"
        >
          {t.ctaLabel}
        </button>
      </section>

      {/* Pain point */}
      <section className="mx-auto max-w-2xl px-6 py-12">
        <h2 className="text-xl font-semibold text-neutral-900 sm:text-2xl">{t.painTitle}</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">{t.painBody}</p>
      </section>

      {/* Stats */}
      <section className="border-y border-neutral-100 bg-neutral-50 px-6 py-10">
        <div className="mx-auto grid max-w-2xl grid-cols-3 gap-4 text-center">
          {t.stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-semibold text-[var(--color-accent)] sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-neutral-500 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section className="mx-auto max-w-2xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-10">
          <img
            src={davidFrenkelPhoto}
            alt="David Frenkel"
            className="h-64 w-auto flex-none object-contain"
          />
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 sm:text-2xl">{t.credentialsTitle}</h2>
            <ul className="mt-5 space-y-3">
              {t.credentialsPoints.map((point) => (
                <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-neutral-700">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-accent)]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-2xl px-6 py-12">
        <h2 className="text-xl font-semibold text-neutral-900 sm:text-2xl">{t.servicesTitle}</h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {t.services.map((service) => (
            <div
              key={service}
              className="rounded-xl border border-neutral-200 px-3 py-3 text-center text-[13px] text-neutral-700"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-neutral-50 px-6 py-12">
        <h2 className="mx-auto max-w-2xl text-xl font-semibold text-neutral-900 sm:text-2xl">
          {t.testimonialsTitle}
        </h2>
        <div className="mx-auto mt-5 grid max-w-2xl gap-4 sm:grid-cols-3">
          {t.testimonials.map((tm) => (
            <div key={tm.name} className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-[14px] leading-relaxed text-neutral-700">"{tm.quote}"</p>
              <p className="mt-3 text-xs font-medium text-neutral-900">{tm.name}</p>
              <p className="text-xs text-neutral-400">{tm.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="mx-auto max-w-2xl px-6 py-12 text-center">
        <h2 className="text-xl font-semibold text-neutral-900 sm:text-2xl">{t.bookingTitle}</h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-neutral-500">
          {t.bookingSubtitle}
        </p>
        <div className="mt-6">
          <LeadForm t={t} />
        </div>
      </section>

      <footer className="border-t border-neutral-100 px-6 py-8 text-center">
        <p className="text-xs text-neutral-400">{t.footerNote}</p>
        <p className="mt-2 text-xs text-neutral-400">
          david@frenkelconsulting.com · +41 76 501 51 02
        </p>
      </footer>
    </div>
  );
}
