function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let srcKey = Object.keys(source)
  console.log(srcKey)
  arr = collection.filter(object => {
    return srcKey.every(key => {
      return (object.hasOwnProperty(key) && object[key] === source[key])
    })
  })
  console.log(arr)
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })