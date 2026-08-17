import { Link } from 'react-router-dom';
import { IMPRESSUM_CONTENT } from './legalContent';
import { useLang } from '../hooks/useLang';

export function ImpressumPage() {
  const [lang, setLang] = useLang();
  const t = IMPRESSUM_CONTENT[lang];

  return (
    <div className="min-h-svh bg-white px-6 py-12 text-slate-800">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 flex items-center justify-between">
          <Link to="/" className="text-sm font-medium text-[var(--color-accent)] hover:underline">
            ← {t.back}
          </Link>
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
        </div>

        <h1 className="text-2xl font-extrabold text-slate-900">{t.title}</h1>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">{t.providerHeading}</h2>
          <p className="mt-2 whitespace-pre-line text-[15px] leading-relaxed text-slate-700">
            {t.providerDetails}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">{t.contactHeading}</h2>
          <p className="mt-2 whitespace-pre-line text-[15px] leading-relaxed text-slate-700">
            {t.contactDetails}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">{t.registerHeading}</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{t.registerDetails}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">{t.intermediaryHeading}</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-slate-500">{t.intermediaryPlaceholder}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">{t.liabilityHeading}</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{t.liabilityBody}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">{t.copyrightHeading}</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{t.copyrightBody}</p>
        </section>
      </div>
    </div>
  );
}
