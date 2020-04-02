function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
    let targlength = target.length
    let strlength = str.length

      if(str.substring(strlength-targlength)===target){
        return true 
      }else {
        return false
      };
}

confirmEnding("Bastian", "n");
