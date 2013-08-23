var Module = function(){};
Class.implement(Module,IModule);
(function(){
	
	var _ = Module.prototype;
	

	_.handlers=[];
	
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
