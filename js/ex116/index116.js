function getHexaColor(color) {
  switch (color) {
    case "white":
      return "#FFFFFF";
    case "black":
      return "#000000";
    case "blue":
      return "#0b24fb";
    case "green":
      return "#0e7e12";
    case "yellow":
      return "#fffd38";
    case "pink":
      return "#fec1cc";
  }
}
console.log(getHexaColor("white"));
console.log(getHexaColor("black"));
console.log(getHexaColor("blue"));
console.log(getHexaColor("green"));
console.log(getHexaColor("yellow"));
console.log(getHexaColor("pink"));
