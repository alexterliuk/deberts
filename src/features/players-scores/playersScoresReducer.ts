import { UPDATE_PLAYERS_SCORES } from './actionTypes';
import { PlayerScore, UpdatePlayersScoresAction } from './types';
import { players } from '../../deberts';

const initialState: PlayerScore[] = players.map((pl) => ({
  name: pl.name,
  score: pl.score,
}));

export default (state = initialState, action: UpdatePlayersScoresAction) =>
  action.type === UPDATE_PLAYERS_SCORES
    ? state.map((ps, i) => ({
        name: ps.name,
        score: action.playersScores[i].score,
      }))
    : state;
