let x = 0;

do {
  let result = "";
  let y = 13;
  do {
    result += "*";
    y--;
  } while (y > x);
  console.log(result);

  x++;
} while (x <= 13);
