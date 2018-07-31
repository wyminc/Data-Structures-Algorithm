// var assert = require("assert");
// describe("Sorting Algorithm", function() {
//   describe("#bubbleSort()", function() {
//     it("should sort array numerically", function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

const chai = require("chai");
const should = chai.should();
const expect = chai.expect;

const bubbleSort = require("../bubbleSort.js");

var arr = [34, 3, 25, 2, 1, 9, 100, 56];

describe("bubbleSort", function() {
  it("Should be a function", function() {
    (typeof bubbleSort).should.equal("function");
  });

  it("Array should still be the same length", function() {
    expect(bubbleSort(arr)).to.be.a("array");
    expect(bubbleSort(arr)).to.have.lengthOf(8);
  });

  it("S3hould be sorting numerically", function() {
    expect(bubbleSort(arr)).to.deep.equal([1, 2, 3, 9, 25, 34, 56, 100]);
  });
});
