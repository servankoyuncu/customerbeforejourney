import { useEffect, useState } from 'react';
import { LeadForm } from '../components/LeadForm';
import { LANDING_CONTENT, type Lang } from './landingContent';
import { SERVICE_ICONS } from './serviceIcons';
import davidFrenkelPhoto from '../assets/david-frenkel.png';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="mt-1 flex-none text-[var(--color-accent)]">
      <polyline points="20 6 9 17 4 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="text-[var(--color-accent)]/50">
      <path
        d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"
        fill="currentColor"
      />
    </svg>
  );
}

export function LandingPage() {
  const [lang, setLang] = useState<Lang>('en');
  const t = LANDING_CONTENT[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="bg-white text-slate-800">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
          <button
            type="button"
            onClick={() => scrollTo('hero')}
            className="text-[15px] font-bold tracking-tight text-[var(--color-accent)]"
          >
            Frenkel <span className="font-medium text-slate-500">Consulting</span>
          </button>
          <nav className="hidden items-center gap-7 sm:flex">
            <button type="button" onClick={() => scrollTo('services')} className="text-sm font-medium text-slate-500 hover:text-[var(--color-accent)]">
              {t.navServices}
            </button>
            <button type="button" onClick={() => scrollTo('about')} className="text-sm font-medium text-slate-500 hover:text-[var(--color-accent)]">
              {t.navAbout}
            </button>
            <button type="button" onClick={() => scrollTo('faq')} className="text-sm font-medium text-slate-500 hover:text-[var(--color-accent)]">
              {t.navFaq}
            </button>
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex gap-1 rounded-full bg-slate-100 p-1 text-xs font-medium">
              {(['de', 'en'] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
                    lang === l ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollTo('book')}
              className="hidden rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-px sm:inline-block"
            >
              {t.ctaLabel}
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="bg-gradient-to-b from-slate-50 to-white px-6 pb-16 pt-28 sm:pt-36">
        <div className="mx-auto grid max-w-5xl items-center gap-12 sm:grid-cols-[1.1fr_0.9fr] sm:gap-16">
          <div>
            <div className="mb-5 inline-block rounded-full bg-[var(--color-accent)]/10 px-4 py-1.5 text-[13px] font-semibold text-[var(--color-accent)]">
              {t.eyebrow}
            </div>
            <h1 className="text-[2.2rem] font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl">
              {t.headlineLead} <span className="text-[var(--color-accent)]">{t.headlineEmphasis}</span>
            </h1>
            <p className="mt-5 max-w-xl text-[1.05rem] text-slate-500">{t.subheadline}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo('book')}
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:-translate-y-px hover:shadow-lg hover:shadow-[var(--color-accent)]/30"
              >
                {t.ctaLabel}
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <polyline points="12 5 19 12 12 19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollTo('how')}
                className="rounded-xl border-2 border-slate-200 px-7 py-3.5 text-[15px] font-semibold text-slate-700 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {t.secondaryCtaLabel}
              </button>
            </div>
            <p className="mt-5 text-[13px] text-slate-500">{t.heroMicro}</p>
          </div>
          <div className="relative order-first flex justify-center sm:order-none">
            <div className="pointer-events-none absolute inset-x-[-4%] top-[8%] bottom-0 rounded-full bg-[radial-gradient(ellipse_at_50%_60%,rgba(15,118,110,0.16)_0%,rgba(45,212,191,0.08)_45%,transparent_70%)]" />
            <img
              src={davidFrenkelPhoto}
              alt="David Frenkel, independent financial planner for expats in Switzerland"
              className="relative w-full max-w-[300px] drop-shadow-[0_24px_48px_rgba(15,23,42,0.14)] sm:max-w-[380px]"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200 px-6 py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 text-center sm:grid-cols-3">
          {t.stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-[var(--color-accent)] sm:text-4xl">{s.value}</p>
              <p className="mt-1.5 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pain */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold leading-snug text-slate-900 sm:text-3xl">{t.painTitle}</h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-slate-500">{t.painBody}</p>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <h2 className="text-[1.85rem] font-extrabold text-slate-900 sm:text-3xl">{t.howTitle}</h2>
            <p className="mt-3 text-[1.05rem] text-slate-500">{t.howSubtitle}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {t.howSteps.map((step, i) => (
              <div key={step.title} className="rounded-xl border border-slate-200 bg-white p-8">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent)] text-[17px] font-extrabold text-white">
                  {i + 1}
                </div>
                <h3 className="text-[1.1rem] font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <h2 className="text-[1.85rem] font-extrabold text-slate-900 sm:text-3xl">{t.servicesTitle}</h2>
            <p className="mt-3 text-[1.05rem] text-slate-500">{t.servicesSubtitle}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.map((service, i) => (
              <div
                key={service.title}
                className="rounded-xl border border-slate-200 p-7 transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:shadow-lg hover:shadow-[var(--color-accent)]/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[10px] bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <svg width="26" height="26" viewBox="0 0 24 24">
                    {SERVICE_ICONS[i]}
                  </svg>
                </div>
                <h3 className="text-[1.05rem] font-bold text-slate-900">{service.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Credentials */}
      <section id="about" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-14 sm:grid-cols-[0.85fr_1.15fr]">
          <div className="relative flex justify-center">
            <div className="pointer-events-none absolute inset-x-0 top-[10%] bottom-0 rounded-full bg-[radial-gradient(ellipse_at_50%_65%,rgba(15,118,110,0.14)_0%,transparent_70%)]" />
            <img
              src={davidFrenkelPhoto}
              alt="David Frenkel"
              className="relative w-full max-w-[260px] drop-shadow-[0_20px_40px_rgba(15,23,42,0.12)] sm:max-w-[320px]"
            />
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">{t.credentialsTitle}</h2>
            <p className="mt-1.5 font-semibold text-[var(--color-accent)]">{t.credentialsSubtitle}</p>
            <ul className="mt-6 space-y-3">
              {t.credentialsPoints.map((point) => (
                <li key={point} className="flex items-start justify-center gap-3 text-[15px] leading-relaxed text-slate-700 sm:justify-start">
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-14 max-w-xl text-center">
            <h2 className="text-[1.85rem] font-extrabold text-slate-900 sm:text-3xl">{t.testimonialsTitle}</h2>
            <p className="mt-3 text-[1.05rem] text-slate-500">{t.testimonialsSubtitle}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {t.testimonials.map((tm) => (
              <div key={tm.name} className="rounded-xl border border-slate-200 p-8">
                <div className="mb-4"><QuoteIcon /></div>
                <p className="text-[15px] leading-relaxed text-slate-700">&ldquo;{tm.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-bold text-white">
                    {tm.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{tm.name}</p>
                    <p className="text-xs text-slate-500">{tm.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <div className="mb-14 text-center">
            <h2 className="text-[1.85rem] font-extrabold text-slate-900 sm:text-3xl">{t.faqTitle}</h2>
            <p className="mt-3 text-[1.05rem] text-slate-500">{t.faqSubtitle}</p>
          </div>
          <div className="space-y-3">
            {t.faq.map((item) => (
              <details key={item.q} className="group rounded-xl border border-slate-200 bg-white px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[1.02rem] font-semibold text-slate-900">
                  {item.q}
                  <span className="flex-none text-xl font-normal text-[var(--color-accent)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3.5 text-[15px] leading-relaxed text-slate-500">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-3xl bg-gradient-to-br from-[var(--color-accent)] to-[color-mix(in_srgb,var(--color-accent)_70%,black)] px-8 py-14 text-center text-white sm:px-14">
            <h2 className="text-[1.9rem] font-extrabold sm:text-3xl">{t.bookingTitle}</h2>
            <p className="mx-auto mt-3 max-w-md text-[1.05rem] opacity-90">{t.bookingSubtitle}</p>
          </div>
          <div className="-mt-8 rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 sm:p-8">
            <LeadForm t={t} />
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>{t.footerCopyright}</p>
          <ul className="flex gap-6">
            <li>{t.footerImpressum}</li>
            <li>{t.footerPrivacy}</li>
            <li>
              <a href="mailto:david@frenkelconsulting.com" className="hover:text-[var(--color-accent)]">
                {t.footerContact}
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
