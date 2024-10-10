/*
  [JS Index]
*/


/*
  1. preloader
  2. navigation
  3. fadeIn.element
  4. swiper slider
*/


$(function() {
	"use strict";
	
	
	$(window).on("load", function() {
		// 1. preloader
		$("#preloader").fadeOut(800);
		$(".preloader-bg").delay(600).fadeOut(800);
	});
	
	// 2. navigation
	$(".navigation-fire").on("click", function() {
		if ($(".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right").hasClass("open")) {
			$(".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right").removeClass("open");
		} else {
			$(".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right").addClass("open");
		}
	});
	$("nav.navigation-menu a").on("click", function() {
		$(".panel-from-left, .panel-from-right, .panel-overlay-from-left, .panel-overlay-from-right").removeClass("open");
	});
	
	// 3. fadeIn.element
	setTimeout(function() {
		$(".fadeIn-element").delay(1000).css({
			display: "none"
		}).fadeIn(1200);
	}, 0);

    // 4. swiper slider
    var swiper = new Swiper(".swiper-container-wrapper .swiper-container", {
        preloadImages: false,
        autoplay: false,
        init: true,
        loop: false,
        grabCursor: false,
        mousewheel: false,
        keyboard: false,
        simulateTouch: false,
        parallax: false,
        pagination: false,
        navigation: false,
		scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true
        }
    });
	
	
});