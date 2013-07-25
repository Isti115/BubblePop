"use strict";

var colorCountSlider, colorCountLabel;
var squareDisplay, circleDisplay;

function init()
{
	colorCountSlider = document.getElementById("colorCountSlider");
	colorCountLabel = document.getElementById("colorCountLabel");
	squareDisplay = document.getElementById("squareDisplay");
	circleDisplay = document.getElementById("circleDisplay");
	
	if(!localStorage.getItem("colorCount")){localStorage.setItem("colorCount", 4);}
	colorCountSlider.value = localStorage.getItem("colorCount");
	colorCountLabel.innerHTML = localStorage.getItem("colorCount");
	
	if (localStorage.getItem("useSquare")) {squareDisplay.checked = true;}
	else {circleDisplay.checked = true;}
	
	squareDisplay.addEventListener("click", function(){localStorage.setItem("useSquare", "true");}, false);
	circleDisplay.addEventListener("click", function(){localStorage.setItem("useSquare", "");}, false);
	
	colorCountSlider.addEventListener("change", setColorCount, false);
}

function setColorCount()
{
	colorCountLabel.innerHTML = colorCountSlider.value;
	localStorage.setItem("colorCount", colorCountSlider.value);
}