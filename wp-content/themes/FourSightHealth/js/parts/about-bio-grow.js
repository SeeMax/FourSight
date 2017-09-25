//USE THE BELOW AS TEMPLATE FOR FUNCTION FILES
(function ($, root, undefined) {	
	$(function () {
	
		$( ".meet-members-container" ).each(function() {
			var tl = new TimelineMax({})
					globalEase = Circ.easeIn
					
			$('.meet-details', this).each(function() {
				var words = $(this).parent().find('p')
						closedHeight	=	$(this).height()
						gradient = $(this).parent().find('.gradient')
						linker = $(this).parent().find('.more-link')
						origHeight = words.height();

				console.log(origHeight)

				// Store Original Height as a data attribute
				linker.data("origHeight", origHeight)
				linker.data("closedHeight", closedHeight)

  			if (words.height() > $(this).height()) {
  				console.log("ok")
  				tl.set(words,{height:$(this).height()})
  			} else {
  				tl.set(linker, {opacity:0})
  				tl.set(gradient, {opacity:0})
  			}

			});
		});
			

		$(".more-link").on('click', function() {
			// alert($(this).data( "origHeight" ) );
			var tl = new TimelineMax()
					theContent = $(this).parent().find('p')
					theGradient = $(this).parent().find('.gradient')
					theLink = $(this).parent().find('.more-link')
					theHeight = $(this).data( "origHeight" )
					closedHeight = $(this).data( "closedHeight" )


		if ($(this).hasClass("openBio")) {
			
			theLink.html('Read More')
			$(this).removeClass('openBio')

			tl.to(theContent, .4, {height:closedHeight}, "rollIn")
				.to(theGradient, .1, {opacity:1}, "rollIn")
				.to(theLink, .1, {bottom:0}, "rollIn")
		
		} else {
		
			theLink.html('Read Less')
			$(this).addClass('openBio')

			tl.to(theContent, .4, {height:theHeight}, "rollOut")
				.to(theGradient, .1, {opacity:0}, "rollOut")
				.to(theLink, .1, {bottom:-30}, "rollOut")
		}
			
		});
	});
})(jQuery, this);