var ViewCommand=
{
	init:function()
	{
		var holder= document.getElementById("viewHolder");
		for(var a=0;a<holder.childNodes.length;a++)
		{
			var child = holder.childNodes[a];
			if(child.style)
			{
				
			}
		}
	},
	hideAll:function()
	{
		var holder= document.getElementById("viewHolder");
		for(var a=0;a<holder.childNodes.length;a++)
		{
			var child = holder.childNodes[a];
			if(child.style)
			{
				child.style.display="none";
			}
		}
		holder.style.display="block";
	},
	show:function(id,module)
	{
		if(!id)return;
		
		var view = model.getViewById(id);
		if(module)
		{
			var  m =new window[module]();
			view.module = m;
		}
		view.show();
		
		
	},
	hide:function(id)
	{
		if(!id)return;
		
		var view = model.getViewById(id);
		
		view.hide();
	},
	destroy:function(id)
	{
		if(!id)return;
		
		var view = model.getViewById(id);
		view.destory();
	}
};
