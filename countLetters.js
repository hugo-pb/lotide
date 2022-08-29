const countLetters = str => {
  let finalObj = {};
  for (const letter of str) {
    if (letter === " ") {
      // nothing happens
    } else {
      if (finalObj[letter]) {
        finalObj[letter] += 1;
      } else {
        finalObj[letter] = 1;
      }
    }
  }
  return finalObj;
};
module.exports = countLetters;
