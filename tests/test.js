var start = new Date().getTime();

function makeShapeAppear()
{
var top = Math.random() * 400;
var left = Math.random() * 700;
var width = (Math.random() * 200) + 100;
if (Math.random() > 0.5) {
document.getElementById("shape").style.borderRadius = "50%";
} else {
document.getElementById("shape").style.borderRadius = "0"
}
document.getElementById("shape").style.backgroundColor = "red";
document.getElementById("shape").style.width = width + "px";
document.getElementById("shape").style.height = width + "px";
document.getElementById("shape").style.top = top + "px";
document.getElementById("shape").style.left = left + "px";
document.getElementById("shape").style.display = "block"
start = new Date().getTime();
}

function appearAfterDelay()
{
setTimeout(makeShapeAppear, Math.random() * 1000);
}

appearAfterDelay()

document.getElementById("shape").onclick = function()
{
document.getElementById("shape").style.display = "none";
var end = new Date().getTime();
var timeTaken = (end - start) / 1000;
document.getElementById("timeTaken").innerHTML = timeTaken + "s"
appearAfterDelay();
} 

function clickCube() {
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);
    console.log(red, green, blue);
    document.getElementById("krug").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

    var stringBoxShadow = "0 0 5px rgba(" + red + "," + green + "," + blue + ", 1), " +
    "0 0 25px rgba(" + red + "," + green + "," + blue + ", 1), " +
    "0 0 50px rgba(" + red + "," + green + "," + blue + ", 1), " +
    "0 0 100px rgba(" + red + "," + green + "," + blue + ", 1), " +
    "0 0 200px rgba(" + red + "," + green + "," + blue + ", 0.5), " +
    "0 0 300px rgba(" + red + "," + green + "," + blue + ", 0.5)"

    document.getElementById("krug").style.boxShadow = stringBoxShadow;


}

function getRandomInt(max) {
    return Math.floor(Math.random()* max);
}