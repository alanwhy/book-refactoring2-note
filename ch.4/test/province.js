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

  it("zero demand", function () {
    // 如果拿到的是数值类型，0 会是不错的边界条件
    asia.demand = 0;
    expect(asia.shortfall).equal(-25);
    expect(asia.profit).equal(0);
  });
  it("negative demand", function () {
    // 负值同样值得一试
    asia.demand = -1;
    expect(asia.shortfall).equal(-26);
    expect(asia.profit).equal(-10);
  });
  it("empty string demand", function () {
    // 考虑可能出错的边界条件，把测试火力集中在那儿。
    asia.demand = "";
    expect(asia.shortfall).NaN;
    expect(asia.profit).NaN;
  });
});

// describe("province", function () {
//   it("shortfall", function () {
//     const asia = new Province(sampleProvinceData());
//     assert.equal(asia.shortfall, 5);
//   });
// });

describe("no producers", function () {
  let noProducers;
  beforeEach(function () {
    // 当我拿到一个集合（比如说此例中的生产商集合）时，我总想看看集合为空时会发生什么
    const data = {
      name: "No proudcers",
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new Province(data);
  });
  it("shortfall", function () {
    expect(noProducers.shortfall).equal(30);
  });
  it("profit", function () {
    expect(noProducers.profit).equal(0);
  });
});

describe("string for producers", function () {
  it("", function () {
    const data = {
      name: "String producers",
      producers: "",
      demand: 30,
      price: 20,
    };
    const prov = new Province(data);
    expect(prov.shortfall).equal(0);
  });
});
