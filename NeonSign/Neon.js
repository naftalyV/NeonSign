//var canvas = document.getElementById("myCanvas");
//var stop = document.getElementById("Stop").addEventListener("click", stop);

function changeColor() {
    $("#myCanvas").css(' background-color',popUp());

}

function popUp() {
    return window.prompt("איזה צבע","red")

}

var myColor = ["red", "blue", "yello", "gold"];

 currentIndex = 1;
function start() {
var intervalId = setInterval(startlogic, 1000);

}

function startlogic() {
    $("#myCanvas").css(' background-color', myColor[currentIndex]);
    currentIndex++;
    if (currentIndex === myColor.length) {

        currentIndex = 0;

    }
}

function stop() {

    clearInterval(intervalId);

}