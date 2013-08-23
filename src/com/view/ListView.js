var ListView = function(){};
Class.extend(ListView,View);
(function(){
	
	var _ = ListView.prototype;
	
	_.show=function()
	{
		//document.getElementById(this.menuId).style.visibility="hidden";
		if(this.module)this.module.build(document.getElementById(this.id));
		document.getElementById(this.id).style.display="block";
		this.setListeners();
		this.animateIn();
	}
	_.onHideComplete=function()
	{
		Class._super(this,"onHideComplete");
		document.getElementById("list_logo").src="";
		document.getElementById("list_title").innerHTML="";
		document.getElementById("listModule").innerHTML ="";
		if(this.module)this.module.destory();
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
