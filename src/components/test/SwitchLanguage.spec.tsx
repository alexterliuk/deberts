import React from 'react';
import { mount } from 'enzyme';
import SwitchLanguage from '../SwitchLanguage';
import { languages } from '../../translations';

describe(`SwitchLanguage`, () => {
  let wrapper = mount(<SwitchLanguage />);
  let buttons = wrapper.find('button');
  const lastIdx = buttons.length - 1;

  it(`renders N + 1 buttons when given N languages`, () => {
    expect(buttons.length).toBe(languages.length + 1);
  });

  it(`switches language and shows LangBtn with text equal to selected language`, () => {
    // there're minimum 3 languages in the app - UA, RU, EN. SwitchLanguage also adds additional
    // button which is presentational and identical in look to the button of selected language;
    // this additional button is first in buttons, on click it shows/hides block of lang buttons -
    // click on any of them switches language, hides this block and shows back presentational button

    // currLang is e.g. 'UA'
    const currLang = buttons.get(0).props.children;

    expect(buttons.get(lastIdx).props.children).toBe(currLang);
    expect(buttons.get(0).props.className.includes('active')).toBe(true);
    expect(buttons.get(lastIdx).props.className.includes('active')).toBe(true);

    buttons.at(1).simulate('click');

    buttons = wrapper.find('button');
    expect(buttons.get(0).props.children).not.toBe(currLang);
    expect(buttons.get(lastIdx).props.children).not.toBe(currLang);
  });

  it(`toggles: shows LangBtns block / hides curr lang button, and vice versa`, () => {
    wrapper = mount(<SwitchLanguage />);
    buttons = wrapper.find('button');

    const testOpacity = (
      currLangBtnOpacity: number,
      swLangBtnOpacity: number
    ) => {
      const btns = wrapper.find('button');
      const currLangBtnStyle = btns.get(0).props.style;
      const SwitchLangButtonsStyle = wrapper.children().get(0).props.children
        .props.children[1].props.style;

      expect(currLangBtnStyle.opacity).toBe(currLangBtnOpacity);
      expect(SwitchLangButtonsStyle.opacity).toBe(swLangBtnOpacity);
    };

    // CurrLangBtn is shown, SwitchLangButtons are hidden
    testOpacity(1, 0);

    // click on CurrLangBtn
    buttons.at(0).simulate('click');
    // CurrLangBtn is hidden, SwitchLangButtons are shown
    testOpacity(0, 1);

    buttons.at(1).simulate('click');
    // CurrLangBtn is shown, SwitchLangButtons are hidden
    testOpacity(1, 0);

    buttons.at(0).simulate('click');
    // CurrLangBtn is hidden, SwitchLangButtons are shown
    testOpacity(0, 1);
  });
});
