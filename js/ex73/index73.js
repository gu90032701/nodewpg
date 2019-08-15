for (let x = 1; x <= 13; x++) {
  let result = "";
  for (let y = 13; y > x; y--) {
    result += "*";
  }
  console.log(result);
}
console.log(
  "-----------------------------------------------------------------------------------------"
);
let x = 0;

while (x <= 13) {
  let result = "";
  let y = 13;
  while (y > x) {
    result += "*";
    y--;
  }
  console.log(result);

  x++;
}
