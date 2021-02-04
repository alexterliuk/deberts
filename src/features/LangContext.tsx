import React, { createContext, ReactNode, useState } from 'react';
import translations from '../translations';

export const languages: Language[] = ['UA', 'RU', 'EN'];
export type Language = 'UA' | 'RU' | 'EN';
export type TranslationKey = keyof typeof translations.UA;

const langStorage = {
  get() {
    return window.localStorage.getItem('lang') as Language;
  },
  set(lang: Language) {
    window.localStorage.setItem('lang', lang);
    return lang;
  },
};

const LangContext = createContext<{
  lang: Language;
  changeLang: (newLang: Language) => void;
  translations: typeof translations.UA;
}>({
  lang: 'UA',
  changeLang: () => {},
  translations: translations.UA,
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const storedLang = langStorage.get();
  const [lang, setLang] = useState<Language>(storedLang || 'UA');

  const provider = {
    lang,
    translations: translations[lang],
    changeLang: (newLang: Language) => {
      langStorage.set(newLang);
      setLang(newLang);
    },
  };

  return (
    <LangContext.Provider value={provider}>{children}</LangContext.Provider>
  );
};

export default LangContext;
