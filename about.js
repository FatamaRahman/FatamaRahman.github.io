var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

 $(document).ready(function() {
	function sub_msg() { 

    	document.getElementById("sub_msg").style.display = "inline"; 
	}

	 $('.footer').hide();
	 $('.footer').delay(1000).fadeIn(6000);

});


