const letterPosition = str => {
  let finalObj = {};
  if (str.length < 1) {
    return finalObj;
  }
  for (let i = 0; i < str.length; i++) {
    if (finalObj[str[i]]) {
      finalObj[str[i]].push(i);
    } else {
      finalObj[str[i]] = [i];
    }
  }
  return finalObj;
};

module.exports = letterPosition;

// let result = letterPosition('hello');
// assertArraysEqual(result.h, [0]);
// assertArraysEqual(result.l, [2, 3])
