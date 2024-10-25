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

    /***************** brochure ***************************************/
    $(document).on("click", ".btn-brochure", function(event) {
        openPopupForm();
    });

    $(document).on("click", ".btn-brochure-mov", function(event) {
        openPopupForm();
    });

    $(document).on("click", ".btn-sabermas", function(event) {
        openPopupForm2();
    });

    $('#open-map-popup').on('click', function(event) {
        $('#map-popup').removeClass('hidden'); 
    });

    $('#close-map-popup').on('click', function() {
        $('#map-popup').addClass('hidden'); // Oculta el popup
    });

    // Función para abrir el popup
    function openPopupForm() {
        $("#popup-form-brochure").removeClass("hidden");
    }

    // Función para cerrar el popup
    $("#close-popup-form").on("click", function() {
        $("#popup-form-brochure").addClass("hidden");
    });

    // Cerrar el popup si se hace clic fuera del contenido
    $("#popup-form-brochure").on("click", function(e) {
        if (e.target === this) {
            $(this).addClass("hidden");
        }
    });

    // Procesar el formulario y descargar el archivo
    $("#brochure-form").on("submit", function(event) {
        $("#popup-form-brochure").addClass("hidden");  
        setTimeout(function() {
            downloadBrochure();
        }, 2000);
    });

    // Función para descargar el brochure
    function downloadBrochure() {
        const link = document.createElement("a");
        link.href = "docs/brochure-complejo-diamante-inversionista.pdf";
        link.download = "brochure.pdf";
        link.target= "_blank"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

      // Función para abrir el popup
      function openPopupForm2() {
        $("#popup-form-brochure2").removeClass("hidden");
    }

    // Función para cerrar el popup
    $("#close-popup-form2").on("click", function() {
        $("#popup-form-brochure2").addClass("hidden");
    });

    // Cerrar el popup si se hace clic fuera del contenido
    $("#popup-form-brochure2").on("click", function(e) {
        if (e.target === this) {
            $(this).addClass("hidden");
        }
    });

    // Procesar el formulario y descargar el archivo
    $("#brochure-form2").on("submit", function(event) {
        $("#popup-form-brochure2").addClass("hidden");  
        setTimeout(function() {
            downloadBrochure2();
        }, 2000);
    });

    // Función para descargar el brochure
    function downloadBrochure2() {
        const link = document.createElement("a");
        link.href = "docs/mini-brochure-inv.pdf";
        link.download = "mini-brochure.pdf";
        link.target= "_blank"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
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