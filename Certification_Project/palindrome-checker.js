function palindrome(str) {
  let removeAllNonAlphanumeric = str.split(/\W+|_/g)
  let newWordforChecking = removeAllNonAlphanumeric.join('')
  let count = 0
  for (let i = 0; i < newWordforChecking.length; i++) {
    for (let j = newWordforChecking.length - 1; j >= 0; j--) {
  console.log(newWordforChecking[i], newWordforChecking[j])
      if (
        newWordforChecking[i].toLowerCase() ===
        newWordforChecking[j].toLowerCase()
      ) {
        count++
      }
      i++
    }
  }
  if (count === newWordforChecking.length) {
    return true
  }

  return false;
}


//palindrome("_e y  e");
palindrome("A man, a plan, a canal. Panama")
//palindrome("1 eye for of 1 eye.")
