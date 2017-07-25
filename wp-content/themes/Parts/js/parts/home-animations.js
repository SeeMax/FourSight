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



