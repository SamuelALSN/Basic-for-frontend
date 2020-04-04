function whatIsInAName(collection, source) {
  var arr = [];
  let bool = false;
  // Only change code below this line
  
  collection.map(object => {
    if (Object.keys(source).length <= Object.keys(object).length) {
      for (let key in source) {
        if (object.hasOwnProperty(key) && source[key] === object[key]) {
          bool = true
        } else {
          bool = false
          break;
        }
      }
      if (bool) arr.push(object)
    }

  })

  // Only change code above this line
  console.log(arr)
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
