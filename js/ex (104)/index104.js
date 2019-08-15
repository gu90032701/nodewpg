function fibonacci() {
  let n = 100;
  let number = 0;
  let f1 = -1;
  let f2 = 1;
  for (let f = 0; f < n; ) {
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    number++;
    if (number <= 10) console.log(f);
  }
}
fibonacci();
console.log("------------------");
fibonacci();
console.log("------------------");
fibonacci();
console.log("------------------");
fibonacci();
console.log("------------------");
fibonacci();
console.log("------------------");
