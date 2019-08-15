let n = 100;
let f = 0;
let f1 = -1;
let f2 = 1;
do {
  f = f1 + f2;
  f1 = f2;
  f2 = f;
  console.log(f);
} while (f < n);
console.log(
  "-----------------------------------------------------------------------------------------"
);
for (let f = 0, f1 = -1, f2 = 1; f <= n; ) {
  f = f1 + f2;
  f1 = f2;
  f2 = f;
  console.log(f);
}
