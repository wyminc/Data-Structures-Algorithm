const chai = require("chai");
const should = chai.should();
const expect = chai.expect;

const mergeSort = require("../mergeSort.js");

var arr = [30, 250, -10, 0, 4];

describe("mergeSort", function () {
  it("Should be a function", function () {
    (typeof mergeSort).should.equal("function");
  });

  it("Array should still be the same length", function () {
    expect(mergeSort(arr)).to.be.a("array");
    expect(mergeSort(arr)).to.have.lengthOf(5);
  });

  it("S3hould be sorting numerically", function () {
    expect(mergeSort(arr)).to.deep.equal([-10, 0, 4, 30, 250]);
  });
});