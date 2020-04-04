function diffArray(arr1, arr2) {
  var newArr = [];
   let mergedArray = arr1.concat(arr2)
   mergedArray.filter( item =>{
     !arr1.includes(item) || !arr2.includes(item) 
                                              ? newArr.push(item)
                                              : []
   })
   console.log(newArr)
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
