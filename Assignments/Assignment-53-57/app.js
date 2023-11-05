
var text = document.getElementById("text");
var zoomIn = document.getElementById("zoom-in");
var zoomOut = document.getElementById("zoom-out");

zoomIn.addEventListener("click", function() {
  var fontSize = parseInt(window.getComputedStyle(text).fontSize);
  text.style.fontSize = (fontSize + 10) + "px";
});

zoomOut.addEventListener("click", function() {
  var fontSize = parseInt(window.getComputedStyle(text).fontSize);
  text.style.fontSize = (fontSize - 10) + "px";
});

