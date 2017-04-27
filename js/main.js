$(function () {

	$(".to-top").click(function (event) {
		event.preventDefault();
		$('html, body')
			.animate({scrollTop: 0}, 800);
		return false;
	});


	var $overlayBg = $("#overlay-bg"),
		$overlayWindow = $("#overlay-window"),
		$overlay = $("#overlay-bg, #overlay-window"),
		$overlayImg = $("#overlay-window").find("img");

	var hideTime = 400;

	$overlay.hide();

	$overlay.click(function (event) {
		event.preventDefault();
		$overlayBg.hide(); 
		$overlayWindow.hide(hideTime);
		return false;
	});

	$(".zoom-button").click(function (event) {
		event.preventDefault();
		var imgSrc = $(this)
			.parent(".portfolio-work")
			.children(".portfolio-work__img-container").find("img").attr("src");
		$overlayImg.attr("src", imgSrc);
		$overlayBg.show(); 
		$overlayWindow.show(hideTime);
		return false;
	})

});