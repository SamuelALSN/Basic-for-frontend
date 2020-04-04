function pairElement(str) {
  let baisePair = [["G", "C"], ["A", "T"]]
  let arr = []
  let arrayString = str.split("")

  arrayString.map(item => {
    baisePair.map(element => {
      if (element.includes(item)) {
        let pair = element.filter(detail => detail  != item )
        arr.push([item, pair[0]])

      }
    })
  })
 console.log(arr)
  return arr;
}

pairElement("GCG");
