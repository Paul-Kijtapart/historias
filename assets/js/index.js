// Toggle NavBar
$(document).ready(function() {
	$('.right.menu.open').on("click", function(e) {
		e.preventDefault();
		$('.ui.vertical.menu').toggle();
	});

	$('.ui.dropdown').dropdown();
});

$('button#back_to_top_btn').on("click", function(e) {
	e.preventDefault();
	console.log(e.target);
	$("html, body").animate({
		scrollTop: 0
	}, "slow");
});