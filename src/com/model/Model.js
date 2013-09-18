var model = new Model({
	currency:"£",
	viewMapper : {
		splashView : "SplashView",
		menuView : "MenuView",
		listView : "ListView"
	},
	pageNames:{
		budgetEstimator:"budgetestimator",
		todo:"todo",
		guestlist:"guestlist",
		menu:"menu"
	},
	currentViews:[]
});
(function() {

	var _ = model;

	_.getViewById = function(id) {
		if(model.get("currentViews")[id])return model.get("currentViews")[id];
		if (model.get("viewMapper")[id] && window[model.get("viewMapper")[id]])
		
		var view = new window[model.get("viewMapper")[id]]();
		view.id=id;
		model.get("currentViews")[id]=view;
			return view;
		return null;
	};
	_.getURLPage=function()
	{
		 return location.hash.replace("#","");
	};
	_.setPageName=function(name)
	{
		location.hash=name;
	};
})();
