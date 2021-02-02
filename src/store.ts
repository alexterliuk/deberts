import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { playersScoresReducer } from './features/players-scores';

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  playersScores: playersScoresReducer,
});

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
);

export default store;
