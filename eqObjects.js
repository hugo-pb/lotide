const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(` 😭 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (array1, array2) => {
   // avoid having to loop if the arrays are not the same length
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {return false;}
  }
  return true;
};

const eqObjects = (obj1, obj2) => {
let keys1 = Object.keys(obj1);
let keys2 = Object.keys(obj2);
// They have the same number of keys

if(keys1.length !== keys2.length ){
  return false;
}
for (key of Object.keys(obj1)){
if(Array.isArray(obj1[key]) === Array.isArray(obj2[key])){
if (obj1[key].length !== obj2[key].length) return false;

  for (let i = 0; i < obj1[key].length; i++) {
    if (obj1[key][i] !== obj2[key][i]) {return false;}
  }
    
  } else{if(obj1[key] !== obj2[key]){
    
    return false
  } }
}
return true;
// The value for each key in one object is the same as the value for that same key in the other object
}
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, abc), false); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false