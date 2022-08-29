const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

let result = middle([1, 2, 3, 4]);
assertArraysEqual(result, [2, 3]);
