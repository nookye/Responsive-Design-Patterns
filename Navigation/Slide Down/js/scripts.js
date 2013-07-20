$(document).ready(function() {
	$('.menu-icon').on('click',function(e){
		e.preventDefault();
		$(this).siblings('.nav').slideToggle();
	})
});