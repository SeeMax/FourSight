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



