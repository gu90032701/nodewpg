const mutants = [
  "Professor X",
  "Logan",
  "Storm",
  "Magneto",
  "Phoenix",
  "Beast",
  "Iceman"
];
let result = "";

mutants.forEach(function(n) {
  if (n === "Iceman" || n === "Logan" || n === "Phoenix") result += " " + n;
});
console.log(result);
