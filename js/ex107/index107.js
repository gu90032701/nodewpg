function biggerNumber(firstNumber, secondNumber) {
  if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
    console.log("error");
  } else if (firstNumber > secondNumber) {
    console.log(firstNumber + " is bigger than " + secondNumber);
  } else if (firstNumber == secondNumber)
    console.log("Both numbers are " + firstNumber);
}
biggerNumber(6, 3);
biggerNumber(2, 2);
