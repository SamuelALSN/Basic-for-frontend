function factorialize(num) {
  if (num <= 0) {
    return 1
  }
  let prod = num;
  while (num > 1) {
    num--
    prod *= num
  }
  console.log(prod)
  return prod;
}

factorialize(5);
