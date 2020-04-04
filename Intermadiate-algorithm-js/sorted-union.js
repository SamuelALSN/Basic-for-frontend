function uniteUnique(arr) {
  let mergedArray = []
  let allArray = [...arguments]
  console.log(allArray)
  for (let i = 0; i < allArray.length; i++) {
    for (let j = 0; j < allArray[i].length; j++) {
      mergedArray.push(allArray[i][j])
    }
  }
  return [... new Set(mergedArray)];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
