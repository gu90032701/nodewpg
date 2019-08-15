for (let x = 1; x <= 13; x++) {
  let result = "";
  for (let y = 13; y > x; y--) {
    result += "*";
  }
  console.log(result);
}
