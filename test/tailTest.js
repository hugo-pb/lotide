const tail = require("../tail");

const assert = require("chai").assert;

describe("#tail", () => {
  it("returns Lighthouse, Labs for Hello, Lighthouse, Labs", () => {
    ans = tail(["Yo Yo", "Lighthouse", "Labs"]);
    assert.deepStrictEqual(ans, ["Lighthouse", "Labs"]);
  });
});
