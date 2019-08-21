const femaleStudents = ["F1", "F2", "F3", "F4", "F5"];
femaleStudents.forEach(function(name, index) {
  console.log(index + 1);
  console.log(name);
});
console.log("------------------------------------------");
const maleStudents = ["M1", "M2", "M3", "M4", "M5"];
let n = 0;
while (n < 4) {
  console.log(maleStudents[n]);
  n++;
}
console.log("------------------------------------------");
const students = femaleStudents.concat(maleStudents);
for (let n of students) {
  console.log(n);
}
