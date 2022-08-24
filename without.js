const assertArraysEqual = (arr1, arr2) => {
  const eqArrays = (array1, array2) => {
  // avoid having to loop if the arrays are not the same length
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};
  
  if (eqArrays(arr1, arr2)) {
    console.log(`😎 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😭 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 😭 Assertion Failed: ${actual} !== ${expected}`);
  }
};



// without function
const without = (arr, del) => {
//  const newarr = [];
//  const finallArr = [];
//  arr.forEach((element ) => {
//    del.forEach((e) => {
//     if(element !== e && element !== newarr[0]){
//       newarr.push(element)
//     }
//    });
//  });
//  for( let i = 0; i < newarr.length; i++){
//     if(newarr[i] !== newarr[i - 1]){
//       finallArr.push(newarr[i])
//     }
  
//  }
//  console.log( finallArr)
return arr.filter((element) => !del.includes(element));

}
// array.prototyper.filter // .includes

console.log(without([1, 2, 3], [1])) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);