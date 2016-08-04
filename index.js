var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}


$(document).ready(function() {
	$(function () {

  		showText("#msg", "Hi, I'm Fatama Rahman", 0, 100);

	});

	$(function () {
		var delay = 2200;
		setTimeout(function() {
			showText("#sub_msg", "& I'm an aspiring web developer.", 0, 50);
		}, delay)

	});

	function sub_msg() { 

    	document.getElementById("sub_msg").style.display = "inline"; 
	}

	 $('.footer').hide();
	 $('.footer').delay(1000).fadeIn(6000);
});