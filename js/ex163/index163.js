function add() {
  let sum = 0;
  for (let i of arguments) {
    sum += i;
  }
  console.log(sum);
}
add(1, 2, 3, 4, 5);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
