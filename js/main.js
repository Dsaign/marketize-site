<<<<<<< HEAD
(function(){
	"use strict";

	window.$btn_entrar = $("#btn_entrar");
	window.$lb_login   = $("#lb_login");

	$.fn.extend({
	    animateCss: function (animationName, callback) {
	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            $(this).removeClass('animated ' + animationName);
	            if(callback){ callback(this) };
	        });
	        return this;
	    }
	});

	$.fn.lightbox = function(e){
		var content   = $(this).html();

		if(!$(this).hasClass("ready")){
			var close_btn = "<div class='close close_lb'></div>";
			var html      = "<div class='outer ready'>"
						  + "<div class='middle close_lb'>"
						  + "<div class='inner'>"
						  + close_btn + content
						  + "</div></div></div>";

			$(this).html(html);
		}

		function closeLightbox(){
			$(".lightbox").animateCss("fadeOut", function(e){
				$(e).css("display", "none");
			});
		}
		
		$(".lightbox").on("click", function(e){
			if($(e.target).hasClass("close_lb")){ closeLightbox() }
		});

		$(this).css("display", "block")
			   .animateCss("fadeIn")
			   .addClass("ready");
	}

	$btn_entrar.on("click", function(e){
		e.preventDefault();
		$lb_login.lightbox();
	});

=======
(function(){
	"use strict";

	window.$btn_entrar = $("#btn_entrar");
	window.$lb_login   = $("#lb_login");

	$.fn.extend({
	    animateCss: function (animationName, callback) {
	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	        this.addClass('animated ' + animationName).one(animationEnd, function() {
	            $(this).removeClass('animated ' + animationName);
	            if(callback){ callback(this) };
	        });
	        return this;
	    }
	});

>>>>>>> igor
})();