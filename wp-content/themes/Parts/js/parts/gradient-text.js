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