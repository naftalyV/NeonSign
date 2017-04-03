var canvas = document.getElementById("myCanvas");
var stop = document.getElementById("Stop").addEventListener("click", stop);
function changeColor() {

}

var myColor = ["red", "blue", "yello", "gold"];

var currentIndex = 0;

var intervalId = setInterval(start, 1000);

function start() {

    if (currentIndex === myColor.length) {

        currentIndex = 0;

    }

    alert(myArr[currentIndex]);

    currentIndex++;

}

function stop() {

    clearInterval(intervalId);

}