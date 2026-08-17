import { useState } from 'react';
import type { Lang } from '../pages/landingContent';

const STORAGE_KEY = 'lang';

function getInitialLang(): Lang {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'de' || stored === 'en' ? stored : 'en';
}

export function useLang() {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  function setLang(next: Lang) {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  return [lang, setLang] as const;
}
