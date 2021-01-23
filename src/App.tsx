import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Game } from './pages/Game';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/game" component={Game} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
