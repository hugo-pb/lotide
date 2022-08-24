const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 😭 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (str) => {
  let finalObj = {};
  for (const letter of str) {
    if (letter === ' ') {
      // nothing happens
    } else {
      if (finalObj[letter]) {
        finalObj[letter] += 1;
      } else {
        finalObj[letter] = 1;
      }
    }
  } return finalObj;
};
