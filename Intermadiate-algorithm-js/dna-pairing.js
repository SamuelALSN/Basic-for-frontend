function pairElement(str) {
  let baisePair = [["G", "C"], ["A", "T"]]
  let arr = []
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < baisePair.length; j++) {
      if (baisePair[j].includes(str[i])) {
        let pair = baisePair[j].filter(element => element != str[i])
        arr.push([str[i], pair[0]])

      }
    }
  }
  console.log(arr)
  return arr;
}

pairElement("GCG");
