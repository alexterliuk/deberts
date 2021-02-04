import React, { useContext } from 'react';
import LangContext, { TranslationKey } from '../features/LangContext';

const Text = ({ translationKey }: TextProps) => {
  const langContext = useContext(LangContext);
  const translatedText = langContext.translations[translationKey];

  return <span>{translatedText}</span>;
};

interface TextProps {
  translationKey: TranslationKey;
}

export default Text;
