import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import SwitchLanguage from './SwitchLanguage';

const Container = styled.div`
  background-color: var(--base-color-dark);
  padding: 0 1rem;
`;

const List = styled.ul`
  margin-right: 1rem;
`;

export const Navbar = () => (
  <nav>
    <Container className="nav-wrapper">
      <NavLink to="/" className="brand-logo">
        Redux + TypeScript
      </NavLink>
      <SwitchLanguage />
      <List className="right hide-on-med-and-down">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/game" activeClassName="active">
            Deberts
          </NavLink>
        </li>
      </List>
    </Container>
  </nav>
);
