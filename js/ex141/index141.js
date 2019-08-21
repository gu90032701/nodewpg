const tripExpenses = [2, 10, 30];
let budget = tripExpenses.reduce(function(n1, n2) {
  return n1 + n2;
});
console.log(
  "hotel:" + `${tripExpenses[0]}`,
  "trip:" + `${tripExpenses[1]}`,
  "meals:" + `${tripExpenses[2]}`
);
console.log(budget);
