// FUNCTION IMPLEMENTATION

const findKeyByValue = (obj, tvshow) => {
  for (i in obj) {
    if (obj[i] === tvshow) {
      return i;
    }
  }
};
module.exports = findKeyByValue;
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
