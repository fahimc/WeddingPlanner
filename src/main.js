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
		PageCommand.showPage();
		Utensil.addListener(window,"resize",onResize);
		Utensil.addListener(window,"popstate",onPopState);
		
	}
	function onPopState(event)
	{
		console.log("onPopState");
		PageCommand.showPage();
		 if (event.preventDefault) { 
      event.preventDefault();
   } else {
      event.returnValue = false; 
   }
	}
	function onResize()
	{
		Event.dispatch("RESIZE");
	}
	Main();
}
)(window);
