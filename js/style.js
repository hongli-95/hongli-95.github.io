// <!-- a little js and jQuery for the navbar visual effect

var $nav = $('#mainNavbar');
var $hamburger = $('#hamburger');

$(function () {
	$(document).scroll(function () {
		$nav.toggleClass('scroll', $(this).scrollTop() > $nav.height());
	});
});

$(function () {
	$hamburger.on('click', function () {
		if ($(document).scrollTop() < $nav.height()) $nav.toggleClass('scroll');
	});
});
