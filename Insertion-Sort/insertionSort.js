module.exports = function insertionSort(arr) {
  //Loop through the initial array the first time
  for (var i = 0; i < arr.length; i++) {
    //Set a temporary value equal to the element you want to use to compare to others as you iterate through the array
    let temp = arr[i];

    //Now within this for loop, set j to be one behind i so that the loop can always compare to the elements behind i as long as j can start at 0(i will have to be 1 at least)
    for (var j = (i - 1); j >= 0 && arr[j] > temp; j--) {

      //If it does pass the condition set in the for loop(arr[j] > temp, the element ahead of j will now be the new j
      //Then j decrements. 
      arr[j + 1] = arr[j];
    }
    //Once j decrements, it will check again if the element j is at is greater than the temp value.
    //If the element is actually above the temp value, it will enter the for loop once again since it passed its condition and will continue on
    //If not, temp value stays between the j decrement element and the j that initially passed the condition above
    arr[j + 1] = temp;
  }
  return arr;
}
