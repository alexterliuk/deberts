import trf from '../transform-string';

describe(`transformString`, () => {
  it(`returns empty string if got empty string`, () => {
    const res = trf('', 'capWords');
    expect(res).toBe('');
  });

  it(`[capWords]: capitalizes each word`, () => {
    const res = trf('big car', 'capWords');
    expect(res).toBe('Big Car');
  });

  it(`[capFirst]: capitalizes first letter`, () => {
    const res = trf('great show', 'capFirst');
    expect(res).toBe('Great show');
  });

  it(`[capFirstOnly]: capitalizes first letter, transforms all other to lower case`, () => {
    const res = trf('lonG rOAd', 'capFirstOnly');
    expect(res).toBe('Long road');
  });

  it(`[capAll]: capitalizes all letters`, () => {
    const res = trf('winter has come', 'capAll');
    expect(res).toBe('WINTER HAS COME');
  });

  it(`[lowAll]: transforms all letters to lower case`, () => {
    const res = trf('strAnGE timeS', 'lowAll');
    expect(res).toBe('strange times');
  });
});
