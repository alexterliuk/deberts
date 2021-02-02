import React from 'react';
// import * as D from '../deberts';
import { AllowedPlayersQty } from '../deberts';
import Scoreboard from './Scoreboard';
import CardsTable from './CardsTable';
import { players } from '../deberts/players';

// TODO: this will be main component where users play
const DebertsGameArea = ({ playersQty, gameToken }: DebertsGameAreaProps) => {
  return (
    <>
      <Scoreboard players={players} />
      <div>
        Players quantity is {playersQty}. Game token is {gameToken}
      </div>
      <CardsTable />
    </>
  );
};

export default DebertsGameArea;

export interface DebertsGameAreaProps {
  playersQty: AllowedPlayersQty;
  gameToken: string;
}
