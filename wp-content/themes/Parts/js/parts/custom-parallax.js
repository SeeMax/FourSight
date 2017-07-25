// (function ($, root, undefined) {
    
//     $(function () {


//     	if (screen.width >= 1025) {

// 	    	// Setup Scrollmagic after images are loaded
// 	      var $parallaxSet = $('.parallax-section').imagesLoaded( function() {
// 	      	scrollMagics();      	// console.log("loaded")
// 	      });

// 	      // Wrap Scrollmagic Calls in function to wait for ImagesLoaded to detect images
// 	      function scrollMagics() {

// 		    	// init scroll magic
// 					var controller = new ScrollMagic.Controller();
// 					// Add Window Height Plus Height of Parallax Container to get duration length
// 					var parallaxDuration = $( window ).height() + 500;
					
// 					// console.log(parallaxDuration);
// 					// Tween for moving the Hero Elements on Scroll			
// 					var heroTL = new TimelineMax();
// 							heroTL.to(".heroHeadline", 1, {y:"270%", scale:.3, ease: Linear.easeNone}, "letsGo")
// 								.to(".heroHelmet", 1, {scale:.6, ease: Linear.easeNone}, "letsGo")
// 								.to(".heroButton", 1, {y:"-260%", ease: Linear.easeNone}, "letsGo")
// 								.to(".home-page .hero-section", 1, {y:"20%", ease: Linear.easeNone}, "letsGo")

// 					// PROBABLY NOT USING
// 					// Get the images height and subtract it from the 500px height container
// 					// var imgHeight = ($(".parallax-img").height())
// 					// 		parallaxDistance = imgHeight - 500;

// 					// Tween for Paralaax Scrolling The Image
// 					var parallaxTL = new TimelineMax();
// 							parallaxTL.to(".parallax-image", 1, {y:-250, ease: Linear.easeNone})
							
// 					// build hero scene
// 					var heroScene = new ScrollMagic.Scene({
// 						triggerElement: ".heroTrigger",
// 						triggerHook: "onEnter",
// 						duration: "100%", 
// 						offset: 1
// 					}).setTween(heroTL)

// 					// build parallax scene
// 					var parallaxScene = new ScrollMagic.Scene({
// 						triggerElement: ".parallaxTrigger",
// 						triggerHook: "onEnter",
// 						duration: parallaxDuration, 
// 						offset: 1
// 					}).setTween(parallaxTL)


// 					// ADD THE SCENES ABOVE TO THE SCROLLMAGIC CONTROLLER
// 					controller.addScene([heroScene, parallaxScene]);


// 				}// End scollMagics Wrapper
// 			}// End Screen Size If

//     });
// })(jQuery, this);
