function spinalCase(str) {
  let myRegex = /\s+|_+/g
  // use capture groupe to create space between lowerCase letter and uppercase letter 
  let newStr = str.replace(/([a-z])([A-Z])/g,"$1 $2")
  let spinalTapeCase = newStr.replace(myRegex,'-').toLowerCase()
  return spinalTapeCase;
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap")
spinalCase("The_Andy_Griffith_Show")
spinalCase("Teletubbies say Eh-oh")
spinalCase("AllThe-small Things")