import { createGlobalStyle } from 'styled-components';
import {
  baseColor,
  spacing,
  spacingRect,
  mainBtnStyle,
  switchLangBtnStyle,
} from './globalStylesSets';

const joinStyles = (styles: string[][]) =>
  styles.map(s => s.join(':')).join(';');

const GlobalStyles = createGlobalStyle`
  :root {
    ${joinStyles(baseColor)};
    ${joinStyles(spacing)};
    ${joinStyles(spacingRect)};
    ${joinStyles(mainBtnStyle)};
    ${joinStyles(switchLangBtnStyle)};
  }
`;

export default GlobalStyles;
