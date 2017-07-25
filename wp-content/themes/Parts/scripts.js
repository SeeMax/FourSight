// (function ($, root, undefined) {	
// 	$(function () {

// 		// if($("a").html() == "about") {




		
		
// 	});	
// })(jQuery, this);


//   		
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

// // JavaScript Document

// // posts slider embed
// $(document).ready(function(){
//   $('.postSlider').slick({
//     dots: true,
//      infinite: true,
//      arrows: true,
//      nextArrow: '<div class="arrowWrapRight"><div class="arrow-right slick-prevAC"></div></div>',
//      prevArrow: '<div class="arrowWrapLeft"><div class="arrow-left slick-nextAC"></div></div>',
//      responsive: [
//     {
//       breakpoint: 680,
//       settings: {
//            arrows: false
//          }
//        }
//      ]

//   });
// });

// //USE THE BELOW AS TEMPLATE FOR FUNCTION FILES
// (function ($, root, undefined) {
	
// 	$(function () {

// 		// YOUR CODE HERE

// 	});

// })(jQuery, this);
// (function ($, root, undefined) {  
//   $(function () {

//     if($('main').is('.generalPage')){
  
//       // Hero Animations for Page Load
//       (function stuffIn(){
        
//         var tl = new TimelineMax({delay:.3})
//             headline = $(".heroSection h2")
//             content = $(".sectionAnimate")
            
//         // BODY IS LOCKED TO PREVENT SCROLLING ANIMATIONS AS PAGE LOADS
//         tl.set(headline, {opacity:0, y:40})
//           .set(content, {opacity:0})
//           .to(headline, .8, {opacity:1, y:0}, "comeIn")
//           .to(content, 1, {opacity:1}, "comeIn")

//       })();

//     } // Page Specific If Staement


//     if($('main').is('.teamPage')){
  
//       // Hero Animations for Page Load
//       (function stuffIn(){
        
//         var tl = new TimelineMax({delay:.5})
//             headline = $(".heroSection h1")
//             content = $(".heroSection p")
//             callOut = $(".single-callout")
//             uniEase = Elastic.easeOut.config(.75, 1)
            
//         // BODY IS LOCKED TO PREVENT SCROLLING ANIMATIONS AS PAGE LOADS
//         tl.set(headline, {opacity:0, y:20})
//           .set(content, {opacity:0, y:-20})
//           .set(callOut, {opacity:0, y:100})
//           .to(headline, .5, {opacity:1, y:0}, "comeIn")
//           .to(content, .7, {opacity:1, y:0}, "comeIn")
//           .staggerTo(callOut, .7, {opacity:1, y:0, ease:uniEase}, .1, "-=.2")

//       })();

//     } // Page Specific If Staement

//      if($('main').is('.pricingPage')){
  
//       // Hero Animations for Page Load
//       (function stuffIn(){
        
//         var tl = new TimelineMax({delay:.5})
//             headline = $(".heroSection h1")
//             tile1 = $(".pricingTile:nth-child(1)")
//             tile2 = $(".pricingTile:nth-child(2)")
//             uniEase = Elastic.easeOut.config(.75, 1)
            
//         // BODY IS LOCKED TO PREVENT SCROLLING ANIMATIONS AS PAGE LOADS
//         tl.set(headline, {opacity:0, y:20})
//           .set(tile1, {opacity:0, x:-100})
//           .set(tile2, {opacity:0, x:100})
//           .to(headline, .5, {opacity:1, y:0}, "comeIn")
//           .to(tile1, .6, {opacity:1, x:0, ease:uniEase}, "comeIn+=.3")
//           .to(tile2, .6, {opacity:1, x:0, ease:uniEase}, "comeIn+=.3")

//       })();

//       (function includedIn(){
        
//         var controller = new ScrollMagic.Controller()
//             tl = new TimelineMax()
//             tile = $(".whats-included-tile")
//             tileItem = $(".whats-included-item")
//             sectionTitle = $(".whats-included-section h2")
//             uniEase = Elastic.easeOut.config(.75, 1)

//         if (screen.width >= 1025) {

//           tl.to(sectionTitle, .5, {opacity:1})
//             .staggerTo(tileItem, .7, {opacity:1, x:0, ease:uniEase}, .2, "-=.15")


//           //   .set(tile1, {opacity:0, x:-100})
//           //   .set(tile2, {opacity:0, x:100})
//           //   .to(headline, .5, {opacity:1, y:0}, "comeIn")
//           //   .to(tile1, .6, {opacity:1, x:0, ease:uniEase}, "comeIn+=.3")
//           //   .to(tile2, .6, {opacity:1, x:0, ease:uniEase}, "comeIn+=.3")

//           var includedScene = new ScrollMagic.Scene({
//             triggerElement: ".includedTrigger",
//             triggerHook: "onLeave",
//           }).setTween(tl)


//           controller.addScene(includedScene);
//         } 
//         else {
//           tl.set(sectionTitle, {opacity:1})
//             .set(tileItem, {opacity:1, x:0})          
//         }
           

//       })();


      

//     } // Page Specific If Staement

//     if($('main').is('.playbook-page')){
  
//       // Hero Animations for Page Load
//       (function stuffIn(){
        
//         var tl = new TimelineMax({delay:.5})
//             headline = $(".heroSection h1")
//             lContent = $(".hero-left-content p")
//             rContent =  $(".hero-right-content p")
//             dots = $(".playbookDots")
//             rTitle = $(".hero-right-content .section-title")
//             section2 = $(".featuredSection")
//             uniEase = Elastic.easeOut.config(.75, 1)
//             section2 = $(".featuredSection")
            
//         // BODY IS LOCKED TO PREVENT SCROLLING ANIMATIONS AS PAGE LOADS
//         tl.set(headline, {opacity:0, y:20})
//           .set(lContent, {opacity:0, y:-20})
//           .set([dots, rTitle, rContent, section2], {opacity:0})
//           .to(headline, .5, {opacity:1, y:0}, "comeIn")
//           .to(lContent, .5, {opacity:1, y:0}, "comeIn")
//           .to(rContent, .5, {opacity:1, y:0}, "comeIn")
//           .to([dots, rTitle], .5, {opacity:1}, "comeIn+=.3")
//           .to(section2, .3, {opacity:1})
          


//       })();

//     } // Page Specific If Staement

//   });
// })(jQuery, this);




// //USE THE BELOW AS TEMPLATE FOR FUNCTION FILES
// (function ($, root, undefined) {
  
//   $(function () {

//     $(".mainNav li:nth-child(1) a").attr({
//       topColor:"#0053d8",
//       bottomColor:"#0058db"
//     });

//     $(".mainNav li:nth-child(2) a").attr({
//       topColor:"#0060e0",
//       bottomColor:"#0068e4"
//     });

//     $(".mainNav li:nth-child(3) a").attr({
//       topColor:"#0073eb",
//       bottomColor:"#0084f5"
//     });

//     $(".mainNav li:nth-child(4) a").attr({
//       topColor:"#008efb",
//       bottomColor:"#0096ff"
//     });

      
//     $('.mainNav li a').each(function(){
      
//       var colorOne = $(this).attr('bottomColor');
//       var colorTwoHex = $(this).attr('topColor');
//       var colorTwoR = hexToRgb(colorTwoHex).r;
//       var colorTwoG = hexToRgb(colorTwoHex).g;
//       var colorTwoB = hexToRgb(colorTwoHex).b;
//       var colorTwo = "rgba("+colorTwoR+", "+colorTwoG+", "+colorTwoB;
//       var thisText = $(this).text();
      
//       $(this).addClass('first-text').append('<span class="second-text">'+thisText+'</span><span class="third-text">'+thisText+'</span><span class="before-one">'+thisText+'</span><span class="after-one">'+thisText+'</span><span class="before-two">'+thisText+'</span><span class="after-two">'+thisText+'</span><span class="before-three">'+thisText+'</span><span class="after-three">'+thisText+'</span><span class="before-four">'+thisText+'</span><span class="after-four">'+thisText+'</span>');
      
//       $(this).css({
//         display: "inline-block",
//         position: "relative",
//         color: colorOne,
//       });
      
//       $(this).find('span').css({
//         position: "absolute",
//         display: "block",
//         top: 0,
//         left: 0,
//         overflow: "hidden",
//         textShadow: "none",
//         width: "100%",
//         textShadow: "none",
//         WebkitUserSelect: "none",  
//         MozUserSelect: "none",    
//         MsUserSelect: "none",      
//         userSelect: "none"
//       });
      
//       $(this).find('.second-text').css({
//         color: colorTwo+", 0.1)",
//         height: "90%"
//       });
      
//       $(this).find('.third-text').css({
//         color: colorTwo+", 0.2)",
//         height: "80%"
//       });
      
//       $(this).find('.before-one').css({
//         height: "70%",
//         color: colorTwo+", 0.3)"
//       });
      
//       $(this).find('.after-one').css({
//         height: "60%",
//         color: colorTwo+", 0.4)"
//       });
      
//       $(this).find('.before-two').css({
//         height: "50%",
//         color: colorTwo+", 0.5)"
//       });
      
//       $(this).find('.after-two').css({
//         height: "40%",
//         color: colorTwo+", 0.6)"
//       });
      
//       $(this).find('.before-three').css({
//         height: "30%",
//         color: colorTwo+", 0.7)"
//       });
      
//       $(this).find('.after-three').css({
//         height: "20%",
//         color: colorTwo+", 0.8)"
//       });
      
//       $(this).find('.before-four').css({
//         height: "10%",
//         color: colorTwo+", 0.9)"
//       });
      
//       $(this).find('.after-four').css({
//         height: "1%",
//         color: colorTwo+", 1)"
//       });
      
//     });
    
//     function hexToRgb(hex) {
//       var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//       return result ? {
//           r: parseInt(result[1], 16),
//           g: parseInt(result[2], 16),
//           b: parseInt(result[3], 16)
//       } : null;
//     }
    
//   });
// })(jQuery, this);
// (function ($, root, undefined) {  
//   $(function () {

//     if($('main').is('.home-page')){
  

//       // Hover Animation the Hero Button | Need because JS on position doesn't jive with CSS transition
//       (function homeHeroHover(){

//     		var tl = new TimelineMax()
//             uniEaseIn = Circ.EaseIn
//             uniEaseOut = Circ.EaseOut;
        
//         $(".heroButton").on({
//             mouseenter: function () {
//             	tl.to($(this), .5, {background:'rgba(0,83,216,1)', border:'2px solid rgba(0,83,216,1)' ,ease:uniEaseIn})    
//             },
//             mouseleave: function () {
//               tl.to($(this), .5, {background:"rgba(255,255,255,.0)",border:'2px solid rgba(255,255,255,1)',ease:uniEaseIn})
//             }
//         });
//       })();


//       // SCROLL PAGE ON CLICK
//       $(".heroButton").on( 'click', function() {

//         if (screen.width <= 1024) {
//           $('html, body').animate({
//             scrollTop: $("#introTop").offset().top -100
//           }, 500);
//         }
//         else {
//           $('html, body').animate({
//             scrollTop: $("#introTop").offset().top
//           }, 500);
//         }
//       });


//       // animate the finger print on load
//       (function drawPrint(){
//         var tl = new TimelineMax({repeat:-1, yoyo:true}),
//             line = $(".printLine")

//         tl.set(line, {drawSVG:"0% 0%", opacity:.15})
//           .staggerTo(line, 4, {drawSVG:"0% 100%"}, 0.3)
//         // tl.staggerTo(line, .1, {stroke:"0% 100%"}, 0.1);

//       })();


//       // Hero Animations for Page Load
//       (function loadAnimations(){
        
//         var tl = new TimelineMax({delay:.3})
//             headline = $(".heroHeadline")
//             helmet = $(".heroHelmet")
//             button = $(".heroButton")
//             back = $(".printBackground")
//             bod = $("body")


//         // BODY IS LOCKED TO PREVENT SCROLLING ANIMATIONS AS PAGE LOADS
//         tl
//           // .set(bod, {height:"100vh",overflow:"hidden"})
//           .set(headline, {opacity:0, y:-40})
//           .set(helmet, {opacity:0})
//           .set(button, {opacity:0, y:40})
//           .set(back, {opacity:0})
//           .to(helmet, .5, {opacity:1}, "comeIn")
//           .to(back, 2, {opacity:1}, "comeIn")
//           .to(headline, .8, {opacity:1, y:0}, "comeIn+=.4")
//           .to(button, .8, {opacity:1, y:0, onComplete:unlockBody}, "comeIn+=.4")

//       })();


//       // UNLOCK BODY CALLED BACK AFTER LOAD
//       function unlockBody(){
//         bod = $("body")
//         TweenMax.set(bod, {height:"auto",overflow:"visible"})
//       }


//     } // Page Specific If Staement

//   });
// })(jQuery, this);




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
							

// (function ($, root, undefined) {
	
// 	$(function () {

// 		var $this = $(".menuToggle")
// 			menu = $(".header")
// 			menuItem = menu.find("li")
// 			ham1 = $(".hamTop")
// 			ham2 = $(".hamMid")
// 			ham3 = $(".hamBot")
// 			theBody = $("body")
// 			theMain = $("main")
// 			logo = $(".mobile-logo")
// 			headerInfo = $(".headerInfo div")
// 			backing = $(".headerBackground")
// 			uniTime = .3
// 			uniTime2 = .5
			
// 		$(".menuToggle").on("click", function() {
	

// 			if (screen.width <= 767) {

// 				if($this.hasClass('openMenu')) {
// 					closeMenuMobile();
// 				} else {
// 					openMenuMobile();
// 				}
// 			} 
// 			else {
				
// 				if($this.hasClass('openMenu')) {
// 					closeMenuDesktop();
// 				} else {
// 					openMenuDesktop();
// 				}
// 			}
// 		});

// 		function openMenuMobile() {
// 			var tl = new TimelineMax()
// 			tl.set(backing, {zIndex:98})
// 				.to(backing, uniTime2, {opacity:.9}, "menuOpen")
// 				.staggerTo(headerInfo, uniTime2, {opacity:1, y:0}, .1, "menuClose+=.3")
// 				.to(menu, uniTime2, {left:"0%",onComplete:addOpenClass}, "menuOpen")
// 				.staggerTo(menuItem, uniTime2, {opacity:1, x:0, ease: Elastic.easeOut.config(1, .75)}, .1, "menuOpen+=.5")
// 				.to(ham1, uniTime, {rotation:-227, x:0, y:3, transformOrigin:"50% 50%"}, "menuOpen")
// 				.to(ham2, uniTime, {width:"0%", x:"-50%"}, "menuOpen")
// 				.to(ham3, uniTime, {rotation:227, x:0, y:-4, transformOrigin:"50% 50%"}, "menuOpen")
// 				.to($this, uniTime, {rotation:-360}, "menuOpen")
// 				.to(logo, uniTime, {opacity:1}, "menuOpen+=.5")

// 		}

// 		function closeMenuMobile() {
// 			var tl = new TimelineMax()
// 			tl.to(backing, uniTime2, {opacity:0}, "menuClose+=.5")
// 			.staggerTo(headerInfo, uniTime2, {opacity:0, y:20}, .1, "menuClose")
// 			.to(menu, uniTime2, {left:"100%", onComplete:removeOpenClass}, "menuClose+=.5")
// 			.to(logo, uniTime, {opacity:0}, "menuClose+=.1")
// 			.staggerTo(menuItem, uniTime2, {opacity:0, x:100, ease: Elastic.easeIn.config(1, .75)}, .04, "menuClose")
// 			.to(ham1, uniTime, {rotation:0, x:0, y:0, transformOrigin:"50% 50%"}, .1, "menuClose")
// 			.to(ham2, uniTime, {width:"100%", x:"0%"}, "menuClose")
// 			.to(ham3, uniTime, {rotation:0, x:0, y:0, transformOrigin:"50% 50%"}, "menuClose")
// 			.to($this, uniTime, {rotation:0}, "menuClose")
// 			.set(backing, {zIndex:-1})
// 		}

// 		function closeMenuDesktop() {
// 			var tl = new TimelineMax()
// 			tl.to(backing, uniTime2, {opacity:0}, "menuClose+=.5")
// 				.staggerTo(headerInfo, uniTime2, {opacity:0, y:20}, .1, "menuClose")
// 				.to(menu, uniTime2, {right:"-100%", onComplete:removeOpenClass}, "menuClose+=.5")
// 				.staggerTo(menuItem, uniTime2, {opacity:0, x:100, ease: Elastic.easeIn.config(1, .75)}, .04, "menuClose")
// 				.to(ham1, uniTime, {rotation:0, x:0, y:0, transformOrigin:"50% 50%"}, .1, "menuClose")
// 				.to(ham2, uniTime, {width:"100%", x:"0%"}, "menuClose")
// 				.to(ham3, uniTime, {rotation:0, x:0, y:0, transformOrigin:"50% 50%"}, "menuClose")
// 				.to($this, uniTime, {rotation:0}, "menuClose")
// 				.set(backing, {zIndex:-1})
// 		}

// 		function openMenuDesktop() {
// 			var tl = new TimelineMax()
// 			tl.set(backing, {zIndex:98})
// 			.to(backing, uniTime2, {opacity:.9}, "menuOpen")
// 			.staggerTo(headerInfo, uniTime2, {opacity:1, y:0}, .1, "menuClose+=.3")
// 			.to(menu, uniTime2, {right:"0%",onComplete:addOpenClass}, "menuOpen")
// 			.staggerTo(menuItem, uniTime2, {opacity:1, x:0, ease: Elastic.easeOut.config(1, .75)}, .1, "menuOpen+=.5")
// 			.to(ham1, uniTime, {rotation:-227, x:0, y:5, transformOrigin:"50% 50%"}, "menuOpen")
// 			.to(ham2, uniTime, {width:"0%", x:"-50%"}, "menuOpen")
// 			.to(ham3, uniTime, {rotation:227, x:0, y:-5, transformOrigin:"50% 50%"}, "menuOpen")
// 			.to($this, uniTime, {rotation:-360}, "menuOpen")
// 		}
		

// 		function addOpenClass() {
// 			$this.addClass('openMenu');
// 		}

// 		function removeOpenClass() {
// 			$this.removeClass('openMenu');
// 		}



// 		function closeAboutPage() {
// 			var tl = new TimelineMax()
// 					page = $(".aboutPage")
// 					aboutClose = $(".aboutClose")
// 					aboutHeadline = $(".aboutHeadline")
// 					aboutSig = $(".aboutSig")
// 					words = $(".aboutPage p")
// 					aName = $(".aboutName")
// 					uniTime = .3
// 					uniTime2 = .5

// 			tl.set(theBody, {height:"auto", overflow:"visible"})
// 				.to([aName, words], uniTime, {opacity:0}, "aboutClosed-=.2")
// 				.to(aboutHeadline, uniTime, {opacity:0, y:40}, "aboutClosed")
// 				.to(aboutSig, uniTime, {opacity:0, y:-40}, "aboutClosed")
// 				.to(aboutClose, uniTime, {opacity:0, rotation:0}, "aboutClosed")
// 				.to(page, uniTime, {top:"100vh"}, "aboutClosed+=.15")
// 		}


// 		function openAboutPage() {
//   		var tl = new TimelineMax()
// 				page = $(".aboutPage")
// 				aboutClose = $(".aboutClose")
// 				aboutHeadline = $(".aboutHeadline")
// 				aboutSig = $(".aboutSig")
// 				words = $(".aboutPage p")
// 				aName = $(".aboutName")
// 				uniTime = .3
// 				uniTime2 = .5

// 			tl.set(theBody, {height:"100%", overflow:"hidden"})
// 				.set([aboutClose, aboutHeadline, aboutSig, aName, words], {opacity:0})
// 				.set(aboutHeadline, {y:40})
// 				.set(aboutSig, {y:-40})
// 				.to(page, uniTime, {top:"0vh"})
// 				.to([aName, words], uniTime2, {opacity:1}, "aboutOpen+=.2")
// 				.to([aboutHeadline, aboutSig], uniTime2, {opacity:1, y:0}, "aboutOpen")
// 				.to(aboutClose, uniTime2 + .1, {opacity:1, rotation:360,onComplete:aboutMenuClose}, "aboutOpen")
// 		}

// 		function aboutMenuClose() {
// 			if (screen.width <= 767) {
// 				closeMenuMobile();
// 			} 
// 			else {
// 				closeMenuDesktop();
// 			}
// 		}
		

		
// 		$( "a" ).on('click', function( event ) {
//   		// if($(this).text() == 'About') {
//   		if (this.href.indexOf('/about/') != -1) {
//   			event.preventDefault();	
//   			openAboutPage();
//   		}
// 		});			

// 		$( ".aboutClose" ).on('click', function( event ) {
// 			closeAboutPage();
//   	});
		
// 	});
	
// })(jQuery, this);


// (function ($, root, undefined) {
	
// 	$(function () {

// 		$('.playbookCarousel').imagesLoaded(function () {
    	
// 		  $('.playbookCarousel').slick({
// 		    slidesToShow: 1,
// 			  slidesToScroll: 1,
// 			  autoplay: true,
// 			  infinite: true,
// 			  dots: true, 
// 			  arrows: false, 
// 			  autoplaySpeed: 3000, 
// 			  pauseOnHover:true,
// 			  cssEase: 'linear',
// 			  appendDots:$('.playbookDots')
// 			})
			

// 			$( ".slick-slide" ).mouseup(function() {

// 				function playAgain() {
//   				console.log( "Handler called" );
// 					$('.playbookCarousel').slick('slickPlay');
// 				}

// 				setTimeout(playAgain,2000);
				
// 			});
// 		});
// 	});
	
// })(jQuery, this);
// (function ($, root, undefined) {
	
// 	$(function () {

		

		
// 	});
	
// })(jQuery, this);
// (function ($, root, undefined) {
//   $(function () {

//   	$(window).load(function(){
// 			$('#preloader').fadeOut('slow',function(){$(this).remove();});
// 		});
//   });
// })(jQuery, this);
// (function ($, root, undefined) {
	
// 	$(function () {

// 		$('.teamsCarouselOne').imagesLoaded(function () {
    	
// 		  $('.teamsCarouselOne').slick({
// 		    slidesToShow: 1,
// 			  slidesToScroll: 1,
// 			  autoplay: true,
// 			  infinite: true,
// 			  dots: true, 
// 			  arrows: false, 
// 			  speed: 300, 
// 			  autoplaySpeed: 3000, 
// 			  asNavFor: '.teamsCarouselTwo',
// 			  appendDots:$('.teamsDots'),
// 			})
// 		});

// 		$('.teamsCarouselTwo').imagesLoaded(function () {
    	
// 		  $('.teamsCarouselTwo').slick({
// 		    slidesToShow: 1,
// 			  slidesToScroll: 1,
// 			  autoplay: true,
// 			  infinite: true,
// 			  dots: false, 
// 			  arrows: false,
// 			  speed: 300,  
// 			  autoplaySpeed: 3000, 
// 			  asNavFor: '.teamsCarouselOne',
// 			})
// 		});

// 	});
	
// })(jQuery, this);
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

// (function ($, root, undefined) {
	
// 	$(function () {

// 		$('.testimonialCarousel').imagesLoaded(function () {
    	
// 		  $('.testimonialCarousel').slick({
// 		    slidesToShow: 1,
// 			  slidesToScroll: 1,
// 			  autoplay: true,
// 			  infinite: true,
// 			  dots: true, 
// 			  arrows: false, 
// 			  autoplaySpeed: 3000, 
// 			  pauseOnHover:true,
// 			  cssEase: 'linear',
// 			  appendDots:$('.testimonialDots')
// 			  // ,

// 			  // responsive: [    
// 			  //   {
// 			  //     breakpoint: 767,
// 			  //     settings: {
// 			  //       slidesToShow: 3
// 			  //     }
// 			  //   }
// 	  		// ]
// 			})
// 			// $('.carouselLeft').click(function(){
// 			//   $('.imageCarousel').slick('slickPrev');
// 			// })

// 			// $('.carouselRight').click(function(){
// 			//   $('.imageCarousel').slick('slickNext');
// 			// })
// 		});
// 	});
	
// })(jQuery, this);
// (function ($, root, undefined) {
//   $(function () {

//       // ONLY IF ITS THE HOME PAGE
//       if($('main').is('.home-page') && $('iframe').length > 0){

//       	$("iframe")[0].src += "?&controls=0&&showinfo=0&rel=0&enablejsapi=1&html5=1";
//       	$("iframe").attr('id', 'video');
//       }

//    });
// })(jQuery, this);

// // Called Asynch-ly
// // https://developers.google.com/youtube/iframe_api_reference

// // global variable for the player
// var player;

// // this function gets called when API is ready to use
// function onYouTubePlayerAPIReady() {
//   // create the global player from the specific iframe (#video)
//   player = new YT.Player('video', {
//     events: {
//       // call this function when player is ready to use
//       'onReady': onPlayerReady
//     }
//   });
// }



//   function onPlayerReady(event) {
  
//   if (screen.width >= 1025) {  
//     // bind events
//     var playButton = $(".playVideo");
//         vidPreview = $(".vidPreview")
//         video = $(".vid-frame iframe")
//         vBack = $(".vidCircle")
//         closeBtn = $(".closeVideo")
//         pauseBtn = $(".vidBackground");
//         bod = $("body")

//     playButton.on("click", function() {
//     	var tl = new TimelineMax();

//     	tl.set(pauseBtn, {zIndex:1})
//         // .set(bod, {height:"100%", overflow:"hidden"})
//         .to(vBack, .7, {width:"110%", height:"110%"}, "play")
//         .to( $(this), .13, {rotationY:90}, "play")
//         .to(closeBtn, .3, {scale:1}, "play")
//         .to( vidPreview, .5, {opacity:0}, "play+=.15")
//       // PLAY THE VIDEO
//       player.playVideo();
//     });

//     closeBtn.on("click", function() {
//     	var tl = new TimelineMax();

//     	tl// .set(bod, {height:"auto",overflow:"visible"})
//         .to(vBack, .5, {width:"0%", height:"0%", onComplete: backGoBack}, "stop")
//         .to( $('.playVideo'), .13, {rotationY:0}, "stop")
//         .to(closeBtn, .2, {scale:0}, "stop")
//         .to( vidPreview, .5, {opacity:1}, "stop+=.15")
//       // STOP THE VIDEO
//       player.stopVideo();
//     });

//     pauseBtn.on("click", function() {
//       var tl = new TimelineMax();

//       tl.to( $('.playVideo'), .13, {rotationY:0})
//       // PAUSE THE VIDEO
//       player.pauseVideo();
//     });

//     function backGoBack() {
//       var tl = new TimelineMax();
//       tl.set(pauseBtn, {zIndex:0})
//     }


    
//   }//End > 1024px
//   else {

//     $(".playVideo").on("click", function() {
//       player.playVideo();
//     });
//   }
// } 


// // Inject YouTube API script
// var tag = document.createElement('script');
// tag.src = "//www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  


