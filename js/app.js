$(function() {
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#header_menu");
 	let menu_Toggle = $("#menu_Toggle");

	checkScroll(scrollPos, introH);

// Меню с классом .fixed при  скролле
	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {
		if( scrollPos > introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

 // Переход по странице по клику на меню8
 $("[data-scroll]").on("click", function(event){
 	event.preventDefault(); 
 	let elementID = $(this).data("scroll");
 	let elemenOffset = $(elementID).offset().top;
 	nav.removeClass("show");
 	$("html, body").animate({
 		scrollTop: elemenOffset - 60
 	}, 700);

 });

 // Menu Toggle (открывающееся меню)

 menu_Toggle.on("click", function(event) {
 	event.preventDefault();
 	nav.toggleClass("show");
 });
	
// ClientsSlider
	let slider = $("#clients_slider");

	slider.slick({
	  	infinite: true,
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	fade: true,
	  	arrows: false,
	  	dots: true,
	});

});