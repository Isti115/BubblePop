"use strict";

//var colors = ["white", "red", "yellow", "green", "cyan", "blue", "purple", "black"];
var colors = ["white", "red", "yellow", "green", "cyan", "blue", "purple"];

var field = new Array();

function init()
{
	var table = document.getElementById("field");
	
	var tableContent = "";
	
	for(var i = 0; i < 10; i++)
	{
		field[i] = new Array();
		
		tableContent += "<tr id='" + i + "'>";
		
		for(var j = 0; j < 10; j++)
		{
			var color = Math.floor(Math.random() * (localStorage.getItem("colorCount"))) + 1;
			field[i][j] = color;
			
			tableContent += "<td class='" + colors[color] + "' id='"+ i + "_" + j +"' onclick='press(" + i + ", " + j + ")'>";
			
			tableContent += "</td>";
		}
		
		tableContent += "</tr>";
	}
	
	table.innerHTML = tableContent;
}

function press(i, j)
{
	if (field[i][j] == 0) {return;};
	
	var oldfield = JSON.parse(JSON.stringify(field));
	var marked = field;
	var counter = {"count": 0};
	check(marked, i, j, counter);
	
	if(counter.count > 1)
	{
		rearrange();
	}
	
	else
	{
		field = oldfield;
	}
}

function check(marked, i, j, counter)
{
	var currColor = marked[i][j];
	marked[i][j] = 0;
	counter.count += 1;
	
	if(i != 0 && currColor == marked[i-1][j])
	{check(marked, i-1, j, counter);}
	
	if(j != 0 && currColor == marked[i][j-1])
	{check(marked, i, j-1, counter);}
	
	if(i != marked.length -1 && currColor == marked[i+1][j])
	{check(marked, i+1, j, counter);}
	
	if(j != marked[i].length -1 && currColor == marked[i][j+1])
	{check(marked, i, j+1, counter);}
}

function rearrange()
{
	var changed = true;
	
	while(changed)
	{
		changed = false;
		
		for(var i = 0; i < field.length - 1; i++)
		{
			for(var j = 0; j < field[i].length; j++)
			{
				if(field[i][j] != 0 && field[i+1][j] == 0)
				{
					field[i+1][j] = field[i][j];
					field[i][j] = 0;
					
					changed = true;
				}
			}
		}
	}
	
	changed = true;
	
	while(changed)
	{
		changed = false;
		
		for(var k = 0; k < field[field.length - 1].length - 1; k++)
		{
			if(field[field.length - 1][k] != 0 && field[field.length - 1][k+1] == 0)
			{
				for(var l = 0; l < field.length; l++)
				{
					var temp = field[l][k+1];
					field[l][k+1] = field[l][k];
					field[l][k] = temp;
				}
				
				changed = true;
			}
		}
	}
	
	for(var k = 0; k < field.length; k++)
	{
		for(var l = 0; l < field[k].length; l++)
		{
			document.getElementById(k + "_" + l).className = colors[field[k][l]];
		}
	}
}