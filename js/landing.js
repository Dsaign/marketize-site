(function(){

	window.mousewheelevt  = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
	window.flag_animating = false;
	window.actual_slide   = 1;
	window.dots_count     = $("#landing .landing").length;
	window.$dots 		  = $("#landing #dots > div");

	function goTo(actual, next, dir){

		var $actual = $(".landing" + actual);
		var $next   = $(".landing" + next);
		var anim1, anim2;

		if(dir == "down"){
			anim1 = "fadeOutUp";
			anim2 = "fadeInUp";
		} else {
			anim1 = "fadeOutDown";
			anim2 = "fadeInDown";
		}

		$actual.animateCss(anim1, function(e){ $actual.addClass("invisible") });
		$next.removeClass("invisible").animateCss(anim2, function(e){
			flag_animating = false;
		});

		if(actual_slide == 3 && dir == "down"){
			actual_slide = 1;
		} else if(next == 3 && dir == "up"){
			actual_slide = 3;
		} else {
			if(dir == "down"){
				actual_slide++;
			} else {
				actual_slide--;
			}
		}

		setActiveDot(actual_slide);
	}

	function setActiveDot(num){
		$dots.find(".dot").removeClass("active");
		$dots.find(".dot" + num).addClass("active");
	}

	function createDots(){
		for (var i = 0; i < dots_count; i++){
			$dots.append("<div class='dot dot" + (i+1) + "'></div>");
		}
		setActiveDot(1);
	}

	$('#landing').on(mousewheelevt, function(e){
		if (!flag_animating){
			flag_animating = true;
			var evt = window.event || e;
		    evt = evt.originalEvent ? evt.originalEvent : evt;
		    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta;
		    var next_slide;

		    if (delta < 0) { // down
		    	actual_slide == 3 ? next_slide = 1 : next_slide = actual_slide + 1;
		    	goTo(actual_slide, next_slide, "down");
		    } else { 	  	 // up
		    	actual_slide == 1 ? next_slide = 3 : next_slide = actual_slide - 1;
		    	goTo(actual_slide, next_slide, "up");
		    }
	    }
	});

	createDots();

})();