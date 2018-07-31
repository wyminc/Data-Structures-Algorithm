function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    //Set the element that the loop is at to be the smallest
    let smallest = arr[i];

    //A second for loop to compare our set smallest element to the rest of the array starting at i+1.
    //It doesnt need to compare itself(j = i) nor does it need to start comparing from the start, it just needs to compare to everything after it because the loop will always put the smallest to the left.
    for (var j = i + 1; j < arr.length; j++) {

      //Because the loop is assuming the element i as the smallest, it just needs to compare everything after it
      if (smallest > arr[j]) {

        //If it does encounter anthing smaller than it, it will now set that as the smallest
        smallest = arr[j];
      }
    }

    //Once it compares all the elements within the array and has attained the new smallest element, it will now switch the places of the smallest element and the current arr i
    arr.splice(arr.indexOf(smallest), 1, arr[i]);
    arr[i] = smallest;

    //Then the loop goes on to the next element within i, and compares and everything after it without ever comparing the items before it because the smaller elements has already been set before it
  }
  return arr;
}