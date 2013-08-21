var View = function(){};
Class.implement(View,IView);
(function(){
	
	var _ = View.prototype;
	
	_.hide=function()
	{
		TweenLite.to(document.getElementById(this.id),1,{css:{autoAlpha:0},onComplete:this.onHideComplete,onCompleteScope:this});
	}
	_.onHideComplete=function()
	{
		document.getElementById(this.id).style.display="none";
	}

})();
