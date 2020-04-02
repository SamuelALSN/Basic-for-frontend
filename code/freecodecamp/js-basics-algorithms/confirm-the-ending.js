function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
    let targlength = target.length
    let strlength = str.length
    console.log(str.substring(strlength-targlength,strlength)
      )

      if(str.substring(strlength-targlength,strlength)===target){
        return true 
      }else {
        return false
      };
}

confirmEnding("Bastian", "n");
