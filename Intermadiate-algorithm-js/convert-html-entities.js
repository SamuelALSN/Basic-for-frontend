function convertHTML(str) {
  let htmlEnties = {
    '&': "&amp;",
    '<': "&lt;",
    '>': "&gt;",
    '"': "&quot;",
    '\'': "&apos;"
  }
  let htmlEntitiesArray = Object.keys(htmlEnties)
  let strToArray = str.split('')
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < htmlEntitiesArray.length; j++) {
      if (strToArray[i] === htmlEntitiesArray[j]) {
        strToArray[i] = htmlEnties[htmlEntitiesArray[j]]
      }
    }
  }
  return strToArray.join('');
}
convertHTML("Schindler's List")
