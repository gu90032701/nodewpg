let text = "game of thrones";
let firstChar = text;
let secondChar = text.charAt(5);
let thirdChar = text.charAt(8);
let result = firstChar.concat(secondChar, thirdChar);
console.log(result);
console.log("The final result is: " + result.toUpperCase());
