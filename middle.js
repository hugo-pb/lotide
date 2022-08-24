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

const middle = (arr) => {
  let newarr = [];
  let  mid = (arr.length - 1) / 2;
  if (Number.isInteger(mid)) {
    newarr.push(arr[mid]);
    return newarr;
  } else {
    mid = Math.floor(mid);
    newarr.push(arr[mid] , arr[mid + 1]);
    return newarr;
  }
};
