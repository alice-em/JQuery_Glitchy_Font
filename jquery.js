$(document).ready(function () {

	$('#button').click(function() {
		$('h1.re').animate({
			left: "+=5",
		}, '.5');
		$('h1.re').animate({
			left: "-=10",
		}, '.10');
		$('h1.re').animate({
			left: "+=5",
		}, '.5');
	});
	$('#button').click(function() {
		$('h1.gr').animate({
			left: "-=2",
		}, '.5');
		$('h1.gr').animate({
			left: "+=4",
		}, '.10');
		$('h1.gr').animate({
			left: "-=2",
		}, '.5');
	});
});
