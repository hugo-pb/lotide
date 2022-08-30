// FUNCTION IMPLEMENTATION

const findKeyByValue = (obj, tvshow) => {
  for (i in obj) {
    if (obj[i] === tvshow) {
      return i;
    }
  }
};
module.exports = findKeyByValue;
