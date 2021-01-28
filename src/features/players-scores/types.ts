import { UPDATE_PLAYERS_SCORES } from './actionTypes';
import { Player } from '../../data/players';

export interface UpdatePlayersScoresAction {
  type: typeof UPDATE_PLAYERS_SCORES;
  playersScores: PlayerScore[];
}

export type PlayerScore = Pick<Player, 'name' | 'score'> & {
  indexInScoreboard?: number;
};
