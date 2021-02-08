import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { GameRules } from './pages/GameRules';
import { Game } from './pages/Game';
import PlayGame from './pages/PlayGame';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/game-rules">
            <GameRules />
          </Route>
          <Route path="/game/:token" exact>
            <PlayGame />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
