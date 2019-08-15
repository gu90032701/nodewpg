let sum = 0;
for (let i = 0; i <= 1000; i++) {
  sum += i;
  if (sum > 400) break;
}
console.log(sum);
