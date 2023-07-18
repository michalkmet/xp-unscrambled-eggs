const unscrambleEggs = require('./unscrambled-eggs');

describe('unscrambleEggs', () => {
  it('UAT1.1: User can pass in no input, it should throw an exception', () => {
    expect(() => unscrambleEggs()).toThrow();
  });
});
