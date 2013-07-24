$(document).ready(function() {

	$('.nav').find('li').each(function() {
		if($(this).find("ul").length > 0) {
			$(this).addClass("hasChildren");
		}
	});

	$('.menu-icon').on('click',function(e){
		e.preventDefault();
		$(this).siblings('.nav').slideToggle();
	});

	$('.hasChildren a').on('click',function(e){
		e.preventDefault();
		$(this).parent().children('ul').slideToggle();
	});
});