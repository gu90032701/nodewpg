let number = 0;
let sum = 0;

do {
  if (number % 2 == 1) {
    sum += number;
  }
  number++;
} while (number <= 1000);
console.log(sum);
