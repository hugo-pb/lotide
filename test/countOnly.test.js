const assert = require("chai").assert;
const countOnly = require("../countOnly");

describe("#countOnly", () => {
  it("returns 1 for ['jason']", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false
    });
    assert.strictEqual(result1["Jason"], 1);
  });
  it("returns 2  for ['fang']", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false
    });
    assert.strictEqual(result1["Fang"], 2);
  });
});

// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
