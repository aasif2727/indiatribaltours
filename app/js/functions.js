/* ==============================================
	Preload
=============================================== */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({
		'overflow': 'visible'
	});
	$(window).scroll();
})

/* ==============================================
	Sticky nav
=============================================== */
$(window).scroll(function () {
	'use strict';
	if ($(this).scrollTop() > 1) {
		$('header').addClass("sticky");
	} else {
		$('header').removeClass("sticky");
	}
});

/* ==============================================
	Menu
=============================================== */
$('a.open_close').on("click", function () {
	$('.main-menu').toggleClass('show');
	$('.layer').toggleClass('layer-is-visible');
});
$('a.show-submenu').on("click", function () {
	$(this).next().toggleClass("show_normal");
});
$('a.show-submenu-mega').on("click", function () {
	$(this).next().toggleClass("show_mega");
});
if ($(window).width() <= 480) {
	$('a.open_close').on("click", function () {
		$('.cmn-toggle-switch').removeClass('active')
	});
}


	/* Collapse filters */
	if ($(this).width() < 991) {
		$('.collapse#collapseFilters').removeClass('in');
		$('.collapse#collapseFilters').addClass('out');
	} else {
		$('.collapse#collapseFilters').removeClass('out');
		$('.collapse#collapseFilters').addClass('in');
	}


/* ==============================================
	Overaly mask form + incrementer
=============================================== */
$('.expose').on("click", function (e) {
	"use strict";
	$(this).css('z-index', '4');
	$('#overlay').fadeIn(300);
});
$('#overlay').click(function (e) {
	"use strict";
	$('#overlay').fadeOut(300, function () {
		$('.expose').css('z-index', '3');
	});
});

/* ==============================================
	Common
=============================================== */
/* Tooltip */
$('.tooltip-1').tooltip({
	html: true
});

/* Accordion */
function toggleChevron(e) {
	$(e.target)
		.prev('.panel-heading')
		.find("i.indicator")
		.toggleClass('icon-plus icon-minus');
}
$('.panel-group').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);

/* Button show/hide map */
$(".btn_map").on("click", function () {
	var el = $(this);
	el.text() == el.data("text-swap") ? el.text(el.data("text-original")) : el.text(el.data("text-swap"));
});

/* Animation on scroll */
new WOW().init();

/* Video modal dialog + Parallax + Scroll to top + Incrementer */
$(function () {
	'use strict';
	$('.video').magnificPopup({
		type: 'iframe'
	}); /* video modal*/
	$('.parallax-window').parallax({zIndex:1}); /* Parallax modal*/
	// Image popups

	$('.magnific-gallery').each(function () {
		$(this).magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	});

	$('.dropdown-menu').on("click", function (e) {
		e.stopPropagation();
	}); /* top drodown prevent close*/

	$('ul#top_tools li .dropdown').hover(function () {
		$(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(300);
	}, function () {
		$(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(300);
	});

	/* Hamburger icon */
	var toggles = document.querySelectorAll(".cmn-toggle-switch");

	for (var i = toggles.length - 1; i >= 0; i--) {
		var toggle = toggles[i];
		toggleHandler(toggle);
	};

	function toggleHandler(toggle) {
		toggle.addEventListener("click", function (e) {
			e.preventDefault();
			(this.classList.contains("active") === true) ? this.classList.remove("active"): this.classList.add("active");
		});
	};

	/* Scroll to top*/
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').on("click", function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	});

	/* Input incrementer*/
	$(".numbers-row").append('<div class="inc button_inc">+</div><div class="dec button_inc">-</div>');
	$(".button_inc").on("click", function () {

		var $button = $(this);
		var oldValue = $button.parent().find("input").val();

		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 1) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find("input").val(newVal);
	});
});

/* Cat nav onclick active */
$('ul#cat_nav li a').on('click', function () {
	$('ul#cat_nav li a.active').removeClass('active');
	$(this).addClass('active');
});

/* Map filter onclick active */
$('#map_filter ul li a').on('click', function () {
	$('#map_filter ul li a.active').removeClass('active');
	$(this).addClass('active');
});

/* Input range slider */
$(function () {
	'use strict';
	$("#range").ionRangeSlider({
		hide_min_max: true,
		keyboard: true,
		min: 0,
		max: 150,
		from: 30,
		to: 100,
		type: 'double',
		step: 1,
		prefix: "$",
		grid: true
	});

});

/* Footer reveal */
if ($(window).width() >= 768) {
	$('footer.revealed').footerReveal({
	shadow: false,
	opacity:0.6,
	zIndex: 0
});
}

/* Search */
$(".search-overlay-menu-btn").on("click", function (a) {
$('body').addClass('has-fullscreen-modal')
$(".search-overlay-menu").addClass("open"), $('.search-overlay-menu > form > input[type="search"]').focus()}), 
$(".search-overlay-close").on("click", function (a) {
$(".search-overlay-menu").removeClass("open")
$('body').removeClass('has-fullscreen-modal')
}),
$(".search-overlay-menu, .search-overlay-menu .search-overlay-close").on("click keyup", function (a) {
	(a.target == this || "search-overlay-close" == a.target.className || 27 == a.keyCode) && $(this).removeClass("open")
});

/* Date and time picker v2 */
$('.booking_date').dateDropper();
$('.booking_time').timeDropper({
	setCurrentTime: false,
	meridians: true,
	primaryColor: "#e74e84",
	borderColor: "#e74e84",
	minutesInterval: '15'
});
