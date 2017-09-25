//USE THE BELOW AS TEMPLATE FOR FUNCTION FILES
(function ($, root, undefined) {
	
	$(function () {

		$('.testimonialCarousel').imagesLoaded(function () {
    	
		  $('.testimonialCarousel').slick({
		    slidesToShow: 1,
			  slidesToScroll: 1,
			  autoplay: true,
			  infinite: true,
			  dots: true, 
			  arrows: false, 
			  autoplaySpeed: 3000, 
			  pauseOnHover:true,
			  cssEase: 'linear',
			  appendDots:$('.testimonialDots')
			})
		});

	});

})(jQuery, this);