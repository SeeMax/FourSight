// (function ($, root, undefined) {
	
// 	$(function () {

// 		// Hide Header on on scroll down
// 		var didScroll;
// 		var lastScrollTop = 0;
// 		var delta = 5;
// 		var navbarHeight = $('.menu-toggle').outerHeight();

// 		$(window).scroll(function(event){
// 		    didScroll = true;
// 		});

// 		setInterval(function() {
// 		    if (didScroll) {
// 		        hasScrolled();
// 		        didScroll = false;
// 		    }
// 		}, 500);

// 		function hasScrolled() {
// 		    var st = $(this).scrollTop();
		    
// 		    // Make sure they scroll more than delta
// 		    if(Math.abs(lastScrollTop - st) <= delta)
// 		        return;
		    
// 		    // If they scrolled down and are past the navbar, add class .nav-up.
// 		    // This is necessary so you never see what is "behind" the navbar.
// 		    if (st > lastScrollTop && st > navbarHeight){
// 		        // Scroll Down
// 		        console.log("down");
// 			    	TweenLite.to($(".menuToggle"), .3, {y:-120, opacity:0, ease:Power0.easeNone}); 
// 		    } else {
// 		        // Scroll Up
// 		        if(st + $(window).height() < $(document).height()) {
// 		        	console.log("up")
// 			    		TweenLite.to($(".menuToggle"), .3, {y:0, opacity:1, ease:Power2.easeIn}); 
// 		        }
// 		    }
		    
// 		    lastScrollTop = st;
// 		}




// 	});
	
// })(jQuery, this);
							
