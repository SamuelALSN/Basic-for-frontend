function destroyer(arr) {
  let newArr = []
  let arrayFromObject = [...arguments]
  
  let rest = arrayFromObject.slice(1)
  arrayFromObject[0].filter(item => {
    !rest.includes(item)
      ? newArr.push(item)
      : []

  })
  console.log(newArr)
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
