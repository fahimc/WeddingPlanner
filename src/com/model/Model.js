var model = new Model({
	viewMapper : {
		splashView : "SplashView",
		menuView : "MenuView"
	},
	currentViews:[]
});
(function() {

	var _ = model;

	_.getViewById = function(id) {
		if(model.get("currentViews")[id])return model.get("currentViews")[id];
		if (model.get("viewMapper")[id] && window[model.get("viewMapper")[id]])
		
		var view = new window[model.get("viewMapper")[id]]();
		model.get("currentViews")[id]=view;
			return view;
		return null;
	}
})();
