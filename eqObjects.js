const eqArrays = require("./eqArrays");
const eqObjects = (obj1, obj2) => {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  // They have the same number of keys

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (key of Object.keys(obj1)) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (typeof obj1[key] === "object" && typeof obj2[key === "object"]) {
      if (!eqObjects(obj1[key], obj2[key])) {
        return false;
      }
    } else {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
  // The value for each key in one object is the same as the value for that same key in the other object
};
module.exports = eqObjects;
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };

// assertEqual(eqObjects(ab, abc), false); // => false
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false
// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

// assertEqual(
//   eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
//   false
// ); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false
