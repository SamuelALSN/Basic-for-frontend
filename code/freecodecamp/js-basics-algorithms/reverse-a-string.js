function reverseString(str) {
   let reverse = []
  for ( let i = str.length-1 ; i>=0; i--){
    reverse.push(str[i])
  }
  str = reverse.join('');
  return str;
}

reverseString("hello");
