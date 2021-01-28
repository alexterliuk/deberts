import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { selectors } from '../features/players-scores';
import { PlayerScore as IPlayerScore } from '../features/players-scores/types';

const Container = styled.div`
  display: inline-block;
  margin: 0 0.4em;
`;

const Name = styled.span`
  font-size: 1.667em;
  margin-right: 0.4em;
  line-height: 1.5;
`;

const Score = styled.span`
  font-size: 1.667em;
  line-height: 1.5;
`;

const PlayerScore = ({
  name,
  indexInScoreboard = -1,
}: Omit<IPlayerScore, 'score'>) => {
  // omit score prop, as we take score from redux
  const playersScores = useSelector(selectors.getPlayersScores);
  const player = playersScores[indexInScoreboard];
  if (!player || player.name !== name) return null;

  return (
    <Container>
      <Name>{name}:</Name>
      <Score>{player.score}</Score>
    </Container>
  );
};

export default PlayerScore;
