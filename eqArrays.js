// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 😭 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  let ans = [];
  arr1.forEach((element, index) => {
    arr2.forEach((e, i) => {
      if (index === i && element === e) {
        ans.push(true);
      }
    });
  });
  if (ans.length === arr1.length) {
    return true;
  } else {
    return false;
  }
};

assertEqual(eqArrays([1, 2, '3'], [1, 2, 3]), true);