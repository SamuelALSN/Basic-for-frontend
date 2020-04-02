function mutation(arr) {
  let bool 
  for (let i = 0 ; i<arr[1].length; i++){
    if(arr[0].toLowerCase().indexOf(
      arr[1][i].toLowerCase()) ===-1){
      bool = false
      break
    }else {
      bool = true 
    }
  }
  console.log(bool)
  return bool
}

mutation(["voodoo", "no"]);
