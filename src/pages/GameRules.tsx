import React from 'react';
import { useHistory } from 'react-router-dom';
import Text from '../components/Text';

export const GameRules = () => {
  const history = useHistory();

  return (
    <>
      <h1>
        <Text translationKey="GAME_RULES" />
      </h1>
      <p>Here will be the rules of Deberts</p>
      <button type="button" className="btn" onClick={() => history.push('/')}>
        Go back
      </button>
    </>
  );
};
