function translatePigLatin(str) {
  let myRegex = /(^[^aeiou]+)/gi
  let testMatch = str.match(myRegex)

  if (testMatch !== null) {
    str = str.substr(testMatch.toString().length).
      concat(testMatch).concat('ay')
  } else {
    str = str.concat('way')
  }
  console.log(str)
  return str;
}
translatePigLatin("algorithm")
translatePigLatin("consonant");
translatePigLatin("schwartz")
translatePigLatin("paragraphs")
translatePigLatin("eight")
translatePigLatin("glove")
translatePigLatin("california")
translatePigLatin("rhythm")