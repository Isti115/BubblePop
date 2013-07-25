"use strict";

var colorCount;
var colorDecrement, colorIncrement, colorCountLabel;
var squareDisplay, circleDisplay;

function init()
{
	colorDecrement = document.getElementById("colorDecrement");
	colorIncrement = document.getElementById("colorIncrement");
	colorCountLabel = document.getElementById("colorCountLabel");
	
	squareDisplay = document.getElementById("squareDisplay");
	circleDisplay = document.getElementById("circleDisplay");
	
	if(!localStorage.getItem("colorCount")){localStorage.setItem("colorCount", 4);}
	colorCount = parseInt(localStorage.getItem("colorCount"));
	setColorCount(0);
	
	colorDecrement.addEventListener("click", function(){setColorCount(-1);});
	colorIncrement.addEventListener("click", function(){setColorCount(1);});
	
	if (localStorage.getItem("useSquare")) {squareDisplay.checked = true;}
	else {circleDisplay.checked = true;}
	
	squareDisplay.addEventListener("click", function(){localStorage.setItem("useSquare", "true");}, false);
	circleDisplay.addEventListener("click", function(){localStorage.setItem("useSquare", "");}, false);
}

function setColorCount(x)
{
	colorCount += x;
	
	if (colorCount == 1) {colorDecrement.disabled = true;}
	else {colorDecrement.disabled = false;}
	
	if (colorCount == 6) {colorIncrement.disabled = true;}
	else {colorIncrement.disabled = false;}
	
	colorCountLabel.innerHTML = colorCount;
	localStorage.setItem("colorCount", colorCount);
}