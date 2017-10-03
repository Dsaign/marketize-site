(function(){
	"use strict";

	var $tab      = $("#tabs .tab");
	var $login    = $("#login");
	var $cadastro = $("#cadastro");
	var inv       = "invisible";
	var active    = "active";

	$tab.on("click", function(e){
		var tgt = $(e.target).attr("data-goto");

		if(tgt == "cadastro"){
			if($cadastro.hasClass(inv)){
				$tab.removeClass(active);
				$(this).addClass(active);
				$login.animateCss("fadeOutLeft", function(){
					$login.addClass(inv);
					$cadastro.removeClass(inv);
					$cadastro.animateCss("fadeInRight");
				});
			} else { return false }
		} else if(tgt == "login") {
			if($login.hasClass(inv)){
				$tab.removeClass(active);
				$(this).addClass(active);
				$cadastro.animateCss("fadeOutRight", function(){
					$cadastro.addClass(inv);
					$login.removeClass(inv);
					$login.animateCss("fadeInLeft");
				});
			} else { return false }
		}
	});
})();