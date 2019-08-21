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

const result = mutants.filter(function(n) {
  if (n !== "Magneto" && n !== "Iceman" && n !== "Gambit") return n;
});

console.log(result);
