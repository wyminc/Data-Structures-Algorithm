const chai = require("chai");
const should = chai.should();
const expect = chai.expect;

const selectionSort = require("../selectionSort.js");

var arr = [7, 10, 25, -4, 45, 2, 89, 0];

describe("selectionSort", function () {
  it("Should be a function", function () {
    (typeof selectionSort).should.equal("function");
  });

  it("Array should still be the same length", function () {
    expect(selectionSort(arr)).to.be.a("array");
    expect(selectionSort(arr)).to.have.lengthOf(8);
  });

  it("Should be sorting numerically", function () {
    expect(selectionSort(arr)).to.deep.equal([-4, 0, 2, 7, 10, 25, 45, 89]);
  });
});