function smallestCommons(arr) {
  let allNumbersInRange = [];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    allNumbersInRange.push(i)
  }
  console.log(allNumbersInRange)
  const prod = allNumbersInRange.reduce((a, b) => a * b)

  for (let i = 1; i <= prod; i++) {

    const divisedNumbers = allNumbersInRange
      .filter(item => i % item === 0)
    if (divisedNumbers.length === allNumbersInRange.length) {
      console.log(i)
      return i
    }
  }
  console.log(prod)
  return prod
}


smallestCommons([5, 1]);
