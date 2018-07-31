const chai = require("chai");
const should = chai.should();
const expect = chai.expect;

const insertionSort = require("../insertionSort.js");

var arr = [50, 100, -5, 25, 1, 30, 120, 56, 999];

describe("insertionSort", function () {
  it("Should be a function", function () {
    (typeof insertionSort).should.equal("function");
  });

  it("Array should still be the same length", function () {
    expect(insertionSort(arr)).to.be.a("array");
    expect(insertionSort(arr)).to.have.lengthOf(9);
  });

  it("Should be sorting numerically", function () {
    expect(insertionSort(arr)).to.deep.equal([-5, 1, 25, 30, 50, 56, 100, 120, 999]);
  });
});