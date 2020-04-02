function chunkArrayInGroups(arr, size) {
  let chunkArray , resultArray = [];
  for (let i  = 0 ; i <arr.length; i=i+size){
      chunkArray = arr.slice(i,i+size) 
       resultArray.push(chunkArray)
  }
 console.log(resultArray)
  return resultArray;
}

//chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5,6], 3) 
