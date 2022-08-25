const assertObjectsEqual = function(obj1, obj2) {
  // Implement me!
  const inspect = require('util').inspect; 
  let actual = true
let keys1 = Object.keys(obj1);
let keys2 = Object.keys(obj2);
// They have the same number of keys

if(keys1.length !== keys2.length ){
  actual = false;
}
for (key of Object.keys(obj1)){
if(Array.isArray(obj1[key]) === Array.isArray(obj2[key])){
if (obj1[key].length !== obj2[key].length) actual = false;

  for (let i = 0; i < obj1[key].length; i++) {
    if (obj1[key][i] !== obj2[key][i]) {actual = false;}
  }
    
  } else{if(obj1[key] !== obj2[key]){
    
    actual = false
  } }
}

// The value for each key in one object is the same as the value for that same key in the other object

 
  if (actual) {
    console.log(`😎 Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(` 😭 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};


assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })