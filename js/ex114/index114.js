function revert(string) {
  return string
    .split("")
    .reverse()
    .join("");
}
console.log(revert("hello"));
console.log(revert("nico"));
console.log(revert("you"));
console.log(revert("are"));
console.log(revert("awesome"));
