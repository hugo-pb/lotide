// const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    ans = middle([1, 2, 3, 4]);
    assert.deepStrictEqual(ans, [2, 3]);
  });
});
