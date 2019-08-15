let numberOfEven = 0;
for (let i = 0; i < 1000; i++) {
  if (!(i % 2)) {
    numberOfEven++;
    console.log(i);
    if (numberOfEven >= 20) break;
  }
}
