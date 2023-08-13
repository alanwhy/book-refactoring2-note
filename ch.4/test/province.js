import Province from "../src/Province.js";
// import assert from "assert";
import { expect } from "chai";

function sampleProvinceData() {
  return {
    name: "Asia",
    producers: [
      { name: "Byzantium", cost: 10, production: 9 },
      { name: "Attalia", cost: 12, production: 10 },
      { name: "Sinope", cost: 10, production: 6 },
    ],
    demand: 30,
    price: 20,
  };
}

describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData()); // DON'T DO THIS
    expect(asia.shortfall).equal(5);
  });
  it("profit", function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.profit).equal(230);
  });
});

// describe("province", function () {
//   it("shortfall", function () {
//     const asia = new Province(sampleProvinceData());
//     assert.equal(asia.shortfall, 5);
//   });
// });
