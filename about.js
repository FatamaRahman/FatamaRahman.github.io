var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

// $(function () {

// 	showText("#sub_msg", "& I am a 21 year old aspiring to be a web developer.", 0, 100);

// });

// function sub_msg() { 
//     document.getElementById("sub_msg").style.display = "inline"; 
// }


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

	 $('#footer').hide();
	 $('#footer').delay(1000).fadeIn(6000);
	// $('.description').hide();
	// $('.description').delay(1000).fadeIn(6000);


});


var app = angular.module('nyApp', ['ngAnimate']);

app.controller('nyController', function ($scope) {
  
});


