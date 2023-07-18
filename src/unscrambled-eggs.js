function unscrambleEggs(stringWithEggs) {
  if (typeof stringWithEggs != 'string') {
    throw new Error('Missing or wrong Input');
  }
  if (stringWithEggs === '') {
    return '';
  } else {
    return stringWithEggs.replace(/egg/g, '');
  }
}

module.exports = unscrambleEggs;
