const numbers = [];
for (let i = 1000; i >= 1; i--) {
  numbers.push(i);
}

const evenNumbers = numbers.filter(function(n) {
  if (n % 2 == 0) return n;
});
const oddNumbers = numbers.filter(function(n) {
  if (n % 2 != 0) return n;
});
oddNumbers.forEach(function(n, index) {
  if (index >= 490) console.log(n);
});
console.log("---------------------------------------------");
evenNumbers.forEach(function(n, index) {
  if (index < 20) console.log(n);
});
