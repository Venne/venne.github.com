$(function () {

	// hack for scrollspy
	var offset = 110;
	$('#navigation li a').click(function (event) {
		event.preventDefault();
		$($(this).attr('href'))[0].scrollIntoView();
		scrollBy(0, -offset);
	});

	// shadow
	$(window).scroll(function (e) {
		if ($(window).scrollTop() == 0) {
			$('#navigation .shadow').css({ 'opacity':0 });
		} else if ($(window).scrollTop() < 50) {
			$('#navigation .shadow').css({ 'opacity':$(window).scrollTop() / 50 });
		} else {
			$('#navigation .shadow').css({ 'opacity':1 });
		}
	});

	//slider
	window.myFlux = new flux.slider('#slider .photos', {
		transitions: ['dissolve']
	});
});