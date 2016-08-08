$(document).ready(function() {

	$('.experience').hide();
	$('.experience').delay(300).fadeIn(300);

	$('.codepath').hide();
	$('.codepath').delay(800).fadeIn(800);

 	$('.craftsman').hide();
	$('.craftsman').delay(1300).fadeIn(1300);

  	$('.ci').hide();
	$('.ci').delay(1800).fadeIn(1800);

	$('#footer').hide();
	$('#footer').delay(2300).fadeIn(2300);


  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

   $('.arrows').hide();
   $('.arrows').delay(1000).fadeIn(6000);

});