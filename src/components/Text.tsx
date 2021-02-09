import React, { useContext } from 'react';
import LangContext from '../features/LangContext';
import { TranslationKey } from '../translations';
import transformString, {
  transformerTypes,
  TransformerType,
} from './utils/transform-string';

const Text = ({ translationKey, transformWhenLang, ...opts }: TextProps) => {
  const { lang, translations } = useContext(LangContext);
  const translated = translations[translationKey];

  // only one transformation is performed (of first found type if any)
  const caseT =
    transformWhenLang?.[lang] || transformerTypes.find(t => opts[t]);

  return <span>{caseT ? transformString(translated, caseT) : translated}</span>;
};

export interface TextProps extends Partial<TransformerType> {
  translationKey: TranslationKey;
  transformWhenLang?: { [LANG: string]: keyof TransformerType };
}

export default Text;
