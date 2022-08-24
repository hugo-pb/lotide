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


const letterPosition = (str) => {
  let finalObj = {};
  if(str.length < 1){
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

let result = letterPosition('hello');
assertArraysEqual(result.h, [0]);
assertArraysEqual(result.l, [2, 3])