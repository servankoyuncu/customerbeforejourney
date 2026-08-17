import { Link } from 'react-router-dom';
import { PRIVACY_CONTENT } from './legalContent';
import { useLang } from '../hooks/useLang';

export function PrivacyPage() {
  const [lang, setLang] = useLang();
  const t = PRIVACY_CONTENT[lang];

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
        <p className="mt-4 text-[15px] leading-relaxed text-slate-500">{t.intro}</p>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">{t.collectHeading}</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{t.collectBody}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">{t.purposeHeading}</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{t.purposeBody}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">{t.sharingHeading}</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{t.sharingBody}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">{t.storageHeading}</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{t.storageBody}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">{t.rightsHeading}</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{t.rightsBody}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-500">{t.contactHeading}</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{t.contactBody}</p>
        </section>
      </div>
    </div>
  );
}
