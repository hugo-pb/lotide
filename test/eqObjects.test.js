const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqobjects", () => {
  it("returns false for eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })", () => {
    assert.strictEqual(
      eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),
      false
    );
  });
  it("eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true", () => {
    assert.strictEqual(
      eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
      true
    );
  });
});
