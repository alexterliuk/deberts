import React from 'react';
import getSection from '../components/pre-composed/get-section';
import StartNewGame from '../components/StartNewGame';

const Section = getSection();

export const Game = () => {
  return (
    <>
      <h1>Deberts Game</h1>
      <Section>
        <StartNewGame />
      </Section>
    </>
  );
};
