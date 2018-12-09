// $(function () {
// 	if ($("main").hasClass("about-page") && screen.width >= 1025){
//
// 		var setupTL = new TimelineMax();
// 	    	mySplitText1 = new SplitText("h1", {type:"words,chars"}),
// 	    	mySplitText2 = new SplitText("h2", {type:"words,chars"}),
// 	    	chars1 = mySplitText1.chars;
// 	    	chars2 = mySplitText2.chars;
//
//   	var heroTL = new TimelineMax({delay:.5})
// 				whatWeDoTL = new TimelineMax()
// 				clientTL = new TimelineMax()
// 				affiliationTL = new TimelineMax()
// 				advisorTL = new TimelineMax()
// 				rebelTL = new TimelineMax()
// 				testimonialsTL = new TimelineMax()
// 				footerTL = new TimelineMax()
//
// 		var //Hero
// 				clock = $(".clock-svg")
// 				heroWheel = $(".heroWheel")
// 				// what We Do
// 				singleWe = $(".single-thing-we-do")
// 				singleWeTitle = $(".thing-title")
// 				singleWeTitleP = $(".thing-title span")
// 				singleWeDescription = $(".thing-description")
// 				// Clients
// 				clientTop = $(".clientTop")
// 				clientCarousel = $(".clientCarousel")
// 				// Affiliation
// 				circWhite = $(".afillCircleWhite")
// 				circTeal = $(".afillCircleTeal")
// 				// Advisory
// 				advisorCarousel = $(".advisorCarousel")
// 				affilTitle = $(".affil-title")
// 				affilPosition = $(".affil-position")
// 				//Rebel
// 				rebelTop = $(".rebelTop")
// 				rebelSlide = $(".rebelSlide")
// 				slideContent1 = $(".rebel-section .rebelSlide:nth-child(2) .slideContent")
// 				slideContent2 = $(".rebel-section .rebelSlide:nth-child(3) .slideContent")
// 				slideCallout1 = $(".rebel-section .rebelSlide:nth-child(2) .slideCallout")
// 				slideCallout2 = $(".rebel-section .rebelSlide:nth-child(3) .slideCallout")
// 				// Testimonials
// 				testCarousel = $(".aboutTestimonialCarousel")
// 				// Footer Variable
// 	      footerTop = $(".footer-links-top")
// 	      footerH2 = $(".footer h2")
// 	      footerH4 = $(".footer h4")
// 	      footerSignup = $("#mc_embed_signup")
// 	      footerSignupBtn = $("#mc_embed_signup .button")
// 	      socialIcons = $(".social-icons i")
// 	      // Universal Variables
// 	      uniTime1 = 1
// 	      uniTime2 = .3
// 	      uniEase1 = Power4.easeOut
// 	      uniEase2 = Power4.easeIn
// 	      globalEaseIn = Circ.easeIn
// 	      globalEaseOut = Circ.easeOut
// 	      globalEaseBack =  Back.easeIn.config(1.7)
// 	      globalEaseElastic = Elastic.easeOut.config(1, 1)
//
// 		setupTL.set("hr", {width:"100%", height:4})
// 						.set("h1", {perspective:400})
// 						.set("h2", {perspective:400})
// 						.set("p", {opacity:0, y:-10})
// 						.set(".button", {opacity:0, scale:.75})
// 						// Hero
// 						.set(clock, {scale:0, opacity:0, rotation:720})
// 						.set(heroWheel, {scale:.5, opacity:0})
// 						// Clients
// 						.set(clientTop, {height:0})
// 						.set(clientCarousel, {opacity:0})
// 			      // What We Do
// 			      .set(singleWe, {overflow:"hidden"})
// 			      .set(singleWeTitle, {x:"-100%"})
// 			      .set(singleWeTitleP, {x:-100, opacity:0})
// 			      .set(singleWeDescription, {y:-15, opacity:0})
// 						// Affiliation
// 						.set(circTeal,{drawSVG:"0% 0%", strokeWidth:4})
// 						.set(circWhite,{drawSVG:"0% 0%", strokeWidth:3})
// 						.set(".affilLogo", {opacity:0})
// 						.set(affilTitle, {opacity:0, y:-14})
// 						.set(affilPosition, {opacity:0, y:-7})
// 						// Advisory
// 						.set(advisorCarousel, {opacity:0})
// 						// Rebel
// 						.set(rebelTop, {height:0})
// 						.set(rebelSlide, {overflow:"hidden"})
// 						.set(slideContent1, {left:"-100%"})
// 						.set(slideContent2, {right:"-100%"})
// 						.set(slideCallout1, {left:"-100%"})
// 						.set(slideCallout2, {right:"-100%"})
// 						// Testimonials
// 						.set($(testCarousel), {opacity:0})
// 						// Footer
// 						.set(footerTop, {height:0})
// 			      .set(footerH4, {opacity:0})
// 			      .set(footerH2, {opacity:0, x:-10})
// 			      .set(footerSignup, {opacity:0, y:-10})
// 			      .set(socialIcons, {opacity:0, x:-30})
//
// 		heroTL.to($(".heroTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
// 				.staggerFrom($(".heroTrigger").find(chars1), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
// 				.to($(".heroTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "introIn+=.2")
// 				.to(clock, .8, {scale:1, opacity:1, rotation:0, ease:globalEaseElastic}, "introIn-=.1")
// 				.to(heroWheel, 1, {scale:1, opacity:1,ease:globalEaseElastic}, "introIn+=.4")
//
// 		whatWeDoTL.to($(".whatWeDoTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
// 							.staggerFrom($(".whatWeDoTrigger").find(chars2), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
// 							.to($(".whatWeDoTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "letsGeaux-=.2")
// 							.to(singleWeTitle, .3, {x:"0%", ease:globalEaseBack}, "letsGeaux-=.1")
// 							.to(singleWeTitleP, .4, {x:0, opacity:1, ease:globalEaseBack}, "letsGeaux2-=.15")
// 							.to(singleWeDescription, .4, {y:0, opacity:1,ease:globalEaseBack}, "letsGeaux2-=.15")
//
// 		clientTL.set($(".clientTrigger p"), {opacity:1, y:0})
// 						.to(clientTop, .3, {height:95},"introIn")
// 						.to($(".clientTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
// 						.staggerFrom($(".clientTrigger").find(chars2), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
// 						.set($(".single-client hr"), {width:50, height:2, immediateRender:'false'})
// 						.to(clientCarousel, .6, {opacity:1})
//
// 		affiliationTL.to($(".affiliationTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
// 								.staggerFrom($(".affiliationTrigger").find(chars2), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
// 								.to($(".affiliationTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "-=.2")
// 								.to(circWhite, .5, {drawSVG:"100% 0%", strokeWidth:1, rotation:360, transformOrigin: "50% 50%", ease:globalEaseIn}, "runIt")
// 								.to(circTeal, .6, {drawSVG:"100% 0%", strokeWidth:2, rotation:360, transformOrigin: "50% 50%", ease:globalEaseIn}, "runIt+=.01")
// 								.to(circTeal, .5, {fill:"#FFFFFF"}, "comeIn")
// 								.to(circTeal, .5, {stroke:"white"}, "comeIn")
// 								.to(".affilLogo", .3, {opacity:1}, "comeIn")
// 								.to(affilTitle, .6, {opacity:1, y:0, ease:globalEaseElastic}, "comeIn+=.15")
// 								.to(affilPosition, .5, {opacity:1, y:0, ease:globalEaseElastic}, "comeIn+=.25")
//
// 		advisorTL.to($(".advisorTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
// 							.staggerFrom($(".advisorTrigger").find(chars2), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
// 							.to($(".advisorTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "-=.2")
// 							.to(advisorCarousel, .3, {opacity:1, y:0}, "-=.5")
//
// 		rebelTL.to(rebelTop, .3, {height:95},"introIn")
// 					.staggerFrom($(".rebelTrigger").find(chars2), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
// 					.to(rebelSlide, .3, {})
// 					.to(slideContent1, .3, {left:0}, "panel1")
// 					.to(slideContent2, .3, {right:0}, "panel1")
// 					.to(slideCallout1, .3, {left:0}, "panel2")
// 					.to(slideCallout2, .3, {right:0}, "panel2")
// 					.to($(".rebelTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "-=.2", "panel2")
//
// 		testimonialsTL.set($(".testimonialsTrigger p"), {opacity:1, y:0})
// 									.to($(".testimonialsTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
// 									.staggerFrom($(".testimonialsTrigger").find(chars2), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
// 									.to($(testCarousel), .3, {opacity:1})
//
// 		footerTL.to(footerTop, .3, {height:95})
// 						.to($(".footer p"), .3, {opacity:1, y:0}, "footersIn")
// 						.to(footerH4, .3, {opacity:1}, "footersIn")
// 						.to(footerH2, .3, {opacity:1, x:0}, "footersIn")
// 						.to(footerSignup, .3, {opacity:1, y:0}, "footersIn")
// 						.to(footerSignupBtn, .3, {opacity:1, scale:1}, "footersIn")
// 						.staggerTo(socialIcons, .1, {opacity:1, x:0}, .05, "footersIn")
//
//
//
// 		var controller = new ScrollMagic.Controller();
// 		// Build Scene
//
// 		var heroScene = new ScrollMagic.Scene({
// 			triggerElement: ".heroTrigger",
// 			triggerHook: "onEnter",
// 			reverse: false,
// 			offset: 400
// 		}).setTween(heroTL)
//
// 		var whatWeDoScene = new ScrollMagic.Scene({
// 			triggerElement: ".whatWeDoTrigger",
// 			triggerHook: "onEnter",
// 			reverse: false,
// 			offset: 400
// 		}).setTween(whatWeDoTL)
//
// 		var clientScene = new ScrollMagic.Scene({
// 			triggerElement: ".clientTrigger",
// 			triggerHook: "onEnter",
// 			reverse: false,
// 			offset: 400
// 		}).setTween(clientTL)
//
// 		var affiliationScene = new ScrollMagic.Scene({
// 			triggerElement: ".affiliationTrigger",
// 			triggerHook: "onEnter",
// 			reverse: false,
// 			offset: 550
// 		}).setTween(affiliationTL)
//
// 		var advisorScene = new ScrollMagic.Scene({
// 			triggerElement: ".advisorTrigger",
// 			triggerHook: "onEnter",
// 			reverse: false,
// 			offset: 400
// 		}).setTween(advisorTL)
//
// 		var rebelScene = new ScrollMagic.Scene({
// 			triggerElement: ".rebelTrigger",
// 			triggerHook: "onEnter",
// 			reverse: false,
// 			offset: 400
// 		}).setTween(rebelTL)
//
// 		var testimonialsScene = new ScrollMagic.Scene({
// 			triggerElement: ".testimonialsTrigger",
// 			triggerHook: "onEnter",
// 			reverse: false,
// 			offset: 400
// 		}).setTween(testimonialsTL)
//
// 		var footerScene = new ScrollMagic.Scene({
// 			triggerElement: ".footerTrigger",
// 			triggerHook: "onEnter",
// 			reverse: false,
// 			offset: 400
// 		}).setTween(footerTL)
//
// 		// WAIT UNTIL PAGE LOADS AND PRELOADER IS GONE TO ADD ALL ANIMATIONS
// 		$(window).load(function(){
// 			// ADD THE SCENES ABOVE TO THE SCROLLMAGIC CONTROLLER
// 			controller.addScene([heroScene, whatWeDoScene, clientScene, affiliationScene, advisorScene, rebelScene, testimonialsScene, footerScene]);
// 		});
// 	}
//
// });
