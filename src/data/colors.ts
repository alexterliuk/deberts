// based on
// https://github.com/mui-org/material-ui/tree/b3f94deb4dac0128943a3a8bee19ba52fea4678d/packages/material-ui/src/colors

const grey = {
  0: '#fafafa',
  1: '#f5f5f5',
  2: '#eeeeee',
  3: '#e0e0e0',
  4: '#bdbdbd',
  5: '#9e9e9e',
  6: '#757575',
  7: '#616161',
  8: '#424242',
  9: '#212121',
};

const blueGrey = {
  0: '#eceff1',
  1: '#cfd8dc',
  2: '#b0bec5',
  3: '#90a4ae',
  4: '#78909c',
  5: '#607d8b',
  6: '#546e7a',
  7: '#455a64',
  8: '#37474f',
  9: '#263238',
};

const brown = {
  0: '#efebe9',
  1: '#d7ccc8',
  2: '#bcaaa4',
  3: '#a1887f',
  4: '#8d6e63',
  5: '#795548',
  6: '#6d4c41',
  7: '#5d4037',
  8: '#4e342e',
  9: '#3e2723',
};

const lightBlue = {
  0: '#e1f5fe',
  1: '#b3e5fc',
  2: '#81d4fa',
  3: '#4fc3f7',
  4: '#29b6f6',
  5: '#03a9f4',
  6: '#039be5',
  7: '#0288d1',
  8: '#0277bd',
  9: '#01579b',
};

const red = {
  0: '#ffebee',
  1: '#ffcdd2',
  2: '#ef9a9a',
  3: '#e57373',
  4: '#ef5350',
  5: '#f44336',
  6: '#e53935',
  7: '#d32f2f',
  8: '#c62828',
  9: '#b71c1c',
};

const orange = {
  0: '#fff3e0',
  1: '#ffe0b2',
  2: '#ffcc80',
  3: '#ffb74d',
  4: '#ffa726',
  5: '#ff9800',
  6: '#fb8c00',
  7: '#f57c00',
  8: '#ef6c00',
  9: '#e65100',
};

const colors = {
  grey,
  blueGrey,
  brown,
  lightBlue,
  red,
  orange,
};

export default colors;

export type ColorKey = keyof typeof grey;
export type ColorToneKey = keyof typeof colors;
