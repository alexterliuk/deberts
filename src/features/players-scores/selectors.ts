import { PlayerScore } from './types';

export const getPlayersScores = (state: { playersScores: PlayerScore[] }) =>
  state.playersScores;
