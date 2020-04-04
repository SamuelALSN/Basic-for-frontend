function uniteUnique(arr) {
  let mergedArray = []
  let allArray = [...arguments]
  console.log(allArray)
  for (let i = 0; i < allArray.length; i++) {
    for (let j = 0; j < allArray[i].length; j++) {
      mergedArray.push(allArray[i][j])
    }
  }
  console.log(mergedArray)
  for (let i = 0; i < mergedArray.length; i++ ) {
    for (let j = i+1 ; j < mergedArray.length ; j++){
     if (mergedArray[i] === mergedArray [j]){
       mergedArray.splice(j,1)
     }
    }
  }
  console.log(mergedArray)
  return mergedArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
