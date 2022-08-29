// FUNCTION IMPLEMENTATION
const eqArrays = (array1, array2) => {
  // avoid having to loop if the arrays are not the same length
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      return eqArrays(array1[i], array2[i]);
    }
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

module.exports = eqArrays;
