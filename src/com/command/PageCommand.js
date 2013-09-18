var PageCommand=
{
	showPage:function(page)
	{
		
		switch(model.getURLPage())
		{
			case model.get("pageNames").budgetEstimator:
			this.onbudget();
			
			break;
			case model.get("pageNames").guestlist:
			
			break;
			case model.get("pageNames").todo:
			break;
			case model.get("pageNames").menu:
			this.showMenu();
			break;
			default:
			this.showSplash();
			break;
		}
	},
	onbudget:function()
	{
		ViewCommand.hide("menuView");
		ViewCommand.show("listView","BudgetModule");
		
	},
	showSplash:function()
	{
		ViewCommand.hideAll();
		ViewCommand.show("splashView");
	},
	showMenu:function()
	{
		ViewCommand.hideCurrent();
		ViewCommand.show("menuView");
	}
};