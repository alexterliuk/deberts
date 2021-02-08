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

const transformStringTypes = {
  capWords: capitalizeEachWord,
  capFirst: capitalizeFirstLetter,
  capAll: capitalizeAllLetters,
  lowAll: toLowerCaseAllLetters,
};
export type TransformStringTypes = keyof typeof transformStringTypes;

export default function transformString(s: string, type: TransformStringTypes) {
  return !s ? s : transformStringTypes[type](s);
}
