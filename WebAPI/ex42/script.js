let images = [
  "batman.png",
  "batmanwb.png",
  "flash.png",
  "flashwb.png",
  "superman.png",
  "supermanwb.png",
  "wonder_woman.png",
  "wonder_womanwb.png"
];
let bodyElement = document.querySelector("body");
images.map((n, index) => {
  let image = document.createElement("img");
  if (index % 2 == 1) {
    image.setAttribute("src", "img/" + n);
    bodyElement.appendChild(image);
  }
});

let imageElement = document.querySelectorAll("img");

onMouseOver1 = function() {
  imageElement[0].setAttribute("src", "img/" + "batman.png");
};
onMouseOver2 = function() {
  imageElement[1].setAttribute("src", "img/" + "flash.png");
};
onMouseOver3 = function() {
  imageElement[2].setAttribute("src", "img/" + "superman.png");
};
onMouseOver4 = function() {
  imageElement[3].setAttribute("src", "img/" + "wonder_woman.png");
};
onMouseOut1 = function() {
  imageElement[0].setAttribute("src", "img/" + "batmanwb.png");
};
onMouseOut2 = function() {
  imageElement[1].setAttribute("src", "img/" + "flashwb.png");
};
onMouseOut3 = function() {
  imageElement[2].setAttribute("src", "img/" + "supermanwb.png");
};
onMouseOut4 = function() {
  imageElement[3].setAttribute("src", "img/" + "wonder_womanwb.png");
};
onClick1 = function() {
  alert("batman");
};
onClick2 = function() {
  alert("flash");
};
onClick3 = function() {
  alert("superman");
};
onClick4 = function() {
  alert("woderwoman");
};
imageElement[0].onmouseover = onMouseOver1;
imageElement[1].onmouseover = onMouseOver2;
imageElement[2].onmouseover = onMouseOver3;
imageElement[3].onmouseover = onMouseOver4;
imageElement[0].onmouseout = onMouseOut1;
imageElement[1].onmouseout = onMouseOut2;
imageElement[2].onmouseout = onMouseOut3;
imageElement[3].onmouseout = onMouseOut4;
imageElement[0].onclick = onClick1;
imageElement[1].onclick = onClick2;
imageElement[2].onclick = onClick3;
imageElement[3].onclick = onClick4;
console.log(bodyElement);
