function getIndexToIns(arr, num) {
  let temp,insertIndex
  if (arr.length > 0 ){
  //console.log(arr.length)
  for (let i=0 ; i<arr.length; i++){
    for (let j=i+1; j<arr.length; j++){
      if(arr[i]>arr[j]){
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp 
      }
    }
  }
  console.log(arr)
  for (let k = 0 ; k<arr.length; k++){
     if(arr[k] >= num){
       console.log(k)
       insertIndex = k
       break
     }else{
       insertIndex = arr.length
     }
  }

  return insertIndex;
  }

  return 0

}

getIndexToIns([2,5,10],15);
