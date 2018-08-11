var canvas = null;
var ctx = null;

var printBackground = function (color) {
    canvas = document.getElementById("html5canvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

var printCircle = function () {
    ctx.strokeStyle = '#FF0000';
    ctx.beginPath();
    ctx.arc(300, 250, 100, 0, 2 * Math.PI);
    ctx.stroke();
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var printRandomCircle = function () {
    var x = getRandomInt(1, canvas.width - 1);
    var y = getRandomInt(1, canvas.height - 1);
    ctx.strokeStyle = '#FF0000';
    ctx.beginPath();
    ctx.arc(x, y, 100, 0, 2 * Math.PI);
    ctx.stroke();
};

var printRandomCircle2 = function () {
    var x = getRandomInt(1, canvas.width - 1);
    var y = getRandomInt(1, canvas.height - 1);
    var r = getRandomInt(1, 250);
    ctx.strokeStyle = getRandomColor();
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
};

var intervalId;

var printRandomCircleInterval = function () {
    if (!intervalId) {
        intervalId = setInterval(printRandomCircle2, 1000);
    }
};

window.addEventListener("load", printBackground("#AAAAAA"));