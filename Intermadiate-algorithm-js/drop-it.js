function dropElements(arr, func) {
  let test;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[0]) === false) {
       arr.shift()
      i--
    }
  }
  console.log(arr)
  return arr;

}

dropElements([1, 2, 3], function (n) { return n < 3; });
dropElements([1, 2, 3, 4], function (n) { return n >= 3; })
dropElements([1, 2, 3, 4], function (n) { return n > 5; })
dropElements([0, 1, 0, 1], function(n) {return n === 1;})
