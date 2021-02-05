import UA from './UA.json';
import RU from './RU.json';
import EN from './EN.json';

const translations = {
  UA,
  RU,
  EN,
};

export type Language = 'UA' | 'RU' | 'EN';
export const languages: Language[] = ['UA', 'RU', 'EN'];
export const firstLanguage = 'UA';
export type TranslationKey = keyof typeof translations[typeof firstLanguage];

export default translations;
