import React from 'react';
import styled from 'styled-components';
import { Icon } from '@material-ui/core';

const StyledButton = styled.div`
  font-weight: 600;
  color: indianred;
  position: absolute;
  right: 3px;
  top: 4px;
  cursor: pointer;
`;

const CloseButton = ({ onClick, styles }: CloseButtonProps) => {
  return (
    <StyledButton role="button" onClick={onClick} style={styles}>
      <Icon>close</Icon>
    </StyledButton>
  );
};

export default CloseButton;

interface CloseButtonProps {
  onClick: () => void;
  styles?: {
    color?: string;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}
