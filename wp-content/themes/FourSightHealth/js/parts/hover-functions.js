//USE THE BELOW AS TEMPLATE FOR FUNCTION FILES
(function ($, root, undefined) {
	
	$(function () {

		var tl = new TimelineMax()
				globalEase = Power2.easeOut

    $(".button").on({
	    mouseenter: function () {
	    	console.log("roll")

	    	if ($(this).hasClass("blue-button")) {
	    		tl.to($(this), .3, {background:"rgba(168, 198, 67, 1)", border:'2px solid rgba(168, 198, 67, 1)',ease:globalEase})
	    	} else {
	    		tl.to($(this), .3, {background:"rgba(168, 198, 67, 1)", color:"white", border:"2px solid rgba(168, 198, 67, 1)", ease:globalEase})
	    	}

	    },
	    mouseleave: function () {

	    	if ($(this).hasClass("blue-button")) {
	      	tl.to($(this), .25, {background:"rgba(168, 198, 67, 0)", color:"rgba(81, 137, 147, 1);", border:'2px solid rgba(168, 198, 67, 1)',ease:globalEase})
	      } else {
	      	tl.to($(this), .25, {background:"rgba(168, 198, 67, 0)", color:"rgba(168, 198, 67, 1)", border:'2px solid rgba(168, 198, 67, 1)',ease:globalEase})
	      }

	    }
		});

	});

})(jQuery, this);
