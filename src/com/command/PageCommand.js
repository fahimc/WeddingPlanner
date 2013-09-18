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
		}
	},
	onbudget:function()
	{
		ViewCommand.hide("menuView");
		ViewCommand.show("listView","BudgetModule");
		
	}
};