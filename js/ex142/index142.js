let firstPerson = ["jack", "liu", "address", "45"];
let secondPerson = ["jack", "liu", "address", "45"];

const result1 = firstPerson.reduce(function(n1, n2) {
  return n1 + n2;
});
const result2 = secondPerson.reduce(function(n1, n2) {
  return n1 + n2;
});
console.log(result1);
console.log(result2);
if (result1 === result2) console.log("same person");
