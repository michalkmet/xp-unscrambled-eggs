function unscrambleEggs(stringWithEggs) {
  if (typeof stringWithEggs != 'string') {
    throw new Error('Missing or wrong Input');
  }

  
  if (stringWithEggs === '') {
    return '';
  } else {
    const regex = /egg/;
    return stringWithEggs.replace(regex, '');
  }
}

module.exports = unscrambleEggs;
