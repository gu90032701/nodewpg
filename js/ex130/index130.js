const mutants = [
  "Professor X",
  "Wolverine",
  "Storm",
  "Magneto",
  "Phoenix",
  "Beast"
];
console.log(mutants);
const sortedMutants = mutants.sort();
console.log(sortedMutants);
const reversedMutants = mutants.sort().reverse();
console.log(reversedMutants);
const joinedMutants = reversedMutants.join("*");
console.log(joinedMutants);
