// let number = 0;
// let sum = 0;

// do {
//   if (number % 2 == 0) {
//     sum += number;
//   }
//   number++;
// } while (number <= 1000);
// console.log(sum);

let sum = 0;
for (let number = 0; number <= 100; number++) {
  if (number % 2 == 1) {
    sum += number;
  }
}
console.log(sum);
