const unscrambleEggs = require('./unscrambled-eggs');

describe('Story 1', () => {
  it('UAT1.1: User can pass in no input, it should throw an exception', () => {
    expect(() => unscrambleEggs()).toThrow();
  });
  it('UAT1.2: User can pass in empty string, it should return empty string', () => {
    expect(unscrambleEggs('')).toBe('');
  });
  it('UAT1.3: User can pass in number, it should throw an exception', () => {
    expect(() => unscrambleEggs(9)).toThrow();
  });
});

describe('Story 2', () => {
  it('UAT2.1: User can pass in "legg", it should return a "l"', () => {
    expect(unscrambleEggs('legg')).toBe('l');
  });
});
