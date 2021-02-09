import React from 'react';
import styled from 'styled-components/macro';
import getSection from '../components/pre-composed/get-section';
import StartNewGame from '../components/StartNewGame';
import Text from '../components/Text';
import { md } from '../data';

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
      <h4 className="center">
        <Text translationKey="NEW_GAME" />
      </h4>
      <Section>
        <StartNewGame />
      </Section>
    </Container>
  );
};
