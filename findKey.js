// FUNCTION IMPLEMENTATION

const findKey = (obj, callback) => {
  for (i in obj) {
    if (callback(obj[i])) return i;
  }
};
module.exports = findKey;
// let val = findKey(
//   {
//     "Blue Hill": { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 }
//   },
//   x => x.stars === 2
// );

// assertEqual(val, "noma");
