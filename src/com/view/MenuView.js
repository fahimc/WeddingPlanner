var MenuView = function(){};
Class.implement(MenuView,IView);
(function(){
	
	var _ = MenuView.prototype;
	
	_.id="menuView";
	_.menuId="menuHolder";
	_.timer = null;
	_.show=function()
	{
		document.getElementById(this.menuId).style.visibility="hidden";
		document.getElementById(this.id).style.display="block";
		this.animateIn();
	}
	_.animateIn=function()
	{
		TweenLite.to(document.getElementById(this.menuId),1,{css:{autoAlpha:1},onComplete:this.onAnimationComplete,onCompleteScope:this});
	}
	_.onAnimationComplete=function()
	{
		
		
	}
})();
