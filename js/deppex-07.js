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
        checkScreenWidth();
	});

    function checkScreenWidth() {
        const infoDiv = document.querySelector('.infoA');
        const infoBtn = document.querySelector('.btn-bodega');
        if (window.innerWidth < 1400) {
            infoDiv.classList.remove('activeinfo');
            infoBtn.classList.remove('active');
        } else {
            infoDiv.classList.add('activeinfo');
            infoBtn.classList.add('active');
        }
    }

    $(window).on('resize', function() {
        checkScreenWidth();
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
        /*autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },*/
        init: true,
        loop: true,
        speed: 1200,
        grabCursor: false,
        mousewheel: true,
        keyboard: true,
        simulateTouch: true,
        parallax: true,
        effect: "slide",
		direction: "vertical",
        pagination: {
            el: ".swiper-slide-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        },
        scrollbar: false
    });
    swiper.on("slideChangeTransitionStart", function() {
        $(".slider-progress-bar").removeClass("slider-active");
        $(".hero-bg").find("video").each(function() {
            this.pause();
        });
    });
    swiper.on("slideChangeTransitionEnd", function() {
        $(".slider-progress-bar").addClass("slider-active");
        $(".hero-bg").find("video").each(function() {
            this.play();
        });
    });
    swiper.on("slideChangeTransitionStart", function() {
        $(".slider-progress-bar").removeClass("slider-active");
    });
    swiper.on("slideChangeTransitionEnd", function() {
        $(".slider-progress-bar").addClass("slider-active");
    });
    var playButton = $(".swiper-slide-controls-play-pause-wrapper");
    function autoEnd() {
        playButton.removeClass("slider-on-off");
        swiper.autoplay.stop();
    }
    function autoStart() {
        playButton.addClass("slider-on-off");
        swiper.autoplay.start();
    }
    playButton.on("click", function() {
        if (playButton.hasClass("slider-on-off")) autoEnd();
        else autoStart();
        return false;
    });
	
	$(document).ready(function() {
        $("#agendarbtn").on("click", function() {        
            swiper.slideTo(5);
        });
    });
    
});

//////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-bodega');
    const infos = {
        "MODELO A": document.querySelector('.infoA'),
        "MODELO B": document.querySelector('.infoB'),
        "MODELO C": document.querySelector('.infoC'),
        "MODELO D": document.querySelector('.infoD')
    };

    const popup = document.getElementById('popup');
    const popupInfo = document.getElementById('popup-info');
    const closePopupButton = document.getElementById('close-popup');

    function openPopup(infoContent) {
        const descripcion = infoContent.querySelector('.descripcion').innerHTML;
        const plano = infoContent.querySelector('.plano').innerHTML;

        // Agrega ambos al popup
        popupInfo.innerHTML = `
            <div class="descripcion">${descripcion}</div>
            <div class="plano">${plano}</div>
        `;
        popup.classList.remove('hidden');
    }

    function closePopup() {
        popup.classList.add('hidden');
    }

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const modelo = this.textContent.trim();
            const selectedInfo = infos[modelo];

            if (window.innerWidth < 1400) {
                openPopup(selectedInfo);
            } else {
                // Comportamiento original para pantallas grandes
                document.querySelector('.btn-bodega.active').classList.remove('active');
                document.querySelector('.activeinfo').classList.remove('activeinfo');
                this.classList.add('active');
                selectedInfo.classList.add('activeinfo');
            }
        });
    });

    closePopupButton.addEventListener('click', closePopup);

    // Cerrar el popup si se hace clic fuera del contenido
    popup.addEventListener('click', function (e) {
        if (e.target === popup) {
            closePopup();
        }
    });
});