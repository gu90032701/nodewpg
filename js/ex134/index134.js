const numbers = [];
for (let i = 1; i <= 1000; i++) {
  numbers.push(i);
}
// console.log("_________________________________________________");
let sum = 0;
for (let n of numbers) {
  sum += n;
  console.log(sum);
}
if (sum == 500500) {
  console.log("Good job!!!");
} else console.log("Take a look to see if something is wrong");
