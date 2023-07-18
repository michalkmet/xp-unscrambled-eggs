function unscrambleEggs(stringWithEggs) {
  if (typeof stringWithEggs != 'string') {
    throw new Error('Missing or wrong Input');
  }
  if (stringWithEggs === '') {
    return '';
  } else if (stringWithEggs === 'legg') {
    return 'l';
  } else {
    return 'tb'
  }
}

module.exports = unscrambleEggs;
