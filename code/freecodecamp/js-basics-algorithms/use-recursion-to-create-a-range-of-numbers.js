function rangeOfNumbers(startNum, endNum) {
  if ( endNum < startNum) {
    return [];
  } else {
    const myArray = rangeOfNumbers
      (startNum, endNum - 1)
    myArray.push(endNum)
    return myArray
  }
};

console.log(rangeOfNumbers(1, 4))
// function myfunc() {
//   var startNum = 1, endNum = 5
//   var arr = []
//   while (startNum <= endNum) {
//     arr.push(startNum)
//     startNum++
//   }
//   return arr
// }


// console.log(myfunc())