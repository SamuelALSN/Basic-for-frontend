function myReplace(str, before, after) {
  let result
  let myRegex = new RegExp(before, 'ig')
  let matchRegex = str.match(myRegex)
  // check if matched element first caracter is Uppercase 
  // if (matchRegex[0][0] === before[0].toUpperCase()) {
  //   result = str.replace(myRegex,
  //     after[0].toUpperCase().concat(after.substr(1))
  //   )
  // } else {
  //   result = str.replace(myRegex, after)
  // }

  return matchRegex[0][0] === before[0].toUpperCase()
    ? str.
      replace(myRegex,
        after[0]
          .toUpperCase()
          .concat(after.substr(1)))
    : str.replace(myRegex, after)

}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
