let number = 0;
let sum = 0;

while (number <= 1000) {
  if (number % 2 == 1) {
    sum += number;
  }
  number++;
}
console.log(sum);
