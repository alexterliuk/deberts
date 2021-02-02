import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';
import getSection from './pre-composed/get-section';
import getCenteredPanel from './pre-composed/get-centered-panel';
import CloseButton from './composed/CloseButton';

const Section = getSection();

const Panel = getCenteredPanel({
  padding: '30px 0 40px',
  position: 'relative',
});

const Message = styled.span`
  font-size: 1.5rem;
  text-align: center;
`;

const NotifyAndRedirectOnClose = ({
  message,
  redirectTo,
}: NotifyAndRedirectOnCloseProps) => {
  const [goRedirect, setGoRedirect] = useState(false);

  const handleClick = () => {
    setGoRedirect(() => true);
  };

  return goRedirect ? (
    <Redirect to={{ pathname: `${redirectTo || '/'}` }} />
  ) : (
    <Section>
      <Panel className="z-depth-1">
        <CloseButton onClick={handleClick} />
        <Message>{message}</Message>
      </Panel>
    </Section>
  );
};

export default NotifyAndRedirectOnClose;

interface NotifyAndRedirectOnCloseProps {
  message: string;
  redirectTo?: string;
}
