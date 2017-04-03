function popUp() {
    return window.prompt("איזה צבע להציג?", "red");
}
function changeColor() {
    $("#myCanvas").css('background-color', popUp());
}

var myColor = ["red", "blue", "yellow", "black"];
var intervalId = 0;
 currentIndex = 0;
function start() {
 intervalId = setInterval(startlogic, 1000);
}

function startlogic() {
    $("#myCanvas").css('background-color', myColor[currentIndex]);
    currentIndex++;
    if (currentIndex === myColor.length) {

        currentIndex = 0;

    }
}

function stop() {

    clearInterval(intervalId);
}