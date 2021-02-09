import React, { useState, useContext, FocusEvent } from 'react';
import styled from 'styled-components/macro';
import LangContext from '../features/LangContext';
import { languages, Language } from '../translations';

const transitionDuration = 500;

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const SwitchLangButtons = styled.div`
  position: absolute;
  right: 0;
  top: calc(50% - 8px);
  display: inline-flex;
  transition: opacity ${transitionDuration / 1000}s;
`;

const LangBtn = styled.button`
  font-family: Roboto;
  font-size: 13px;
  width: 35px;
  line-height: 0.8;
  padding: 4px 8px;
  border: 1px solid;
  border-color: var(--color-lang-btn);
  border-radius: 4px;
  outline: none;
  color: var(--color-lang-btn);
  background-color: var(--color-lang-btn-bg);
  cursor: pointer;
  transition: opacity ${transitionDuration / 1000}s;

  &.active {
    background-color: var(--color-lang-btn-bg-active);
  }

  &:hover {
    background-color: var(--color-lang-btn-bg-hover);
  }

  @media (max-width: 480px) {
    padding: 3px 6px;
  }
`;

const CurrLangBtn = LangBtn;

const SwitchLanguage = () => {
  const { lang, changeLang } = useContext(LangContext);
  const [currLang, setCurrLang] = useState(lang);
  const [currLangBtnOpacity, setCurrLangBtnOpacity] = useState(1);
  const [buttonsOpacity, setButtonsOpacity] = useState(0);
  const [buttonsVisibility, setButtonsVisibility] = useState<
    'hidden' | 'initial'
  >('hidden');

  const showSwitchLangButtons = (show: boolean) => {
    setCurrLangBtnOpacity(() => (show ? 0 : 1));
    setButtonsOpacity(() => (show ? 1 : 0));
    setTimeout(
      () => {
        setButtonsVisibility(() => (show ? 'initial' : 'hidden'));
      },
      show ? 0 : transitionDuration
    );
  };

  const updateLang = (clickedLang: Language) => {
    changeLang(clickedLang);
    setCurrLang(() => clickedLang);
    showSwitchLangButtons(false);
  };

  const handleBlur = (elCurr: HTMLElement, elRel: EventTarget | null) => {
    if (!buttonsOpacity) return;
    // if clicked outside SwitchLanguage, hide SwitchLangButtons
    if (!elCurr.contains(elRel as Node)) {
      showSwitchLangButtons(false);
    }
  };

  const onBlur = (e: FocusEvent<HTMLElement>) => {
    handleBlur(e.currentTarget, e.relatedTarget);
  };

  return (
    <div className="right">
      <Container onBlur={onBlur}>
        <CurrLangBtn
          onClick={() => showSwitchLangButtons(true)}
          className="active"
          style={{ opacity: currLangBtnOpacity }}
        >
          {currLang}
        </CurrLangBtn>
        <SwitchLangButtons
          style={{ visibility: buttonsVisibility, opacity: buttonsOpacity }}
        >
          {languages
            .filter(l => l !== currLang)
            .concat(currLang)
            .map(lng => (
              <LangBtn
                key={lng}
                onClick={() => updateLang(lng)}
                className={currLang === lng ? 'active' : ''}
              >
                {lng}
              </LangBtn>
            ))}
        </SwitchLangButtons>
      </Container>
    </div>
  );
};

export default SwitchLanguage;
