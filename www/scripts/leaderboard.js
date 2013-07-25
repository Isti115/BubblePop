function init()
{
	alert("highscores...");
	
	if(!localStorage.getItem("highscores"))
	{
		var highscores = [];
		
		for(var i = 0; i < 10; i++)
		{
			highscores[i] = {"name": "nobody", "score": 0};
		}
		
		localStorage.setItem("highscores", JSON.stringify(highscores));
	}
	
	var highscores = JSON.parse(localStorage.getItem("highscores"));
	
	var bodyContent = "";
	
	for(var i = 0; i < highscores.length; i++)
	{
		bodyContent += "<tr>";
		
		bodyContent += "<td>" + (i + 1) + "</td><td>" + highscores[i].name + "</td><td>" + highscores[i].score + "</td>";
		
		bodyContent += "</tr>";
	}
	
	document.getElementById("leaderboardBody").innerHTML = bodyContent;
}