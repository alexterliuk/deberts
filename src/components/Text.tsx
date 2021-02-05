import React, { useContext } from 'react';
import LangContext from '../features/LangContext';
import { TranslationKey } from '../translations';

const Text = ({ translationKey }: TextProps) => {
  const langContext = useContext(LangContext);
  const translatedText = langContext.translations[translationKey];

  return <span>{translatedText}</span>;
};

interface TextProps {
  translationKey: TranslationKey;
}

export default Text;
