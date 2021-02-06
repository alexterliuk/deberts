import React from 'react';
import styled from 'styled-components/macro';
import getSection from '../components/pre-composed/get-section';
import StartNewGame from '../components/StartNewGame';
import { md } from '../components/utils/breakpoints';

const Container = styled.div`
  padding-bottom: 4rem;

  @media (min-width: ${md}) {
    padding-top: 4rem;
  }
`;

const Section = styled(getSection('auto'))`
  margin-top: 2rem;
`;

export const Game = () => {
  return (
    <Container>
      <h4 className="center">New Game</h4>
      <Section>
        <StartNewGame />
      </Section>
    </Container>
  );
};
