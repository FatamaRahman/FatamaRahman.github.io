var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}


$(window).load(function() {
	$(function () {
		var delay = 2000;
  		showText("#msg", "Hi, I'm Fatama", 0, 50);
	});

	$(function () {
		var delay = 2000;
  		showText("#sub_msg", "I'm working on this website, please visit soon!", 0, 20);
	});

	function sub_msg() { 

    	document.getElementById("sub_msg").style.display = "inline"; 
	}

	 $('.body').hide();
	 $('.body').delay(2000).fadeIn(3000);
});