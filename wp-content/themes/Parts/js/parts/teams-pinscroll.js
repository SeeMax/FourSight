// (function ($, root, undefined) {
    
//     $(function () {


//     	if (screen.width >= 767) {
// 	    	// init scroll magic
// 				var controller = new ScrollMagic.Controller();
// 						// GET HEIGHT OF CONTENT WE WANT TO SCROLL SUBTRACT WINDOW HEIGHT SO IT TRIGGERS AS BOTOTM OF THAT CONTENT ENTERS THE WINDOW
// 						theHeight = $(".showcaseOne").height() - $(window).height();
				
// 				// Pin the Gradient Background
// 				var pinScene1 = new ScrollMagic.Scene({
// 					triggerElement: ".showcaseTrigger",
// 					triggerHook: "onLeave",
// 					duration: theHeight
// 					// offset: 1
// 				}).setPin(".showcasePin1")

// 				// Pin the Image Section
// 				var pinScene2 = new ScrollMagic.Scene({
// 					triggerElement: ".showcaseTrigger",
// 					triggerHook: "onLeave",
// 					duration: theHeight
// 					// offset: 1
// 				}).setPin(".showcasePin2")

// 				var pinScene3 = new ScrollMagic.Scene({
// 					triggerElement: ".showcaseTrigger",
// 					triggerHook: "onLeave",
// 					duration: theHeight
// 					// offset: 1
// 				}).setPin(".showcasePin3")

// 				var uniTime1 = .3
// 						uniTime2 = .8
// 						uniEase =  Elastic.easeIn.config(1, 1)

// 				// Tween for moving the Hero Elements on Scroll			
// 				var dot1TL = new TimelineMax();
// 						dot1TL.to(".showcaseDot1", uniTime1, {backgroundColor:"rgba(255, 255, 255, 1)"}, "letsGo")
// 									.to(".showcaseDot2", uniTime1, {backgroundColor:"rgba(255, 255, 255, 0)"}, "letsGo")
// 									.to(".showcaseDot3", uniTime1, {backgroundColor:"rgba(255, 255, 255, 0)"}, "letsGo")
// 									.to(".showcaseImage", uniTime2, {opacity:1, y:0, ease:uniEase}, "letsGo")
// 									.to(".showcaseImage1", uniTime2, {opacity:0, y:200, ease:uniEase}, "letsGo")
// 									.to(".showcaseImage2", uniTime2, {opacity:0, y:200, ease:uniEase}, "letsGo")

// 				var dot2TL = new TimelineMax();
// 						dot2TL.to(".showcaseDot1", uniTime1, {backgroundColor:"rgba(255, 255, 255, 0)"}, "letsGo")
// 									.to(".showcaseDot2", uniTime1, {backgroundColor:"rgba(255, 255, 255, 1)"}, "letsGo")
// 									.to(".showcaseDot3", uniTime1, {backgroundColor:"rgba(255, 255, 255, 0)"}, "letsGo")
// 									.to(".showcaseImage", uniTime2, {opacity:0, y:200, ease:uniEase}, "letsGo")
// 									.to(".showcaseImage1", uniTime2, {opacity:1, y:0, ease:uniEase}, "letsGo")
// 									.to(".showcaseImage2", uniTime2, {opacity:0, y:200, ease:uniEase}, "letsGo")

// 				var dot3TL = new TimelineMax();
// 						dot3TL.to(".showcaseDot1", uniTime1, {backgroundColor:"rgba(255, 255, 255, 0)"}, "letsGo")
// 									.to(".showcaseDot2", uniTime1, {backgroundColor:"rgba(255, 255, 255, 0)"}, "letsGo")
// 									.to(".showcaseDot3", uniTime1, {backgroundColor:"rgba(255, 255, 255, 1)"}, "letsGo")
// 									.to(".showcaseImage", uniTime2, {opacity:0, y:200, ease:uniEase}, "letsGo")
// 									.to(".showcaseImage1", uniTime2, {opacity:0, y:200, ease:uniEase}, "letsGo")
// 									.to(".showcaseImage2", uniTime2, {opacity:1, y:0, ease:uniEase}, "letsGo")
											
// 				// build scene
// 				var dotChange1 = new ScrollMagic.Scene({
// 					triggerElement: ".dotTrigger",
// 					// triggerHook: "onLeave",
// 					offset: -200,
// 				}).setTween(dot1TL)

// 				var dotChange2 = new ScrollMagic.Scene({
// 					triggerElement: ".dotTrigger1",
// 					// duration: "50%"
// 					offset: -200,
// 				}).setTween(dot2TL)

// 				var dotChange3 = new ScrollMagic.Scene({
// 					triggerElement: ".dotTrigger2",
// 					// duration: "50%"
// 					offset: -200,
// 				}).setTween(dot3TL)

// 				// $(window).on('resize', function() {
// 			 //    scene1.destroy(true);
// 			 //    scene2.destroy(true);
// 			 //    scene1 = createScene1();
// 			 //    scene2 = createScene2();
// 			 //  });


// 				// ADD THE SCENES ABOVE TO THE SCROLLMAGIC CONTROLLER
// 				controller.addScene([pinScene1, pinScene2, pinScene3, dotChange1, dotChange2, dotChange3]);

// 				$(".showcaseDot1").on('click', function() {
// 					TweenLite.to(window, .4, {scrollTo:"#showcase"});
// 				});

// 				$(".showcaseDot2").on('click', function() {
// 					TweenLite.to(window, .4, {scrollTo:"#showcase1"});
// 				});

// 				$(".showcaseDot3").on('click', function() {
// 					TweenLite.to(window, .4, {scrollTo:"#showcase2"});
// 				});

// 			// }// End scollMagics Wrapper
// 		}

//    });
// })(jQuery, this);
