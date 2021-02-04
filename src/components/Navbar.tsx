import React from 'react';
import { NavLink } from 'react-router-dom';
import SwitchLanguage from './SwitchLanguage';

export const Navbar = () => (
  <nav>
    <div className="nav-wrapper cyan darken-1 px1">
      <NavLink to="/" className="brand-logo">
        Redux + TypeScript
      </NavLink>
      <SwitchLanguage />
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/game">Deberts</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
