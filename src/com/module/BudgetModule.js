var BudgetModule = function(){};
Class.extend(BudgetModule,Module);
(function(){
	
	var _ = BudgetModule.prototype;
	
	_.build=function(holder)
	{
		Utensil.addListener(document.getElementById("totalBudget"),"keyup",this.getHandler("onKeyUp"));
		
		document.getElementById("list_logo").src="resource/image/budget_logo_small.png";
		document.getElementById("list_title").innerHTML="budget estimator";
		document.getElementById("totalBudget").value=model.get("currency")+this.numberWithCommas("00000");
		HTMLLoader.getAll=false;
		HTMLLoader.load("resource/templates/budgetModule.html",this.onHTMLLoaded);
	}
	_.onHTMLLoaded=function(content)
	{
		document.getElementById("listModule").className+=" budgetModule";
		//document.getElementById("listModule").innerHTML = content;
	}
	_.onKeyUp=function(event)
	{
		var val =document.getElementById("totalBudget").value;
		var nums = val.replace(/[^\d.-]/g, '');
		document.getElementById("totalBudget").value=model.get("currency")+this.numberWithCommas(nums);
	}
	
	_.numberWithCommas=function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
	_.destory=function()
	{
		Utensil.removeListener(document.getElementById("totalBudget"),"keyup",this.getHandler("onKeyUp"));
		document.getElementById("listModule").className.replace(" budgetModule","");
	}
})();
