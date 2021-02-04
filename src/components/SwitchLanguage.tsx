import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import LangContext, { languages, Language } from '../features/LangContext';

const transitionDuration = 500;

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const ContainerInner = styled.div`
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

const SwitchLanguage = () => {
  const { lang, changeLang } = useContext(LangContext);
  const [currLang, setCurrLang] = useState(lang);
  const [selBtnOpacity, setSelBtnOpacity] = useState(1);
  const [btnsOpacity, setBtnsOpacity] = useState(0);
  const [visibility, setVisibility] = useState<'hidden' | 'initial'>('hidden');

  const toggle = () => {
    setVisibility(() => (visibility === 'hidden' ? 'initial' : 'initial'));
    setSelBtnOpacity(() => (selBtnOpacity ? 0 : 1));
    setBtnsOpacity(() => (btnsOpacity ? 0 : 1));
  };

  const updateLang = (clickedLang: Language) => {
    changeLang(clickedLang);
    setCurrLang(() => clickedLang);
    setSelBtnOpacity(() => (selBtnOpacity ? 0 : 1));
    setBtnsOpacity(() => (btnsOpacity ? 0 : 1));

    setTimeout(() => {
      setVisibility(() => (visibility === 'hidden' ? 'initial' : 'initial'));
    }, transitionDuration);
  };

  return (
    <div className="right">
      <Container>
        <LangBtn
          onClick={() => toggle()}
          className="active"
          style={{ opacity: selBtnOpacity }}
        >
          {currLang}
        </LangBtn>
        <ContainerInner style={{ visibility, opacity: btnsOpacity }}>
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
        </ContainerInner>
      </Container>
    </div>
  );
};

export default SwitchLanguage;
