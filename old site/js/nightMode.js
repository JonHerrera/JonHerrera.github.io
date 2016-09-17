function toggleNight() {
	
	var checkToggle = document.getElementById("nightToggle").checked;
	var getID = document.getElementById;
	var getBody = document.getElementsByTagName("body")[0];
	
	switch (checkToggle) {
		case true:
			//MAIN BODY STYLES
			getBody.style.backgroundColor = "black";
			document.getElementsByClassName("overlay")[0].style.borderBottom = "1px solid white";
			//this is the nav bottom border		
			
			//HOMEPAGE STYLES
			document.getElementById("homePage").style.backgroundColor = "rgba(190,190,190,.5)";
			
			//ABOUT ME STYLES
			
			
			//PROJECTS STYLES
			document.getElementById("portfolioPage").querySelectorAll("p")[0].style.color = "rgba(255,255,255,.8)";
			//I am calling an id first and now Im selecting the tags within that ID
			break;
		
		case false:
			//MAIN BODY STYLES
			getBody.style.backgroundColor = "white";
			document.getElementsByClassName("overlay")[0].style.borderBottom = "1px solid black";
			
			//HOMEPAGE STYLES
			document.getElementById("homePage").style.backgroundColor = "rgba(0,0,0,0.05)";
			
			//ABOUT ME STYLES
			
			//PROJECTS STYLES
			document.getElementById("portfolioPage").querySelectorAll("p")[0].style.color = "black";
			
			break;
	}
}