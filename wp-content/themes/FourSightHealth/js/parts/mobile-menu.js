//USE THE BELOW AS TEMPLATE FOR FUNCTION FILES
(function ($, root, undefined) {
	
	$(function () {

		$(".menuToggle").on('click', function() {

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