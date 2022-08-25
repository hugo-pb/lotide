const eqArrays = (array1, array2) => {
  // avoid having to loop if the arrays are not the same length
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`😎 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😭 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const map = (arr, callback) => {
  const result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
};
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
