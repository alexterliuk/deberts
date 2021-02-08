import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { Icon } from '@material-ui/core';
import Text from './Text';
import Sidebar from './Sidebar';
import SwitchLanguage from './SwitchLanguage';
import { grey, navLinksData as linksData, BarLink } from '../data';

// sidebar link
const SBLink = styled(NavLink)`
  width: 100%;
  padding: 1em;
  display: flex;
  &.active {
    background-color: ${grey[2]};
  }
`;

const SBLinkTextWrapper = styled.span`
  padding-left: 1em;
`;

const links = linksData.reduce(
  (acc: { navbar: BarLink; sidebar: BarLink }, curr) => {
    const { to, translationKey, icon, exact } = curr;

    acc.navbar[translationKey] = () => (
      <NavLink exact={exact} to={to} activeClassName="active">
        <Text translationKey={translationKey} />
      </NavLink>
    );
    acc.sidebar[translationKey] = () => (
      <SBLink exact={exact} to={to} activeClassName="active">
        <Icon>{icon}</Icon>
        <SBLinkTextWrapper>
          <Text translationKey={translationKey} />
        </SBLinkTextWrapper>
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
        navLinks={linksData.map(d => links.sidebar[d.translationKey])}
        linksData={linksData}
      />
      <NavLink to="/" className="brand-logo">
        <Text translationKey="DEBERTS" />
      </NavLink>
      <SwitchLanguage />
      <List className="right hide-on-med-and-down">
        {linksData.map(d => {
          // navbar link
          const NBLink = links.navbar[d.translationKey];
          return (
            <li key={d.translationKey}>
              <NBLink />
            </li>
          );
        })}
      </List>
    </Container>
  </nav>
);

export default Navbar;
