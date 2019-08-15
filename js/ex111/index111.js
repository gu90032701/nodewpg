function even(n) {
  if (n % 2) {
    console.log(n + " is odd");
    return false;
    console.log();
  }
  if (!(n % 2)) {
    console.log(n + " is even");
    return true;
  }
}
even(2);
even(5);
even(3);
even(24);
even(12);
