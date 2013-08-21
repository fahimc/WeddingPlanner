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
	}

	Main();
}
)(window);
