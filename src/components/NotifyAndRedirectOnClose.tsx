import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';
import getSection from './pre-composed/get-section';
import getCenteredPanel from './pre-composed/get-centered-panel';
import CloseButton from './composed/CloseButton';
import Text, { TextProps } from './Text';

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
  translationKey,
  redirectTo,
  ...textOpts
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
        <Message>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Text translationKey={translationKey} {...textOpts} />
        </Message>
      </Panel>
    </Section>
  );
};

export default NotifyAndRedirectOnClose;

interface NotifyAndRedirectOnCloseProps extends TextProps {
  redirectTo?: string;
}
