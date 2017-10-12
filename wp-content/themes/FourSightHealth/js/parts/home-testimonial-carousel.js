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
			  appendDots:$('.testimonialDots'),
			  responsive: [
			  {
		      breakpoint: 1023, //at 600px wide, only 2 slides will show
		      settings: {
		        slidesToShow: 1
		      }
		    }
		    ]
			})
		});

	});

})(jQuery, this);