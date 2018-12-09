// (function ($, root, undefined) {
//
//     $(function () {
//
//     	$(window).on('load', function() {
//
//
// 	    	if ($("main").hasClass("home-page") && screen.width >= 1025){
//
// 		    	var setupTL = new TimelineMax();
// 		    	mySplitText = new SplitText("h2", {type:"words,chars"}),
// 		    	chars = mySplitText.chars;
//
// 					var missionTL = new TimelineMax()
// 							versusTL = new TimelineMax()
// 							blogTL = new TimelineMax()
// 							testimonialsTL = new TimelineMax()
// 							footerTL = new TimelineMax()
//
// 					var shapes = $("rect, circle, ellipse, polyline, line, path")
// 		      // Icon 1
// 		      thinBorder1 = $(".st0")
// 		      thickBorder1 = $(".st1")
// 		      chartBorder = $(".st2")
// 		      chartLine = $(".st3One")
// 		      chartArrow = $(".st3Two")
// 		      thinBorder2 = $(".tt0")
// 		      thickBorder2 = $(".tt1")
// 		      person2 = $(".tt2")
// 		      plusSign2 = $(".tt3")
// 		      thinBorder3 = $(".ut0")
// 		      thickBorder3 = $(".ut1")
// 		      bookBorder3 = $(".ut2Border")
// 		      lines3 = $(".ut2Line")
// 		      plus3 = $(".ut3")
// 		      title1 = $(".mission-icons .single-icon:nth-child(1) h4")
// 		      title2 = $(".mission-icons .single-icon:nth-child(2) h4")
// 		      title3 = $(".mission-icons .single-icon:nth-child(3) h4")
// 		      // Tooper Animation
// 		      vsTop = $(".versusTop")
// 		      bookImg = $(".book-image img")
// 		      bookPage = $(".bookPage")
// 		      // Footer Variable
// 		      footerTop = $(".footer-links-top")
// 		      footerH2 = $(".footer h2")
// 		      footerH4 = $(".footer h4")
// 		      footerSignup = $("#mc_embed_signup")
// 		      footerSignupBtn = $("#mc_embed_signup .button")
// 		      socialIcons = $(".social-icons i")
// 		      // Universal Variables
// 		      uniTime1 = 1
// 		      uniTime2 = .3
// 		      uniEase1 = Power4.easeOut
// 		      uniEase2 = Power4.easeIn
//
// 		      setupTL.set("hr", {width:"100%", height:4})
// 		    					.set("h2", {perspective:400})
// 		    					.set("p", {opacity:0, y:-10})
// 		    					.set(".button", {opacity:0, scale:.75})
// 		    					.set($(".single-blog-preview"), {rotationY:90, rotationX:-20, transformOrigin:"center bottom",transformPerspective:1000})
// 		    					.set($(".single-blog-preview .post-date"), {rotationY:-90, transformOrigin:"left center",transformPerspective:1000})
// 		    					.set($(".single-blog-preview .button"), {opacity:0, y:-10})
// 		    					.set($(".testimonialCarousel"), {opacity:0})
// 		    					.set(thinBorder1, {drawSVG:"0% 0%"})
// 						      .set(thickBorder1, {drawSVG:"100% 100%"})
// 						      .set(thinBorder2, {drawSVG:"0% 0%"})
// 						      .set(thickBorder2, {drawSVG:"100% 100%"})
// 						      .set(thinBorder3, {drawSVG:"0% 0%"})
// 						      .set(thickBorder3, {drawSVG:"100% 100%"})
// 						      .set(chartBorder, {drawSVG:"50% 50%", opacity:0})
// 						      .set(chartLine, {drawSVG:"0% 0%"})
// 						      .set(chartArrow, {drawSVG:"50% 50%", opacity:0})
// 						      .set(person2, {drawSVG:"0% 0%"})
// 		      				.set(plusSign2, {drawSVG:"50% 50%", opacity:0})
// 		      				.set(bookBorder3, {drawSVG:"0% 0%"})
// 		      				.set(lines3, {drawSVG:"50% 50%", opacity:0})
// 		      				.set(plus3 , {drawSVG:"50% 50%", opacity:0})
// 						      .set(title1, {opacity:0, y:20})
// 						      .set(title2, {opacity:0, y:20})
// 						      .set(title3, {opacity:0, y:20})
// 						      .set(vsTop, {height:0})
// 						      .set(footerTop, {height:0})
// 						      .set(footerH4, {opacity:0})
// 						      .set(footerH2, {opacity:0, x:-10})
// 						      .set(footerSignup, {opacity:0, y:-10})
// 						      .set(socialIcons, {opacity:0, x:-30})
// 						      .set([bookImg, bookPage], {rotationY:-90, transformOrigin:"left center", transformPerspective:1800})
//
//
// 					missionTL.to($(".missionTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
// 									.staggerFrom($(".missionTrigger").find(chars), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
// 									.to($(".missionTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "-=.2")
// 									// ICON 1 ANIMATIONS
// 									.to(chartBorder, .000001, {opacity:1})
// 						      .to(thinBorder1, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border1-=.4")
// 						      .to(thickBorder1, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border1-=.4")
// 						      .to(chartBorder, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border1-=.4")
// 						      .to(chartLine, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border1-=.4")
// 						      .to(chartArrow, .000001, {opacity:1},"border1+=.09")
// 						      .to(chartArrow, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border1+=.09")
// 						      .to(title1, uniTime1+.4, {opacity:1, y:0, ease:uniEase1}, "border1-=.4")
// 						      .to(thinBorder2, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border2-=1")
// 						      .to(thickBorder2, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border2-=1")
// 						      .to(plusSign2, .000001, {opacity:1}, "border2-=1")
// 		      				.to(plusSign2, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border2-=1")
// 		      				.to(person2, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border2-=1")
// 						      .to(title2, uniTime1, {opacity:1, y:0, ease:uniEase1}, "border2-=1")
// 						      .to(thinBorder3, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border3-=.4")
// 						      .to(thickBorder3, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border3-=.4")
// 						      .to(bookBorder3, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border3-=.4")
// 						      .to(lines3, .000001, {opacity:1}, "border3-=.4")
// 		      				.to(plus3, .000001, {opacity:1}, "border3-=.11")
// 		      				.to(lines3, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border3-=.4")
// 		      				.to(plus3, uniTime1, {drawSVG:"0% 100%", ease:uniEase1}, "border3-=.1")
//
// 						      .to(title3, uniTime1, {opacity:1, y:0, ease:uniEase1}, "border3-=.4")
//
//
//
// 					versusTL.to(vsTop, .4, {height:95}, "introIn")
// 									.to($(".versusTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
// 									.staggerFrom($(".versusTrigger").find(chars), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
// 									.to($(".versusTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "-=.2")
// 									.to($(".versusTrigger .button"), .4, {opacity:1, scale:1, ease:Back.easeOut}, "-=.5")
// 									.staggerTo(bookPage, .3, {rotationY:0, transformOrigin:"left center",ease:Back.easeOut.config(1)}, ".01", "+=.6")
// 									.to(bookImg, .8, {rotationY:0, transformOrigin:"left center",ease:Back.easeOut.config(1)}, "-=.3")
//
//
// 					blogTL.to($(".blogTrigger hr"), 0.4, {width:50, height:2, ease: Linear.easeNone}, "introIn")
// 									.staggerFrom($(".blogTrigger").find(chars), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
// 									.to($(".blogTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "-=.2")
// 									.to($(".blogTrigger .button"), .4, {opacity:1, scale:1, ease:Back.easeOut}, "-=.5")
// 									.staggerTo($(".blogTrigger .single-blog-preview"), .6, {rotationY:0, rotationX:0, transformOrigin:"50% 50%", ease:Back.easeOut.config(1)}, ".2", "tileIn+=.4")
// 									.staggerTo($(".single-blog-preview .post-date"), .9, {rotationY:0, transformOrigin:"left center", ease: Elastic.easeOut.config(1, 1)}, ".2", "tileIn+=.6")
// 									.staggerTo($(".single-blog-preview .button"), .6, {opacity:1, y:0, ease:Back.easeOut.config(.5)}, ".2", "tileIn+=.5")
//
// 					testimonialsTL.staggerFrom($(".testimonialsTrigger").find(chars), 0.4, {opacity:0, scale:0, y:60, rotationY:20, transformOrigin:"0% 50% -50", ease:Back.easeOut}, 0.01, "introIn+=.2")
// 												.to($(".testimonialCarousel"), .3, {opacity:1})
// 												.to($(".testimonialsTrigger p"), .6, {opacity:1, y:0, ease:Back.easeOut}, "-=.2")
//
//
// 					footerTL.to(footerTop, .3, {height:95})
// 									.to($(".footer p"), .3, {opacity:1, y:0}, "footersIn")
// 									.to(footerH4, .3, {opacity:1}, "footersIn")
// 									.to(footerH2, .3, {opacity:1, x:0}, "footersIn")
// 									.to(footerSignup, .3, {opacity:1, y:0}, "footersIn")
// 									.to(footerSignupBtn, .3, {opacity:1, scale:1}, "footersIn")
// 									.staggerTo(socialIcons, .1, {opacity:1, x:0}, .05, "footersIn")
//
//
//
//
// 					var controller = new ScrollMagic.Controller();
// 					// Build Scene
//
// 					var missionScene = new ScrollMagic.Scene({
// 						triggerElement: ".missionTrigger",
// 						triggerHook: "onEnter",
// 						reverse: false,
// 						offset: 400
// 					}).setTween(missionTL)
//
// 					var versusScene = new ScrollMagic.Scene({
// 						triggerElement: ".versusTrigger",
// 						triggerHook: "onEnter",
// 						reverse: false,
// 						offset: 400
// 					}).setTween(versusTL)
//
// 					var blogScene = new ScrollMagic.Scene({
// 						triggerElement: ".blogTrigger",
// 						triggerHook: "onEnter",
// 						reverse: false,
// 						offset: 400
// 					}).setTween(blogTL)
//
// 					var testimonialsScene = new ScrollMagic.Scene({
// 						triggerElement: ".testimonialsTrigger",
// 						triggerHook: "onEnter",
// 						reverse: false,
// 						offset: 400
// 					}).setTween(testimonialsTL)
//
// 					var footerScene = new ScrollMagic.Scene({
// 						triggerElement: ".footerTrigger",
// 						triggerHook: "onEnter",
// 						reverse: false,
// 						offset: 400
// 					}).setTween(footerTL)
//
// 					// ADD THE SCENES ABOVE TO THE SCROLLMAGIC CONTROLLER
// 					controller.addScene([missionScene, versusScene, blogScene, testimonialsScene, footerScene]);
// 				}
// 			});
//     });
// })(jQuery, this);
