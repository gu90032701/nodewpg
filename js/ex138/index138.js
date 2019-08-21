let mutants = [
  "Professor X",
  "Logan",
  "Storm",
  "Magneto",
  "Phoenix",
  "Beast",
  "Iceman",
  "Gambit"
];

const result = mutants.map(function(n) {
  if (
    n === "Professor X" ||
    n === "Logan" ||
    n === "Phoenix" ||
    n === "Gambit"
  ) {
    return "<3 " + n;
  } else {
    return n;
  }
});
console.log(mutants);
console.log("--------------------------------------------------------");
console.log(result);
