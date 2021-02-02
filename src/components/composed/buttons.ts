import styled from 'styled-components/macro';
import { Button } from '@material-ui/core';
import breakpoints, {
  getPrevBreakpoint as getPrevSize,
} from '../utils/breakpoints';

const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.25rem',
};

// prettier-ignore
const getMainButton = (
  size: keyof typeof breakpoints,
  fontSize: string,
  withMedia?: boolean
) =>
  styled(Button)`
    && {
      font-size: ${fontSize};
      padding: var(--spacing-rect-${size});
      color: var(--color-btn-main-text);
      background-color: var(--color-btn-main);
      &: hover {
        background-color: var(--color-btn-main-hover);
      }
      ${withMedia
        ? `
        @media (max-width: ${breakpoints.md}) {
          font-size: ${fontSizes[getPrevSize(size) as keyof typeof fontSizes]};
          padding: var(--spacing-rect-${getPrevSize(size)});
        }
        @media (max-width: ${breakpoints.sm}) {
          font-size: ${fontSizes[getPrevSize(size, 2) as keyof typeof fontSizes]};
          padding: var(--spacing-rect-${getPrevSize(size, 2)});
        }
      `
        : ''}
    }
  `;

export const MainButtonXs = getMainButton('xs', '0.75rem', true);
export const MainButtonSm = getMainButton('sm', '0.875rem', true);
export const MainButtonMd = getMainButton('md', '1rem', true);
export const MainButtonLg = getMainButton('lg', '1.25rem', true);

export const MainButtonXsNoMedia = getMainButton('xs', '0.75rem');
export const MainButtonSmNoMedia = getMainButton('sm', '0.875rem');
export const MainButtonMdNoMedia = getMainButton('md', '1rem');
export const MainButtonLgNoMedia = getMainButton('lg', '1.25rem');
