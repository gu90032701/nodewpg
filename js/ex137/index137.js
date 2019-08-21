const numbers = [];
for (let i = 1; i <= 1000; i++) {
  numbers.push(i);
}

const result = numbers.map(function(value) {
  return value + 10;
});
result.forEach(function(n, index) {
  console.log(
    "index:" + (index + 1),
    "original number:" + (index + 1),
    "incremented value:" + n
  );
});
