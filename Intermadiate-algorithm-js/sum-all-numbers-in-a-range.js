function sumAll(arr) {
  let newArr, compt, sum;
  if (arr[0] > arr[1]) {
    newArr = arr.reverse()
    sum = 0
    compt = newArr[0]
    while (compt <= newArr[1]) {
      sum = sum + compt
      compt++
    }
  } else {
    sum = 0
    compt = arr[0]
    while (compt <= arr[1]) {
      sum = sum + compt
      compt++
    }
  }
  console.log(sum)
  return sum;
}

sumAll([10, 5]);
