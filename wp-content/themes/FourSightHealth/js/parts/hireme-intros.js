//USE THE BELOW AS TEMPLATE FOR FUNCTION FILES
(function ($, root, undefined) {
	
	$(function () {
		if ($("main").hasClass("hire-page") && screen.width >= 1025){

			var setupTL = new TimelineMax();
		    	mySplitText2 = new SplitText("h2", {type:"words,chars"}), 
		    	chars2 = mySplitText2.chars;

	  	var hireTL = new TimelineMax({delay:.5})
	  			engagementTL = new TimelineMax({delay:.5})
					footerTL = new TimelineMax()

			var // Hire Area
					hireTop = $(".hireTop")
					// Engagement 
					engagementTop = $(".engagementTop")
					engEvent = $(".single-engagement")
					engDate = $(".engagement-date")
					engLocation = $(".engagement-location")
					// Footer Variable
		      footerTop = $(".footer-links-top")
		      footerH2 = $(".footer h2")
		      footerH4 = $(".footer h4")
		      footerSignup = $("#mc_embed_signup")
		      footerSignupBtn = $("#mc_embed_signup .button")
		      socialIcons = $(".social-icons i")
		      // Universal Variables
		      uniTime1 = 1
		      uniTime2 = .3
		      uniEase1 = Power4.easeOut
		      uniEase2 = Power4.easeIn
		      globalEaseIn = Circ.easeIn
		      globalEaseOut = Circ.easeOut
		      globalEaseBack =  Back.easeIn.config(1.7)
		      globalEaseElastic = Elastic.easeOut.config(1, 1)
	
			setupTL.set("hr", {width:"100%", height:4})
							.set("h1", {perspective:400})
							.set("h2", {perspective:400})
							.set("p", {opacity:0, y:-10})
							.set(".button", {opacity:0, scale:.75})
							// Hire
							.set(hireTop, {height:0})
							// Engagement
							.set(engagementTop, {height:0})
							.set(engEvent, {x:-20, opacity:0})
							.set(engDate, {color:"white"})
							.set(engLocation, {y:20, opacity:0})
							// Footer
							.set(footerTop, {height:0})
				      .set(footerH4, {opacity:0})
				      .set(footerH2, {opacity:0, x:-10})
				      .set(footerSignup, {opacity:0, y:-10})
				      .set(socialIcons, {opacity:0, x:-30})

			hireTL.to($(".hireTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
					.staggerFrom($(".hireTrigger").find(chars2), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
					.to($(".hireTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "introIn+=.2")
					.to($(".hireTrigger .button"), .4, {opacity:1, scale:1, ease:Back.easeOut}, "-=.5")

			engagementTL.to($(".engagementTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
					.staggerFrom($(".engagementTrigger").find(chars2), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
					.to($(".engagementTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "introIn+=.2")
					.to(engagementTop, .3, {height:95}, "introIn")
					.staggerTo(engEvent, .3, {x:0, opacity:1, ease:globalEaseBack}, .1, "introIn2")
					.staggerTo(engDate, .3, {color:"#333E48", ease:globalEaseBack}, .1, "introIn2+=.3")
					.staggerTo(engLocation, .3, {y:0, opacity:1, ease:globalEaseBack}, .1, "introIn2+=.3")

			footerTL.to(footerTop, .3, {height:95})
							.to($(".footer p"), .3, {opacity:1, y:0}, "footersIn")
							.to(footerH4, .3, {opacity:1}, "footersIn")
							.to(footerH2, .3, {opacity:1, x:0}, "footersIn")
							.to(footerSignup, .3, {opacity:1, y:0}, "footersIn")
							.to(footerSignupBtn, .3, {opacity:1, scale:1}, "footersIn")
							.staggerTo(socialIcons, .1, {opacity:1, x:0}, .05, "footersIn")

			
				
			var controller = new ScrollMagic.Controller();	
			// Build Scene

			var hireScene = new ScrollMagic.Scene({
				triggerElement: ".hireTrigger",
				triggerHook: "onEnter",
				reverse: false,
				offset: 400
			}).setTween(hireTL)

			var engagementScene = new ScrollMagic.Scene({
				triggerElement: ".engagementTrigger",
				triggerHook: "onEnter",
				reverse: false,
				offset: 400
			}).setTween(engagementTL)

			var footerScene = new ScrollMagic.Scene({
				triggerElement: ".footerTrigger",
				triggerHook: "onEnter",
				reverse: false,
				offset: 400
			}).setTween(footerTL)

			// WAIT UNTIL PAGE LOADS AND PRELOADER IS GONE TO ADD ALL ANIMATIONS
			$(window).load(function(){
				// ADD THE SCENES ABOVE TO THE SCROLLMAGIC CONTROLLER
				controller.addScene([hireScene, engagementScene, footerScene]);
			});
		}	
				
	});
})(jQuery, this);