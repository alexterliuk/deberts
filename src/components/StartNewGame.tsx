import React, { useState, ChangeEvent } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { MainButtonMdNoMedia as StartButton } from './composed/buttons';
import getCenteredPanel from './pre-composed/get-centered-panel';
import Text from './Text';
import makeGameToken from './utils/make-game-token';
import { allowedPlayersQty, AllowedPlayersQty } from '../deberts';

const Panel = getCenteredPanel({
  padding: '30px 0 40px',
});

const Title = styled.span`
  font-size: 1.5rem;
  text-align: center;
`;

const SelectContainer = styled.div`
  margin: 20px auto 30px;
`;

const StartButtonContainer = styled.div`
  align-self: center;
`;

const StartNewGame = () => {
  const [playersQty, setPlayersQty] = useState('');
  const [gameToken, setGameToken] = useState('');

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setPlayersQty(event.target.value as string);
  };

  const handleClick = () => {
    if (allowedPlayersQty.includes(+playersQty as AllowedPlayersQty)) {
      setGameToken(() => makeGameToken(8));
    }
  };

  return gameToken ? (
    <Redirect
      to={{
        pathname: `/game/${gameToken}`,
        search: `?playersQty=${playersQty}`,
      }}
    />
  ) : (
    <Panel className="z-depth-1">
      <Title>
        <Text translationKey="START_NEW_GAME.SEL_PLAYERS_QTY" />
      </Title>
      <SelectContainer>
        <FormControl>
          <Select
            value={playersQty}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            {allowedPlayersQty.map(q => (
              <MenuItem key={q} value={q}>
                {q}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </SelectContainer>
      <StartButtonContainer>
        <StartButton
          variant="contained"
          disabled={!playersQty}
          onClick={handleClick}
        >
          <Text translationKey="START_NEW_GAME.START_GAME" />
        </StartButton>
      </StartButtonContainer>
    </Panel>
  );
};

export default StartNewGame;
