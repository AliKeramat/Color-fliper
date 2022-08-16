const colors = [
  "red",
  "blue",
  "green",
  "aqua",
  "pink",
  "grey",
  "brown",
  "blueviolet",
  "darkblue",
  "darkgreen",
  "darkred",
  "darkgrey",
  "hotpink",
  "maroon",
  "yellow",
  "yellowgreen",
  "cyan",
  "navy",
  "rgb(199, 21, 133)",
  "rgb(219, 112, 147)",
  "rgb(255, 69, 0)",
  "orange",
  "rgb(255, 215, 0)",
  "rgb(240, 230, 140)",
  "rgb(230, 230, 250)",
  "rgb(218, 112, 214)",
  "rgb(147, 112, 219)",
  "rgb(139, 0, 139)",
  "rgb(72, 61, 139)",
  "rgb(50, 205, 50)",
  "rgb(144, 238, 144)",
  "rgb(0, 250, 154)",
  "rgb(0, 139, 139)",
  "rgb(0, 128, 128)",
  "rgb(95, 158, 160)",
  "rgb(25, 25, 112)",
  "rgb(218, 165, 32)",
  "rgb(205, 133, 63)",
  "rgb(0, 0, 0)",
];

const vib = navigator.vibrate(500);

document.getElementById("changeColor").addEventListener("click", function () {
  vib;
  const random = Math.floor(Math.random() * colors.length);
  document.querySelector("body").style.backgroundColor = colors[random];
});
