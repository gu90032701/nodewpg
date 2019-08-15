function getShapePerimiter(base, height) {
  if ((base + height) * 2 > 100) {
    console.log("The perimiter is to0 big");
  } else console.log("The perimiter is fine");
  return (base + height) * 2;
}
console.log(getShapePerimiter(4, 6) + " is the shape perimiter");
console.log(getShapePerimiter(50, 50) + " is the shape perimiter");
