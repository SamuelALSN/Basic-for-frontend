function rot13(str) {
  let stringToArray = [...str], stringToCode, difference
  for (let i = 0; i < stringToArray.length; i++) {
    if (stringToArray[i].match(/\w+/)) {
      stringToCode = str.charCodeAt(i) - 13
      if (stringToCode < 65) {
        difference = 65 - stringToCode
        // use 91 to tell the programm to begin counting  at ASCII CODE 90 and not 89 
        // this help us to not count more than 13 characters 
        stringToCode = 91 - difference
        stringToArray[i] =
          String.fromCharCode(stringToCode)
      } else {
        stringToArray[i] =
          String.fromCharCode(stringToCode)
      }

    }

  }
  console.log(stringToArray.join(""))
  return stringToArray.join("");
}

rot13("SERR PBQR PNZC");
