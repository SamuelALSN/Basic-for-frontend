function translatePigLatin(str) {
  let myRegex = /(^[^aeiou]+)/gi
  let testMatch = str.match(myRegex)

  return testMatch !== null ?
    str.substr(testMatch.toString().length).concat(testMatch).concat('ay')
    : str.concat('way')

}
translatePigLatin("consonant");
