function fearNotLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let begin = alphabet.indexOf(str[0])
  let end = alphabet.indexOf(str[str.length - 1])
  for (let i = begin; i <= end; i++) {
    if (!str.includes(alphabet[i])) {
      return alphabet[i]
    }
  }

  //return str;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno")
fearNotLetter("stvwx")
//fearNotLetter("bcdf")