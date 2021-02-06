import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Icon } from '@material-ui/core';
import { linksData, BarLink } from '../data/nav-links';
import Sidebar from './Sidebar';
import SwitchLanguage from './SwitchLanguage';
import colors from './utils/colors';

// sidebar link
const SBLink = styled(NavLink)`
  width: 100%;
  padding: 1em;
  display: flex;
  &.active {
    background-color: ${colors.grey[2]};
  }
`;

const SBLinkText = styled.span`
  padding-left: 1em;
`;

const links = linksData.reduce(
  (acc: { navbar: BarLink; sidebar: BarLink }, curr) => {
    const { to, text, icon, exact } = curr;

    acc.navbar[text] = () => (
      <NavLink exact={exact} to={to} activeClassName="active">
        {text}
      </NavLink>
    );
    acc.sidebar[text] = () => (
      <SBLink exact={exact} to={to} activeClassName="active">
        <Icon>{icon}</Icon>
        <SBLinkText>{text}</SBLinkText>
      </SBLink>
    );

    return acc;
  },
  {
    navbar: {},
    sidebar: {},
  }
);

const Container = styled.div`
  background-color: var(--base-color-dark);
  padding: 0 1rem;
`;

const List = styled.ul`
  margin-right: 1rem;
`;

const Navbar = () => (
  <nav>
    <Container className="nav-wrapper">
      <Sidebar
        navLinks={linksData.map(d => links.sidebar[d.text])}
        linksData={linksData}
      />
      <NavLink to="/" className="brand-logo">
        Deberts
      </NavLink>
      <SwitchLanguage />
      <List className="right hide-on-med-and-down">
        {linksData.map(d => {
          // navbar link
          const NBLink = links.navbar[d.text];
          return (
            <li key={d.text}>
              <NBLink />
            </li>
          );
        })}
      </List>
    </Container>
  </nav>
);

export default Navbar;
