const unscrambleEggs = require('./unscrambled-eggs');

describe('unscrambleEggs', () => {
  it('UAT1.1: User can pass in no input, it should throw an exception', () => {
    expect(() => unscrambleEggs()).toThrow();
  });
  it('UAT1.2: User can pass in empty string, it should return empty string', () => {
    expect(unscrambleEggs('')).toBe('');
  });
});
