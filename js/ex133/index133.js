const mutants = [
  "Professor X",
  "Logan",
  "Storm",
  "Magneto",
  "Phoenix",
  "Beast"
];
for (let n of mutants) {
  if (n === "Magneto") break;
  console.log(n);
}
console.log("--------------------------------------------");
let position = mutants.indexOf("Magneto");

mutants.splice(position, 1);
for (let n of mutants) {
  console.log(n.toLocaleUpperCase());
}
