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
  


