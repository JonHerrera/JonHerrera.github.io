/* JONATHAN HERRERA */

/* SITE NAVIGATION */
/* the following function will load the site pages depending on which link is clicked */
/* the functionality is the same as the slideshow below. each "page" is simply being hidden from the viewer until the link is clicked. this prevents loading other pages as everything is on the same page */
	var siteIndex = 1;
	showSite(siteIndex);
	/* this variable is creating to number each site page */

	function currentSite(n) {
	  showSite(siteIndex = n);
	 /* this is to highlight the current link according to the page */
	  
	}

	function showSite(n) {
		var i;
		/* this variable is used to access the siteIndex */
		var sites = document.getElementsByClassName("sitePage");
		var links = document.getElementsByClassName("mainLink");
		
		if (n > sites.length) 
			{siteIndex = 1} 
		
		if (n < 1) 
			{siteIndex = sites.length}
		/* the two above functions are used to give each link a value */
		
		for (i = 0; i < sites.length; i++) {
			sites[i].style.display = "none"; 
		}
		/* the other pages are hidden */
		
		for (i = 0; i < links.length; i++) {
			links[i].className = links[i].className.replace(" active", "");
		}
		/* when the index number matches the links value, we are assigning that link will appear in the body */
		
		sites[siteIndex-1].style.display = "flex";
		/* this makes the page appear. the value is flex becuase if it was block then all of the contents would become block items and then stack on each other */
		
		links[siteIndex-1].className = " active";
		/* this will highlight the dot that associated with the active slide */
	}	
	
/* SLIDESHOW */
/* from w3schools */
	var slideIndex = 1;
	showSlides(slideIndex);
	/* this variable is creating to number each slide */

	function plusSlides(n) {
		showSlides(slideIndex += n);
	/* this is the function called upon when the previous/next silde buttons are clicked. the buttons are -1 and +1 */
	}


	function currentSlide(n) {
	  showSlides(slideIndex = n);
	 /* this is to highlight the current circle according to the picture */
	  
	}

	function showSlides(n) {
		var i;
		/* this variable is used to access the slideIndex */
		var slides = document.getElementsByClassName("mySlides");
		var dots = document.getElementsByClassName("dot");
		
		if (n > slides.length) 
			{slideIndex = 1} 
		
		if (n < 1) 
			{slideIndex = slides.length}
		/* the two above functions are used to give each skide a value */
		
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none"; 
		}
		/* the slides not in use are hidden */
		
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		/* when the index number matches the slides value, we are assigning that slide the active class for manipulation */
		
		slides[slideIndex-1].style.display = "block";
		/* this makes everything appear */
		
		dots[slideIndex-1].className += " active";
		/* this will highlight the dot that associated with the active slide */
	}
	
/* NAVBAR OVERLAY */
/* from w3schools */
	/* Open when someone clicks on the span element */
	function openNav() {
		document.getElementById("myNav").style.height = "100%";
	}

	/* Close when someone clicks on the "x" symbol inside the overlay */
	function closeNav() {
		document.getElementById("myNav").style.height = "0%";
	}
	
	/* when the mobile overlay was closed and the browser resized back to maximum width, the nav would not appear because the width was set to 0. with this function, the browser will automatically bring the nav back when resized */
	function navChange() {
		var w = window.outerWidth;
		
		if (w >600) {
			document.getElementById("myNav").style.height = "100%";
		}
		
		if (w <= 600) {
			document.getElementById("myNav").style.height = "0%";
		}
	}