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
  it('UAT2.2: User can pass in "teggbegg", it should return a "tb"', () => {
    expect(unscrambleEggs('teggbegg')).toBe('tb');
  });
  it('UAT2.3: User can pass in "seggawegg", it should return a "saw"', () => {
    expect(unscrambleEggs('seggawegg')).toBe('saw');
  });
  it('UAT2.4: User can pass in "leggalegga", it should return a "lala"', () => {
    expect(unscrambleEggs('leggalegga')).toBe('lala');
  });
  it('UAT2.5: User can pass in "heggeleggleggo", it should return a "hello"', () => {
    expect(unscrambleEggs('heggeleggleggo')).toBe('hello');
  });
});

describe('Story 3', () => {
  it('UAT3.1: User can pass in "heggey megganegg", it should return a "hey man"', () => {
    expect(unscrambleEggs('heggey megganegg')).toBe('hey man');
  });
  it('UAT3.2: User can pass in "FeggUNegg KeggATeggA", it should return a "FUN KATA"', () => {
    expect(unscrambleEggs('FeggUNegg KeggATeggA')).toBe('FUN KATA');
  });
});
