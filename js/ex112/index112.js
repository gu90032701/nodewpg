function showNumbers(start, end) {
  if (typeof start !== "number" || typeof end !== "number") {
    console.log("plz input numbers");
  }
  if (start > end) {
    for (let i = start; i >= end; i--) {
      console.log(i);
    }
  }
  if (start < end) {
    for (let j = start; j <= end; j++) {
      console.log(j);
    }
  }
  if (start == end) {
    console.log(start);
  }
}
showNumbers(0, 1000);
console.log("-------------------------------------------------------------");
showNumbers(1000, 0);
console.log("-------------------------------------------------------------");
showNumbers(100, 100);
console.log("-------------------------------------------------------------");
showNumbers("100", 300);
