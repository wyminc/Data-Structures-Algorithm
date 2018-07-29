function mergeSort(arr) {
  //If statement to break the recurssion(mergeSort)jjjjjjjjjjjjjjjjjjj
  if (arr.length === 1) {
    return arr;
  }

  //We need to be able to split the initial array and following arrays in half.
  const midpoint = Math.floor(arr.length / 2);

  //Slice(0,midpoint) slices from 0 and up till the midpoint but never the midpoint itself
  const left = arr.slice(0, midpoint);

  //Slice(midpoint) slices from midpoint till the rest of the array if an endpoint is never specified
  const right = arr.slice(midpoint);

  //The return statement merges the left and right array, but because arrays may still exist after the initial split, a recursion is used within the merge on the left and right array.
  //Mergesort will run(splitting) until the each element inside the intiial array is its own array because of the condition set in the if statement. The split will continue until the length is 1, then it stops splitting (return).
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  // // This method is directly mutating the array with shifts so the while loop only needs to check for the arrays length you are mutating to be greater than 0. Once you have sorted one of the arrays (left or right) till its 0, the while loop will break and the other array will still have one element left.
  // //The slices of either left or right at the return statement is to make sure the function takes into account the last remaining item in either array
  //   while (left.length > 0 && right.length > 0) {
  //     if (left[0] < right[0]) {

  //       result.push(left.shift());
  //     } else {
  //       result.push(right.shift());
  //     }
  //   }
  // //Because the while loop is shifting out the elements in the array, at the very end, there should be only one item left in either array. slice() removes the whole array and returns the whole array, but becasue the array only has one element, it only returns the last element we need to concat into our result array.
  //   return result.concat(left.slice()).concat(right.slice());
  // }

  //This method uses a counter to keep track of the index of what the loop is pushing into the result array. Because the loop is not directly mutating the array,the counter helps keep track which to push into the result array. After upshing an element, the respective counter index will increase therefore keeping track of which index either left or right is at when the element in the left or right array needs to be pushed.
  // //The slices of either left or right at the return statement is to make sure the function takes into account the last remaining item in either array
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  //The slice() is not empty and uses leftIndex or rightIndex, is because the remaining elemenet that has yet to be pushed and whereever the last index is at will be pushed in.
  //Because our counter increases with every push in the while loop, once either index increases to a number that is equal to the length, when the return statement slices at that index, it will not be able to slice anything because the arrays uses 0 indexing while length starts at 1. (Length of 3 and counter is at 3, but slice(3) returns an empty array)
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
