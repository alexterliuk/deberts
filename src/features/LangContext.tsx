import React, { createContext, ReactNode, useState } from 'react';
import translations, { Language, firstLanguage } from '../translations';

// TODO: this might crash if user disabled localStorage in browser
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
  translations: typeof translations[typeof firstLanguage];
}>({
  lang: firstLanguage,
  changeLang: () => {},
  translations: translations[firstLanguage], // eslint-disable-line
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const storedLang = langStorage.get();
  const [lang, setLang] = useState<Language>(storedLang || firstLanguage);

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
