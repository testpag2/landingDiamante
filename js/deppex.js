/*
  [JS Index]
*/


/*
  1. preloader
  2. navigation
  3. animate elements
  4. to top animation
  5. justify gallery
  6. owlCarousel
  7. magnificPopup
  8. toggle blog panels
  9. contact form
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
	
	$(window).on("scroll", function() {
		// 3. animate elements
		if ($(this).scrollTop() > 100) {
			$(".round-menu").addClass("direction");
			$(".to-top-arrow").addClass("show");
		} else {
			$(".round-menu").removeClass("direction");
			$(".to-top-arrow").removeClass("show");
		}
	});
	
	// 4. to top animation
	$(".to-top-arrow").on("click", function() {
		$("body, html").animate({
			scrollTop: 0
		}, 1000);
		return false
	})
	
	// 5. justify gallery
	$(".works-justify-gallery").justifiedGallery({
		rowHeight: 600,
		lastRow: "justify", // options: "justify" "nojustify" "hide" "center" "right"
		margins: 30,
		captions: false
	});
	
	// 6. owlCarousel
	$("#owl-carousel-about").owlCarousel({
		loop: false,
		center: false,
		autoplay: false,
		autoplaySpeed: 1000,
		autoplayTimeout: 5000,
		smartSpeed: 450,
		nav: false,
		nav: true,
		navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
		navContainer: '.owl-nav-custom-all',
		responsive: {
			0: {
				items: 1,
				margin: 30
			},
			768: {
				items: 2,
				margin: 30
			},
			980: {
				items: 2,
				margin: 50
			},
			1240: {
				items: 3,
				margin: 50
			}
		}
	});
	
	// 7. magnificPopup
	$(".popup-photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: false,
            tPrev: "",
            tNext: "",
            tCounter: "%curr% / %total%"
        },
        removalDelay: 100,
        mainClass: "mfp-fade",
        fixedContentPos: false
    });
	$(".popup-photo-gallery").each(function() {
		$(this).magnificPopup({
			delegate: "a",
			type: "image",
			gallery: {
				enabled: true
			},
			removalDelay: 100,
			mainClass: "mfp-fade",
			fixedContentPos: false
		});
	});
	
	// 8. toggle blog panels
	$(".blog-side-launcher").on("click", function() {
		var divClass = $(this).attr("data-id");
		if ($(this).hasClass("open")) {
			$(this).removeClass("open");
			$("." + divClass).addClass("open");
		} else {
			$(this).addClass("open");
			$("." + divClass).addClass("open");
		}
	});
	$(".blog-side-launch, .blog-side-text").on("click", function() {
		$(".panel-from-left-blog, .panel-overlay-from-right-blog").removeClass("open");
	});
	
	// 9. contact form
	$("form#form").on("submit", function() {
		$("form#form .error").remove();
		var s = !1;
		if ($(".requiredField").each(function() {
				if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass("inputError"), s = !0;
				else if ($(this).hasClass("email")) {
					var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass("inputError"), s = !0);
				}
			}), !s) {
			$("form#form input.submit").fadeOut("normal", function() {
				$(this).parent().append("");
			});
			var r = $(this).serialize();
			$.post($(this).attr("action"), r, function() {
				$("form#form").slideUp("fast", function() {
					$(this).before('<div class="success">Your email was sent successfully.</div>');
				});
			});
		}
		return !1;
	});
	
	
});