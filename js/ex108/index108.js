function sortFun(number1, number2, number3, highTolow) {
  const numbers = [number1, number2, number3];
  if (highTolow == true) {
    sorted = numbers.sort(function(a, b) {
      return b - a;
    });
  } else
    sorted = numbers.sort(function(a, b) {
      return a - b;
    });

  console.log(sorted[0], sorted[1], sorted[2]);
}
sortFun(10, 8, 25, true);
