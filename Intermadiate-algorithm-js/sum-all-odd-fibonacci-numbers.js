function sumFibs(num) {
  let i = 2, fibonnaci = [1, 1];

  while (i < num) {
    fibonnaci[i] = fibonnaci[i - 1] + fibonnaci[i - 2]
    i++
  }
  
  let j = 0, sum = 0;
  while (fibonnaci[j] <= num) {
    if (fibonnaci[j] % 2 !== 0) {
      sum += fibonnaci[j]
    }
    j++
  }
  console.log(sum)
  return sum;
}

sumFibs(75025);

