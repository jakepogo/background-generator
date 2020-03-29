var css,
    color1,
    color2,
    body,
    myBtn;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function colorToHex(color) { 
    var hex = Number(color).toString(16);

    if (hex.length < 2) {
       hex = "0" + hex;
    }

    return hex;
};

function rgbToHex(r,g,b) {   
    var red = colorToHex(r),
        green = colorToHex(g),
        blue = colorToHex(b);

    return '#'+red+green+blue;
};

function setGradient() {
	body.style.background = "linear-gradient(to right, "
                          + color1.value + ", "
                          + color2.value
                          + ")";

	css.textContent = body.style.background + ";";
}

function randomizeGradient() {
    var red,
        green,
        blue,
        alpha;
    // Okay well generate our first color
    red = getRndInteger(0, 255);
    green = getRndInteger(0, 255);
    blue = getRndInteger(0, 255);

    color1.value = rgbToHex(red,green,blue);

    // then, generate our second color
    red = getRndInteger(0, 255);
    green = getRndInteger(0, 255);
    blue = getRndInteger(0, 255);

    color2.value = rgbToHex(red,green,blue);

    setGradient();
}

window.onload = function () {
    'use strict';

    css = document.querySelector("h3");
    color1 = document.querySelector(".color1");
    color2 = document.querySelector(".color2");
    body = document.getElementById("gradient");
    myBtn = document.querySelector("button");

    color1.addEventListener("input", setGradient);
    color2.addEventListener("input", setGradient);
    myBtn.addEventListener("click", randomizeGradient);

    randomizeGradient();
};