function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr = reversedStr + str.charAt(i);
  }
  return reversedStr;
}


const text = "mimi";
const output = reverseString(text);
console.log(output);
