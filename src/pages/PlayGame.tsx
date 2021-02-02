import React from 'react';
import { useHistory } from 'react-router-dom';
import convertQueryStringToObject, {
  QueryStringObj,
} from '../components/utils/convert-query-string-to-object';
import NotifyAndRedirectOnClose from '../components/NotifyAndRedirectOnClose';
import DebertsGameArea from '../components/DebertsGameArea';
import { allowedPlayersQty, AllowedPlayersQty } from '../deberts';

// TODO: make component responsible for whether to render memoized Deberts or new Deberts
const PlayGame = () => {
  const history = useHistory();
  const gameToken = history.location.pathname.slice(6); // slice segment after '/game/'
  const queryObj = convertQueryStringToObject(
    history.location.search
  ) as QueryStringObj;
  const { playersQty } = queryObj;
  const validQty = allowedPlayersQty.includes(+playersQty as AllowedPlayersQty);

  return validQty ? (
    <>
      <div>PlayGame page. It will import Deberts wrapper and start game</div>
      <DebertsGameArea
        gameToken={gameToken}
        playersQty={+playersQty as AllowedPlayersQty}
      />
    </>
  ) : (
    <NotifyAndRedirectOnClose
      message="Invalid quantity of players"
      redirectTo="/game"
    />
  );
};

export default PlayGame;
