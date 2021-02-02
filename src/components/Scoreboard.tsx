import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { Player } from '../deberts';
import PlayerScore from './PlayerScore';
import { selectors, actionTypes } from '../features/players-scores';

const Panel = styled.div`
  display: inline-block;
  padding: 0.4em 0.6em;
  border: 1px solid lightgrey;
  border-radius: 4px;
`;

// NB: there'll be no button inside Scoreboard, current button is temporary
//     Scoreboard will be rendered by game engine (after each played-out game cycle)

const Scoreboard = ({ players }: { players: Player[] }) => {
  const playersScores = useSelector(selectors.getPlayersScores);
  const dispatch = useDispatch();

  return (
    <>
      <Panel>
        {players.map((p: Player, idx) => (
          <PlayerScore key={p.name} name={p.name} indexInScoreboard={idx} />
        ))}
      </Panel>
      <br />
      <button
        className="btn waves-effect waves-light btn-large grey"
        type="button"
        aria-label="Press"
        onClick={() =>
          dispatch({
            type: actionTypes.UPDATE_PLAYERS_SCORES,
            playersScores: playersScores.map((player, i) => {
              const str = String(Math.trunc(Math.random() * 1000));
              const idx = Math.trunc(Math.random() * 4);
              const val = Number(str.slice(0, idx));
              return { name: player.name, score: val, indexInScoreboard: i };
            }),
          })
        }
      >
        Press Me
      </button>
    </>
  );
};

export default Scoreboard;
