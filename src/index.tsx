import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { LangProvider } from './features/LangContext';
import './index.css';
import GlobalStyles from './GlobalStyles';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <LangProvider>
      <App />
    </LangProvider>
  </Provider>,
  document.getElementById('root')
);
