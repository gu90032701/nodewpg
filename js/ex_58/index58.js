let hour = 22;
if (hour >= 5 && hour <= 12) {
  console.log("morning");
} else if (hour > 12 && hour <= 18) {
  console.log("afternoon");
} else if (hour > 18 && hour <= 22) {
  console.log("evening");
} else {
  console.log("night");
}
