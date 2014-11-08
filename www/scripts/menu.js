"use strict";

var version = 0.9;

var colorCount;
var colorDecrement, colorIncrement, colorCountImage;
var squareDisplay, circleDisplay;

function init()
{
	if(localStorage.getItem("version") != version)
	{
		localStorage.clear();
		localStorage.setItem("version", version);
	}
	
	if(!localStorage.getItem("highscores"))
	{
		var highscores = [];
		
		for(var i = 0; i < 6; i++)
		{
			highscores[i] = [];
			
			for(var j = 0; j < 10; j++)
			{
				highscores[i][j] = {"name": "nobody", "score": 0};
			}
		}
		
		localStorage.setItem("highscores", JSON.stringify(highscores));
	}
	
	colorDecrement = document.getElementById("colorDecrement");
	colorIncrement = document.getElementById("colorIncrement");
	colorCountImage = document.getElementById("colorCountImage");
	
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
	
	colorCountImage.style.width = 32 + ((8 + 32) * (colorCount - 1)) + "px";
	localStorage.setItem("colorCount", colorCount);
}