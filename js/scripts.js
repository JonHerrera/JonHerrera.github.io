/* PRELOADER */
$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
        $('h1').css('color','#222222');
    }, 3000);
 
});

/* SMOOTH SCROLLING */

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

/* ABOUT ME SKILLS CAROUSEL */

	var skillIndex = 1;
	showSkills(skillIndex);
	/* this variable is creating to number each slide */

	function plusSkills(n) {
		showSkills(skillIndex += n);
	/* this is the function called upon when the previous/next silde buttons are clicked. the buttons are -1 and +1 */
	}


	function currentSkill(n) {
	  showSkills(skillIndex = n);
	 /* this is to highlight the current circle according to the picture */
	  
	}

	function showSkills(n) {
		var i;
		/* this variable is used to access the slideIndex */
		var skills = document.getElementsByClassName("skillList");
		
		if (n > skills.length) 
			{skillIndex = 1} 
		
		if (n < 1) 
			{skillIndex = skills.length}
		/* the two above functions are used to give each skide a value */
		
		for (i = 0; i < skills.length; i++) {
			skills[i].style.display = "none"; 
		}
		/* the slides not in use are hidden */
		
		skills[skillIndex-1].style.display = "block";
		/* this makes everything appear */
		
	}