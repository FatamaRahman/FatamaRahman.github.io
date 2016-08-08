 $(document).ready(function() {
	/*$(function () {
		var delay = 0;
		setTimeout(function() {
			showText("#sub_msg", "Based in New York, I am currently a senior at Fordham College Lincoln Center double majoring in Computer Science & Visual Arts with a concentration in Graphic Design. I'm a total nerd when it comes to designing + developing (the question of the century: should designers code?) and I'm super excited to follow this passion when I graduate in May. In my spare time, I like to use my film camera and spend hours in the dark room, create origami pieces, and type in caps lock because it makes me feel bigger than I am! :D", 0, 50);
		}, delay)

	});*/

	function sub_msg() { 

    	document.getElementById("sub_msg").style.display = "inline"; 
	}

	 $('.header').hide();
	 $('.header').delay(500).fadeIn(500);

	 $('.progress').hide();
	 $('.progress').delay(1000).fadeIn(1000);

	 $('.tools').hide();
	 $('.tools').delay(1500).fadeIn(1500);


	 $('.framelibs').hide();
	 $('.framelibs').delay(2000).fadeIn(2000);

	 $('.courses').hide();
	 $('.courses').delay(2500).fadeIn(2500);

	 $('.currentcourses').hide();
	 $('.currentcourses').delay(3000).fadeIn(3000);

	 $('.bootcamps').hide();
	 $('.bootcamps').delay(3500).fadeIn(3500);

	 $('.arrows').hide();
	 $('.arrows').delay(1000).fadeIn(6000);


});