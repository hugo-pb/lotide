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
