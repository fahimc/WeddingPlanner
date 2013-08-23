var View = function(){};
Class.implement(View,IView);
(function(){
	
	var _ = View.prototype;
	
	_.id="";
	_.handlers=[];
	_.hide=function()
	{
		TweenLite.to(document.getElementById(this.id),1,{css:{autoAlpha:0},onComplete:this.onHideComplete,onCompleteScope:this});
	}
	_.onHideComplete=function()
	{
		document.getElementById(this.id).style.display="none";
	}
	_.getHandler=function(methodName)
	{
		var root= this;
		if(!this.handlers[methodName])this.handlers[methodName]=function(event)
		{
			root[methodName](event);
		}
		return this.handlers[methodName];
	}

})();
