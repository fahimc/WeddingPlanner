var ListView = function(){};
Class.extend(ListView,View);
(function(){
	
	var _ = ListView.prototype;
	
	_.show=function()
	{
		//document.getElementById(this.menuId).style.visibility="hidden";
		document.getElementById(this.id).style.display="block";
		this.setListeners();
		this.animateIn();
	}
	
	_.setListeners=function()
	{
		
		
	}
	
	_.animateIn=function()
	{
		
	}
	_.onAnimationComplete=function()
	{
		
		
	}
})();
