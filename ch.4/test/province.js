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
  let asia;
  // beforeEach 子句会在每个测试之前运行一遍，将 asia 变量清空，每次都给它赋一个新的值。
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });
  it("shortfall", function () {
    expect(asia.shortfall).equal(5);
  });
  it("profit", function () {
    expect(asia.profit).equal(230);
  });

  it("change production", function () {
    // 在这个测试中，我在一个 it 语句里验证了两个不同的特性。作为一个基本规则，一个 it 语句中最好只有一个验证语句，否则测试可能在进行第一个验证时就失败，这通常会掩盖一些重要的错误信息，不利于你了解测试失败的原因。
    asia.producers[0].production = 20;
    expect(asia.shortfall).equal(-6);
    expect(asia.profit).equal(292);
  });
});

// describe("province", function () {
//   it("shortfall", function () {
//     const asia = new Province(sampleProvinceData());
//     assert.equal(asia.shortfall, 5);
//   });
// });
