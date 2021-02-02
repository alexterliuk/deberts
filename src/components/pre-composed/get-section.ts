import styled from 'styled-components/macro';

const baseStyles = `
  display: flex;
`;

// 64px - is height of <nav> (header)
const defaultStyles: { height: string } = {
  height: 'calc(100vh - 64px)',
};

const getSection = (height: string | number = defaultStyles.height) =>
  styled.div`
    ${baseStyles}
    height: ${typeof height === 'number' ? `${height}px` : height};
  `;

export default getSection;
