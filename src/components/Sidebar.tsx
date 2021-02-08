import React, { useState, KeyboardEvent, MouseEvent } from 'react';
import styled from 'styled-components/macro';
import { Icon, Drawer, Button } from '@material-ui/core';
import { NavLinkData } from '../data';

const Container = styled.div`
  display: inline-block;
`;

const Btn = styled(Button)`
  && {
    color: white;
  }
`;

const ListWrapper = styled.div`
  width: 250px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  font-size: 1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  letter-spacing: 0.00938em;
`;

const Sidebar = ({
  navLinks,
  linksData,
}: {
  navLinks: Array<() => JSX.Element>;
  linksData: Array<NavLinkData>;
}) => {
  const [opened, setOpened] = useState(false);

  const showDrawer = (show: boolean) => (e: KeyboardEvent | MouseEvent) => {
    if (
      e.type === 'keydown' &&
      ((e as KeyboardEvent).key === 'Tab' ||
        (e as KeyboardEvent).key === 'Shift')
    )
      return;

    setOpened(show);
  };

  return (
    <Container className="hide-on-large-only">
      <Btn onClick={showDrawer(true)}>
        <Icon>menu</Icon>
      </Btn>
      <Drawer anchor="left" open={opened} onClose={showDrawer(false)}>
        <ListWrapper
          role="presentation"
          onClick={showDrawer(false)}
          onKeyDown={showDrawer(false)}
        >
          <List>
            {navLinks.map((SBLink, i) => (
              <ListItem key={linksData[i].translationKey}>
                <SBLink />
              </ListItem>
            ))}
          </List>
        </ListWrapper>
      </Drawer>
    </Container>
  );
};

export default Sidebar;
