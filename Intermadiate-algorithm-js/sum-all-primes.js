function sumPrimes(num) {
  let i = 2, primesNumber = [2]
  while (i <= num) {
    if (i % 2 != 0) {
      primesNumber.push(i)
    }
    i++
  }
  // these lines below sort the array and check if the array had other  divisor which is not  1 and itself 
  for (let j = primesNumber.length - 1; j >= 0; j--) {
    for (let k = j - 1; k >= 0; k--) {
      if (primesNumber[j] % primesNumber[k] === 0) {
        primesNumber.splice(j, 1)
      }
    }
  }

  let sumAllPrimes = primesNumber.reduce((a, b) => a + b)
  return sumAllPrimes;
}

sumPrimes(977);
