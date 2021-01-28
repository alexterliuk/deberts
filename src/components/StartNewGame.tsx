import React, { useState, ChangeEvent } from 'react';
import styled from 'styled-components/macro';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { MainButtonMdNoMedia as StartButton } from './composed/buttons';

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px 0 40px;
  max-width: 360px;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

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

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setPlayersQty(event.target.value as string);
  };

  return (
    <Panel>
      <Title>Select quantity of players</Title>
      <SelectContainer>
        <FormControl>
          <Select
            value={playersQty}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
          </Select>
        </FormControl>
      </SelectContainer>
      <StartButtonContainer>
        <StartButton variant="contained" disabled={!playersQty}>
          Start game
        </StartButton>
      </StartButtonContainer>
    </Panel>
  );
};

export default StartNewGame;
