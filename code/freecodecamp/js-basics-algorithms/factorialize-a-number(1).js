function factorialize(num) {
  let fact;
  if (num < 1) {
    return 1
  } else {
    if (num <= 1) {
      return num
    } else {
      fact = num * factorialize(num - 1)
      return fact
    }
  }
}

factorialize(5);
