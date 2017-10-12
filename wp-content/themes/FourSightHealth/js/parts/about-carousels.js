//USE THE BELOW AS TEMPLATE FOR FUNCTION FILES
(function ($, root, undefined) {
	
	$(function () {

			
		$('.clientCarousel').imagesLoaded(function () {
    	
		  $('.clientCarousel').slick({
		    slidesToShow: 3,
			  slidesToScroll: 1,
			  autoplay: true,
			  infinite: true,
			  dots: true, 
			  arrows: false, 
			  autoplaySpeed: 3000, 
			  pauseOnHover:true,
			  cssEase: 'linear',
			  appendDots:$('.clientDots'),
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


		$('.advisorCarousel').imagesLoaded(function () {
    	
		  $('.advisorCarousel').slick({
		    slidesToShow: 3,
			  slidesToScroll: 1,
			  autoplay: true,
			  infinite: true,
			  centerMode: true,
			  arrows: false, 
			  autoplaySpeed:0, 
			  speed:2000,
			  pauseOnHover:false,
			  cssEase: 'linear',
			  initialSlide: 1,
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


		$('.aboutTestimonialCarousel').imagesLoaded(function () {
    	
		  $('.aboutTestimonialCarousel').slick({
		    slidesToShow: 2,
			  slidesToScroll: 1,
			  autoplay: false,
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


