//USE THE BELOW AS TEMPLATE FOR FUNCTION FILES
(function ($, root, undefined) {
	
	$(function () {
		if ($("main").hasClass("team-page") && screen.width >= 1025){

			var setupTL = new TimelineMax();
		    	// mySplitText1 = new SplitText("h1", {type:"words,chars"}),
		    	mySplitText2 = new SplitText("h2", {type:"words,chars"}), 
		    	// chars1 = mySplitText1.chars;
		    	chars2 = mySplitText2.chars;

	  	var meetDavidTL = new TimelineMax()
					meetTeamTL = new TimelineMax()
					footerTL = new TimelineMax()

			var // Meet David
					meetTop = $(".meetTop")
					meetDimage = $(".meetDavidTrigger .meet-image")
					meetDname = $(".meetDavidTrigger .meet-name")
					meetDtitle = $(".meetDavidTrigger .meet-title")
					// Meet Team
					meetTimage = $(".meetTeamTrigger .meet-image")
					meetTname = $(".meetTeamTrigger .meet-name")
					meetTtitle = $(".meetTeamTrigger .meet-title")
					meetCircle = $(".meetCircle")
					moreLink = $(".more-link")
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
							// Meet David
							.set(meetTop, {height:0})
							.set(meetDname, {rotationY:90, transformOrigin:"left center",transformPerspective:1000})
							.set(meetDtitle, {rotationY:-90, transformOrigin:"right center",transformPerspective:1000})
							.set(meetDimage, {rotationY:90, scale:.8, transformOrigin:"center center",transformPerspective:1000})
							// Meet Team
							.set(meetTname, {rotationX:-65, opacity:0, transformOrigin:"center center",transformPerspective:1000})
							.set(meetTtitle, {rotationX:65, opacity:0, transformOrigin:"center center",transformPerspective:1000})
							.set(meetTimage, {opacity:0})
							.set(moreLink, {scale:0})
							// Footer
							.set(footerTop, {height:0})
				      .set(footerH4, {opacity:0})
				      .set(footerH2, {opacity:0, x:-10})
				      .set(footerSignup, {opacity:0, y:-10})
				      .set(socialIcons, {opacity:0, x:-30})


			meetDavidTL.to(meetTop, .3, {height:95},"introIn")
									.to($(".meetDavidTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
									.staggerFrom($(".meetDavidTrigger").find(chars2), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
									.to($(".meetDavidTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "introIn3")
									.to(meetDname, .5, {rotationY:0, transformOrigin:"left center",ease:Back.easeOut.config(1)},"introIn3")
									.to(meetDtitle, .5, {rotationY:0, transformOrigin:"right center",ease:Back.easeOut.config(1)},"introIn3")
									.to(meetDimage, .5, {rotationY:0, scale:1, transformOrigin:"center center",ease:Back.easeOut.config(1)},"introIn3+=.15")
					
			meetTeamTL.to($(".meetTeamTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
								.staggerFrom($(".meetTeamTrigger").find(chars2), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
								.staggerTo(meetCircle, .5, {drawSVG:"25% 50%", ease:globalEaseBack}, 1.5, "introIn3")
								.staggerTo(meetTimage, .5, {opacity:1}, 1.5, "introIn3+=.5")
								.staggerTo(meetTname, .4, {rotationX:0, opacity:1, transformOrigin:"center center",ease:globalEaseBack}, 1.5, "introIn3+=.65")
								.staggerTo(meetTtitle, .4, {rotationX:0, opacity:1, transformOrigin:"center center",ease:globalEaseBack}, 1.5, "introIn3+=.65")
								.staggerTo($(".meetTeamTrigger p"), .4, {opacity:1, y:0, ease:Back.easeOut}, 1.5, "introIn3+=.65")
								.staggerTo(moreLink, .3, {scale:1}, 1.5, "introIn3+=.7")

			footerTL.to(footerTop, .3, {height:95})
							.to($(".footer p"), .3, {opacity:1, y:0}, "footersIn")
							.to(footerH4, .3, {opacity:1}, "footersIn")
							.to(footerH2, .3, {opacity:1, x:0}, "footersIn")
							.to(footerSignup, .3, {opacity:1, y:0}, "footersIn")
							.to(footerSignupBtn, .3, {opacity:1, scale:1}, "footersIn")
							.staggerTo(socialIcons, .1, {opacity:1, x:0}, .05, "footersIn")

			
				
			var controller = new ScrollMagic.Controller();	
			// Build Scene

			var meetDavidScene = new ScrollMagic.Scene({
				triggerElement: ".meetDavidTrigger",
				triggerHook: "onEnter",
				reverse: false,
				offset: 400
			}).setTween(meetDavidTL)

			var meetTeamScene = new ScrollMagic.Scene({
				triggerElement: ".meetTeamTrigger",
				triggerHook: "onEnter",
				reverse: false,
				offset: 400
			}).setTween(meetTeamTL)

			var footerScene = new ScrollMagic.Scene({
				triggerElement: ".footerTrigger",
				triggerHook: "onEnter",
				reverse: false,
				offset: 400
			}).setTween(footerTL)

			// WAIT UNTIL PAGE LOADS AND PRELOADER IS GONE TO ADD ALL ANIMATIONS
			$(window).load(function(){
				// ADD THE SCENES ABOVE TO THE SCROLLMAGIC CONTROLLER
				controller.addScene([meetDavidScene, meetTeamScene, footerScene]);
			});
		}	
				
	});
})(jQuery, this);