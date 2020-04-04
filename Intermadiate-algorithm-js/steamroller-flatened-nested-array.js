function steamrollArray(arr) {
  let flatenedArray = []

  let flaten = function (arg) {
    // Check if the function argument is not an array
    // and add it to our new array 
    if (!Array.isArray(arg)) {
      flatenedArray.push(arg)
    } else { 
    // else we iterate trough the argument wich is an array
  // and we pass it as argument to a new call of the flaten function
      for (let i in arg) {
        flaten(arg[i])
      }
    }
  }

  // Call the function for every item of the array
  arr.forEach(flaten)
  return flatenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);
