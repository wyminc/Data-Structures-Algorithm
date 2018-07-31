const chai = require("chai");
const should = chai.should();
const expect = chai.expect;

const quickSort = require("../quickSort.js");

var arr = [45, 39, 26, 94, 1, 14, 85, 105, 372, -49, 10, 8, -81, 15, 70];

describe("quickSort", function () {
  it("Should be a function", function () {
    (typeof quickSort).should.equal("function");
  });

  it("Array should still be the same length", function () {
    expect(quickSort(arr)).to.be.a("array");
    expect(quickSort(arr)).to.have.lengthOf(15);
  });

  it("Should be sorting numerically", function () {
    expect(quickSort(arr)).to.deep.equal([-81, -49, 1, 8, 10, 14, 15, 26, 39, 45, 70, 85, 94, 105, 372]);
  });
});