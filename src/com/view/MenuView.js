var MenuView = function(){};
Class.extend(MenuView,View);
(function(){
	
	var _ = MenuView.prototype;
	
	_.id="menuView";
	_.menuId="menuHolder";
	_.bugdetButtonId="budgetButton";
	_.guestButtonId="guestButton";
	_.todoButtonId="todoButton";
	_.timer = null;
	_.show=function()
	{
		document.getElementById(this.menuId).style.visibility="hidden";
		document.getElementById(this.id).style.display="block";
		this.setListeners();
		this.animateIn();
	};
	
	_.setListeners=function()
	{
		
		Utensil.addListener(document.getElementById(this.bugdetButtonId),"click",this.getHandler("onButtonClicked"));
		Utensil.addListener(document.getElementById(this.guestButtonId),"click",this.getHandler("onButtonClicked"));
		Utensil.addListener(document.getElementById(this.todoButtonId),"click",this.getHandler("onButtonClicked"));
	};
	_.onButtonClicked=function(event)
	{
	
		var target =event.target|| event.srcElement;
		if(!target.id)target  = target.parentNode;
		switch(target.id)
		{
			case this.bugdetButtonId:

			model.setPageName(model.get("pageNames").budgetEstimator);
			break;
			case this.guestButtonId:
			model.setPageName(model.get("pageNames").guestlist);
			break;
			case this.todoButtonId:
			model.setPageName(model.get("pageNames").todo);
			break;
		}
		PageCommand.showPage();
		console.log(target.id);
	};
	_.animateIn=function()
	{
		TweenLite.to(document.getElementById(this.menuId),1,{css:{autoAlpha:1},onComplete:this.onAnimationComplete,onCompleteScope:this});
	};
	_.onAnimationComplete=function()
	{
		
		
	};
})();
