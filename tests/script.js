function clickRectangle() {
    var red = getRandomInt(255);
    var green = getRandomInt(255);
    var blue = getRandomInt(255);
    console.log(red, green, blue);
    document.getElementById("Rectangle").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

    var stringBoxShadow = "0 0 5px rgba(" + red + "," + green + "," + blue + ", 1), " +
    "0 0 25px rgba(" + red + "," + green + "," + blue + ", 1), " +
    "0 0 50px rgba(" + red + "," + green + "," + blue + ", 1), " +
    "0 0 100px rgba(" + red + "," + green + "," + blue + ", 1), " +
    "0 0 200px rgba(" + red + "," + green + "," + blue + ", 0.5), " +
    "0 0 300px rgba(" + red + "," + green + "," + blue + ", 0.5)"

    document.getElementById("rectangle").style.boxShadow = stringBoxShadow;

    document.getElementById("container").style.transform = "rotate(-" + deg + "deg)";
}

function getRandomInt(max) {
    return Math.floor(Math.random()* max);