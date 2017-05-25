
$(document).ready(function() {
	$('.right.menu.open').on("click", function(e) {
			e.preventDefault();
			$('.ui.vertical.menu').toggle();
	});

	$('.ui.vertical.menu').toggle();

	$('button#back_to_top_btn').on("click", function(e) {
		e.preventDefault();
		console.log(e.target);
		$("html, body").animate({
			scrollTop: 0
		}, "slow");
	});

	// $(".farmerImagesSlide").slick({
	// 	infinite: true,
	// 	speed: 300,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	dots: true
	// });
});

function back() {
	window.history.back();
}