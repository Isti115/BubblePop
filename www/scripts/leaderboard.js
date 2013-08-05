function init()
{
	var highscores = JSON.parse(localStorage.getItem("highscores"));
	var colorCount = parseInt(localStorage.getItem("colorCount"));
	
	var bodyContent = "";
	
	for(var i = 0; i < highscores[colorCount - 1].length; i++)
	{
		bodyContent += "<tr>";
		
		bodyContent += "<td>" + (i + 1) + ".</td><td class='name'>" + highscores[colorCount - 1][i].name + "</td><td>" + highscores[colorCount - 1][i].score + "</td>";
		
		bodyContent += "</tr>";
	}
	
	document.getElementById("leaderboardBody").innerHTML = bodyContent;
}

function selectColorCount(x, relative)
{
	var colorCount = parseInt(localStorage.getItem("colorCount"));
	
	if(relative)
	{
		colorCount += x;
	}
	
	else
	{
		colorCount = x;
	}
	
	colorCount = colorCount < 1 ? 1 : colorCount;
	colorCount = colorCount > 6 ? 6 : colorCount;
	
	localStorage.setItem("colorCount", colorCount);
	
	location.reload();
}