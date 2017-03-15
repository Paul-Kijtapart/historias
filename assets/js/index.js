// Toggle NavBar
$(document).ready(function() {
	this.page = "home";

	$('.right.menu.open').on("click", function(e) {
		e.preventDefault();
		$('.ui.vertical.menu').toggle();
	});
	$('.ui.vertical.menu').toggle();
});

// Back to top
function back_to_top() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}