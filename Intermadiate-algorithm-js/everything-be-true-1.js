function truthCheck(collection, pre) {

// using !! twice give us the boolean value 
// !! will give us boolean value depend on whenever the variable is
// thuthy or not 
  const truthy = (element) => !!element[pre]

  return collection.every(truthy)
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "": "female" }, { "user": "Po", "sex": "female" }], "sex");