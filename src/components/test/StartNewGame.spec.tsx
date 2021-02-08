import React from 'react';
import { mount } from 'enzyme';
import StartNewGame from '../StartNewGame';
import { allowedPlayersQty } from '../../deberts/allowed-players-qty';

describe(`StartNewGame`, () => {
  const wrapper = mount(<StartNewGame />);
  const buttons = wrapper.find('button');
  const StartButton = buttons.at(0);

  it(`renders one button which is disabled by default`, () => {
    expect(buttons.length).toBe(1);
    expect(StartButton.hasClass('Mui-disabled')).toBe(true);
  });

  it(`select has options acc. to allowedPlayersQty (they aren't shown until select is clicked))`, () => {
    const inputChildren = wrapper.find('.MuiInput-input').get(0).props.children;
    const optsValues = allowedPlayersQty.map(
      (_, i) => inputChildren[i].props.value
    );
    expect(optsValues).toEqual(allowedPlayersQty);
  });
});
