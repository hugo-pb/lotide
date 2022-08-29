const map = (arr, callback) => {
  const result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
};

module.exports = map;
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
