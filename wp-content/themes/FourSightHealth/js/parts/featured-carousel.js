$(function featureSlider() {

	$('.featuredSlider').imagesLoaded(function () {

		if (screen.width >= 767){

			$('.featuredSlider').slick({
		    slidesToShow: 1,
			  slidesToScroll: 1,
			  autoplay: true,
			  infinite: true,
			  dots: false,
			  arrows: true,
				prevArrow: $('.featuredPrevArrow'),
				nextArrow: $('.featuredNextArrow'),
			  autoplaySpeed: 3000,
			  pauseOnHover:true,
			  cssEase: 'linear',
			  appendDots:$('.featuredDots')
			})
		} else {
			$('.featuredSlider').slick({
		    slidesToShow: 1,
			  slidesToScroll: 1,
			  autoplay: true,
			  infinite: true,
			  dots: false,
			  arrows: false,
			  autoplaySpeed: 3000,
			  pauseOnHover:true,
			  cssEase: 'linear',
			})
		}


	});
});
