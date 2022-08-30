const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;

describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
  };
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "The Expanse"),
      "sci_fi"
    );
  });
});

//
