import styled from 'styled-components/macro';

const baseStyles = `
  display: flex;
  margin: 0 auto;
  flex: 1;
  align-self: center;
`;

const defaultStyles: Styles = {
  padding: 0,
  maxWidth: 360,
  borderRadius: 4,
  flexDirection: 'column',
};

const isNum = (v: string | number | undefined) => typeof v === 'number';
const isStr = (v: string | number | undefined) => typeof v === 'string';

const getStyle = (style: string | number | undefined, key: keyof Styles) => {
  if (isNum(style)) return `${style}px`;
  return isStr(style) ? style : `${defaultStyles[key]}px`;
};

const getCenteredPanel = (styles: Styles = defaultStyles) =>
  styled.div`
    ${baseStyles}
    padding: ${getStyle(styles.padding, 'padding')};
    max-width: ${getStyle(styles.maxWidth, 'maxWidth')};
    border-radius: ${getStyle(styles.borderRadius, 'borderRadius')};
    flex-direction: ${styles.flexDirection || defaultStyles.flexDirection};
    position: ${styles.position || ''};
  `;

export default getCenteredPanel;

interface Styles {
  padding?: string | number;
  maxWidth?: string | number;
  borderRadius?: string | number;
  flexDirection?: 'column' | 'row';
  position?: string;
}
