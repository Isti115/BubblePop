"use strict";

var colorCountSlider, colorCountLabel;

function init()
{
	colorCountSlider = document.getElementById("colorCountSlider");
	colorCountLabel = document.getElementById("colorCountLabel");
	
	colorCountSlider.addEventListener("change", setColorCount, false);
}

function setColorCount()
{
	colorCountLabel.innerHTML = colorCountSlider.value;
	localStorage.setItem("colorCount", colorCountSlider.value);
}