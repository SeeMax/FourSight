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



//USE THE BELOW AS TEMPLATE FOR FUNCTION FILES
(function ($, root, undefined) {
	
	$(function () {
		if ($("main").hasClass("about-page") && screen.width >= 1025){

			var setupTL = new TimelineMax();
		    	mySplitText1 = new SplitText("h1", {type:"words,chars"}),
		    	mySplitText2 = new SplitText("h2", {type:"words,chars"}), 
		    	chars1 = mySplitText1.chars;
		    	chars2 = mySplitText2.chars;

	  	var heroTL = new TimelineMax({delay:.5})
					whatWeDoTL = new TimelineMax()
					clientTL = new TimelineMax()
					affiliationTL = new TimelineMax()
					advisorTL = new TimelineMax()
					rebelTL = new TimelineMax()
					testimonialsTL = new TimelineMax()
					footerTL = new TimelineMax()

			var //Hero
					clock = $(".clock-svg")
					heroWheel = $(".heroWheel")
					// what We Do
					singleWe = $(".single-thing-we-do")
					singleWeTitle = $(".thing-title")
					singleWeTitleP = $(".thing-title span")
					singleWeDescription = $(".thing-description")
					// Clients
					clientTop = $(".clientTop")
					clientCarousel = $(".clientCarousel")
					// Affiliation
					circWhite = $(".afillCircleWhite")
					circTeal = $(".afillCircleTeal")
					// Advisory
					advisorCarousel = $(".advisorCarousel")
					affilTitle = $(".affil-title")
					affilPosition = $(".affil-position")
					//Rebel
					rebelTop = $(".rebelTop")
					rebelSlide = $(".rebelSlide")
					slideContent1 = $(".rebel-section .rebelSlide:nth-child(2) .slideContent")
					slideContent2 = $(".rebel-section .rebelSlide:nth-child(3) .slideContent")
					slideCallout1 = $(".rebel-section .rebelSlide:nth-child(2) .slideCallout")
					slideCallout2 = $(".rebel-section .rebelSlide:nth-child(3) .slideCallout")
					// Testimonials
					testCarousel = $(".aboutTestimonialCarousel")
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
							// Hero
							.set(clock, {scale:0, opacity:0, rotation:720})
							.set(heroWheel, {scale:.5, opacity:0})
							// Clients
							.set(clientTop, {height:0})
							.set(clientCarousel, {opacity:0})
				      // What We Do
				      .set(singleWe, {overflow:"hidden"})
				      .set(singleWeTitle, {x:"-100%"})
				      .set(singleWeTitleP, {x:-100, opacity:0})
				      .set(singleWeDescription, {y:-15, opacity:0})
							// Affiliation
							.set(circTeal,{drawSVG:"0% 0%", strokeWidth:4})
							.set(circWhite,{drawSVG:"0% 0%", strokeWidth:3})
							.set(".affilLogo", {opacity:0})
							.set(affilTitle, {opacity:0, y:-14})
							.set(affilPosition, {opacity:0, y:-7})
							// Advisory
							.set(advisorCarousel, {opacity:0})
							// Rebel
							.set(rebelTop, {height:0})
							.set(rebelSlide, {overflow:"hidden"})
							.set(slideContent1, {left:"-100%"})
							.set(slideContent2, {right:"-100%"})
							.set(slideCallout1, {left:"-100%"})
							.set(slideCallout2, {right:"-100%"})
							// Testimonials
							.set($(testCarousel), {opacity:0})
							// Footer
							.set(footerTop, {height:0})
				      .set(footerH4, {opacity:0})
				      .set(footerH2, {opacity:0, x:-10})
				      .set(footerSignup, {opacity:0, y:-10})
				      .set(socialIcons, {opacity:0, x:-30})

			heroTL.to($(".heroTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
					.staggerFrom($(".heroTrigger").find(chars1), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
					.to($(".heroTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "introIn+=.2")
					.to(clock, .8, {scale:1, opacity:1, rotation:0, ease:globalEaseElastic}, "introIn-=.1")
					.to(heroWheel, 1, {scale:1, opacity:1,ease:globalEaseElastic}, "introIn+=.4")

			whatWeDoTL.to($(".whatWeDoTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
								.staggerFrom($(".whatWeDoTrigger").find(chars2), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
								.to($(".whatWeDoTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "letsGeaux-=.2")
								.to(singleWeTitle, .3, {x:"0%", ease:globalEaseBack}, "letsGeaux-=.1")
								.to(singleWeTitleP, .4, {x:0, opacity:1, ease:globalEaseBack}, "letsGeaux2-=.15")
								.to(singleWeDescription, .4, {y:0, opacity:1,ease:globalEaseBack}, "letsGeaux2-=.15")

			clientTL.set($(".clientTrigger p"), {opacity:1, y:0})
							.to(clientTop, .3, {height:95},"introIn")
							.to($(".clientTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
							.staggerFrom($(".clientTrigger").find(chars2), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
							.set($(".single-client hr"), {width:50, height:2, immediateRender:'false'})
							.to(clientCarousel, .6, {opacity:1})
					
			affiliationTL.to($(".affiliationTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
									.staggerFrom($(".affiliationTrigger").find(chars2), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
									.to($(".affiliationTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "-=.2")
									.to(circWhite, .5, {drawSVG:"100% 0%", strokeWidth:1, rotation:360, transformOrigin: "50% 50%", ease:globalEaseIn}, "runIt")
									.to(circTeal, .6, {drawSVG:"100% 0%", strokeWidth:2, rotation:360, transformOrigin: "50% 50%", ease:globalEaseIn}, "runIt+=.01")
									.to(circTeal, .5, {fill:"#FFFFFF"}, "comeIn")
									.to(circTeal, .5, {stroke:"white"}, "comeIn")
									.to(".affilLogo", .3, {opacity:1}, "comeIn")
									.to(affilTitle, .6, {opacity:1, y:0, ease:globalEaseElastic}, "comeIn+=.15")
									.to(affilPosition, .5, {opacity:1, y:0, ease:globalEaseElastic}, "comeIn+=.25")

			advisorTL.to($(".advisorTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
								.staggerFrom($(".advisorTrigger").find(chars2), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
								.to($(".advisorTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "-=.2")
								.to(advisorCarousel, .3, {opacity:1, y:0}, "-=.5")

			rebelTL.to(rebelTop, .3, {height:95},"introIn")
						.staggerFrom($(".rebelTrigger").find(chars2), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
						.to(rebelSlide, .3, {})
						.to(slideContent1, .3, {left:0}, "panel1")
						.to(slideContent2, .3, {right:0}, "panel1")
						.to(slideCallout1, .3, {left:0}, "panel2")
						.to(slideCallout2, .3, {right:0}, "panel2")
						.to($(".rebelTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "-=.2", "panel2")

			testimonialsTL.set($(".testimonialsTrigger p"), {opacity:1, y:0})
										.to($(".testimonialsTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
										.staggerFrom($(".testimonialsTrigger").find(chars2), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
										.to($(testCarousel), .3, {opacity:1})

			footerTL.to(footerTop, .3, {height:95})
							.to($(".footer p"), .3, {opacity:1, y:0}, "footersIn")
							.to(footerH4, .3, {opacity:1}, "footersIn")
							.to(footerH2, .3, {opacity:1, x:0}, "footersIn")
							.to(footerSignup, .3, {opacity:1, y:0}, "footersIn")
							.to(footerSignupBtn, .3, {opacity:1, scale:1}, "footersIn")
							.staggerTo(socialIcons, .1, {opacity:1, x:0}, .05, "footersIn")

			
				
			var controller = new ScrollMagic.Controller();	
			// Build Scene

			var heroScene = new ScrollMagic.Scene({
				triggerElement: ".heroTrigger",
				triggerHook: "onEnter",
				reverse: false,
				offset: 400
			}).setTween(heroTL)

			var whatWeDoScene = new ScrollMagic.Scene({
				triggerElement: ".whatWeDoTrigger",
				triggerHook: "onEnter",
				reverse: false,
				offset: 400
			}).setTween(whatWeDoTL)

			var clientScene = new ScrollMagic.Scene({
				triggerElement: ".clientTrigger",
				triggerHook: "onEnter",
				reverse: false,
				offset: 400
			}).setTween(clientTL)

			var affiliationScene = new ScrollMagic.Scene({
				triggerElement: ".affiliationTrigger",
				triggerHook: "onEnter",
				reverse: false,
				offset: 550
			}).setTween(affiliationTL)

			var advisorScene = new ScrollMagic.Scene({
				triggerElement: ".advisorTrigger",
				triggerHook: "onEnter",
				reverse: false,
				offset: 400
			}).setTween(advisorTL)

			var rebelScene = new ScrollMagic.Scene({
				triggerElement: ".rebelTrigger",
				triggerHook: "onEnter",
				reverse: false,
				offset: 400
			}).setTween(rebelTL)

			var testimonialsScene = new ScrollMagic.Scene({
				triggerElement: ".testimonialsTrigger",
				triggerHook: "onEnter",
				reverse: false,
				offset: 400
			}).setTween(testimonialsTL)

			var footerScene = new ScrollMagic.Scene({
				triggerElement: ".footerTrigger",
				triggerHook: "onEnter",
				reverse: false,
				offset: 400
			}).setTween(footerTL)

			// WAIT UNTIL PAGE LOADS AND PRELOADER IS GONE TO ADD ALL ANIMATIONS
			$(window).load(function(){
				// ADD THE SCENES ABOVE TO THE SCROLLMAGIC CONTROLLER
				controller.addScene([heroScene, whatWeDoScene, clientScene, affiliationScene, advisorScene, rebelScene, testimonialsScene, footerScene]);
			});
		}	
				
	});
})(jQuery, this);
//USE THE BELOW AS TEMPLATE FOR FUNCTION FILES
(function ($, root, undefined) {
	
	$(function () {
		if ($("main").hasClass("contact-page") && screen.width >= 1025){

			var setupTL = new TimelineMax();
		    	mySplitText2 = new SplitText("h2", {type:"words,chars"}), 
		    	chars2 = mySplitText2.chars;

	  	var contactTL = new TimelineMax({delay:.5})
					footerTL = new TimelineMax()

			var contactTop = $(".contactTop")
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
							// contact
							.set(contactTop, {height:0})
							// Footer
							.set(footerTop, {height:0})
				      .set(footerH4, {opacity:0})
				      .set(footerH2, {opacity:0, x:-10})
				      .set(footerSignup, {opacity:0, y:-10})
				      .set(socialIcons, {opacity:0, x:-30})

			contactTL.to($(".contactTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
					.staggerFrom($(".contactTrigger").find(chars2), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
					.to(contactTop, .3, {height:95},"introIn")
					.to($(".contactTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "introIn+=.2")
					.to($(".contactTrigger .button"), .4, {opacity:1, scale:1, ease:Back.easeOut}, "-=.5")
					.to(contactTop, .3, {height:95}, "introIn")

			footerTL.to(footerTop, .3, {height:95})
							.to($(".footer p"), .3, {opacity:1, y:0}, "footersIn")
							.to(footerH4, .3, {opacity:1}, "footersIn")
							.to(footerH2, .3, {opacity:1, x:0}, "footersIn")
							.to(footerSignup, .3, {opacity:1, y:0}, "footersIn")
							.to(footerSignupBtn, .3, {opacity:1, scale:1}, "footersIn")
							.staggerTo(socialIcons, .1, {opacity:1, x:0}, .05, "footersIn")

			
				
			var controller = new ScrollMagic.Controller();	
			// Build Scene

			var contactScene = new ScrollMagic.Scene({
				triggerElement: ".contactTrigger",
				triggerHook: "onEnter",
				reverse: false,
				offset: 400
			}).setTween(contactTL)

			var footerScene = new ScrollMagic.Scene({
				triggerElement: ".footerTrigger",
				triggerHook: "onEnter",
				reverse: false,
				offset: 400
			}).setTween(footerTL)

			// WAIT UNTIL PAGE LOADS AND PRELOADER IS GONE TO ADD ALL ANIMATIONS
			$(window).load(function(){
				// ADD THE SCENES ABOVE TO THE SCROLLMAGIC CONTROLLER
				controller.addScene([contactScene, footerScene]);
			});
		}	
				
	});
})(jQuery, this);
//USE THE BELOW AS TEMPLATE FOR FUNCTION FILES
(function ($, root, undefined) {
	
	$(function () {

		TweenLite.defaultEase = Linear.easeNone;


			//show the square only once js has run
			//visibility set to hidden in css panel
			TweenLite.set(".square", {visibility:"visible"});



			var tl = new TimelineLite();
			tl.fromTo(".l1", 1, {height:0}, {height:200})
			.fromTo(".l2", 4, {width:0, backgroundColor:"red"}, {width:200, backgroundColor:"blue"})
			  .fromTo(".l3", 1, {height:0}, {height:200})
			  .fromTo(".l4", 1, {width:0}, {width:200})

			tl.timeScale(4) //play faster

	});

})(jQuery, this);
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
//USE THE BELOW AS TEMPLATE FOR FUNCTION FILES
(function ($, root, undefined) {
	
	$(function () {

		$('.testimonialCarousel').imagesLoaded(function () {
    	
		  $('.testimonialCarousel').slick({
		    slidesToShow: 1,
			  slidesToScroll: 1,
			  autoplay: true,
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
//USE THE BELOW AS TEMPLATE FOR FUNCTION FILES
(function ($, root, undefined) {
	
	$(function () {

		var tl = new TimelineMax()
				globalEase = Power2.easeOut

    $(".button").on({
	    mouseenter: function () {
	
	    	if ($(this).hasClass("blue-button")) {
	    		tl.to($(this), .3, {background:"rgba(168, 198, 67, 1)", border:'2px solid rgba(168, 198, 67, 1)',ease:globalEase})
	    	} else if ($(this).hasClass("article-button")) {
	    		tl.to($(this), .3, {background:"white", color:"rgba(168, 198, 67, 1)", border:"1px solid rgba(168, 198, 67, 1)", ease:globalEase})
	    	} else {
	    		tl.to($(this), .3, {background:"rgba(168, 198, 67, 1)", color:"white", border:"2px solid rgba(168, 198, 67, 1)", ease:globalEase})
	    	}

	    },
	    mouseleave: function () {

	    	if ($(this).hasClass("blue-button")) {
	      	tl.to($(this), .25, {background:"rgba(168, 198, 67, 0)", color:"rgba(81, 137, 147, 1);", border:'2px solid rgba(168, 198, 67, 1)',ease:globalEase})
	      } else if ($(this).hasClass("article-button")) {
	      	console.log("yep")
	    		tl.to($(this), .3, {background:"rgba(168, 198, 67, 1)", color:"white", border:"1px solid rgba(168, 198, 67, 1)", ease:globalEase})
	    	} else {
	      	tl.to($(this), .25, {background:"rgba(168, 198, 67, 0)", color:"rgba(168, 198, 67, 1)", border:'2px solid rgba(168, 198, 67, 1)',ease:globalEase})
	      }

	    }
		});

	});

})(jQuery, this);

(function ($, root, undefined) {
    
    $(function () {

    	$(window).on('load', function() {


	    	if ($("main").hasClass("home-page") && screen.width >= 1025){

		    	var setupTL = new TimelineMax();
		    	mySplitText = new SplitText("h2", {type:"words,chars"}), 
		    	chars = mySplitText.chars;

					var missionTL = new TimelineMax()
							missionTLIcons = new TimelineMax()
							versusTL = new TimelineMax()
							blogTL = new TimelineMax()
							testimonialsTL = new TimelineMax()
							footerTL = new TimelineMax()

					var shapes = $("rect, circle, ellipse, polyline, line, path")
		      // Icon 1
		      thinBorder1 = $(".st0")
		      thickBorder1 = $(".st1")
		      chartBorder = $(".st2")
		      chartLine = $(".st3One")
		      chartArrow = $(".st3Two")
		      thinBorder2 = $(".tt0")
		      thickBorder2 = $(".tt1")
		      person2 = $(".tt2")
		      plusSign2 = $(".tt3")
		      thinBorder3 = $(".ut0")
		      thickBorder3 = $(".ut1")
		      bookBorder3 = $(".ut2Border")
		      lines3 = $(".ut2Line")
		      plus3 = $(".ut3")
		      title1 = $(".mission-icons .single-icon:nth-child(1) h4")
		      title2 = $(".mission-icons .single-icon:nth-child(2) h4")
		      title3 = $(".mission-icons .single-icon:nth-child(3) h4")
		      // Tooper Animation
		      vsTop = $(".versusTop")
		      bookImg = $(".book-image img")
		      bookPage = $(".bookPage")
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

		      setupTL.set("hr", {width:"100%", height:4})
		    					.set("h2", {perspective:400})
		    					.set("p", {opacity:0, y:-10})
		    					.set(".button", {opacity:0, scale:.75})
		    					.set($(".single-blog-preview"), {rotationY:90, rotationX:-20, transformOrigin:"center bottom",transformPerspective:1000})
		    					.set($(".single-blog-preview .post-date"), {rotationY:-90, transformOrigin:"left center",transformPerspective:1000})
		    					.set($(".single-blog-preview .button"), {opacity:0, y:-10})
		    					.set($(".testimonialCarousel"), {opacity:0})
		    					.set(thinBorder1, {drawSVG:"0% 0%"})
						      .set(thickBorder1, {drawSVG:"100% 100%"})
						      .set(thinBorder2, {drawSVG:"0% 0%"})
						      .set(thickBorder2, {drawSVG:"100% 100%"})
						      .set(thinBorder3, {drawSVG:"0% 0%"})
						      .set(thickBorder3, {drawSVG:"100% 100%"})
						      .set(chartBorder, {drawSVG:"50% 50%", opacity:0})
						      .set(chartLine, {drawSVG:"0% 0%"})
						      .set(chartArrow, {drawSVG:"50% 50%", opacity:0})
						      .set(person2, {drawSVG:"0% 0%"})
		      				.set(plusSign2, {drawSVG:"50% 50%", opacity:0})
		      				.set(bookBorder3, {drawSVG:"0% 0%"})
		      				.set(lines3, {drawSVG:"50% 50%", opacity:0})
		      				.set(plus3 , {drawSVG:"50% 50%", opacity:0})
						      .set(title1, {opacity:0, y:20})
						      .set(title2, {opacity:0, y:20})
						      .set(title3, {opacity:0, y:20})
						      .set(vsTop, {height:0})
						      .set(footerTop, {height:0})
						      .set(footerH4, {opacity:0})
						      .set(footerH2, {opacity:0, x:-10})
						      .set(footerSignup, {opacity:0, y:-10})
						      .set(socialIcons, {opacity:0, x:-30})
						      .set([bookImg, bookPage], {rotationY:-90, transformOrigin:"left center", transformPerspective:1800})

					missionTL.to($(".missionTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
									.staggerFrom($(".missionTrigger").find(chars), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
									.to($(".missionTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "-=.2")
									
					missionTLIcons.to(chartBorder, .000001, {opacity:1})
									      .to(thinBorder1, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border1-=.4")
									      .to(thickBorder1, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border1-=.4")
									      .to(chartBorder, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border1-=.4")
									      .to(chartLine, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border1-=.4")
									      .to(chartArrow, .000001, {opacity:1},"border1+=.09")
									      .to(chartArrow, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border1+=.09")
									      .to(title1, uniTime1+.4, {opacity:1, y:0, ease:uniEase1}, "border1-=.4")
									      .to(thinBorder2, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border2-=1")
									      .to(thickBorder2, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border2-=1")
									      .to(plusSign2, .000001, {opacity:1}, "border2-=1")
					      				.to(plusSign2, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border2-=1")
					      				.to(person2, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border2-=1")
									      .to(title2, uniTime1, {opacity:1, y:0, ease:uniEase1}, "border2-=1")
									      .to(thinBorder3, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border3-=.4")
									      .to(thickBorder3, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border3-=.4")
									      .to(bookBorder3, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border3-=.4")
									      .to(lines3, .000001, {opacity:1}, "border3-=.4")
					      				.to(plus3, .000001, {opacity:1}, "border3-=.11")
					      				.to(lines3, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border3-=.4")
					      				.to(plus3, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border3-=.1")									      
									      .to(title3, uniTime1, {opacity:1, y:0, ease:uniEase1}, "border3-=.4")

					versusTL.to(vsTop, .4, {height:95}, "introIn")
									.to($(".versusTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
									.staggerFrom($(".versusTrigger").find(chars), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
									.to($(".versusTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "-=.2")
									.to($(".versusTrigger .button"), .4, {opacity:1, scale:1, ease:Back.easeOut}, "-=.5")
									.staggerTo(bookPage, .3, {rotationY:0, transformOrigin:"left center",ease:Back.easeOut.config(1)}, ".01", "+=.6")
									.to(bookImg, .8, {rotationY:0, transformOrigin:"left center",ease:Back.easeOut.config(1)}, "-=.3")
	 
					blogTL.to($(".blogTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
									.staggerFrom($(".blogTrigger").find(chars), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
									.to($(".blogTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "-=.2")
									.to($(".blogTrigger .button"), .4, {opacity:1, scale:1, ease:Back.easeOut}, "-=.5")
									.staggerTo($(".blogTrigger .single-blog-preview"), .6, {rotationY:0, rotationX:0, transformOrigin:"50% 50%", ease:Back.easeOut.config(1)}, ".2", "tileIn+=.4")
									.staggerTo($(".single-blog-preview .post-date"), .9, {rotationY:0, transformOrigin:"left center", ease: Elastic.easeOut.config(1, 1)}, ".2", "tileIn+=.6")
									.staggerTo($(".single-blog-preview .button"), .6, {opacity:1, y:0, ease:Back.easeOut.config(.5)}, ".2", "tileIn+=.5")

					testimonialsTL.staggerFrom($(".testimonialsTrigger").find(chars), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
												.to($(".testimonialCarousel"), .3, {opacity:1})
												.to($(".testimonialsTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "-=.2")

					footerTL.to(footerTop, .3, {height:95})
									.to($(".footer p"), .3, {opacity:1, y:0}, "footersIn")
									.to(footerH4, .3, {opacity:1}, "footersIn")
									.to(footerH2, .3, {opacity:1, x:0}, "footersIn")
									.to(footerSignup, .3, {opacity:1, y:0}, "footersIn")
									.to(footerSignupBtn, .3, {opacity:1, scale:1}, "footersIn")
									.staggerTo(socialIcons, .1, {opacity:1, x:0}, .05, "footersIn")


					var controller = new ScrollMagic.Controller();	
					// Build Scene

					var missionScene = new ScrollMagic.Scene({
						triggerElement: ".missionTrigger",
						triggerHook: 'onEnter',
						reverse: false,
						offset: 0
					}).setTween(missionTL)

					var missionIconsScene = new ScrollMagic.Scene({
						triggerElement: ".missionIconsTrigger",
						triggerHook: 'onEnter',
						reverse: false,
						offset: 400
					}).setTween(missionTLIcons)

					var versusScene = new ScrollMagic.Scene({
						triggerElement: ".versusTrigger",
						triggerHook: "onEnter",
						reverse: false,
						offset: 400
					}).setTween(versusTL)

					var blogScene = new ScrollMagic.Scene({
						triggerElement: ".blogTrigger",
						triggerHook: "onEnter",
						reverse: false,
						offset: 400
					}).setTween(blogTL)

					var testimonialsScene = new ScrollMagic.Scene({
						triggerElement: ".testimonialsTrigger",
						triggerHook: "onEnter",
						reverse: false,
						offset: 400
					}).setTween(testimonialsTL)

					var footerScene = new ScrollMagic.Scene({
						triggerElement: ".footerTrigger",
						triggerHook: "onEnter",
						reverse: false,
						offset: 400
					}).setTween(footerTL)

					// ADD THE SCENES ABOVE TO THE SCROLLMAGIC CONTROLLER
					controller.addScene([missionScene, missionIconsScene, versusScene, blogScene, testimonialsScene, footerScene]);
				}	
			});
    });
})(jQuery, this);

//USE THE BELOW AS TEMPLATE FOR FUNCTION FILES
(function ($, root, undefined) {
	
	$(function () {

		$(".menuToggle").on('click', function() {
			console.log("click")

			var tl = new TimelineMax()
					$this = $(this),
					fullMenu = $(".nav"),
					links = $(".nav li"),
					ham1 = $(".hamTop"),
					ham2 = $(".hamMid"),
					ham3 = $(".hamBot"),
					uniTime2 = .15;

			if ($this.hasClass("navOpen")) {
				$this.removeClass("navOpen");
				tl.set($(".wrapper"), {height:"auto",overflow:"visible"})
					.to(fullMenu, .3, {left:"101%"}, "menuClose")
					.staggerTo(links, .3, {opacity:0, x:"50%"}, .03, "menuClose")
					.to(ham1, uniTime2, {width:"100%", rotation:0, y:0}, "menuClose")
					.to(ham2, uniTime2, {width:"100%", x:0, opacity:1}, "menuClose")
					.to(ham3, uniTime2, {width:"100%", rotation:0, y:0}, "menuClose")
					

			} else {
				$this.addClass("navOpen");
				tl.set($(".wrapper"), {height:"100%", overflow:"hidden"})
					.set(links, {opacity:0, x:"50%"})
					.to(fullMenu, .3, {left:"0%"}, "menuOpen")
					.staggerTo(links, .1, {opacity:1, x:"0%"}, .03, "menuOpen")
					.to(ham1, uniTime2, {rotation:227, y:4, width:"50%"}, "menuOpen")
					.to(ham2, uniTime2, {width:"70%", x:5, opacity:0}, "menuOpen")
					.to(ham3, uniTime2, {rotation:-227, y:-4, width:"50%"}, "menuOpen")
					
			}
		});

	});

})(jQuery, this);
(function ($, root, undefined) {$(function () {


$("p:contains('4sight Health')").html(function(_, html) {
   return html.replace(/(4sight Health)/g, '<span style="white-space:nowrap;">$1</span>');
});

});})(jQuery, this);
// //USE THE BELOW AS TEMPLATE FOR FUNCTION FILES
// (function ($, root, undefined) {	
// 	$(function () {

// 		$("a[title='Download PDF']").parent().addClass('pdf-button');
		
// });})(jQuery, this);

(function ($, root, undefined) {
  $(function () {

  	$(window).load(function(){
			$('#preloader').fadeOut('slow',function(){$(this).remove();});
		});
  });
})(jQuery, this);
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