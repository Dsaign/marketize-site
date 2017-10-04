(function(){

	var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";

	$('#landing').on(mousewheelevt, function(e){
		var evt = window.event || e;
	    evt = evt.originalEvent ? evt.originalEvent : evt;
	    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta;

	    if(delta < 0) { // down
	    	console.log("down");
	    } else { // up
			console.log("up");
	    }
	});

})();