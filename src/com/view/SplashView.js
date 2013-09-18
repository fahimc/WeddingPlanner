var SplashView = function(){};
Class.extend(SplashView,View);
(function(){
	
	var _ = SplashView.prototype;
	
	_.id="splashView";
	_.logoId="logoHolder";
	_.timer = null;
	_.show=function()
	{
		this.hideLogo();
		document.getElementById(this.id).style.visibility="hidden";
		document.getElementById(this.id).style.display="block";
		this.animateLogo();
	}
	_.hideLogo=function()
	{
		document.getElementById(this.logoId).style.visibility="hidden";
	}
	_.animateLogo=function()
	{
		TweenLite.to(document.getElementById(this.logoId),1,{css:{autoAlpha:1},onComplete:this.onAnimationComplete,onCompleteScope:this});
		TweenLite.to(document.getElementById(this.id),1,{css:{autoAlpha:1}});
	}
	_.onAnimationComplete=function()
	{
		this.startTimer();
		
	}
	_.startTimer = function()
	{
		var root =this;
		timer = setTimeout(function(){root.finish();},1000);
	}
	_.hide=function()
	{
		TweenLite.to(document.getElementById(this.logoId),1,{css:{autoAlpha:0}});
		TweenLite.to(document.getElementById(this.id),1,{css:{autoAlpha:0}});
	}
	_.finish=function()
	{
		clearTimeout(this.timer);
		this.timer=null;
		model.setPageName(model.get("pageNames").menu);
		PageCommand.showPage(model.get("pageNames").menu);
	}
	
})();
