//Only change code below this line
function countdown(n) {
  if (n < 1) {
    return []
  } else {
    const arr = countdown(n-1)
    arr.unshift(n)
    return arr;
  }
}
console.log(countdown(5)); // [5, 4, 3, 2, 1]
