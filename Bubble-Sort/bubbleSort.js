function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    //It is a double for loop because even though we swap every j-1 and j, its only in comparison in that very momment.
    //i.e. if the lowest number was at the end of the array and there was no nested for loop, the lowest number would only switch once backwards and thats it
    //A double for loop helps iterate through the loop x = length times
    for (var j = 0; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        //arr[j] is used instead of arr[i] is because j will constantly be going through the array each time while i is stuck at the nth iteration.
        var storedArr = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = storedArr;
      }
    }
  }
  return arr;
}
