const capitalizeEachWord = (s: string) =>
  s
    .split(' ')
    .map(w => (!w ? w : `${w[0].toUpperCase()}${w.slice(1)}`))
    .join(' ');

const capitalizeFirstLetter = (s: string) =>
  `${s[0].toUpperCase()}${s.slice(1)}`;

const changeAllCase = (s: string, to: 'upp' | 'low') =>
  s
    .split('')
    .map(c => c[to === 'upp' ? 'toUpperCase' : 'toLowerCase']())
    .join('');

const capitalizeAllLetters = (s: string) => changeAllCase(s, 'upp');
const toLowerCaseAllLetters = (s: string) => changeAllCase(s, 'low');

const transformers = {
  capWords: capitalizeEachWord,
  capFirst: capitalizeFirstLetter,
  capFirstOnly: (s: string) => capitalizeFirstLetter(toLowerCaseAllLetters(s)),
  capAll: capitalizeAllLetters,
  lowAll: toLowerCaseAllLetters,
};
export interface TransformerType {
  capWords: boolean;
  capFirst: boolean;
  capFirstOnly: boolean;
  capAll: boolean;
  lowAll: boolean;
}
export const transformerTypes: Array<keyof TransformerType> = [
  'capWords',
  'capFirst',
  'capFirstOnly',
  'capAll',
  'lowAll',
];

const transformString = (s: string, type: keyof TransformerType) => {
  if (!s || typeof transformers[type] !== 'function') {
    return s;
  }
  return transformers[type](s);
};

export default transformString;
