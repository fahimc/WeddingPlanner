(function(window) {
	function Main() {
		if (window.addEventListener) {
			window.addEventListener("load", onLoad);
		} else {
			window.attachEvent("onload", onLoad);
		}

	}

	function onLoad() {
		ViewCommand.hideAll();
		ViewCommand.show("splashView");
		
		Utensil.addListener(window,"resize",onResize);
	}
	function onResize()
	{
		Event.dispatch("RESIZE");
	}
	Main();
}
)(window);
