function addTogether(...arg) {

  // check first if every element in the ES6 ...rest array is a Number
  if (arg.every(element => typeof element === "number") === false) {
    return undefined
  } else if (arg.length === 1) {
    // get the first element present on the ES6 rest Object 
    let firstValue = parseInt([...arg])
    return function (arg) {
      // return the sum if the second arg type is a number
      return typeof arg === "number"
        ? firstValue + arg
        : undefined
    }
  }
  else if (arg.length === 2) {
    return arg.reduce((previous, current) => previous + current)
  }
}
//addTogether(2)(3)
//addTogether(2, 3);
//addTogether(2, "3")
addTogether(2)([3])
//addTogether("http://bit.ly/IqT6zt")