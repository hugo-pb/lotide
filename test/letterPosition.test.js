const letterPosition = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPsition", () => {
  let result = letterPosition("hello");
  it("returns 1 for [1, 2, 3]", () => {
    assert.deepEqual(result.h, [0]);
  });
  it("returns '5' for ['5']", () => {
    assert.deepEqual(result.l, [2, 3]);
  });
});
