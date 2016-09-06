//JONATHAN HERRERA
//CIRCLE GRAPH ANIMATIONS
//followed tutorial by Adam Khoury on YouTube
//probably a much better way to optimize my code but I'll figure it out later
//HTML
window.addEventListener("load", runBars);

var g1 = document.getElementById("htmlSkill").getContext("2d");

	var al = 0;
	//this is the starting amount of the circle
	var start = 4.72;
	//this starts the progress bar ath the 12oclock position
	var cw = g1.canvas.width;
	var ch = g1.canvas.height;
	//these are the sizes of the canvas
	var diff;
	//this is the difference from the amount loaded
	var fontS = "100% Verdana, Geneva, sans-serif";
	
	var barColorGreat = "#2BB0BF";
	var barColorGood = "#7CEECE";
	var barColorOkay = "#F7E999";
	var barColorBad = "#F85066";

	function progressBar() {
		diff = ((al / 100) * Math.PI*2*10).toFixed(2);
		//(al/100) is the percent
		//toFixed rounds to 2 decimals
		g1.clearRect(0, 0, cw, ch);
		//clears the rectangle for every new frameElement
		g1.lineWidth = 20;
		//how thick the line is
		g1.lineCap = "round";
		g1.fillStyle = '#717171';
		//the whole circle color
		
		if (al < 50) {
			g1.strokeStyle = barColorBad;
		}
		else if (al < 70) {
			g1.strokeStyle = barColorOkay;
		}
		else if (al < 80) {
			g1.strokeStyle = barColorGood;
		}
		else {
			g1.strokeStyle = barColorGreat;
		}
		//the progress bar color
		//would like to make a nice gradient as it progresses but this'll do for now
		g1.textAlign = "center";
		//for the percentages
		g1.font = fontS;
		g1.fillText("HTML5", cw*.5, ch*.5-20, cw);
		g1.fillText(al+'%', cw*.5, ch*.5+20, cw);
		//(%, width, height, max-width
		g1.beginPath();
		g1.arc(cw/2, ch/2, (ch/2)-20, start, diff/10+start, false);
		//this draws the actual loading bar
		g1.stroke();
		if(al >= 86) {
		//when the percent reaches this amount
			clearTimeout(sim);
			//the animation will stop
		}
		al++;	
	}

	function runHTML() {
		setInterval(progressBar, 10);
	}
	//this will animate the progress bar

//CSS
var g2 = document.getElementById("cssSkill").getContext("2d");

	var al2 = 0;
	//this is the starting amount of the circle

	var diff2;
	//this is the difference from the amount loaded

	function progressBar2() {
		diff2 = ((al2 / 100) * Math.PI*2*10).toFixed(2);
		//(al/100) is the percent
		//toFixed rounds to 2 decimals
		g2.clearRect(0, 0, cw, ch);
		//clears the rectangle for every new frameElement
		g2.lineWidth = 20;
		//how thick the line is
		g2.lineCap = "round";
		g2.fillStyle = '#717171';
		//the whole circle color
		if (al2 < 50) {
			g2.strokeStyle = barColorBad;
		}
		else if (al2 < 70) {
			g2.strokeStyle = barColorOkay;
		}
		else if (al2 < 80) {
			g2.strokeStyle = barColorGood;
		}
		else {
			g2.strokeStyle = barColorGreat;
		}
		//the progress bar color
		g2.textAlign = "center";
		//for the percentages
		g2.font = fontS;
		g2.fillText("CSS3", cw*.5, ch*.5-20, cw);
		g2.fillText(al2+'%', cw*.5, ch*.5+20, cw);
		//(%, width, height, max-width
		g2.beginPath();
		g2.arc(cw/2, ch/2, (ch/2)-20, start, diff2/10+start, false);
		//this draws the actual loading bar
		g2.stroke();
		if(al2 >= 65) {
		//when the percent reaches this amount
			clearTimeout(sim2);
			//the animation will stop
		}
		al2++;	
	}

	function runCSS() {
		setInterval(progressBar2, 10);
		//this will animate the progress bar
	}
	
//JS
var g3 = document.getElementById("jsSkill").getContext("2d");

	var al3 = 0;
	//this is the starting amount of the circle

	var diff3;
	//this is the difference from the amount loaded

	function progressBar3() {
		diff3 = ((al3 / 100) * Math.PI*2*10).toFixed(2);
		//(al/100) is the percent
		//toFixed rounds to 2 decimals
		g3.clearRect(0, 0, cw, ch);
		//clears the rectangle for every new frameElement
		g3.lineWidth = 20;
		//how thick the line is
		g3.lineCap = "round";
		g3.fillStyle = '#717171';
		//the whole circle color
		if (al3 < 50) {
			g3.strokeStyle = barColorBad;
		}
		else if (al3 < 70) {
			g3.strokeStyle = barColorOkay;
		}
		else if (al3 < 80) {
			g3.strokeStyle = barColorGood;
		}
		else {
			g3.strokeStyle = barColorGreat;
		}
		//the progress bar color
		g3.textAlign = "center";
		//for the percentages
		g3.font = fontS;
		g3.fillText("JS", cw*.5, ch*.5-20, cw);
		g3.fillText(al3+'%', cw*.5, ch*.5+20, cw);
		//(%, width, height, max-width
		g3.beginPath();
		g3.arc(cw/2, ch/2, (ch/2)-20, start, diff3/10+start, false);
		//this draws the actual loading bar
		g3.stroke();
		if(al3 >= 76) {
		//when the percent reaches this amount
			clearTimeout(sim3);
			//the animation will stop
		}
		al3++;	
	}

	function runJS() {
		setInterval(progressBar3, 10);
		//this will animate the progress bar
	}

var g4 = document.getElementById("lifeSkill").getContext("2d");

	var al4 = 0;
	//this is the starting amount of the circle

	var diff4;
	//this is the difference from the amount loaded

	function progressBar4() {
		diff4 = ((al4 / 100) * Math.PI*2*10).toFixed(2);
		//(al/100) is the percent
		//toFixed rounds to 2 decimals
		g4.clearRect(0, 0, cw, ch);
		//clears the rectangle for every new frameElement
		g4.lineWidth = 20;
		//how thick the line is
		g4.lineCap = "round";
		g4.fillStyle = '#717171';
		//the whole circle color
		if (al4 < 50) {
			g4.strokeStyle = barColorBad;
		}
		else if (al4 < 70) {
			g4.strokeStyle = barColorOkay;
		}
		else if (al4 < 80) {
			g4.strokeStyle = barColorGood;
		}
		else {
			g4.strokeStyle = barColorGreat;
		}
		//the progress bar color
		g4.textAlign = "center";
		//for the percentages
		g4.font = fontS;
		g4.fillText("ALC", cw*.5, ch*.5-20, cw);
		g4.fillText(al4+'%', cw*.5, ch*.5+20, cw);
		//(%, width, height, max-width
		g4.beginPath();
		g4.arc(cw/2, ch/2, (ch/2)-20, start, diff4/10+start, false);
		//this draws the actual loading bar
		g4.stroke();
		if(al4 >= 83) {
		//when the percent reaches this amount
			clearTimeout(sim4);
			//the animation will stop
		}
		al4++;	
	}

	function runLife() {
		setInterval(progressBar4, 10);
		//this will animate the progress bar
	}

function runBars() {
	resetBars();
	runHTML();
	runCSS();
	runJS();
	runLife();
}

function resetBars() {
	al = 0;
	al2 = 0;
	al3 = 0;
	al4 = 0;
}